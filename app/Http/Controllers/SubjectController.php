<?php

namespace App\Http\Controllers;

use App\Actions\Subject\CreateNewSubject;
use App\Http\Requests\StoreSubjectRequest;
use App\Http\Requests\UpdateSubjectRequest;
use App\Http\Resources\CommentResource;
use App\Http\Resources\MediaResource;
use App\Http\Resources\SubjectResource;
use App\Models\Category;
use App\Models\Subject;
use Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class SubjectController extends Controller
{
    public function index(Category $category): Response
    {
        $votable = $category->subjects()
            ->with('category', 'media')
            ->notFlagged()
            ->notOwner()
            ->active()
            ->first();

        $subject = new SubjectResource($votable);

        return Inertia::render('Subject/Index', compact('subject', 'category'));
    }

    public function create(): Response
    {
        $media = Auth::user()->currentTeam->subjects->load('media');
        $media = MediaResource::collection($media);

        $categories = Category::query()
            ->with('criterias')
            ->get();

        return Inertia::render('Subject/Create', compact('media', 'categories'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreSubjectRequest  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(StoreSubjectRequest $request)
    {
        $input = $request->validated();

        $subjectForm = [
            'category_id' => $input['category']['id'],
            'status' => true,
            'options' => $input['options'] ?? null,
            'media' => $request->get('media'),
            'upload' => $input['upload'],
        ];

        $subject = (new CreateNewSubject)($subjectForm);

        return Redirect::route('subject.mine');
    }

    public function show(Category $category, Subject $subject): Response
    {
        $subject->scores = $this->scores($subject);
        $subject = new SubjectResource($subject);
        $comments = CommentResource::collection($subject->comments);

        return Inertia::render('Subject/Show', compact('subject', 'comments'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Subject  $subject
     * @return \Illuminate\Http\Response
     */
    public function edit(Subject $subject)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateSubjectRequest  $request
     * @param  \App\Models\Subject  $subject
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateSubjectRequest $request, Subject $subject)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Subject  $subject
     * @return \Illuminate\Http\Response
     */
    public function destroy(Subject $subject)
    {
        //
    }

    public function showMine()
    {
        $subjects = Auth::user()->currentTeam->subjects()
            ->latest()
            ->with('media')
            ->withCount('criterias')
            ->get()
            ->map(function ($subject) {
                $subject->scores = $this->scores($subject);

                return $subject;
            });

        $subjects = SubjectResource::collection($subjects);

        return Inertia::render('Subject/Mine', compact('subjects'));
    }

    private function scores(Subject $subject)
    {
        return $subject
            ->criterias()
            ->get()
            ->groupBy('name')
            ->mapWithKeys(function ($item, $key) {
                $scores = collect($item->pluck('pivot.score'))->map(function ($score) {
                    $ratio = 10 / 4;

                    return ($score + 1) * $ratio;
                });

                $avg = collect($scores)->avg();
                $deviation = collect($scores)->map(function ($score) use ($avg) {
                    return  ($score - $avg) * ($score - $avg);
                });
                $count = $item->count();
                $s = sqrt(collect($deviation)->avg());
                $z = 1.960;
                $cl = ($s / sqrt($count));
                $confidence = [
                    'lower' => round($avg - $z * $cl, 2),
                    'higher' => round($avg + $z * $cl, 2),
                ];
                $avg = round($avg, 2);

                return [$key => compact('confidence', 'count', 'avg')];
            });
    }
}
