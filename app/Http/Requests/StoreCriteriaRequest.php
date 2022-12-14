<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCriteriaRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'vote.*.score' => ['required', 'numeric', 'lte:3'],
            'recaptcha' => ['required'],
            'vote' => ['required', 'size:3'],
            'comment' => ['nullable', 'string', 'max:255'],
            'tags' => ['nullable', 'array'],
        ];
    }

    public function messages()
    {
        return [
            'vote.*.score' => 'Invalid vote',
            'vote.required' => 'Please cast your vote for the subject',
            'vote.size' => 'You are missing a field that must be voted on',
        ];
    }
}
