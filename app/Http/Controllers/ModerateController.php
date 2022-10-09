<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreModerateRequest;
use App\Http\Requests\UpdateModerateRequest;
use App\Models\Moderate;

class ModerateController extends Controller
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
     * @param  \App\Http\Requests\StoreModerateRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreModerateRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Moderate  $moderate
     * @return \Illuminate\Http\Response
     */
    public function show(Moderate $moderate)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Moderate  $moderate
     * @return \Illuminate\Http\Response
     */
    public function edit(Moderate $moderate)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateModerateRequest  $request
     * @param  \App\Models\Moderate  $moderate
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateModerateRequest $request, Moderate $moderate)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Moderate  $moderate
     * @return \Illuminate\Http\Response
     */
    public function destroy(Moderate $moderate)
    {
        //
    }
}
