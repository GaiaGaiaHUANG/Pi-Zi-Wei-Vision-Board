# Set up the payment worker (about 5 minutes)

## 1. Get your Stripe secret key
1. Stripe Dashboard → **Developers → API keys**.
2. Copy the **Secret key** (starts with `sk_live_…`). Use `sk_test_…` first if you want to test.
3. Never paste this key into index.html or GitHub.

## 2. Create the worker
1. Sign up / log in at **dash.cloudflare.com** (free plan).
2. **Workers & Pages → Create → Create Worker** (start from "Hello World").
3. Name it `pi-ziwei-pay` → **Deploy**.
4. Click **Edit code**, delete everything, paste the contents of `worker.js` → **Deploy**.

## 3. Add the secret key
1. Open the worker → **Settings → Variables and Secrets → Add**.
2. Type: **Secret**. Name: `STRIPE_SECRET_KEY`. Value: your secret key → **Deploy**.

## 4. Copy the worker address
It looks like `https://pi-ziwei-pay.YOUR-NAME.workers.dev`.

## 5. Put it in index.html
Find this line in index.html:

    PAY_WORKER_URL = '';

and change it to:

    PAY_WORKER_URL = 'https://pi-ziwei-pay.YOUR-NAME.workers.dev';

Upload index.html to GitHub. Until this is filled in, the site keeps using your current Stripe link.

## 6. Turn on Apple Pay / Google Pay
Stripe Dashboard → **Settings → Payment methods** → make sure Apple Pay and Google Pay are on.

## Test
On pi-ziwei.com, choose a number → "Continue to give". Stripe should open with your exact amount already filled in. After paying you return to pi-ziwei.com and the board opens.
