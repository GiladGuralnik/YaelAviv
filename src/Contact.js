import React, {Component} from 'react'    
import {EmailShareButton,EmailIcon,WhatsappShareButton,FacebookIcon,FacebookShareButton,WhatsappIcon} from 'react-share'
import { Form,Button } from 'react-bootstrap';


var data_js = {
    "access_token": process.env.REACT_APP_EMAIL_TOKEN
};





const initialState = {
    message: "",
    subject: "",
    buttonText: "Send",
    isButtonDisabled: false,
    btnType: "info"
};

function js_onSuccess (){
    // setTimeout(() => comp.setState({buttonText:"Successfully Sent" }), 4000);
}

function js_onError (error) {
    // setTimeout(() => this.setState({buttonText:"Error!" }), 4000);
}

export default class Contact extends Component {
    state = initialState; 
    
    

    js_onEmptyMsg = () => {
        this.setState({buttonText:"Please fill all the fields", isButtonDisabled:true, btnType:"danger" });
        setTimeout(() => this.setState({buttonText:"Send", isButtonDisabled:false, btnType:"info" }), 3000);
    }
    
    js_send = (subject, message) => {
        
        var request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (request.readyState === 4 && request.status === 200) {
                js_onSuccess();
            } else
            if(request.readyState === 4) {
                js_onError(request.response);
            }
        };
    
        data_js['subject'] = subject;
        data_js['text'] = message;
        var params = this.toParams(data_js);
    
        request.open("POST", "https://postmail.invotes.com/send", true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
        request.send(params);
    
        return false;
    }
    
    
    toParams = (data_js) => {
        var form_data = [];
        for ( var key in data_js ) {
            form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
        }
    
        return form_data.join("&");
    }

    handleChange = (event, fieldName) => {
        this.setState({ [fieldName]: event.target.value })
    }

    validate = () => {
        if(!this.state.message || !this.state.subject){
            return false;
        }
        return true;
    };

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if(isValid){
            this.setState({
                isButtonDisabled: true,
                buttonText:"Sending.."
            });
            setTimeout(() => this.setState({ isButtonDisabled: false }), 6000);
            setTimeout(() => this.setState({buttonText:"Successfully Sent", btnType:"success"}), 4000);
            setTimeout(() => this.setState({buttonText:"Send",btnType:"info" }), 6000);
            // setTimeout(() => this.setState(initialState), 5000);
            this.js_send(this.state.subject, this.state.message)
        }
        else{
            this.js_onEmptyMsg();
        }
        
    };
    
    
    render() {
      
  
      return (
        <div>
            
        <h5 align="center" style={{paddingTop:"30px"}}>
            Contact Me 
        </h5>

        
        <Form align="center" style={{maxWidth:"450px",margin:"0 auto"}}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label></Form.Label>
                <Form.Control value={this.state.subject} onChange={event => this.handleChange(event,"subject")} autoComplete="off" className="shadow_form" placeholder="Subject" style={{textAlign:"center"}} required="true"/>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control value={this.state.message} onChange={event => this.handleChange(event,"message")} autoComplete="off" as="textarea" placeholder="Message" rows="5" className="textarea shadow_form" style={{textAlign:"center"}} required/>
            </Form.Group>
            <Button variant={this.state.btnType} type="submit" onClick={this.handleSubmit} disabled={this.state.isButtonDisabled}>
                {this.state.buttonText}
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
      
      
      );
    }
  }
