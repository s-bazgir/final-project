import { Fragment } from "react";
import Layout from '../../Componenets/Layout';
import SellingCard from "../../Componenets/SellingCard";
import  "./style.css";


export default function Buy(){

    return (<Fragment>
             <Layout>
               <ul className="plans">
                <li className="plan">
                 <SellingCard plan_name="Special"
                              plan_price={"15$"}
                              plan_billing_cycle={"1 month" }
                              badge={"10% Off"}
                              plan_description={"best"} 
                              card_body={["item1","item2","item3","item4"]} 
                              />
                </li>
                <li className="plan">            
                 <SellingCard plan_name="Special"
                              plan_price={"15$"}
                              plan_billing_cycle={"1 month" }
                              badge={"10% Off"}
                              plan_description={"best"} 
                              card_body={["item1","item2","item3","item4"]}
                               />
                </li>
                <li className="plan">             
                 <SellingCard plan_name="Special"
                              plan_price={"15$"}
                              plan_billing_cycle={"1 month" }
                              badge={"10% Off"}
                              plan_description={"best"} 
                              card_body={["item1","item2","item3","item4"]}
                               />
                </li>             
               </ul>
             </Layout>
           </Fragment>)
}