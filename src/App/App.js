import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {Button,Modal} from 'react-bootstrap'
import WorkForApp from '../component/workForApp'
import axios from 'axios'
import { height } from 'dom-helpers';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";


class App extends Component {
  
constructor(props){

  super(props)
  
  this.state={
    IDitem:0,
    action:1,     //1 là add 2 là edit
    Inputusername:'',
    InputWork:'',
    show:false,
    ListData:[]
  }
    this.Addwork = this.Addwork.bind(this);
    this.Deletework = this.Deletework.bind(this);
    this.CheckWork = this.CheckWork.bind(this);
    this.EditWork = this.EditWork.bind(this);
}

   
 
componentDidMount(){
   console.log(this.props.match.params.id);
   var link=`http://todolist-demo-nuce.herokuapp.com/todolist/project/get/`+this.props.match.params.id;
  axios.get(link)
      .then(res => {
       console.log(res.data)
        this.setState({ ListData:res.data.todolist });
      })
      .catch(error => console.log(error));
  }





 
  
  Addwork(id) {
    if(this.state.action==1){
 
  axios.post(`http://todolist-demo-nuce.herokuapp.com/todolist/task/create`, {projectId:this.props.match.params.id, name:this.state.Inputusername,content:this.state.InputWork,status:0} )
  .then(res => {
    console.log(res);
    console.log(res.data);
    this.setState({ListData: [...this.state.ListData,res.data]})
   
  })
}else{
  console.log("id"+this.state.IDitem)
  let Obj=this.state.ListData.filter(element=>{return element._id==this.state.IDitem})[0];

  var obj=this.state.ListData.filter(element=>{return element._id==this.state.IDitem})[0];
  var newobj={ id:this.state.IDitem,name:this.state.Inputusername,content:this.state.InputWork,status:obj.status}
  console.log("new ob" + newobj)
  axios.put(`http://todolist-demo-nuce.herokuapp.com/todolist/task/edit`, { id:this.state.IDitem,name:this.state.Inputusername,content:this.state.InputWork,status:obj.status} )
  .then(res => {
    console.log(res);
    console.log(res.data);
    var newArray=this.state.ListData;
 for(var i=0;i<newArray.length;i++){
   if(newArray[i]._id==this.state.IDitem){
     newArray[i]=res.data;
   }
console.log(newArray[i].name)
 } 

     this.setState({
      ListData:newArray
     })
  })
}
  this.setState({show:false})
}
Deletework(id){
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'accept':'application/json'
    },
  };
  console.log("delete"+id+" "+this.props.match.params.id)
  console.log({projectId:this.props.match.params.id,taskId:id})
  axios.delete(`http://todolist-demo-nuce.herokuapp.com/todolist/task/delete`, {projectId:this.props.match.params.id,taskId:id} )
  .then(res => {
    console.log(res);
    console.log(res.data);
  })
  this.setState({
    ListData:this.state.ListData.filter(element=>{return element._id!=id})
   })
}
CheckWork(id){
  console.log(id)
  let Obj=this.state.ListData.filter(element=>{return element._id==id})[0];
 if(Obj.status<2){
   Obj.status++;
 }else{
   Obj.status=0;
 }
  console.log(Obj)
 axios.put(`http://todolist-demo-nuce.herokuapp.com/todolist/task/edit`, { id:Obj._id,name:Obj.name,content:Obj.content,status:Obj.status} )
  .then(res => {
    console.log(res);
    console.log(res.data);
    var newArray=this.state.ListData;
 for(var i=0;i<newArray.length;i++){
   if(newArray[i]._id==this.state.IDitem){
     newArray[i]=res.data;
   }
console.log(newArray[i].name)
 } 

     this.setState({
      ListData:newArray
     })
  })


}
EditWork(id){
  this.setState({action:2})
  this.setState({show:true})
  let Obj=this.state.ListData.filter(element=>{return element._id==id})[0];
  this.setState({InputWork:Obj.content})
  this.setState({Inputusername:Obj.name,IDitem:id})

}

render(){

  return (

   
  <div  className="custom gradient-custom-2" style={{height:'1200px'}}>
    <section  className="custom gradient-custom-2"  >      <div className="container py-5 h-100" style={{width:"100%"}}>

        <div className="row  d-flex justify-content-center align-items-center h-100"  >
        <Button className="col-4 col-xs-2 col-md-2 col-xl-2 btn btn-warning" style={{position:"relative",marginLeft:"80%",with:"100%",backgroundColor:'yelow'}} onClick={()=>{this.setState({show:true})}}>Thêm công việc</Button>
       <Link to={"/"}> <Button className="col-4 col-xs-2 col-md-2 col-xl-2 btn btn btn-dark" style={{position:"relative",marginLeft:"82%",marginTop:'50px',with:"100%",backgroundColor:'yelow'}}>Quay về trang trước</Button></Link>

          <div className="col-12 col-xs-12 col-md-12 col-xl-12 "  style={{display:'inline-block'}}>
            <div className="card mask-custom">
              <div className="card-body p-4 text-white">
                <div className="text-center pt-3 pb-2">
                  <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-todo-list/check1.png" alt="Check" width="60" />
                  <h2 className="my-4">Task List</h2>
                </div>
                <table className="table text-white mb-0 col-3" style={{width:"auto"}}>
                  <thead>
                    <tr>
                      <th scope="col">Tên công việc</th>
                      <th scope="col">Mô tả</th>
                      <th scope="col">Ngày tạo</th>
                      <th scope="col">Trạng thái</th>
                      <th scope="col">Hành động</th>
                    </tr>
                  </thead>
                  
                  <tbody>
                 
                   <WorkForApp List={this.state.ListData} Editchill={this.Deletework} Idproject={this.props.match.params.id} check={this.CheckWork} UpdateWork={this.EditWork}/>
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      <Modal show={this.state.show}>
        <Modal.Header style={{fontWeight:500}}>
          Thêm Công Việc Mới
        </Modal.Header>
        <Modal.Body>
        <form>
  <div className="form-row">
    <div className="form-group col-md-12">
      <label >Tên công việc</label>
      <input type="email" className="form-control" value={this.state.Inputusername} id="username" onChange={(even)=>{this.setState({Inputusername:even.target.value})}} placeholder="Nhâp tên công việc..."></input>
    </div>
   
 
    <div className="form-group col-md-12">
      <label>Mô tả Công Việc</label>
      <input type="text" className="form-control" id="work" value={this.state.InputWork}  onChange={(even)=>{this.setState({InputWork:even.target.value})}} placeholder="Nhâp mô tả công việc..."></input>
    </div>
  </div>
 
</form>

        </Modal.Body>
        <Modal.Footer>
        <Button onClick={this.Addwork}>
         {this.state.action==1?'Thêm':'Chỉnh Sửa'}
         </Button>
         <Button onClick={()=>{this.setState({show:false,action:1,Inputusername:'',InputWork:''})}} className="btn btn-secondary">
          Đóng
         </Button>
        </Modal.Footer>
      </Modal>
    


        
      </div>
      
    </section>
    </div>
  )
}
}
export default App;
