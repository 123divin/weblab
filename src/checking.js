import {ListGroup, Col, Form} from 'react-bootstrap' ;
import {Pencil, Person,  Trash } from 'react-bootstrap-icons';
import './checking.css';
import { Menu} from './aside.js'





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


export {  ToDoMain } ;