<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::get('/', function() {
    return inertia('WelcomePage');
});

Route::get('/decouvrir-tanger', function() {
    return inertia('DiscoverTangerPage');
});

Route::get('/chambres', function() {
    return inertia('ChambresPage');
});