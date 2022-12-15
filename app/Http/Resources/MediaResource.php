<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MediaResource extends JsonResource
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
            'path' => $this->getFirstMedia() ? $this->getFirstMedia()->getPath() : null,
            'url' => $this->getFirstMedia() ? $this->getFirstMedia()->getFullUrl() : null,
        ];
    }
}
