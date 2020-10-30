import React from "react";
import Admin from "./Admin";
import UserLogin from "./User";
import UserEdit from "./Admin/EditUser";
import NewUser from "./Admin/NewUser";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Routes(props) {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <UserLogin />
        </Route>
        <Route exact path='/admin'>
          <Admin />
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
