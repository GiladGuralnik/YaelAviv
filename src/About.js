import React from 'react'    
import frameImage from './images/frame.png'  

// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey('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');
// const msg = {
//  to: 'giladguralnik1994@gmail.com',
//  from: 'gladgu@audiocodes.com',
//  subject: 'This is a test mail',
//  text: 'and easy to do anywhere, even with Node.js',
//  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };

//  sgMail.send(msg).catch(error => {alert(error.toString()); });

export const About = () => (
        <div>
            <div style={{textAlign: "center",paddingTop:"20px"}}>
            <img className="frame"
                
                    src={frameImage}
                    alt={"Image"}

                    style={{width:"320px"}}
                
                />
            </div>
            <h2 style={{textAlign: "center", paddingTop:"20px"}} >About Me</h2>
            <h6 
            class="font-weight-normal" 
            style={{margin:"0 auto",textAlign: "center",maxWidth:"500px",paddingTop:"10px",paddingBottom:"100px"}}>
            I'm a Designer.blah blah blah blah blah blah . blah blah blah blah, blah blah blah blah, blah. blah blah blah blah blah.blah blah blah blah blah blah . blah blah blah blah, blah blah blah blah, blah. blah blah blah blah blah. blah blah blah blah blah blah . blah blah blah blah, blah blah blah blah, blah. blah blah blah blah blah.
            </h6>
        </div>
)