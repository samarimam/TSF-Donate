import React from 'react';
import './Donate.css';


function Donate() {
    
 return (

        <div className="Donate" id="donate">
            <div className="donation">
                 <h1>Donate for a better cause</h1>
                
            </div>
            <form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_GZUjG1BIbwYK9M" async=""> </script><span class="razorpay-payment-button svelte-ohbfj8"><a href="https://razorpay.com/payment-button/pl_GZUjG1BIbwYK9M/view/?utm_source=payment_button&amp;utm_medium=button&amp;utm_campaign=payment_button" type="submit" class="PaymentButton PaymentButton--dark PaymentButton--rzpTheme PaymentButton--rzp-dark-standard svelte-ekc7fv"><svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-ekc7fv"><path d="M7.077 6.476l-.988 3.569 5.65-3.589-3.695 13.54 3.752.004 5.457-20L7.077 6.476z" fill="#fff" class="svelte-ekc7fv"></path><path d="M1.455 14.308L0 20h7.202L10.149 8.42l-8.694 5.887z" fill="#fff" class="svelte-ekc7fv"></path></svg> <div class="PaymentButton-contents svelte-ekc7fv"><span class="PaymentButton-text svelte-ekc7fv">Donate Now</span> <div class="PaymentButton-securedBy svelte-ekc7fv">Secured by Razorpay</div></div></a></span></form>
            {/* <form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_GZUjG1BIbwYK9M"> </script><span class="razorpay-payment-button svelte-ohbfj8"><a href="https://razorpay.com/payment-button/pl_GZUjG1BIbwYK9M/view/?utm_source=payment_button&amp;utm_medium=button&amp;utm_campaign=payment_button" type="submit" class="PaymentButton PaymentButton--light PaymentButton--rzpTheme PaymentButton--rzp-light-standard svelte-ekc7fv"><svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-ekc7fv"><path d="M7.077 6.476l-.988 3.569 5.65-3.589-3.695 13.54 3.752.004 5.457-20L7.077 6.476z" fill="#fff" class="svelte-ekc7fv"></path><path d="M1.455 14.308L0 20h7.202L10.149 8.42l-8.694 5.887z" fill="#fff" class="svelte-ekc7fv"></path></svg> <div class="PaymentButton-contents svelte-ekc7fv"><span class="PaymentButton-text svelte-ekc7fv">Donate </span> <div class="PaymentButton-securedBy svelte-ekc7fv">Secured by Razorpay</div></div></a></span> </form> */}
        </div>
    )
}

export default Donate