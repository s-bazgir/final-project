import { Fragment } from "react";
import  "./style.css";

export default function SellingCard(props){

  const {plan_name, plan_price, plan_billing_cycle, badge, plan_description, card_body} = props;
  
  return (    
    <Fragment>
         <div className="plan_popular">
          <div className="card card_primary">
            <header className="card_header">
              <h3 className="plan_name">{plan_name}</h3>
              <span className="plan_price">{plan_price}</span>
              <span className="plan_billing_cycle">/{plan_billing_cycle}</span>
              <span className="badge badge_secondary badge_small">{badge}</span>
              <span className="plan_description">{plan_description}</span>
            </header>
            <div className="card_body">
                <ul className="list list_tick">
                  {card_body.map(function(item,index){
                     <li id={index} className="list_item">{item}</li>
                  })}
                 </ul>
                <button className="btn btn_outline btn_block  btn_secondary">Buy Now</button>
            </div>
          </div>
         </div> 
    </Fragment>
  );
};


