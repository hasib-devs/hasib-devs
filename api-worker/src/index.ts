import { Hono } from 'hono';
import { cors } from 'hono/cors';

type Bindings = {
  SLACK_WEBHOOK_URL: string;
  BREVO_API_KEY: string;
  BREVO_API_URL: string;
};

const app = new Hono<{ Bindings: Bindings; }>();
// Enable CORS
app.use('/api/*', cors({
  origin: (origin, c) => {
    return origin.endsWith('hasib.dev')
      ? origin
      : 'http://localhost';
  },
  allowMethods: ['POST', 'GET', 'OPTIONS'],
}));


app.get("/", async function (c) {
  return c.json({
    message: "Api is running..."
  });
});

type ContactFormBody = {
  name: string;
  email: string;
  message: string;
};

app.post('/api/contact', async (c) => {
  c.header('Accept', 'application/json');
  const { name, email, message } = await c.req.json<ContactFormBody>();

  const errors: Record<string, string> = {};

  // Validation
  if (!name) errors.name = "Name is required";
  if (!email) errors.email = "Email is required";
  if (!message) errors.message = "Message is required";

  if (Object.keys(errors).length) {
    return c.json({ message: 'Unprocessable Entity', errors }, 422);
  }

  // Validate email format
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return c.json({ errors: { email: 'Invalid email format' } }, 422);
  }

  // Validate message length
  if (message.length > 1000) {
    return c.json({ errors: { message: 'Message too long' } }, 422);
  }

  // POST Slack webhook here
  const webhookURL = c.env.SLACK_WEBHOOK_URL;
  // POST brevo
  const brevoURL = c.env.BREVO_API_URL;
  const brevoApiKey = c.env.BREVO_API_KEY;


  const [res1, res2, res3] = await Promise.allSettled([
    fetch(webhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: `New contact form submission:\n*Name:* ${name}\n*Email:* ${email}\n*Message:* ${message}`,
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: `📬 *New Contact Form Submission*`
            }
          },
          {
            type: "divider"
          },
          {
            type: "section",
            fields: [
              {
                type: "mrkdwn",
                text: `*Name:*\n${name}`
              },
              {
                type: "mrkdwn",
                text: `*Email:*\n${email}`
              }
            ]
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: `*Message:*\n${message}`
            }
          }
        ]
      }),
    }),
    fetch(brevoURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': brevoApiKey
      },
      body: JSON.stringify({
        sender: {
          name: "Hasibur Rahman",
          email: "hello@hasib.dev"
        },
        to: [
          {
            email: email,
            name: name
          }
        ],
        subject: "Thanks for Reaching Out",
        htmlContent: `
        <!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <title>Thanks for Reaching Out</title>
              <style>
                body {
                  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
                    'Open Sans', 'Helvetica Neue', sans-serif;
                  background-color: #f4f4f7;
                  padding: 20px;
                  margin: 0;
                }
                .container {
                  max-width: 600px;
                  margin: auto;
                  background-color: #fff;
                  padding: 24px;
                  border-radius: 10px;
                  box-shadow: 0px 0px 15px #efefef;
                }
                .logo {
                  text-align: center;
                  margin-bottom: 20px;
                }
                .logo img {
                  height: 50px;
                }
                .content {
                  font-size: 16px;
                  line-height: 1.6;
                  color: #333;
                }
                .social {
                  text-align: center;
                  margin-top: 30px;
                }
                .social a {
                  margin: 0 8px;
                  text-decoration: none;
                  display: inline-block;
                }
                .social img {
                  width: 24px;
                  height: 24px;
                }
                .footer {
                  font-size: 13px;
                  color: #888;
                  text-align: center;
                  margin-top: 20px;
                }
                a {
                  color: #4f46e5;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="logo">
                  <img src="https://hasib.dev/images/hasib-dev.svg" alt="Hasib.Dev" />
                </div>
                <div class="content">
                  <h2>Hi ${name},</h2>
                  <p>
                    Thank you for reaching out through my website! I've received your message and will get
                    back to you soon if a reply is needed.
                  </p>
                  <p>
                    While you wait, feel free to explore more of my work on
                    <a href="https://hasib.dev">hasib.dev</a> or connect with me on LinkedIn.
                  </p>
                  <p>
                    Appreciate your time and interest. Looking forward to connecting!
                  </p>
                  <p>Best regards,<br />Hasibur Rahman</p>
                </div>

                <div class="social">
                  <a href="https://github.com/hasib-devs" target="_blank">
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
                  </a>
                  <a href="https://www.linkedin.com/in/hasibur" target="_blank">
                    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
                  </a>
                  <a href="mailto:hello@hasib.dev">
                    <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" />
                  </a>
                </div>

                <div class="footer">
                  Sent from <a href="https://hasib.dev" target="_blank">hasib.dev</a>
                </div>
              </div>
            </body>
          </html>
        `
      })
    }),
    fetch(brevoURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': brevoApiKey
      },
      body: JSON.stringify({
        sender: {
          name: "Admin",
          email: "admin@hasib.dev"
        },
        to: [
          {
            email: "hello@hasib.dev",
            name: "Hasibur Rahman"
          }
        ],
        subject: `A new message from ${name}`,
        htmlContent: `
        <!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <title>New Message</title>
              <style>
                 body {
                  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
                    'Open Sans', 'Helvetica Neue', sans-serif;
                  background-color: #f4f4f7;
                  padding: 20px;
                  margin: 0;
                }
              </style>
            </head>
            <body>
              <p><strong>You have received a new message via your portfolio contact form.</strong></p>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong></p>
              <p>${message}</p>
              <hr />
              <p>This message was sent from <a href="https://hasib.dev">hasib.dev</a></p>
            </body>
        </html>
        `
      })
    }),
  ]);

  if (res1.status === 'rejected') {
    return c.json({
      message: "Fail to send Slack message",
      error: res1.reason
    });
  }

  if (res2.status === 'rejected') {
    return c.json({
      message: "Fail to send Mail",
      error: res2.reason
    });
  }
  if (res3.status === 'rejected') {
    return c.json({
      message: "Fail to send self Mail",
      error: res3.reason
    });
  }

  return c.json({
    message: "Contact form submitted successfully",
  });
});

export default {
  fetch: app.fetch
};
