//import {Check2All} from './logo.svg';
import dayjs from 'dayjs';
import { Container, Form, FormControl, Navbar,Button, Row } from 'react-bootstrap';
import { Check2All, Person, PlusCircle} from 'react-bootstrap-icons';
//import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from "react";
import {ToDoMain,Fillform} from './checking.js' 
import { Modal } from 'react-bootstrap';

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

const mytasks=new tasklist();
mytasks.add(task1)
mytasks.add(task2)
mytasks.add(task3)
mytasks.add(task4) 
mytasks.add(task5)


const categories =['All','important','Today','Next 7 days','Tomorrow'];


function App() {

  const [open, setOpen] = useState(true);
  const [show,setShow] = useState(false);
  const [task,setTask]=useState([...mytasks.taskslist1])
      
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addTask = (newone) => {
    setTask(oldTask => [...oldTask, newone]);
  }

  return (
 
    <Container fluid> 

     <Navbar  className="testing d-flex justify-content-between " expand="lg">
              
       <Navbar.Toggle aria-controls="basic-navbar-nav"
       aria-expanded={open}
       onClick={() => setOpen(!open)}
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

      <Row className="height">
        <ToDoMain categories={categories} taskslist1={task} thisones={open} change={setOpen}/>
      </Row>
 
      <div className="fixed-bottom d-flex justify-content-end mr-3 mb-3">        
        <PlusCircle className="coloring" size="40" onClick={handleShow}/>
      </div>

      <Modal show={show} animation={false} onHide={handleClose}>
       
        <Modal.Header closeButton>
          <Modal.Title>Please complete this form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Fillform taskslist1={mytasks.taskslist1} task={task} addTask={addTask} onSub={handleClose} />
        </Modal.Body>


       

     </Modal>
  
     </Container>

     
  );
}

export default App;
