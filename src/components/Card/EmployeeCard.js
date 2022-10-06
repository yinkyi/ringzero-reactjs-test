import React from "react";
import Card from 'react-bootstrap/Card';
import classes from './EmployeeCard.module.css';
import { Col, Button, Image } from 'react-bootstrap';
const EmployeeCard = (props) =>{  
    const { id,img,name,type, des } = props.employee;
    
    return(
        <Col sm={6} md={4} lg={3}>
            <Card className="mt-4" style={{'borderColor':"light" }}>
                <Card.Header className={`${classes["card-header"]} ${type === "Employee" ? classes['blue-header'] : classes['green-header']}`}>
                    <Image src={img} style={{"width":"30px","paddingRight":"5px"}}/>
                    <span>{type} {type === "Employee"?id:''}</span>
                </Card.Header>        
                <Card.Body className={classes.cardBody}> 
                <Card.Title className={`${classes["card-title"]} pt-2`}>
                    Name: {name}
                </Card.Title>
                <Card.Text className={`${classes["bodyText"]} pt-2`}>
                        {des}               
                </Card.Text>                
                </Card.Body>
                <Card.Footer className={`${classes["card-footer"]} mt-5 mb-2`}>
                    <Button variant="outline-dark" className={classes["card-button"]}>Details</Button>
                </Card.Footer>
            </Card>
        </Col>
        
    )
}

export default EmployeeCard;