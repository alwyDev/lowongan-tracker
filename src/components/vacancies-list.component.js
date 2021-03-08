import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Vacancy = (props) => (
  <tr>
    <td>{props.vacancy.username}</td>
    <td>{props.vacancy.description}</td>
    <td>{props.vacancy.duration}</td>
    <td>{props.vacancy.date.substring(0, 10)}</td>
    <td>
      <Link to={"/edit/" + props.vacancy._id}>
        <button className="btn btn-warning btn-sm">edit</button>
      </Link>{" "}
      <button
        className="btn btn-danger btn-sm"
        href="#"
        onClick={() => {
          props.deleteVacancy(props.vacancy._id);
        }}
      >
        delete
      </button>
    </td>
  </tr>
);

export default class VacanciesList extends Component {
  constructor(props) {
    super(props);

    this.deleteVacancy = this.deleteVacancy.bind(this);

    this.state = { vacancies: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/vacancies/")
      .then((response) => {
        this.setState({ vacancies: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteVacancy(id) {
    axios.delete("http://localhost:5000/vacancies/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      vacancies: this.state.vacancies.filter((el) => el._id !== id),
    });
  }

  vacancyList() {
    return this.state.vacancies.map((currentvacancy) => {
      return (
        <Vacancy
          vacancy={currentvacancy}
          deleteVacancy={this.deleteVacancy}
          key={currentvacancy._id}
        />
      );
    });
  }

  render() {
    return (
      <div className="container">
        <h3>Logged Vacancies</h3>
        <div className="table-responsive">
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>Username</th>
                <th>Description</th>
                <th>Duration</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{this.vacancyList()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
