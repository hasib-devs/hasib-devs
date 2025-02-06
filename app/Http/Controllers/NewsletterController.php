<?php

namespace App\Http\Controllers;

use App\Http\Requests\NewsletterRequest;
use App\Mail\Newsletter as MailNewsletter;
use App\Models\Newsletter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class NewsletterController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function store(NewsletterRequest $request)
    {
        $newsletter = Newsletter::find($request->email);

        if ($newsletter && !$newsletter->is_subscribed) {
            $newsletter->is_subscribed = true;
            $newsletter->save();

            Mail::to($request->email)->send(new MailNewsletter());
            return redirect()->back()->with('message', 'You have been subscribed to our newsletter.');
        }


        Newsletter::create([
            'email' => $request->email,
        ]);

        Mail::to($request->email)->send(new MailNewsletter());

        return redirect()->back()->with('message', 'You have been subscribed to our newsletter.');
    }
}
