import React, { Component } from "react";
import Dashboard from "./Dashboard";
import Users from "./user/Users";
import { Switch, Route } from "react-router-dom";
import Posts from "./post/Posts";
import UpdatePost from "./post/UpdatePost";
import UserProfile from "./user/UserProfile";
import CreateUser from "./user/CreateUser";
import UpdateUser from "./user/UpdateUser";

import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";

class Content extends Component {
  render() {
    return (
      <div>
        <Header />
        <Menu />
        <div className="content-wrapper">
          <div className="container-fluid">
            <Switch>
              <Route exact={true} path="/" component={Dashboard} />
              <Route path="/dashboard" component={Dashboard} />
              <Route exact={true} path="/users" component={Users} />
              <Route path="/users/create" component={CreateUser} />
              <Route path="/users/view/:id" component={UserProfile} />
              <Route path="/users/update/:id" component={UpdateUser} />
              <Route exact={true} path="/posts" component={Posts} />
              <Route path="/posts/update/:id" component={UpdatePost} />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Content;
