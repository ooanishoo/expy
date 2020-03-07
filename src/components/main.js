import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Internships from "../pages/Internships";
import Contacts from "../pages/Contacts";
import Companies from "../pages/Companies";
import Preferences from "../pages/Preferences";
import AddInternship from "../pages/AddInternship";
import AddCompany from "../pages/AddCompany";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/internships" component={Internships} />
    <Route exact path="/contacts" component={Contacts} />
    <Route exact path="/companies" component={Companies} />
    <Route exact path="/preferences" component={Preferences} />
    <Route exact path="/add-internship" component={AddInternship} />
    <Route exact path="/host-company" component={AddCompany} />
  </Switch>
);

export default Main;
