<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Spartan:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet">

    <link rel="stylesheet" href="{{asset('assets/css/swiper-bundle.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/odometer.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/meanmenu.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/animate.min.css')}}">
    {{--    <link rel="stylesheet" href="assets/dist/output.css">--}}
    <!-- Scripts -->
    @routes
    @vite('resources/js/app.js')
    @inertiaHead
</head>
<body class="font-sans antialiased bg-white">
<!-- Preloader -->
<div class="preloader-area text-center left-0 right-0 top-0 bottom-0 bg-white fixed z-9999">
    <div class="preloader absolute -mt-20 left-0 right-0 top-1/2 m-auto -translate-y-2/4">
        <div class="waviy font-bold text-50px">
            <span class="text-black-color inline-block relative">T</span>
            <span class="text-primary-color inline-block relative">O</span>
            <span class="text-black-color inline-block relative">G</span>
            <span class="text-secondary-color inline-block relative">Y</span>
        </div>
    </div>
</div>
<!-- End Preloader -->
@inertia
<script src="{{asset('assets/js/jquery.min.js')}}"></script>
<script src="{{asset('assets/js/swiper-bundle.min.js')}}"></script>
<script src="{{asset('assets/js/appear.min.js')}}"></script>
<script src="{{asset('assets/js/odometer.min.js')}}"></script>
<script src="{{asset('assets/js/magnific-popup.min.js')}}"></script>
<script src="{{asset('assets/js/meanmenu.min.js')}}"></script>
<script src="{{asset('assets/js/wow.min.js')}}"></script>
<script src="{{asset('assets/js/main.js')}}"></script>
</body>
</html>
