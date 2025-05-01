import { Hono } from 'hono';

type Bindings = {
  SLACK_WEBHOOK_URL: string;
  BREVO_API_KEY: string;
  BREVO_API_URL: string;
};

const app = new Hono<{ Bindings: Bindings; }>();
// Enable CORS
app.use('/api/*', async (c, next) => {
  c.res.headers.set('Access-Control-Allow-Origin', '*');
  c.res.headers.set('Access-Control-Allow-Methods', 'GET, POST');
  c.res.headers.set('Access-Control-Allow-Headers', 'Content-Type');
  await next();
});

app.get("/", async function (c) {
  return c.json({
    message: "Api is running..."
  });
});

app.post('/api/contact', async (c) => {
  const formData = await c.req.formData();
  const { name, email, message, subject } = Object.fromEntries(formData) as Record<string, string>;

  // Validation
  if (!name || !email || !message) {
    return c.json({ error: 'Missing required fields' }, 422);
  }

  // Validate email format
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return c.json({ error: 'Invalid email format' }, 422);
  }

  // Validate message length
  if (message.length > 1000) {
    return c.json({ error: 'Message too long' }, 422);
  }

  // POST Slack webhook here
  const webhookURL = c.env.SLACK_WEBHOOK_URL;
  // POST brevo
  const brevoURL = c.env.BREVO_API_URL;
  const brevoApiKey = c.env.BREVO_API_KEY;

  try {
    await Promise.allSettled([
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
                },
                {
                  type: "mrkdwn",
                  text: `*Subject:*\n${subject}`
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
                  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
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
      })
    ]);
  } catch (error) {
    return c.json({
      message: "Something went wrong"
    });
  }

  return c.json({
    message: "Contact form submitted successfully"
  });
});

export default {
  fetch: app.fetch
};
