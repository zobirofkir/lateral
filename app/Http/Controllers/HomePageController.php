<?php

namespace App\Http\Controllers;

use App\Models\PageView;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class HomePageController extends Controller
{
    public function home()
    {
        $view = PageView::firstOrCreate(
            ['page' => 'home'],
            ['views' => 0]
        );

        if (!session()->has('viewed_home')) {
            $view->increment('views');
            session(['viewed_home' => true]);
        }

        /**
         * Google Places API
         */
        $placeId = config('services.google.places_id');
        $apiKey = config('services.google.places_key');

        $googleResponse = Http::get('https://maps.googleapis.com/maps/api/place/details/json', [
            'place_id' => $placeId,
            'fields' => 'rating,user_ratings_total',
            'key' => $apiKey,
        ])->json();

        $googleReviews = $googleResponse['result']['user_ratings_total'] ?? 0;
        $googleRating = $googleResponse['result']['rating'] ?? 0;

        return Inertia::render('WelcomePage', [
            'views' => $view->views,
            'googleReviews' => $googleReviews,
            'googleRating' => $googleRating,
        ]);
    }
}
