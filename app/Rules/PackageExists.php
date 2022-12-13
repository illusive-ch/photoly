<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\InvokableRule;

class PackageExists implements InvokableRule
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
        $package = collect(config('credit.billables.team.plans'))->pluck('name')->search($value);

        if (! $package) {
            $fail('Invalid package specified');
        }
    }
}
