<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

/**
 * Welcome page
 */
Route::get('/', function() {
    return inertia('WelcomePage');
});

/**
 * Discover Page
 */
Route::get('/discover-tanger', function() {
    return inertia('DiscoverTangerPage');
});

/**
 * Rooms Page
 */
Route::get('/rooms', function() {
    return inertia('RoomsPage');
});

/**
 * Show Single Home
 */
Route::get('/rooms/{id}', function() {
    return inertia('ShowRoomPage');
});

/**
 * Bookings page
 */
Route::get('/bookings', function() {
    return inertia('BookingsPage');
});

/**
 * Rules Page
 */
Route::get('/rules', function() {
    return inertia('RulesPage');
});