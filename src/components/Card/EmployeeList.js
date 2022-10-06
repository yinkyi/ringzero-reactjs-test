import React from "react";
import {Container, Row, Col, Button} from 'react-bootstrap';
import EmployeeCard  from "./EmployeeCard";
import classes from './EmployeeList.module.css';

const items = [
  {
    id:1,
    img:"/employee.png",
    name:"Gadar Hovik",
    type:"Employee",
    des:"Winter hit like a welterweight that year, a jabbing cold you thought you could stand until the wind rose up and dropped you to the canvas"
  },
  {
    id:2,
    img:"/employee.png",
    name:"Aleks Lusineh",
    type:"Employee",
    des:"Winter hit like a welterweight that year, a jabbing cold you thought you could stand until the wind rose up and dropped you to the canvas"
  },
  {
    id:3,
    img:"/employee.png",
    name:"Anoush Bagrat",
    type:"Employee",
    des:"Winter hit like a welterweight that year, a jabbing cold you thought you could stand until the wind rose up and dropped you to the canvas"
  },
  {
    id:4,
    img:"/employee.png",
    name:"Vartouhi Sargis",
    type:"Employee",
    des:"Winter hit like a welterweight that year, a jabbing cold you thought you could stand until the wind rose up and dropped you to the canvas"
  },
  {
    id:5,
    img:"/employee.png",
    name:"Elen Manvel",
    type:"Employee",
    des:"Winter hit like a welterweight that year, a jabbing cold you thought you could stand until the wind rose up and dropped you to the canvas"
  },
  {
    id:6,
    img:"/worker.png",
    name:"Monte Sergo",
    type:"New Intern",
    des:"Winter hit like a welterweight that year, a jabbing cold you thought you could stand until the wind rose up and dropped you to the canvas"
  },
  {
    id:7,
    img:"/worker.png",
    name:"Adithep Sucharee",
    type:"New Intern",
    des:"Winter hit like a welterweight that year, a jabbing cold you thought you could stand until the wind rose up and dropped you to the canvas"
  },
  {
    id:8,
    img:"/worker.png",
    name:"Lewis lewy",
    type:"New Intern",
    des:"Winter hit like a welterweight that year, a jabbing cold you thought you could stand until the wind rose up and dropped you to the canvas"
  }
  
]

const EmployeeList = () =>{
    

    return(
        <Container>
            <Row className="text-center">
                <Col><span className={classes["first-title"]}>ringzero test</span></Col>
            </Row>
            <Row className="text-center">
                <Col><span className={classes["second-title"]}>let's do this</span></Col>
            </Row>
            <Row>
              {
                      items.map((p)=>(
                        <EmployeeCard employee={p} key={p.id}/>
                    ))
              }
            </Row> 
            <Row className="text-center pt-2">
                <Col> <Button className={classes["btn-load-more"]}>Load more</Button></Col>
            </Row> 
        </Container>
        
    )
}

export default EmployeeList;