import React, { Component } from 'react';

class Work extends Component {
    constructor(props) {
        super(props);
      
   } 

    render(){
  return this.props.List.map((todo,index)=>(
  
<tr key={todo.id} className="fw-normal">
  <th>
    <img src={'https://mdbootstrap.com/img/Photos/new-templates/bootstrap-chat/ava'+todo.image+'-bg.png'} alt="avatar 1"
      style={{ width: "45px", height: "auto" }} />
    <span className="ms-2">{todo.user}</span>
  </th>
  <td className="align-middle">
    <span >{todo.task}</span >
  </td>
  <td className="align-middle">
    <h6 className="mb-0"><span className={(todo.status)?"badge bg-success":"badge bg-danger"}>{(todo.status)?'Đã hoàn thành':'Chưa hoàn thành'}</span></h6>
  </td>
  <td className="align-middle">
    <a onClick={()=>{this.props.Editchill(this.props.List.filter(elment=>{return elment.id!=todo.id}))}}
     href="#!" data-mdb-toggle="tooltip" title="Remove"><i className="fas fa-trash-alt fa-lg me-3"></i></a>
    <a onClick={()=>this.props.UpdateWork(todo.id)}  href="#!" data-mdb-toggle="tooltip" title="Edit"><i className="fas fa-edit fa-lg"></i></a>
    <a onClick={()=>this.props.check(todo.id)} style={{marginLeft:10}} hidden={todo.status} href="#!" data-mdb-toggle="tooltip" title="Done"><i className="fas fa-check fa-lg me-3"></i></a>

  </td>
</tr>
  
  ));
  
}}

export default Work;