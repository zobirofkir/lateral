<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::get('/', function() {
    return inertia('WelcomePage');
});

Route::get('/discover-tanger', function() {
    return inertia('DiscoverTangerPage');
});

Route::get('/rooms', function() {
    return inertia('RoomsPage');
});

Route::get('/bookings', function() {
    return inertia('BookingsPage');
});