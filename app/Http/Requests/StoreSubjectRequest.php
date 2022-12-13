<?php

namespace App\Http\Requests;

use App\Rules\HasBalance;
use Illuminate\Foundation\Http\FormRequest;

class StoreSubjectRequest extends FormRequest
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
            'media.path' => ['required_if:upload,false', 'string'],
            'media' => ['required_if:upload,true', 'array'],
            'upload' => ['required', 'boolean'],
            'category.id' => ['required', 'exists:categories,id'],
            'position' => ['required_if:options.multiplePeople,true'],
            'target.gender' => ['required', 'in:Both,Male,Female'],
            'target.minAge' => ['required', 'lte:target.maxAge', 'gte:18'],
            'target.maxAge' => ['required', 'gte:target.minAge', 'lte:100'],
            'plan' => ['required'],
            'plan.cost' => ['required', 'integer', new HasBalance],
        ];
    }
}
