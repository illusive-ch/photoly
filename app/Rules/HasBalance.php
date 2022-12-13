<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\InvokableRule;

class HasBalance implements InvokableRule
{
    /**
     * Run the validation rule.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     * @return void
     */
    public function __invoke($attribute, $value, $fail)
    {
        $sum = \Auth::user()->currentTeam->creditBalance();

        if ($value > $sum) {
            $fail('Your credit balance exceeds requested amount');
        }
    }
}
