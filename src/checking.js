import {ListGroup, Col, Form,Button} from 'react-bootstrap' ;
import {Pencil, Person,  Trash } from 'react-bootstrap-icons';
import './checking.css';
import { Menu} from './aside.js'
import { useState } from "react";
import dayjs from 'dayjs'


const TaskInfo = (props) => {
    return (
            <>
                   <div className="d-flex w-50 justify-content-first pt-1">
                        <Form.Label>
                            <Form.Check.Input type="checkbox" value=""/>
                            {props.task.description}
                        </Form.Label>
                    </div>

                   <div className="d-flex w-50">

                            <div className="d-flex w-25">
                                    {
                                    props.task.privating&&(<Person size="30"/> )
                                    }  
                            </div>

                            <div className="d-flex w-75">
                                    {props.task.deadline }</div>
                                                        <>
                                                         <Pencil/> <Trash/>
                                                        </>                                    
                    </div>    
            
            </>
            ) ;
} ;

const TaskRow = (props) => {
    return (<ListGroup.Item className="tasklist-elem" key={props.task.id}>
                <div className="d-flex w-100 justify-content-between pt-1">
                    <TaskInfo {...props}/>
                    {console.log(props.task)}
                </div>
            </ListGroup.Item>) ;
} ;




const ToDoTaskList = (props) => {
    return (
            <ListGroup as="ul" variant="flush" className="test tasklist">
                { props.elements.map( (e) => <TaskRow task={e} key={e.id}/>)}
             
               
            </ListGroup>
            ) ;
} ;



const ToDoMain = (props) => {



    return (
        <>

            <Col as='aside' sm={4} className="tochangedisp">
            <div id="tasklist-container">
                < Menu menulist={props.categories} thisones={props.thisones}></Menu>
            </div>
            </Col>

            <Col as='main' xs={12} sm={8}>
                <div id="tasklist-container">
                <h3 style={{  display: "inline"}}>
                Filter:
                </h3>
                    <div style={{ display: "inline"}}> All</div>
                        <ToDoTaskList elements={props.taskslist1}></ToDoTaskList>
                     </div>
            </Col>
            

        </>
            ) ;
} ;




  



function Fillform(props) {

    const [id,setId]=useState(Math.ceil(Math.random() + 100));
    const [description,setDescription]=useState('');
    const [urgent,setUrgent]=useState(true)
    const [privacy,setPrivacy]=useState(true);
    const [date,setDate]=useState(undefined);

    
    

    const handleSubmit=(event) =>{
        event.preventDefault();
        setId(id+100)
        const task1={id:id , description: description , urgent:urgent, privating:privacy,deadline: dayjs(date).format('ddd, MMM D, YYYY h:mm A')}
        props.addTask(task1)
        props.onSub()
       
    }
    return(<Form>

<Form.Group >
    <Form.Label>Description</Form.Label>
    <Form.Control type="text" placeholder="Enter description" onChange={ev=>setDescription(ev.target.value)}/>
  </Form.Group>

  <Form.Group >

    <Form.Label>Urgent</Form.Label>
    <Form.Control as="select"  onChange={ev=>setUrgent(!ev.target.value)}>
        <option>True</option>
        <option>False</option>
      </Form.Control>

  </Form.Group>

  <Form.Group >
    <Form.Label>Privacy</Form.Label>
    <Form.Control as="select"  onChange={ev=>setPrivacy(!ev.target.value)}>
        <option>True</option>
        <option>False</option>
      </Form.Control>
  </Form.Group>

  <Form.Group >
  <Form.Label>Deadline</Form.Label>
  <Form.Control type="date" placeholder="deadline" onChange={ev=>setDate(ev.target.value) && date}/>
  </Form.Group>
  <Button variant="primary" type="submit" onClick={handleSubmit} >
    Submit
  </Button>
        </Form>
    );
}


export {  ToDoMain,Fillform } ;