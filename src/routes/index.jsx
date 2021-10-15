import React from "react";
import Admin from "./Admin";
import UserLogin from "./User";
import UserEdit from "./Admin/EditUser";
import NewUser from "./Admin/NewUser";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";

function Routes(props) {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<UserLogin />
				</Route>
				<Route exact path='/admin'>
					<Dashboard />
				</Route>
				<Route exact path='/admin/edit'>
					<UserEdit />
				</Route>
				<Route exact path='/admin/create'>
					<NewUser />
				</Route>
			</Switch>
		</Router>
	);
}

export default Routes;
