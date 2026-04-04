<?php

use App\Http\Controllers\HomePageController;
use App\Http\Controllers\PageViewController;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

/**
 * Welcome page
 */
Route::get('/', [HomePageController::class , 'home']);

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
Route::get('/rooms/{id}', function($id) {
    return inertia('ShowRoomPage', [
        'roomId' => $id
    ]);
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

/**
 * Contact Page
 */
Route::get('/contacts', function() {
    return inertia('ContactPage');
});
