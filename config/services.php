<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
        'endpoint' => env('MAILGUN_ENDPOINT', 'api.mailgun.net'),
        'scheme' => 'https',
    ],

    'postmark' => [
        'token' => env('POSTMARK_TOKEN'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],
    'google' => [
        'client_id' => '70247455817-77ql7t2b4o55qdg02v6r7vgu6h22kv7j.apps.googleusercontent.com',
        'client_secret' => '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',
        'redirect' => '/auth/google/callback',
    ],
    'facebook' => [
        'client_id' => '3305868969677838',
        'client_secret' => '1ebd5125cb1091b69e8e77e1e77a10cf',
        'redirect' => '/auth/facebook/callback',
    ],
    'twitter' => [
        'client_id' => 'nq4erkiaMI0TUW1EfGHeU0jGa',
        'client_secret' => 'dgGcYS6MPOLBXrrQM89qVm2K0iujMwnyPnPKEXzxfqY3b1P6UK',
        'bearer_token' => 'AAAAAAAAAAAAAAAAAAAAALXYigEAAAAALM1cc6r9trJn5zXSmsY%2F2qxc2wk%3DzOrtRO2SSzI2GBjzPRxnivjuXX58XAfdPoQKBDAYjpT3bMLaIP',
        'redirect' => '/auth/twitter/callback',
    ],
    'twitter-oauth-2' => [
        'client_id' => 'ck5OcGlGWlVNYWVWZnJQOHA5cWQ6MTpjaQ',
        'client_secret' => 'O0DK_5yT80B3FYC1-xaPMtssY1C2s1T-62ifDnAM2FF8IKaTan',
        'bearer_token' => 'AAAAAAAAAAAAAAAAAAAAALXYigEAAAAALM1cc6r9trJn5zXSmsY%2F2qxc2wk%3DzOrtRO2SSzI2GBjzPRxnivjuXX58XAfdPoQKBDAYjpT3bMLaIP',
        'redirect' => '/auth/twitter/callback',
    ],
    'apple' => [
        'client_id' => env('APPLE_CLIENT_ID'),
        'client_secret' => env('APPLE_CLIENT_SECRET'),
        'redirect' => env('APPLE_REDIRECT_URI'),
    ],

];
