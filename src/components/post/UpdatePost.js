import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../../Firebase'
import moment from 'moment'

class UpdatePost extends Component {
  state = {
    post: [],
    key: ''
  }
  componentDidMount() {

    this.loadPost()
  }

  loadPost = () => {
    db.collection('posts')
      .doc(this.props.match.params.id)
      .get().then((doc) => {
        if (doc.exists) {
          this.setState({
            post: doc.data(),
            key: doc.id
          })
        } else {
          console.log("Document not found")
        }
      }).catch(err => console.error(err));
  }

  render() {
    const { avatar, description, image, name, timestamp, title, uid } = this.state.post;
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
                  <li className="breadcrumb-item active">Update Post</li>
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
                <h3 className="card-title">Update Post Information</h3>
              </div>
              {/* /.card-header */}
              {/* form start */}
              <form className="form">
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="exampleInputDatePosted">Date Posted</label>
                    <input type="text" className="form-control" value={moment(new Date(timestamp * 1000).toString()).calendar()} id="exampleInputDatePosted" placeholder="Enter Date Posted" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPostedBy">Posted By</label>
                    <input type="text" className="form-control" value={name} id="exampleInputPostedBy" placeholder="Enter Posted By" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputTitle">Title</label>
                    <input type="text" className="form-control" value={title} id="exampleInputTitle" placeholder="Enter Description" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputDescription">Description</label>
                    <input type="text" className="form-control" value={description} id="exampleInputDescription" placeholder="Enter Description" />
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-4">


                      <img className="img-fluid" src={image} alt="Photo" />
                      <label htmlFor="exampleInputFile">Select image to update Image 1</label>
                      <div className="input-group">
                        <div className="custom-file">
                          <input type="file" className="custom-file-input" id="exampleInputFile" />
                          <label className="custom-file-label" htmlFor="exampleInputFile">Choose file</label>
                        </div>
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

export default UpdatePost
