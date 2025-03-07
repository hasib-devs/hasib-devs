<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ChangelogController extends Controller
{
    public function index()
    {
        return Inertia::render('Changelog/Index');
    }
}
