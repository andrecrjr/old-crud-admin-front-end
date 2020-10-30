import React from "react";
import Admin from "./Admin";
import UserLogin from "./User";
import UserEdit from "./Admin/EditUser";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Routes(props) {
  return (
    <Router>
      <Switch>
        <Route exact path='/admin'>
          <Admin />
        </Route>
        <Route exact path='/'>
          <UserLogin />
        </Route>
        <Route exact path='/admin/edit'>
          <UserEdit />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
