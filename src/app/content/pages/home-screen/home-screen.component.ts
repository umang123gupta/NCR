import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/services/payment/payment.service';
declare var Razorpay: any;

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {

  constructor(private paymentService: PaymentService) { }

  ngOnInit(): void {
  }

  payWithRazorpay() {

    const options:any = {
      key: "rzp_test_Zq8gLsP19okE3R", // Enter the Key ID generated from the Dashboard
      amount: "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "NCR Logistics", //your business name
      description: '',
      image: '',
      order_id: '', //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      // "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
      prefill: {
        "name": "umang Gupta", //your customer's name
        "email": "umang8864gupta@gmail.com",
        "contact": "8864959880"
      },
      modal:{
        escape:false
      },
      // "notes": {
      //   "address": "Razorpay Corporate Office"
      // },
      "theme": {
        "color": "#3399cc"
      }
    };
    options.handler = (() => {
      const body = {
        user_id : '',
        razorpay_order_id : '',
        razorpay_payment_id : '',
        razorpay_signature : ''
      }
      alert('payment Success')
    });
    options.modal.ondismiss = (() => {
      alert('payment failed');
    })

    var rzp1 = new Razorpay(options);
    rzp1.open();
  }

}
