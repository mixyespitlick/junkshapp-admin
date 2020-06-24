import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./img/JunkshAppLogo.png";
import profile from "./img/user8-128x128.jpg";

class Menu extends Component {
  render() {
    return (
      <aside className="main-sidebar sidebar-dark-primary">
        {/* Brand Logo */}
        <Link to="/" className="brand-link">
          <img
            src={logo}
            alt="JunkshApp"
            className="brand-image img-circle elevation-3"
          //style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">
            Junksh<b>App</b>
          </span>
        </Link>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src={profile}
                className="img-circle elevation-2"
                alt="User"
              />
            </div>
            <div className="info">
              <a href="fake_url" className="d-block">
                Admin
              </a>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item">
                <Link to="/users" className="nav-link">
                  <i className="nav-icon fas fa-users" />
                  <p>Users</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/posts" className="nav-link">
                  <i className="nav-icon fas fa-sticky-note" />
                  <p>Posts</p>
                </Link>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    );
  }
}

export default Menu;
