import React from 'react'    
import {FacebookShareCount,WhatsappShareButton,FacebookIcon,FacebookShareButton,WhatsappIcon} from 'react-share'


export const Contact = () => (
        <div>
            
            <h5 align="center" style={{paddingTop:"50px"}}>
                
                
                Contact Me 

                
                
            </h5>

            {/* https://github.com/caspg/react-sharingbuttons */}

            <div align="center">
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

            </div>


        </div>
)