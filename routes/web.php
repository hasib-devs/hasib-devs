<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\ChangelogController;
use App\Http\Controllers\LandingController;
use App\Http\Controllers\NewsletterController;
use App\Http\Controllers\PortfolioController;
use Illuminate\Support\Facades\Route;

Route::get('/', [LandingController::class, 'index'])->name('landing.index');
Route::get('/changelog', [ChangelogController::class, 'index'])->name('changelog.index');

Route::prefix('portfolio')->group(function () {
    Route::get('/', [PortfolioController::class, 'index'])->name('portfolio.index');
    Route::get('/resume', [PortfolioController::class, 'resume'])->name('portfolio.resume');
    Route::get('/resume/download', [PortfolioController::class, 'downloadResume'])->name('portfolio.resume.download');
    Route::get('/blog', [PortfolioController::class, 'blog'])->name('portfolio.blog');
    Route::get('/contact', [PortfolioController::class, 'contact'])->name('portfolio.contact');
    Route::post('/contact', [PortfolioController::class, 'sendContact'])->name('portfolio.sendContact');
});

Route::post('/newsletter', [NewsletterController::class, 'store'])->name('newsletter.store');

Route::prefix('blog')->group(function () {
    Route::get('/', [BlogController::class, 'index'])->name('blog.index');
    Route::get('/{slug}', [BlogController::class, 'show'])->name('blog.show');
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

// require __DIR__ . '/auth.php';
// require __DIR__ . '/api.php';
