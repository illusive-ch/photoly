<?php

namespace App\Http\Requests;

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
            'options.context' => ['required_if:category.name,Busienss'],
            'options.age.id' => ['required_if:category.name,Dating', 'numeric'],
            'options.gender.id' => ['required_if:category.name,Dating', 'numeric'],
            'options.position' => ['required_if:options.multiplePeople,true'],
        ];
    }
}
