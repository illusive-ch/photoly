<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CommentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'date' => $this->created_at->diffForHumans(),
            'gender' => $this->user->gender ? 'Male' : 'Female',
            'age' => $this->user->dob->age,
            'body' => $this->body,
        ];
    }
}
