<?php

use App\Http\Controllers\Api\NewsletterController;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function () {
    Route::post('newsletter', [NewsletterController::class, 'store'])->name('api.v1.newsletter.store');
});
