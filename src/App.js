//import {Check2All} from './logo.svg';
import dayjs from 'dayjs';
import { Container, Form, FormControl, Navbar,Button, Row } from 'react-bootstrap';
import { Check2All, Person, PlusCircle} from 'react-bootstrap-icons';
//import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from "react";
import {ToDoMain} from './checking.js' 



function Task(id,description,urgent,privating,deadline=undefined){

  this.id=id;
  this.description=description;
  this.urgent=urgent; 
  this.privating=privating;
  if(deadline!==undefined){
    this.deadline= dayjs(deadline).format('ddd, MMM D, YYYY h:mm A');

  }
};

function tasklist(){

  this.taskslist1=[];
 
  this.add=(Task)=>{
      this.taskslist1.push(Task)
  };
  
}
const task1=new Task(3,"cooking",true,true,'2012-10-20');
const task2=new Task(1,"cleaning",true,false,'2018-11-11');
const task3=new Task(2,"studying",false,true);
const task4=new Task(7,"sleeping",false,false);
const task5=new Task(9,"football",false,false,'2025-12-12')
const task6=new Task(8,"basketball",false,false)
const task7=new Task(11,"movie",true,true)
const task8=new Task(4,"drawing",true,true)

const mytasks=new tasklist();
mytasks.add(task1)
mytasks.add(task2)
mytasks.add(task3)
mytasks.add(task4) 
mytasks.add(task5)
mytasks.add(task6)
mytasks.add(task7)
mytasks.add(task8)

const categories =['All','important','Today','Next 7 days','Tomorrow'];


function App() {

  const [open, setOpen] = useState(true);
  
  

  return (

    
    
    <Container fluid>



     <Navbar  className="testing d-flex justify-content-between " expand="lg">
      
        
       <Navbar.Toggle aria-controls="basic-navbar-nav"
       aria-expanded={open}
       onClick={() => setOpen(!open)}
       //const thisone = {()=> {setOpen((e)=>!e)}}



       
       
       />
         
       <Navbar.Brand>
         <Check2All size="30"/>ToDo Manager

       </Navbar.Brand>

       <Form inline className="d-none d-sm-block">
          <FormControl type="text" placeholder="Search..." className="mr-sm-2 " />
          <Button type="submit"> Search </Button>
       </Form>

      <Navbar.Text className=" mr-sm-2">
        <Person size="30"/>   
      </Navbar.Text>
      </Navbar>

      

    <Row className="vheight-100">


      <ToDoMain categories={categories} taskslist1={mytasks.taskslist1} thisones={open} change={setOpen}/>

      {/*
      <Col sm={2} className={"aside_bg  "} id={"basic-navbar-nav"} >



        

      <Collapse in={!
        //open
      }>
            <ListGroup >
                              <ListGroup.Item className="hovering active">All</ListGroup.Item>
                              <ListGroup.Item className="hovering">Important</ListGroup.Item>
                              <ListGroup.Item className="hovering">Today</ListGroup.Item>
                              <ListGroup.Item className="hovering">Next 7 days</ListGroup.Item>
                              <ListGroup.Item className="hovering">Tomorrow</ListGroup.Item>
                  
            </ListGroup>

			</Collapse>
                    <ListGroup className="collapse d-none d-sm-block">
                        <ListGroup.Item className="hovering active">All</ListGroup.Item>
                        <ListGroup.Item className="hovering">Important</ListGroup.Item>
                        <ListGroup.Item className="hovering">Today</ListGroup.Item>
                        <ListGroup.Item className="hovering">Next 7 days</ListGroup.Item>
                        <ListGroup.Item className="hovering">Tomorrow</ListGroup.Item>
             
               </ListGroup>
          
              
       </Col>  

                <ToDoMain taskslist1={//mytasks.taskslist1}></ToDoMain>

                */}  
     </Row>

      <div className="fixed-bottom d-flex justify-content-end mr-3 mb-3">        
        <PlusCircle className="coloring" size="40"/>
      </div>
     </Container>
     
    
  );
}

export default App;
