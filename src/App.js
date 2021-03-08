import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import VacanciesList from "./components/vacancies-list.component";
import EditVacancy from "./components/edit-vacancy.component";
import CreateVacancy from "./components/create-vacancy.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="">
        <Navbar />
        <br />
        <Route path="/" exact component={VacanciesList} />
        <Route path="/edit/:id" component={EditVacancy} />
        <Route path="/create" component={CreateVacancy} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
