<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class ChangelogController extends Controller
{
    public function index()
    {
        return Inertia::render('changelog/index');
    }
}
