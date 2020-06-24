import React, { Component } from 'react'
import { db } from '../../Firebase'
import { Link } from 'react-router-dom'

class UserIndex extends Component {
  state = {
    users: null
  }
  componentDidMount() {
    db.collection('users')
      .get().then(snapshot => {
        const users = []
        snapshot.forEach(doc => {
          const data = doc.data()
          users.push(data)
        })
        this.setState({ users: users })
      })
  }
  render() {
    return (
      <div>
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Users Table</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><Link to="/dashboard">Home</Link></li>
                  <li className="breadcrumb-item active">Users Table</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <div className="content">
          <div className="container-fluid">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Users</h3>
                      <div className="card-tools">
                        <div className="input-group-append">
                          <Link to="/users/create" className="btn btn-primary">Create New User</Link>
                        </div>
                      </div>
                    </div>
                    <div className="card-body table-responsive p-0">
                      <table className="table table-hover text-nowrap">
                        <thead>
                          <tr>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th colSpan="2">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            this.state.users && this.state.users.map(user => (
                              <tr key={user.id}>
                                <td><img src={user.avatar} width="100" height="100" className="rounded-circle" alt="User" /></td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td><Link className="btn btn-success" to={`/users/view/${user.id}`}>View</Link></td>
                                <td><Link className="btn btn-primary" to={`/users/update/${user.id}`}>Update</Link></td>
                              </tr>
                            ))
                          }
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserIndex
