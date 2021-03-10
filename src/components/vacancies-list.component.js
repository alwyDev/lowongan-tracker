import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Vacancy = (props) => (
  <tr>
    <td>{props.vacancy.date.substring(0, 10)}</td>
    <td>{props.vacancy.company}</td>
    <td>{props.vacancy.location}</td>
    <td>{props.vacancy.position}</td>
    <td>{props.vacancy.medium}</td>
    <td>{props.vacancy.cv}</td>
    <td>{props.vacancy.stepname}</td>
    <td>{props.vacancy.description}</td>
    <td>{props.vacancy.process1}</td>
    <td>{props.vacancy.process2}</td>
    <td>{props.vacancy.process3}</td>
    <td>{props.vacancy.process4}</td>
    {/* <td>{props.vacancy.duration}</td> */}
    <td>
      <Link to={"/edit/" + props.vacancy._id}>
        <button className="btn btn-warning btn-sm">edit</button>
      </Link>{" "}
      <button
        className="btn btn-danger btn-sm"
        href="#"
        // onClick={() => {
        //   props.deleteVacancy(props.vacancy._id);
        // }}
        onClick={() => {
          if (window.confirm("Are you sure you wish to delete this item?"))
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
    const tableStyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      fontFamily: "Arial",
    };

    return (
      <div className="container">
        <h3>Logged Vacancies</h3>
        <div className="table-responsive">
          <table className="table table-bordered table-hover table-sm">
            <thead style={tableStyle}>
              <tr>
                <th>Tanggal Kirim</th>
                <th>Nama Perusaahan</th>
                <th>Lokasi</th>
                <th>Posisi</th>
                <th>Medium</th>
                <th>Versi CV</th>
                <th>Tahap Rekrutmen</th>
                <th>Keterangan</th>
                <th>Proses Pertama</th>
                <th>Proses Kedua</th>
                <th>Proses Ketiga</th>
                <th>Proses Keempat</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{this.vacancyList()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
