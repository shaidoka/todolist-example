import React from 'react'

export default function App() {
  return (
    <section className="vh-100 gradient-custom-2">
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
                      <th scope="col">Team Member</th>
                      <th scope="col">Task</th>
                      <th scope="col">Priority</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="fw-normal">
                      <th>
                        <img src={"https://mdbootstrap.com/img/Photos/new-templates/bootstrap-chat/ava1-bg.png"} alt="avatar 1"
                          style={{ width: "45px", height: "auto" }} />
                        <span className="ms-2">Alice Mayer</span>
                      </th>
                      <td className="align-middle">
                        <span >Call Sam For payments</span >
                      </td>
                      <td className="align-middle">
                        <h6 className="mb-0"><span className="badge bg-danger">High priority</span></h6>
                      </td>
                      <td className="align-middle">
                        <a href="#!" data-mdb-toggle="tooltip" title="Done"><i className="fas fa-check fa-lg me-3"></i></a>
                        <a href="#!" data-mdb-toggle="tooltip" title="Remove"><i className="fas fa-trash-alt fa-lg me-3"></i></a>
                        <a href="#!" data-mdb-toggle="tooltip" title="Edit"><i className="fas fa-edit fa-lg"></i></a>
                      </td>
                    </tr>
                    <tr className="fw-normal">
                      <th>
                        <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-chat/ava2-bg.png" alt="avatar 1"
                          style={{ width: "45px", height: "auto" }} />
                        <span className="ms-2">Kate Moss</span>
                      </th>
                      <td className="align-middle">Make payment to Bluedart</td>
                      <td className="align-middle">
                        <h6 className="mb-0"><span className="badge bg-success">Low priority</span></h6>
                      </td>
                      <td className="align-middle">
                        <a href="#!" data-mdb-toggle="tooltip" title="Done"><i className="fas fa-check fa-lg me-3"></i></a>
                        <a href="#!" data-mdb-toggle="tooltip" title="Remove"><i className="fas fa-trash-alt fa-lg me-3"></i></a>
                        <a href="#!" data-mdb-toggle="tooltip" title="Edit"><i className="fas fa-edit fa-lg"></i></a>
                      </td>
                    </tr>
                    <tr className="fw-normal">
                      <th>
                        <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-chat/ava3-bg.png" alt="avatar 1"
                          style={{ width: "45px", height: "auto" }} />
                        <span className="ms-2">Danny McChain</span>
                      </th>
                      <td className="align-middle">Office rent</td>
                      <td className="align-middle">
                        <h6 className="mb-0"><span className="badge bg-warning">Middle priority</span></h6>
                      </td>
                      <td className="align-middle">
                        <a href="#!" data-mdb-toggle="tooltip" title="Done"><i className="fas fa-check fa-lg me-3"></i></a>
                        <a href="#!" data-mdb-toggle="tooltip" title="Remove"><i className="fas fa-trash-alt fa-lg me-3"></i></a>
                        <a href="#!" data-mdb-toggle="tooltip" title="Edit"><i className="fas fa-edit fa-lg"></i></a>
                      </td>
                    </tr>
                    <tr className="fw-normal">
                      <th>
                        <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-chat/ava5-bg.png" alt="avatar 1"
                          style={{ width: "45px", height: "auto" }} />
                        <span className="ms-2">Alexa Chung</span>
                      </th>
                      <td className="align-middle">Office grocery shopping</td>
                      <td className="align-middle">
                        <h6 className="mb-0"><span className="badge bg-danger">High priority</span></h6>
                      </td>
                      <td className="align-middle">
                        <a href="#!" data-mdb-toggle="tooltip" title="Done"><i className="fas fa-check fa-lg me-3"></i></a>
                        <a href="#!" data-mdb-toggle="tooltip" title="Remove"><i className="fas fa-trash-alt fa-lg me-3"></i></a>
                        <a href="#!" data-mdb-toggle="tooltip" title="Edit"><i className="fas fa-edit fa-lg"></i></a>
                      </td>
                    </tr>
                    <tr className="fw-normal">
                      <th className="border-0">
                        <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-chat/ava6-bg.png" alt="avatar 1"
                          style={{ width: "45px", height: "auto" }} />
                        <span className="ms-2">Ben Smith</span>
                      </th>
                      <td className="border-0 align-middle">Ask for Lunch to Clients</td>
                      <td className="border-0 align-middle">
                        <h6 className="mb-0"><span className="badge bg-success">Low priority</span></h6>
                      </td>
                      <td className="border-0 align-middle">
                        <a href="#!" data-mdb-toggle="tooltip" title="Done"><i className="fas fa-check fa-lg me-3"></i></a>
                        <a href="#!" data-mdb-toggle="tooltip" title="Remove"><i className="fas fa-trash-alt fa-lg me-3"></i></a>
                        <a href="#!" data-mdb-toggle="tooltip" title="Edit"><i className="fas fa-edit fa-lg"></i></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

