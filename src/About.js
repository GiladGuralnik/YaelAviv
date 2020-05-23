import React from 'react'    
import frameImage from './images/frame.png'  

export const About = () => (
        <div>
            <div style={{textAlign: "center",paddingTop:"20px"}}>
            <img className="frame"       
                    src={frameImage}
                    alt={"Image1"}
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