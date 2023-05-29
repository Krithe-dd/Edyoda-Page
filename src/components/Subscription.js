import React, { useEffect } from "react";
import classes from "./Subscription.module.css";

const Subscription = ({ plan, costHandler,discHandler }) => {
  useEffect(() => {
    costHandler()
  }, []);
  const { price } = plan;
  const customClass = `${classes.singleSub} ${
    plan.isExpired ? classes.expired : ""
  }
  ${plan.isRec ? classes.rec : ""}`;
  const handleCost = () => {
    costHandler(price);
    discHandler(price)
    console.log(price);
  };
  return (
    <div className={customClass}>
      <input
        name="option"
        id={`options ${plan.id}`}
        type="radio"
        disabled={plan.isExpired}
        onClick={handleCost}
      />
      <label htmlFor={`options ${plan.id}`}>
        <b>{plan.validity} Months Subscription</b>
        <div className={classes.priceMonthly}>
          <p>
            Total<b> &#8377;{price}</b>
          </p>
          <p>&#8377;{plan.perMonth}/mo</p>
        </div>
      </label>
    </div>
  );
};

export default Subscription;
