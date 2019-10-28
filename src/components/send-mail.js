 const sgMail = require('@sendgrid/mail');
 sgMail.setApiKey(process.env.SENDGRID_API_KEY);
 const msg = {
  to: 'giladguralnik1994@gmail.com',
  from: 'gladgu@audiocodes.com',
  subject: 'This is a test mail',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};


export const SendMail = ()=>{
  sgMail.send(msg)
.then(() => {
    /* assume success */
    })
    .catch(error => {

        /* log friendly error */
        alert(error.toString());

    });
  alert("555")
}

// export const SendMail=()=>{
 //sgMail.send(msg)
// }


// function SendMail(email, name){
//   const message = { 
//   to : email, //email variable
//   from : { email : 'your email' , name: 'Name of user you want to  send email as'},
//   message : `Hi there, ${name}`,
//   subject : "This is a test Email"
//   }
//   sgMail
//         .send(message)
//         .then((sent) => {
//     // Awesome Logic to check if mail was sent
//   })
//   .catch(error => {

//             /* log friendly error */
//             alert(error.toString());
    
//         });
//  }
//  module.exports = {
//   SendMail
//  }