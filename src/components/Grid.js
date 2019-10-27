import React,{ useState }from 'react'    
import { Row,Col,Container,Image} from 'react-bootstrap';



export const Grid = () => (
        <div>
            

        
            
            <Container>
            <Row>
                <Col xs={6} md={4}>
                    <Image src="https://gamepedia.cursecdn.com/minecraft_gamepedia/6/63/Brown_Mushroom_Block_%28E%29.png" rounded />  
                </Col>
                <Col xs={6} md={4}>
                    <Image src="https://gamepedia.cursecdn.com/minecraft_gamepedia/6/63/Brown_Mushroom_Block_%28E%29.png" rounded />
                </Col>
                <Col xs={6} md={4}>
                    <Image src="https://gamepedia.cursecdn.com/minecraft_gamepedia/6/63/Brown_Mushroom_Block_%28E%29.png" rounded />
                </Col>
            </Row>
            </Container>



        </div>
)

