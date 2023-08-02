import { Fragment } from "react";
import Layout from '../../Componenets/Layout';
import SellingCard from "../../Componenets/SellingCard";
import  "./style.css";

export default function Buy(){

    return (<Fragment>
             <Layout>
              <div className="sellCard">
                <div className="container"> 
                  <ul className="plans">
                    <li className="plan">
                      <SellingCard plan_name="Economic"
                                    plan_price={"15$"}
                                    plan_billing_cycle={"1 month" }
                                    badge={"10% Off"}
                                    plan_description={"2024"} 
                                    card_body={["item1","item2","item3","item4"]} 
                                    />
                    </li>
                    <li className="plan">            
                      <SellingCard plan_name="Special"
                                    plan_price={"20$"}
                                    plan_billing_cycle={"2 month" }
                                    badge={"20% Off"}
                                    plan_description={"special"} 
                                    card_body={["item1","item2","item3","item4"]}
                                    />
                    </li>
                    <li className="plan">             
                      <SellingCard plan_name="Regular"
                                    plan_price={"17$"}
                                    plan_billing_cycle={"1 month" }
                                    badge={"17% Off"}
                                    plan_description={"best"} 
                                    card_body={["item1","item2","item3","item4"]}
                                    />
                    </li>             
                  </ul>
                </div>
              </div> 
             </Layout>
           </Fragment>)
}