import React, {Component} from 'react'    
import img1 from '../images/1.JPG'
import { Lightbox } from "react-modal-image";


const initialState = {
    openBox : false
};

export default class Mixed extends Component{
    state = initialState;
    
    closeLightbox = () => {
        this.setState({ openBox: false })
      };

    openLightbox = () => {
        this.setState({ openBox: true })
    }
    
    render(){
        return(
            <div class="responsive">
               
                {
                    this.state.openBox && (
                        <Lightbox
                        medium={img1}
                        large={img1}
                        alt="Hello World!"
                        onClose={this.closeLightbox}
                        />
                    )
                }
                <div class="gallery">
                        <img 
                        
                            src={img1}
                            alt={"img1"}

                            style={{height:"32%",width:"32%"}}
                            onClick={() => this.openLightbox("img1")}
                        />

                    <a href="images/2.jpg">                
                        <img 
                        
                            src={require("../images/2.JPG")}

                            style={{height:"32%",width:"32%"}}
                        
                        />
                    </a>
                    
                
                    <a href="/images/3.jpg">                
                        <img 
                        
                            src={require("../images/3.JPG")}

                            style={{height:"32%",width:"32%"}}
                        
                        />
                    </a>


                    <a href="/images/2.jpg">                
                        <img 
                        
                            src={require("../images/2.JPG")}

                            style={{height:"32%",width:"32%"}}
                        
                        />
                    </a>

                    <a href="/images/3.jpg">                
                        <img 
                        
                            src={require("../images/3.JPG")}

                            style={{height:"32%",width:"32%"}}
                        
                        />
                    </a>
                    
                
                    <a href="/images/1.jpg">                
                        <img 
                        
                            src={require("../images/1.JPG")}

                            style={{height:"32%",width:"32%"}}
                        
                        />
                    </a>


                </div>

            </div>

        )
    }
}