<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use App\Mail\Contact as ContactMail;

class PortfolioController extends Controller
{
    /**
     * Display Portfolio page about me.
     */
    public function index()
    {
        return Inertia::render("Portfolio/Index");
    }

    /**
     * Show the resume page.
     */

    public function resume()
    {
        return Inertia::render("Portfolio/Resume");
    }

    /**
     * Show the blog page.
     */
    public function blog()
    {
        return Inertia::render("Portfolio/Blog");
    }

    /**
     * Show the contact page.
     */
    public function contact()
    {
        return Inertia::render("Portfolio/Contact");
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
            ->with("message", "Thank you for your message. We will get back to you soon!");
    }


    /**
     * Download the resume from public folder.
     */
    public function downloadResume()
    {
        $fileName = "Hasibur-Rahman.pdf";
        $file = public_path("files/" . $fileName);
        $headers = ["Content-Type: application/pdf"];

        return response()->download($file, $fileName, $headers);
    }
}
