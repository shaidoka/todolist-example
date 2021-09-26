import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";


class Work extends Component {
  constructor(props) {
    super(props);
    this.state={
 

    }
  }




  render() {

      
    return this.props.List.map((todo, index) => (
    //  <Link to={"/project/"+todo._id}>
      <tr className="fw-normal">
       
       
      <th scope="row">
         
         <span className="ms-2">{todo.name}</span>
       </th >
       <td className="align-middle">
         <span >{todo.createdAt}</span >
       </td>
       <td className="align-middle">
         <span >{todo.todolist.length}</span >
       </td>
    
       <td className="align-middle col-1">
       <Link to={"/project/"+todo._id}>
         <h6 className="mb-0"><span style={{backgroundColor:"pink"}} className="badge ">Xem chi tiết</span></h6>
         </Link>
       </td>
       
    
      </tr>
    //  </Link>
    ));
  }
}
export default Work;