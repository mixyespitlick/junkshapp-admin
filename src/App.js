import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import LogIn from "./components/auth/LogIn";
import ForgotPassword from "./components/auth/ForgotPassword";
import NotFound from "./components/NotFound";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Users from "./components/user/Users";
import Posts from "./components/post/Posts";
import UpdatePost from "./components/post/UpdatePost";
import UserProfile from "./components/user/UserProfile";
import CreateUser from "./components/user/CreateUser";
import UpdateUser from "./components/user/UpdateUser";


class App extends Component {

	render() {
		return (
			<div>
				<Content />
				{/* <Route exact path="/" component={Content} />
				<Route exact path="/login" component={LogIn} />
				<Route exact path="/forgot" component={ForgotPassword} />
				<Route path="*" component={NotFound} /> */}
			</div>
		);
	}
}

export default App;
