import React, { Component } from 'react'
import { db } from '../../Firebase'
import moment from 'moment'
import { Link } from 'react-router-dom'


class Posts extends Component {
  state = {
    posts: [],
    limit: 5,
  }
  componentDidMount() {

    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .limit(this.state.limit)
      .get().then(snapshot => {
        const posts = []
        snapshot.forEach(doc => {
          const { avatar, description, image, name, timestamp, title, uid } = doc.data()
          posts.push({
            key: doc.id,
            avatar,
            description,
            image,
            name,
            timestamp,
            title,
            uid
          })
        })
        this.setState({ posts })
        //console.log(posts)
      }).catch(err => console.error(err))

  }
  render() {
    return (
      <>
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Posts Table</h1>
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
                      <h3 className="card-title">Posts</h3>
                      <div className="card-tools">
                        <div className="input-group-append">
                          <button className="btn btn-primary">Create New Post</button>
                        </div>
                      </div>
                    </div>
                    <div className="card-body table-responsive p-0">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th className="align-middle">Date Posted</th>
                            <th className="align-middle">Posted by</th>
                            <th className="align-middle">Title</th>
                            <th className="align-middle">Description</th>
                            <th className="align-middle">Image</th>
                            <th colSpan="2" className="align-middle">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            this.state.posts && this.state.posts.map(post => (
                              <tr key={post.key}>
                                <td>{moment(new Date(post.timestamp * 1000).toString()).calendar()}</td>
                                <td>{post.name}</td>
                                <td>{post.title}</td>
                                <td>{post.description}</td>
                                <td>
                                  <img src={post.image.image1} className="w-25 img-thumbnail p-1" alt="Post" />
                                  <img src={post.image.image2} className="w-25 img-thumbnail p-1" alt="Post" />
                                  <img src={post.image.image3} className="w-25 img-thumbnail p-1" alt="Post" />
                                </td>
                                <td><Link className="btn btn-primary" to={`/posts/update/${post.key}`}>Update</Link></td>
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
      </>
    )
  }
}

export default Posts
