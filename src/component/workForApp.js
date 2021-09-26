import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";


class WorkForApp extends Component {
  constructor(props) {
    super(props);
    this.state={
 

    }
  }




  render() {

      
    return this.props.List.map((todo, index) => (
   
      <tr className="fw-normal">
       
        <th scope="row">
         
          <span className="ms-2">{todo.name}</span>
        </th >
        <td className="align-middle">
          <span >{todo.content}</span >
        </td>
        <td className="align-middle">
          <span >{todo.createdAt}</span >
        </td>
        <td className="align-middle col-1">
          <h6 className="mb-0"><span className={(todo.status==2) ? "badge bg-success" : ((todo.status==1)?"badge bg-warning ":"badge bg-danger ")}>{(todo.status==2) ? 'Đã Hoàn thành' : ((todo.status==1)?"Đang thực hiện":"chưa hoàn thành")}</span></h6>
        </td>
        <td scope="columns" className="align-middle">
          <a onClick={() => { this.props.Editchill(todo._id) }}
            href="#!" data-mdb-toggle="tooltip" title="Remove"><i className="fas fa-trash-alt fa-lg me-3"></i></a>
          <a onClick={() => this.props.UpdateWork(todo._id)} href="#!" data-mdb-toggle="tooltip" title="Edit"><i className="fas fa-edit fa-lg"></i></a>
          <a onClick={() => this.props.check(todo._id)} style={{ marginLeft: 10 }} href="#!" data-mdb-toggle="tooltip" title="Done"><i className="fas fa-check fa-lg me-3"></i></a>
        </td>
      </tr>
     
    ));
  }
}
export default WorkForApp;