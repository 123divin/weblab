
import {ListGroup, ListGroupItem} from "react-bootstrap"
import './aside.css'

function Menu(props){
    return(
        <Binder  {...props}/>
    )
}


function Onelement(props){
    return(
            <ListGroupItem className="tasklist-elem" key={props.first}>

                <div className="d-flex w-100 justify-content-between hovering">
                   { props.first}
                </div>

            </ListGroupItem>
    );
}

function Binder(props){
    return(
        <ListGroup as="ul" variant="flush" className={ props.thisones? "tasklist" : " tasklist collapse d-none d-sm-block"
           
             } id="basic-navbar-nav">
                { props.menulist.map( (e) => <Onelement first={e} key={e}/>)}
            </ListGroup>
    );
}




export { Menu }
