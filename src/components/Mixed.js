import React, {Component} from 'react'    
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'
import img4 from '../images/9.jpg'
import img5 from '../images/5.jpg'
import img6 from '../images/6.jpg'
import { Lightbox } from "react-modal-image";


const initialState = {
    openBox : false,
    img : "",
    description : ""
};

export default class Mixed extends Component{
    state = initialState;
    
    closeLightbox = () => {
        this.setState({ openBox: false })
      };

    openLightbox = (img, description) => {
        this.setState({img: img, description: description, openBox: true,})
    }
    
    render(){
        return(
            <div class="responsive" onContextMenu={(e)=> e.preventDefault()}>
                {
                    this.state.openBox && (
                        <Lightbox
                        medium={this.state.img}
                        large={this.state.img}
                        alt = {this.state.description}
                        onClose={this.closeLightbox}
                        hideDownload="true"
                        />
                    )
                }
                <div class="gallery">
                        <img  
                            src={img1}
                            alt={"img1"}
                            style={{height:"32%",width:"32%"}}
                            onClick={() => this.openLightbox(img1,"Image 1")}
                        />
                        <img 
                            src={img2}
                            alt={"img2"}
                            style={{height:"32%",width:"32%"}}
                            onClick={() => this.openLightbox(img2,"Image 2")}
                        />           
                        <img 
                            src={img3}
                            alt={"img3"}
                            style={{height:"32%",width:"32%"}}
                            onClick={() => this.openLightbox(img3,"Image 3")}
                        />            
                        <img 
                            src={img4}
                            alt={"img4"}
                            style={{height:"32%",width:"32%"}}
                            onClick={() => this.openLightbox(img4,"Image 4")}
                        />             
                        <img 
                            src={img5}
                            alt={"img5"}
                            style={{height:"32%",width:"32%"}}
                            onClick={() => this.openLightbox(img5,"Image 5")}
                        />
                        <img 
                            src={img6}
                            alt={"img6"}
                            style={{height:"32%",width:"32%"}}
                            onClick={() => this.openLightbox(img6,"Image 6")}
                        />
                </div>
            </div>

        )
    }
}