<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title')</title>
    <link rel="stylesheet" href="{{ asset('css/bootstrap.min.css') }}?<?php echo microtime();?>"/>
	<link rel="stylesheet" href="{{ asset('css/flaticon.css') }}?<?php echo microtime();?>"/>
	<link rel="stylesheet" href="{{ asset('css/slicknav.min.css') }}?<?php echo microtime();?>"/>
	<link rel="stylesheet" href="{{ asset('css/jquery-ui.min.css') }}?<?php echo microtime();?>"/>
	<link rel="stylesheet" href="{{ asset('css/owl.carousel.min.css') }}?<?php echo microtime();?>"/>
	<link rel="stylesheet" href="{{ asset('css/animate.css') }}?<?php echo microtime();?>"/>
	<link rel="stylesheet" href="{{ asset('css/style.css') }}?<?php echo microtime();?>"/>
	<link rel="stylesheet" href="{{ asset('css/font-awesome.min.css') }}?<?php echo microtime();?>"/>
<style>

.active{
color: red;
font-weight: bold;

}
    </style>

</head>
@include('layouts.partials.header')


<body background="">
    <!-- header --> 
    <!-- nav --> 
   @yield('content')
   


   @include('layouts.partials.footer')

   <!-- script -->

</body>
</html>
