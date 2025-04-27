import { Hono } from 'hono';

type Bindings = {
  SLACK_WEBHOOK_URL: string;
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
  const { name, email, message } = Object.fromEntries(formData) as Record<string, string>;

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
  try {
    // Post to Slack
    const slackResponse = await fetch(webhookURL, {
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
    });

    if (!slackResponse.ok) {
      throw new Error('Failed to send notification to Slack');
    }

    return c.json({
      message: "Contact form submited successfully"
    });

  } catch (error) {
    return c.json({
      message: "Failed to process your request"
    }, 500);
  }

});

export default {
  fetch: app.fetch
};
