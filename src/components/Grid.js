import React from 'react'    
import { Row,Col,Container,Image} from 'react-bootstrap';


export const Grid = () => (
        <div>
            
            <Container>
            <Row>
                <Col xs={6} md={4}>
                    <h4>1</h4>
                </Col>
                <Col xs={6} md={4}>
                    <h4>2</h4>
                </Col>
                <Col xs={6} md={4}>
                    <h4>3</h4>
                </Col>
            </Row>
            </Container>



        </div>
)

