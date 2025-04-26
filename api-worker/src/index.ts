import { Hono } from 'hono';

type Bindings = {
  SENDER_EMAIL: string;
  FORWARD_TO_EMAIL: string;
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

  // Construct email
  const emailContent = {
    personalizations: [{
      to: [{ email: c.env.FORWARD_TO_EMAIL }],
      reply_to: { email, name }
    }],
    from: {
      email: c.env.SENDER_EMAIL,
      name: "Portfolio Contact Form"
    },
    subject: `New message from ${name}`,
    content: [{
      type: 'text/plain',
      value: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`
    }]
  };

  return c.json({
    data: emailContent
  });

});

export default app;
