<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form Submission</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            color: #333;
            margin: 0;
            padding: 20px;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }

        .header {
            background-color: #4CAF50;
            padding: 20px;
            text-align: center;
            color: #ffffff;
        }

        .header h1 {
            margin: 0;
            font-size: 24px;
        }

        .content {
            padding: 20px;
        }

        .content h2 {
            font-size: 20px;
            color: #333333;
            margin: 0 0 10px;
        }

        .content p {
            margin: 10px 0;
            font-size: 16px;
            line-height: 1.5;
        }

        .footer {
            background-color: #f1f1f1;
            text-align: center;
            padding: 15px;
            font-size: 14px;
            color: #666666;
        }

        .message-box {
            background-color: #f8f9fa;
            padding: 20px;
            border-radius: 4px;
            margin: 20px 0;
            border-left: 4px solid #007bff;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="header">
            <h1>Contact Form Submission</h1>
        </div>
        <div class="content">
            <h2>Hello, Hasib</h2>
            <p>You have received a new message from the contact form on your website.</p>
            {{-- <p><strong>Name:</strong> {{ $data['name'] }}</p>
            <p>
                <strong>Email:</strong> <a href="mailto:{{ $data['email'] }}"> {{ $data['email'] }}</a>
            </p>
            <p><strong>Message:</strong></p>
            <p>{{ $data['message'] }}</p> --}}

            <div class="message-box">
                <h3>Message Details:</h3>
                <p><strong>Name:</strong> {{ $data['name'] }}</p>
                <p><strong>Email:</strong> <a href="mailto:{{ $data['email'] }}"> {{ $data['email'] }}</a></p>
                <p><strong>Message:</strong></p>
                <p style="font-style: italic;">{{ $data['message'] }}</p>
            </div>


            <p style="margin-top: 20px;">Thank you for your attention.</p>
        </div>
        <div class="footer">
            <p>This email was submited by the contact form on your website.</p>
        </div>
    </div>
</body>

</html>
