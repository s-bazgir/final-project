import { Fragment } from "react";
import Layout from '../../Componenets/Layout';
import  "./style.css";
import Question from '../../Componenets/Question';

export default function FAQ(){

    return (<Fragment>
             <Layout>
               <div className="faqPart"> 
                    <div className="halfContainer">
                        <Question question="Can I download films here"
                                answer="Sure, For getting more information you can watch the download tutorial videos in website" 
                        />
                        <Question question="Is this website availabe outside the country?"
                                answer="Unfortunately, According to the company policy its not availabe abroad." 
                        />
                        <Question question="For watching on screen movies having a membership is madatory?"
                                answer="Yes, and for watching such films you should buy the tickets and deadline for watching the movie is 24 hours" 
                        />
                        <Question question="Is the mobile application of this website available?"
                                answer="Yes, You can download the proper source of application (both andiod and ios) in the website" 
                        />
                    </div>
                </div>
             </Layout>
           </Fragment>)
}