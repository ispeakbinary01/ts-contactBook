import React from "react";
import {Route, withRouter, Switch} from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Contacts from "./views/Contacts";
import ManageContacts from "./views/ManageContacts";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/contacts" component={Contacts} />
        <Route exact path="/manage-contacts" component={ManageContacts} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
