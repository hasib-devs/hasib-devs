<!DOCTYPE html>
<html>

<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }

        img {
            max-width: 100%;
        }

        .header {
            text-align: center;
            padding: 20px 0;
            background-color: #f8f9fa;
            border-radius: 8px;
            margin-bottom: 24px;
        }

        .logo {
            width: 200px;
            margin-left: auto;
            margin-right: auto;
        }

        .content {
            padding: 20px 0;
        }

        .button {
            display: inline-block;
            padding: 12px 24px;
            background-color: #007bff;
            color: white;
            text-decoration: none;
            border-radius: 4px;
            margin: 20px 0;
        }

        .footer {
            text-align: center;
            font-size: 12px;
            color: #666;
            padding-top: 20px;
            border-top: 1px solid #eee;
        }

        .social-links {
            margin: 20px 0;
        }

        .social-links a {
            margin: 0 10px;
            color: #007bff;
            text-decoration: none;
        }
    </style>
</head>

<body>
    <div class="header">
        <div class="logo">
            <img src="{{ asset('images/hasib-dev.svg') }}" alt="Your Logo" />
        </div>
        <h1>Welcome to Our Newsletter!</h1>
    </div>

    <div class="content">
        <p>Hello There!</p>

        <p>Thank you for subscribing to our newsletter! We're excited to have you join our community.</p>

        <p>Here's what you can expect from us:</p>
        <ul>
            <li>Weekly updates on Blog posts</li>
            <li>Exclusive content and insights</li>
            <li>Special offers for subscribers</li>
            <li>Tips and best practices</li>
        </ul>

        <p>To ensure you don't miss our updates, please add <strong>info@hasib.dev</strong> to your contacts.
        </p>

        <center>
            <a href="#" class="button">View Latest Newsletter</a>
        </center>

        <div class="social-links">
            <center>
                <a href="#">Facebook</a>
                <a href="#">Twitter</a>
                <a href="#">LinkedIn</a>
                <a href="#">Instagram</a>
            </center>
        </div>
    </div>

    <div class="footer">
        <p>© 2024 hasib.dev. All rights reserved.</p>
        <p>Our address: Dhaka, Bangladesh</p>
        <p><a href="#">Unsubscribe</a> | <a href="#">Privacy Policy</a> | <a href="#">Terms of
                Service</a></p>
    </div>
</body>

</html>
