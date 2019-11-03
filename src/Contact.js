import React from 'react'    
import {EmailShareButton,EmailIcon,WhatsappShareButton,FacebookIcon,FacebookShareButton,WhatsappIcon} from 'react-share'
import { Form,Button } from 'react-bootstrap';

var data_js = {
    "access_token": process.env.REACT_APP_EMAIL_TOKEN
};

function js_onSuccess() {
    // remove this to avoid redirect
    // window.location = window.location.pathname + "?message=Email+Successfully+Sent%21&isError=0";
}

function js_onError(error) {
    // remove this to avoid redirect
    // window.location = window.location.pathname + "?message=Email+could+not+be+sent.&isError=1";
}


function js_send() {
    // alert("mail")
    // sendButton.value='Sending…';
    // sendButton.disabled=true;
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            js_onSuccess();
        } else
        if(request.readyState == 4) {
            js_onError(request.response);
        }
    };

    // var subject = document.querySelector("#" + form_id_js + " [name='subject']").value;
    // var message = document.querySelector("#" + form_id_js + " [name='text']").value;
    data_js['subject'] = "asd";
    data_js['text'] = "ee";
    var params = toParams(data_js);

    request.open("POST", "https://postmail.invotes.com/send", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    request.send(params);

    return false;
}


function toParams(data_js) {
    var form_data = [];
    for ( var key in data_js ) {
        form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
    }

    return form_data.join("&");
}

// var js_form = document.getElementById(form_id_js);
// js_form.addEventListener("submit", function (e) {
//     e.preventDefault();
// });

//js_send();

export const Contact = () => (
        <div>
            
        <h5 align="center" style={{paddingTop:"30px"}}>
            Contact Me 
        </h5>

        
        <Form align="center" style={{maxWidth:"450px",margin:"0 auto"}}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label></Form.Label>
                <Form.Control autocomplete="off" className="shadow_form" placeholder="Subject" style={{textAlign:"center"}}/>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control autocomplete="off" as="textarea" placeholder="Message" rows="5" className="textarea shadow_form" style={{textAlign:"center"}}/>
            </Form.Group>
            <Button variant="info" type="submit" onClick={js_send()}>
                Send
            </Button>
        </Form>

            <div style={{paddingTop:"50px",paddingBottom:"30px"}}>
                <h6 align="center" class="font-weight-normal" >yaelaviv@gmail.com</h6>
                <h6 align="center" class="font-weight-normal" >+972508760921</h6>
                <h6 align="center" class="font-weight-normal" >Yael Aviv Lasry</h6>
            </div>

            {/* <h5 align="center" style={{paddingBottom:"20px"}}>
                Share
            </h5> */}

            {/* https://github.com/caspg/react-sharingbuttons */}

            <div align="center" style={{margin:"0 auto"}}>
                <div className="Share_button_box">
                    <FacebookShareButton 
                        url={"https://yaelaviv.herokuapp.com"}
                        quote={"Yael Aviv Lasry"}
                        className="Share-button">
                        <FacebookIcon
                        size={32}
                        round />
                    </FacebookShareButton>
                </div>

                <div className="Share_button_box">
                    <WhatsappShareButton
                        url={"https://yaelaviv.herokuapp.com"}
                        quote={"Yael Aviv Lasry"}
                        className="Share-button">
                        <WhatsappIcon
                        size={32}
                        round />
                    </WhatsappShareButton>
                </div>
                <div className="Share_button_box">
                    <EmailShareButton
                        url={"https://yaelaviv.herokuapp.com"}
                        subject={"YaelAviv"}
                        body="body"
                        className="Share-button">
                        <EmailIcon
                        size={32}
                        round />
                    </EmailShareButton>
                </div>
                

            </div>


        </div>
)