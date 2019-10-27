import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import img1 from '../images/1.JPG'



function App() {
// if toggler is updated when lightbox is closed it will open it
// if toggler is updated when lightbox is opened it will close it
const [toggler, setToggler] = useState(false);


  
return (
    

    

    <>

    <a 
            
            href="#"
            onClick={()=>setToggler(!toggler)}
        
        
        >                
            <img 
            
                src={img1}
                alt={"img1"}

                style={{height:"32%",width:"32%"}}
            
            />
        </a>

    <button onClick={ () => setToggler(!toggler) }>
    Toggle Lightbox
    </button>
    <FsLightbox
        toggler={ toggler }
        sources={ [
            '../../images/3.JPG',
            '../images/2.JPG'
        ] }

        
    />
    </>
);
}

export default App;