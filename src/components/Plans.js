import React, { useState } from "react";
import classes from "./Plans.module.css";
import Subscription from "./Subscription";
import Button from "./Button";
const plansData = [
  {
    id: 1,
    validity: 12,
    price: 99,
    perMonth: 8,
    isRec: false,
    isExpired: true,
  },
  {
    id: 2,
    validity: 12,
    price: 179,
    perMonth: 15,
    isRec: true,
    isExpired: false,
  },
  {
    id: 3,
    validity: 6,
    price: 149,
    perMonth: 25,
    isRec: false,
    isExpired: false,
  },
  {
    id: 4,
    validity: 3,
    price: 99,
    perMonth: 33,
    isRec: false,
    isExpired: false,
  },
];
const buttonData=[
    {
        id:1,
        title:'cancel',
        isSuccess:false
    },
    {
        id:2,
        title:'proceed to pay',
        isSuccess:true
    }
]

export const Plans = ({ style }) => {
  const [plans] = useState(plansData);
  const[cost,setCost]= useState();
  const [discountedPrice,setDiscountedPrice]=useState(null)
  console.log(discountedPrice);
  const handlePrices=(price)=>{
    setCost(price)
    
  }
  const handleDiscount=(price)=>{
    let disc = 18500-price;
    disc = disc.toLocaleString()
    setDiscountedPrice(disc)
  }
  return (
    <div className={classes.plans}>
      <div className={classes.login}>
        <p>
          <span className={classes.numbers}>1</span>
          <br />
          Sign Up
        </p>
        <p>
          <span className={classes.numbers}>2</span>
          <br />
          Subscribe
        </p>
      </div>
      <div className={classes.subscriptions}>
        <h3>Select your subscription</h3>
        <ul>
          {plans.map((plan) => {
            return (
              <li key={plan.id}>
                <Subscription  costHandler={handlePrices} discHandler={handleDiscount} plan={plan} />
              </li>
            );
          })}
        </ul>
        <hr></hr>
        <div className={classes.fee}>
          <p>Subscription fee</p>
          <p>&#8377;18,500</p>
        </div>
        <div className={classes.discount}>
          <p>
            Limited time offer <br />
            Offer valid 25th March 2023
          </p>
          <p>-&#8377;{discountedPrice ? discountedPrice : '18,401' }</p>
        </div>
        <div className={classes.total}>
          {cost && <p>Total (Incl. of 18% GST)</p>}
          {cost && <p>&#8377;{cost}</p>}
        </div>
      </div>
      <div className={classes.actions}>
      {buttonData.map(button=><Button key={button.id} button={button}/>)}
      </div>
      <div>
        
      </div>
    </div>
  );
};
