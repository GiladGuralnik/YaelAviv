import React from 'react'
import img1 from '../images/1.JPG'


export const Test3 = () => (
        <div class="gallery">
            
            <a href="images/1.jpg">                
                <img 
                
                    src={img1}
                    alt={"img1"}

                    style={{height:"32%",width:"32%"}}
                
                />
            </a>

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

)