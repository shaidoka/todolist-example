import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {Button,Modal} from 'react-bootstrap'
import Work from '../component/Work'
import axios from 'axios'

export class Project extends Component {
   
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
      this.UpdateList = this.UpdateList.bind(this);
      this.CheckWork = this.CheckWork.bind(this);
      this.EditWork = this.EditWork.bind(this);
  }
  
     
   
  componentDidMount(){
    axios.get(`http://todolist-demo-nuce.herokuapp.com/todolist/project/get`)
        .then(res => {
         console.log(res.data)
          this.setState({ ListData:res.data });
        })
        .catch(error => console.log(error));
    }
  
  
  
  
  
   
    
    Addwork() {
      if(this.state.action==1){
   
    axios.post(`http://todolist-demo-nuce.herokuapp.com/todolist/project/create`, { name:this.state.Inputusername,content:this.state.InputWork,status:0} )
    .then(res => {
      console.log(res);
      console.log(res.data);
      this.setState({ListData: [...this.state.ListData,res.data]})
    })
  }else{
    
    let Obj=this.state.ListData.filter(element=>{return element.id==this.state.IDitem})[0];
    Obj.user=this.state.Inputusername;
    Obj.task=this.state.InputWork;
    this.setState({
     
      ListData: [...this.state.ListData.filter(element=>{return element.id!=this.state.IDitem}), Obj],
      action:1,
      InputWork:'',
      Inputusername:''
    })

  }
    this.setState({show:false})
  }
  UpdateList(list){
      this.setState({ListData:list});
  }
  CheckWork(id){
    console.log(id)
    let Obj=this.state.ListData.filter(element=>{return element.id==id})[0];
    Obj.status=true;
    
    console.log(Obj)
    this.setState({
     ListData: [...this.state.ListData.filter(element=>{return element.id!=id}),Obj]
    })
    console.log(this.state.ListData)
    console.log(this.state.ListData.filter(element=>{return element.id!=id}))
    console.log(this.state.ListData.filter(element=>{return element.id==id}))
  
   
  
  }
  EditWork(id){
    this.setState({action:2})
    this.setState({show:true})
    let Obj=this.state.ListData.filter(element=>{return element.id==id})[0];
    this.setState({InputWork:Obj.task})
    this.setState({Inputusername:Obj.user,IDitem:id})
  
  }
  
  render(){
  
    return (
  
      <div  className="custom gradient-custom-2" style={{height:'1200px'}}>

      <section  className=" custom gradient-custom-2" style={{height:'auto',width:'100%'}} >
  
        <div className="container py-5 h-100" style={{width:"100%"}}>
  
          <div className="row  d-flex justify-content-center align-items-center h-100"  style={{width:"100%"}}>
          <Button className="col-4 col-xs-2 col-md-2 col-xl-2" style={{position:"relative",marginLeft:"80%",with:"100%"}} onClick={()=>{this.setState({show:true})}}>Thêm công việc</Button>
  
            <div className="col-12 col-xs-12 col-md-12 col-xl-12 "  style={{display:'inline-block'}}>
              <div className="card mask-custom">
                <div className="card-body p-4 text-white">
                  <div className="text-center pt-3 pb-2">
                    <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-todo-list/check1.png" alt="Check" width="60" />
                    <h2 className="my-4">Project List</h2>
                  </div>
                  <table className="table text-white mb-0 col-3" style={{width:"auto"}}>
                    <thead>
                      <tr>
                      <th scope="col">Tên Project</th>
                      <th scope="col">Ngày bắt đầu</th>
                      <th scope="col">Số tiến trình hiện tại</th>
                      <th scope="col">Thao tác</th>
                  
                     
                      </tr>
                    </thead>
                    
                    <tbody>
                   
                     <Work List={this.state.ListData} Idproject={this.props.match.params.id} Editchill={this.UpdateList} check={this.CheckWork} UpdateWork={this.EditWork}/>
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        <Modal show={this.state.show}>
          <Modal.Header style={{fontWeight:500}}>
            Thêm Project mới
          </Modal.Header>
          <Modal.Body>
          <form>
    <div className="form-row">
      <div className="form-group col-md-12">
        <label >Tên Project</label>
        <input type="email" className="form-control" value={this.state.Inputusername} id="username" onChange={(even)=>{this.setState({Inputusername:even.target.value})}} placeholder="Nhâp tên dự án..."></input>
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
export default Project