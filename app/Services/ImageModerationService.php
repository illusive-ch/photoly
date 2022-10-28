<?php

namespace App\Services;

use Aws\Rekognition\RekognitionClient;

class ImageModerationService
{
    private RekognitionClient $client;

    private string $url;

    private $image;

    private int $bytest;

    private int $minConfidenceLevel = 50;

    private $results;

    public function __construct($url, $bytes)
    {
        $args = [
            'credentials' => [
                'key' => env('AWS_REKOGNITION'),
                'secret' => env('AWS_REKOGNITION_KEY'),
            ],
            'region' => config('aws.region'),
            'version' => 'latest',
        ];

        $this->client = new RekognitionClient($args);

        $this->url = $url;

        $this->image = fopen($this->url, 'r');

        $this->bytes = stream_get_contents($this->image);

        $this->results = false;
    }

    public function detectLabels()
    {
        $this->results = $this->client->detectModerationLabels(
            [
                'Image' => [
                    'Bytes' => $this->bytes,
                ],
                'MinConfidence' => $this->minConfidenceLevel,
            ]);
//        dump($this->results);
    }

    public function detectText()
    {
        $this->results = $this->client->detectText(
            [
                'Image' => [
                    'Bytes' => $this->bytes,
                ],
                'MinConfidence' => $this->minConfidenceLevel,
            ]);
    }

    public function nudity()
    {
        $results = $this->results['ModerationLabels'];

        return collect($results)->where('Name', 'Explicit Nudity')->isNotEmpty();
    }

    public function words()
    {
        $results = $this->results['TextDetections'];

//        $words = collect($results)->filter(function ($item) {
//            return $item['Type'] === 'WORD';
//        })->pluck('DetectedText');

        return collect($results)->filter(function ($item) {
            return $item['Type'] === 'WORD';
        })->isNotEmpty();
    }
}
