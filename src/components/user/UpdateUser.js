import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../../Firebase'
import moment from 'moment'

class UpdateUser extends Component {
  state = {
    user: {}
  }
  componentDidMount() {
    db.collection('users')
      .doc(this.props.match.params.id)
      .get().then((doc) => {
        if (doc.exists) {
          this.setState({
            user: doc.data(),
          })
        } // else {
        // console.log("No such document!");
        // }
      });

  }
  render() {
    return (
      <div>
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Update User</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><Link to="/dashboard">Home</Link></li>
                  <li className="breadcrumb-item active">Update User Form</li>
                </ol>
              </div>
            </div>
          </div>{/* /.container-fluid */}
        </section>

        <div className="hold-transition login-page">
          <div className="col-md-12">
            {/* general form elements */}
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Update User Information</h3>
              </div>
              {/* /.card-header */}
              {/* form start */}
              <form className="form">
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" value={this.state.user.email} id="exampleInputEmail1" placeholder="Enter email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input type="text" className="form-control" value={this.state.user.name} id="exampleInputName1" placeholder="Enter name" />
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="exampleInputFile">Select image to update avatar</label>
                      <div className="input-group">
                        <div className="custom-file">
                          <input type="file" className="custom-file-input" id="exampleInputFile" />
                          <label className="custom-file-label" htmlFor="exampleInputFile">Choose file</label>
                        </div>
                        {/* <div className="input-group-append">
                                                <span className="input-group-text" id>Upload</span>
                                            </div> */}
                      </div>
                    </div>
                    <div className="form-group col-md-6">
                      <div className="text-center">
                        <img className="profile-user-img img-fluid img-circle" src={this.state.user.avatar} alt="User" />
                      </div>
                    </div>
                  </div>

                </div>
                {/* /.card-body */}
                <div className="card-footer">
                  <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </div>
              </form>
            </div>
            {/* /.card */}
          </div>
        </div>
      </div>
    )
  }
}

export default UpdateUser
