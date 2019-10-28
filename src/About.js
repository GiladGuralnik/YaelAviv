import React from 'react'      


const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');
const msg = {
 to: 'giladguralnik1994@gmail.com',
 from: 'gladgu@audiocodes.com',
 subject: 'This is a test mail',
 text: 'and easy to do anywhere, even with Node.js',
 html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

 sgMail.send(msg).catch(error => {alert(error.toString()); });

export const About = () => (
        <div style={{position: 'absolute', left: '50%', top: '30%',
        transform: 'translate(-50%, -50%)'}}>
            <h2>About</h2>
        </div>
)