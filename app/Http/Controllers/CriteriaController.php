<?php

namespace App\Http\Controllers;

use App\Actions\Subject\DepictSubject;
use App\Http\Requests\StoreCriteriaRequest;
use App\Http\Requests\UpdateCriteriaRequest;
use App\Models\Category;
use App\Models\Criteria;
use App\Models\Subject;

class CriteriaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreCriteriaRequest  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(StoreCriteriaRequest $request, Category $category, Subject $subject)
    {
        $subject = (new DepictSubject())($request->validated(), $subject, false);

        return redirect()->route('category.subjects.index', ['category' => $category]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Criteria  $criteria
     * @return \Illuminate\Http\Response
     */
    public function show(Criteria $criteria)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Criteria  $criteria
     * @return \Illuminate\Http\Response
     */
    public function edit(Criteria $criteria)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCriteriaRequest  $request
     * @param  \App\Models\Criteria  $criteria
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCriteriaRequest $request, Criteria $criteria)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Criteria  $criteria
     * @return \Illuminate\Http\Response
     */
    public function destroy(Criteria $criteria)
    {
        //
    }
}
