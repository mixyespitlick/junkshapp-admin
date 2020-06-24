import React, { Component } from 'react'
import { db } from '../../Firebase'
import moment from 'moment'
import { Link } from 'react-router-dom'

export class UserProfile extends Component {
  state = {
    user: {},
    posts: null,
  }
  componentDidMount() {
    // if single
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

    // get collection of certain person
    db.collection('posts')
      .where('uid', '==', this.props.match.params.id)
      .orderBy('timestamp', 'desc')
      .get().then(snapshot => {
        const posts = []
        snapshot.forEach(doc => {
          const data = doc.data()
          posts.push(data)
        })
        this.setState({ posts: posts })
      })
  }
  render() {
    return (
      <>
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Profile</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><Link to="/dashboard">Home</Link></li>
                  <li className="breadcrumb-item"><Link to="/users">Users Table</Link></li>
                  <li className="breadcrumb-item active">Profile</li>
                </ol>
              </div>
            </div>
          </div>{/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">

              {/* /.col */}
              <div className="col-md-9">
                <div className="card">
                  <div className="card-header p-2">
                    <h3 className="card-title">Posts</h3>
                  </div>
                  <div className="card-body">
                    <div className="card-body table-responsive p-0">
                      <table className="table table-hover text-nowrap">
                        <thead>
                          <tr>
                            <th>Date Posted</th>
                            <th>Message</th>
                            <th>Image</th>
                            {/* <th>Timestamp</th> */}
                            {/* <th colSpan="2">Action</th> */}
                          </tr>
                        </thead>
                        <tbody>
                          {
                            this.state.posts && this.state.posts.map(post => (
                              <tr key={post.timestamp}>
                                <td>{moment(new Date(post.timestamp * 1000).toString()).calendar()}</td>
                                <td>{post.text}</td>
                                <td><img src={post.image} width="100" height="100" alt="Post" /></td>
                                {/* <td>{post.timestamp}</td> */}
                                {/* <td><button className="btn btn-success">View</button></td>
                                                                <td><button className="btn btn-primary">Update</button></td> */}
                              </tr>
                            ))
                          }
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* /.nav-tabs-custom */}
              </div>
              <div className="col-md-3">
                {/* Profile Image */}
                <div className="card card-primary card-outline">
                  <div className="card-body box-profile">
                    <div className="text-center">
                      <img className="profile-user-img img-fluid img-circle" src={this.state.user.avatar} alt="User" />
                    </div>
                    <h3 className="profile-username text-center">{this.state.user.name}</h3>
                    <p className="text-muted text-center">Household</p>
                    <ul className="list-group list-group-unbordered mb-3">

                      <li className="list-group-item">
                        <b>Posts</b> <a className="float-right">{this.state.user.postscount}</a>
                      </li>
                      <li className="list-group-item">
                        <b>Winning Bids</b> <a className="float-right">{this.state.user.winningbids}</a>
                      </li>
                      <li className="list-group-item">
                        <b>Rating</b> <a className="float-right">{this.state.user.rating}/5 </a>
                      </li>
                    </ul>
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
                {/* About Me Box */}
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">Personal Information</h3>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    <strong><i className="fas fa-map-marker-alt mr-1" /> Location</strong>
                    <p className="text-muted">Malibu, California</p>
                    <hr />
                    <hr />
                    <strong><i className="far fa-file-alt mr-1" /> Contact Number</strong>
                    <p className="text-muted">1234568</p>
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>{/* /.container-fluid */}
        </section>
        {/* /.content */}
      </>


    )
  }
}

export default UserProfile
