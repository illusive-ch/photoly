<?php

namespace App\Http\Middleware;

use App\Http\Resources\CategoryResource;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request)
    {
        return array_merge(parent::share($request), [
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
            'categories' => Cache::rememberForever('categories', function () {
                return CategoryResource::collection(Category::all());
            }),
            'env' => config('app.env'),
            'credits' => Auth::check() ? Auth::user()->currentTeam->creditBalance() : 0,
            'urlPrev' => function () {
                if (app('router')->getRoutes()->match(app('request')->create(url()->previous()))->getName() !== 'category.subjects.show' &&
                    url()->previous() !== route('login') &&
                    url()->previous() !== '' &&
                    url()->previous() !== url()->current()) {
                    return url()->previous();
                } else {
                    return route('subject.mine');
                }
            },
        ]);
    }
}
