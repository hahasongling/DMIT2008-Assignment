import { headers } from 'next/headers'
import {stripe} from '@/lib/stripe'
 

async function POST(request) {
  console.clear()
  const body = await request.formData();
  const formData = new FormData();
  const id = body.get("uid");
  const price = body.get("productPrice");
  const quantity = 1;

 
    //Create Checkout Sessions from body params.
    const checkoutSession = await stripe.checkout.sessions.create({
      mode:'payment',
      line_items: [
        {
          price:price,
          quantity: 1,
        },
      ],
      success_url: `${headers().get('origin')}/success`,
      cancel_url: `${headers().get('origin')}/canceled`,
      automatic_tax: { enabled: true },
    });
  
    // redirect(checkoutSession.url)
   return Response.redirect(checkoutSession.url)
    
 
 }

export { POST };
