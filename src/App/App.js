import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'
import Work from '../component/Work'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      IDitem: 0,
      action: 1,     //1 là add 2 là edit
      Inputusername: '',
      InputWork: '',
      show: false,
      ListData: [{ id: 1, user: 'Nguyễn Quang Huy', task: 'Lập Trình Hê Thống', status: true, image: 1 },
      { id: 2, user: 'Vita Hort', task: 'Công Nghê Phần Mềm', status: false, image: 2 },
      { id: 3, user: 'Nguyễn Bảo Trung', task: 'Cơ Sở dữ liêu', status: true, image: 3 },
      { id: 4, user: 'Nguyễn Xuân Quyền ', task: 'Lập Trình Nhúng', status: false, image: 4 }]
    }
    this.Addwork = this.Addwork.bind(this);
    this.UpdateList = this.UpdateList.bind(this);
    this.CheckWork = this.CheckWork.bind(this);
    this.EditWork = this.EditWork.bind(this);
  }
  Addwork() {
    if (this.state.action == 1) {
      this.setState({
        ListData: [...this.state.ListData, { id: Math.floor(Math.random() * 5000 + 100), user: this.state.Inputusername, task: this.state.InputWork, status: false, image: Math.floor(Math.random() * 5 + 1) }],
        InputWork: '',
        Inputusername: ''
      })
    } else {
      let Obj = this.state.ListData.filter(element => { return element.id == this.state.IDitem })[0];
      Obj.user = this.state.Inputusername;
      Obj.task = this.state.InputWork;
      this.setState({
        ListData: [...this.state.ListData.filter(element => { return element.id != this.state.IDitem }), Obj],
        action: 1,
        InputWork: '',
        Inputusername: ''
      })
    }
    this.setState({ show: false })
  }
  UpdateList(list) {
    this.setState({ ListData: list });
  }
  CheckWork(id) {
    console.log(id)
    let Obj = this.state.ListData.filter(element => { return element.id == id })[0];
    Obj.status = true;
    console.log(Obj)
    this.setState({
      ListData: [...this.state.ListData.filter(element => { return element.id != id }), Obj]
    })
    console.log(this.state.ListData)
    console.log(this.state.ListData.filter(element => { return element.id != id }))
    console.log(this.state.ListData.filter(element => { return element.id == id }))
  }
  EditWork(id) {
    this.setState({ action: 2 })
    this.setState({ show: true })
    let Obj = this.state.ListData.filter(element => { return element.id == id })[0];
    this.setState({ InputWork: Obj.task })
    this.setState({ Inputusername: Obj.user, IDitem: id })
  }

  render() {
    return (
      <section className="vh-100 gradient-custom-2" style={{height:(this.state.ListData.length<6)?'750px':'auto'}}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-12 col-xl-10">
              <div className="card mask-custom">
                <div className="card-body p-4 text-white">
                  <div className="text-center pt-3 pb-2">
                    <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-todo-list/check1.png" alt="Check" width="60" />
                    <h2 className="my-4">Task List</h2>
                  </div>
                  <table className="table text-white mb-0">
                    <thead>
                      <tr>
                        <th scope="col">Tên người dùng</th>
                        <th scope="col">Tên công việc</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col">Hành động</th>
                      </tr>
                    </thead>
                    <tbody>
                      <Work List={this.state.ListData} Editchill={this.UpdateList} check={this.CheckWork} UpdateWork={this.EditWork} />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <Button style={{ position: "relative", marginLeft: "80%" }} onClick={() => { this.setState({ show: true }) }}>Thêm công việc</Button>
          <Modal show={this.state.show}>
            <Modal.Header style={{ fontWeight: 500 }}>
              Thêm Công Việc Mới
            </Modal.Header>
            <Modal.Body>
              <form>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label >Tên Người Dùng</label>
                    <input type="email" className="form-control" value={this.state.Inputusername} id="username" onChange={(even) => { this.setState({ Inputusername: even.target.value }) }} placeholder="Nhâp tên người dùng..."></input>
                  </div>
                  <div className="form-group col-md-12">
                    <label>Tên Công Việc</label>
                    <input type="text" className="form-control" id="work" value={this.state.InputWork} onChange={(even) => { this.setState({ InputWork: even.target.value }) }} placeholder="Nhâp tên công việc..."></input>
                  </div>
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.Addwork}>
                {this.state.action == 1 ? 'Thêm' : 'Chỉnh Sửa'}
              </Button>
              <Button onClick={() => { this.setState({ show: false, action: 1, Inputusername: '', InputWork: '' }) }} className="btn btn-secondary">
                Đóng
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </section>
    )
  }
}
export default App;
