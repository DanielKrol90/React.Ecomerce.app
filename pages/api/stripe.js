
const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const params = {
        
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collectionL: 'auto',
        shipping_options: [
            { shipping_rate: 'shr_1Lfk1BFka5aULz1kmcDTfMEo'},
            { shipping_rate: 'shr_1Lfk23Fka5aULz1kiGB3jDDo'}
        ],
        line_items: [
        {
          price: '{{PRICE_ID}}',
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.origin}/?success=true`,
      cancel_url: `${req.headers.origin}/?canceled=true`,
      automatic_tax: {enabled: true},}

      const session = await stripe.checkout.sessions.create();
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}