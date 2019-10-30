import React from 'react'    
import {EmailShareButton,EmailIcon,WhatsappShareButton,FacebookIcon,FacebookShareButton,WhatsappIcon} from 'react-share'


export const Contact = () => (
        <div>
            
            <h5 align="center" style={{paddingTop:"70px"}}>
                Contact Me 
            </h5>

            <div style={{paddingTop:"10px",paddingBottom:"80px"}}>
                <h6 align="center" class="font-weight-normal" >yaelaviv@gmail.com</h6>
                <h6 align="center" class="font-weight-normal" >+972508760921</h6>
                <h6 align="center" class="font-weight-normal" >Yael Aviv Lasry</h6>
            </div>

            <h5 align="center" style={{paddingBottom:"20px"}}>
                Share
            </h5>

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