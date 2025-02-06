<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Mail\Contact as ContactMail;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class PortfolioController extends Controller
{
    /**
     * Display Portfolio page about me.
     */
    public function index()
    {
        return Inertia::render('portfolio/index');
    }

    /**
     * Show the resume page.
     */
    public function resume()
    {
        return Inertia::render('portfolio/resume');
    }

    /**
     * Show the blog page.
     */
    public function blog()
    {
        return Inertia::render('portfolio/blog');
    }

    /**
     * Show the contact page.
     */
    public function contact()
    {
        return Inertia::render('portfolio/contact');
    }

    /**
     * send the contact form.
     */
    public function sendContact(ContactRequest $request)
    {
        Mail::to(config('mail.from.address'))->send(new ContactMail([
            'name' => $request->name,
            'email' => $request->email,
            'message' => $request->message,
        ]));

        return redirect()
            ->back()
            ->with('message', 'Thank you for your message. We will get back to you soon!');
    }

    /**
     * Download the resume from public folder.
     */
    public function downloadResume()
    {
        $fileName = 'Hasibur-Rahman.pdf';
        $file = public_path('files/'.$fileName);
        $headers = ['Content-Type: application/pdf'];

        return response()->download($file, $fileName, $headers);
    }
}
