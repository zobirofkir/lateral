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

        $response = Http::get('https://maps.googleapis.com/maps/api/place/details/json', [
            'place_id' => $placeId,
            'fields' => 'name,rating,user_ratings_total,reviews',
            'key' => $apiKey,
        ]);

        $data = $response->json();

        $googleReviews = $data['result']['user_ratings_total'] ?? 0;
        $googleRating  = $data['result']['rating'] ?? 0;
        $googleName    = $data['result']['name'] ?? null;
        $reviews       = $data['result']['reviews'] ?? [];

        return Inertia::render('WelcomePage', [
            'views' => $view->views,
            'googleReviews' => $googleReviews,
            'googleRating' => $googleRating,
            'googleName' => $googleName,
            'reviews' => $reviews
        ]);
    }
}