<?php

namespace App\Http\Controllers;

use App\Actions\Subject\CreateNewSubject;
use App\Actions\Subject\PauseSubject;
use App\Http\Requests\StoreSubjectRequest;
use App\Http\Requests\UpdateSubjectRequest;
use App\Http\Resources\CommentResource;
use App\Http\Resources\MediaResource;
use App\Http\Resources\SubjectResource;
use App\Models\Category;
use App\Models\Criteria;
use App\Models\Depiction;
use App\Models\Subject;
use Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class SubjectController extends Controller
{
    public function index(Category $category): \Illuminate\Http\RedirectResponse
    {
//        $recentVotes = Auth::user()->whereHas('votes', function ($q) {
//            $q->where('criteria_subject.created_at', '>=', now()->subHours(12));
//        })->get();
        $depictions = Auth::user()->depictions()
            ->with('subject')
            ->recent()
            ->get();

        $teams = $depictions->map(function (Depiction $depiction) {
            return $depiction->subject->team_id;
        })->unique();

        $votable = $category->subjects()
            ->with('category', 'media')
            ->notFlagged()
            ->notOwner()
            ->active()
            ->whereNotIn('team_id', $teams)
            ->first();

        return Redirect::route('category.subjects.show', ['category' => $category, 'subject' => $votable]);
    }

    public function create(Category $category): Response
    {
//        $media = Auth::user()->currentTeam->subjects->load('media');
//        $media = MediaResource::collection($media);
        $balance = Auth::user()->currentTeam->creditBalance();

        return Inertia::render('Subject/Create', compact('balance', 'category'));
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
            'position' => $input['position'],
            'targetGender' => $input['target']['gender'],
            'targetMinAge' => $input['target']['minAge'],
            'targetMaxAge' => $input['target']['maxAge'],
        ];

        $subject = (new CreateNewSubject)($subjectForm);

        return Redirect::route('subject.mine');
    }

    public function show(Category $category, Subject $subject): Response
    {
        if (Auth::user()->currentTeam->id !== $subject->team_id) {
            $subject = new SubjectResource($subject);

            return Inertia::render('Subject/Index', compact('subject', 'category'));
        }

        $subject->scores = $this->scores($subject);
        $subject = new SubjectResource($subject);

        $depictions = $subject->depictions()->with('comments', 'tags')->get();

        $comments = $depictions->map(function (Depiction $depiction) {
            return $depiction->comments;
        })->flatten();

        $comments = CommentResource::collection($comments);

        $tags = $depictions->map(function (Depiction $depiction) {
            return $depiction->tags;
        })
        ->flatten()
        ->countBy('name')
        ->sortDesc()
        ->take(10);

        return Inertia::render('Subject/Show', compact('subject', 'comments', 'tags'));
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
    public function update(UpdateSubjectRequest $request, Category $category, Subject $subject)
    {
        $input = $request->validated();
        $subject = (new PauseSubject)($subject);
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
            ->withCount('depictions')
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
        $depictions = $subject->depictions()->with('criterias')->get();
        $scores = $depictions->map(function (Depiction $depiction) {
            return $depiction->criterias;
        })->flatten()
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

        return $scores;
    }
}
