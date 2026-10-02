// Pi Zi Wei — pay-as-you-want checkout
// Receives ?amount=3.14&currency=usd from pi-ziwei.com, creates a Stripe Checkout
// session for that exact amount, and redirects the visitor to it.
// Requires one secret: STRIPE_SECRET_KEY (set in Cloudflare → Worker → Settings → Variables and Secrets).

const SITE = 'https://pi-ziwei.com';
const ALLOWED_CURRENCIES = ['usd', 'eur', 'sgd'];
const MIN = 0.5, MAX = 99.99;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname !== '/checkout') return new Response('Not found', { status: 404 });

    const amount = parseFloat(url.searchParams.get('amount'));
    const currency = (url.searchParams.get('currency') || 'usd').toLowerCase();
    if (!isFinite(amount) || amount < MIN || amount > MAX || !ALLOWED_CURRENCIES.includes(currency)) {
      return Response.redirect(SITE + '/', 303);
    }
    const cents = Math.round(amount * 100);

    const body = new URLSearchParams({
      'mode': 'payment',
      'success_url': SITE + '/?paid=1',
      'cancel_url': SITE + '/',
      'line_items[0][quantity]': '1',
      'line_items[0][price_data][currency]': currency,
      'line_items[0][price_data][unit_amount]': String(cents),
      'line_items[0][price_data][product_data][name]': 'Pi Zi Wei Vision Board',
      'line_items[0][price_data][product_data][description]': 'A gift of ' + amount.toFixed(2) + ' — it already lives somewhere inside π.',
      'submit_type': 'donate',
    });

    const res = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + env.STRIPE_SECRET_KEY,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body,
    });
    const session = await res.json();
    if (!res.ok || !session.url) {
      return new Response('Could not start checkout. Please go back and try again.', { status: 502 });
    }
    return Response.redirect(session.url, 303);
  },
};
