<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SubjectResource extends JsonResource
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
            'category' => [
                'id' => $this->category->id,
                'name' => $this->category->name,
            ],
            'depictions_count' => $this->criterias_count,
            'criteria' => $this->category->criterias,
            'tags' => $this->category->tags,
            'scores' => $this->scores,
            'image' => $this->getFirstMediaUrl(),
            'status' => $this->status,
            'created_at' => $this->created_at->diffForHumans(),
            'context' => $this->options['context'] ?? '',
            'position' => isset($this->options['position']) ? $this->options['position']['name'] : '',
        ];
    }
}
