<?php

namespace App\Http\Controllers;

use App\Models\PageView;
use Illuminate\Http\Request;
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

        return Inertia::render('WelcomePage', [
            'views' => $view->views
        ]);
    }
}
