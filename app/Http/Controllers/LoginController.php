<?php

namespace App\Http\Controllers;

use App\Models\Team;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Jetstream\Contracts\AddsTeamMembers;
use Laravel\Jetstream\TeamInvitation;
use Laravel\Socialite\Facades\Socialite;

class LoginController extends Controller
{
    public function redirectToProvider($provider, Request $request)
    {
        $driver = Socialite::driver($provider);

        return $driver->redirect();
    }

    public function handleProviderCallback($provider)
    {
        $socialiteUser = Socialite::driver($provider)->user();

        if (! Auth::check()) {
            $user = User::updateOrCreate([
                'email' => $socialiteUser->email,
            ], [
                'name' => $socialiteUser->name,
                'provider' => $provider,
                'provider_id' => $socialiteUser->id,
                'provider_token' => $socialiteUser->token,
            ]);
            Auth::login($user);
        } else {
            $user = Auth::user();
        }

        if ($user->teams->isEmpty()) {
            $team = $this->createTeam($user, $socialiteUser->name);
        }

        if (method_exists($this, $provider)) {
            $this->$provider($socialiteUser, $provider);
        }

        $redirect = route('dashboard');

        if (session()->exists('redirect')) {
            $redirect = session()->pull('redirect')[0];
        }

        return redirect($redirect);
    }

    protected function createTeam(User $user, string $company)
    {
        $invitation = TeamInvitation::where('email', '=', $user->email)->first();
        if ($invitation) {
            app(AddsTeamMembers::class)->add(
                $invitation->team->owner,
                $invitation->team,
                $invitation->email,
                $invitation->role
            );

            $invitation->delete();

            return redirect(config('fortify.home'))->banner(
                __('Great! You have accepted the invitation to join the :team team.', ['team' => $invitation->team->name]),
            );
        }

        $user->ownedTeams()->save($team = Team::forceCreate([
            'user_id' => $user->id,
            'name' => $company,
            'personal_team' => false,
        ]));

        return $team;
    }
}
