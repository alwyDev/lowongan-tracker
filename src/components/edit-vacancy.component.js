import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class EditVacancy extends Component {
  constructor(props) {
    super(props);

    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeCompany = this.onChangeCompany.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangePosition = this.onChangePosition.bind(this);
    this.onChangeMedium = this.onChangeMedium.bind(this);
    this.onChangeCv = this.onChangeCv.bind(this);
    this.onChangeStepname = this.onChangeStepname.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeProcess1 = this.onChangeProcess1.bind(this);
    this.onChangeProcess2 = this.onChangeProcess2.bind(this);
    this.onChangeProcess3 = this.onChangeProcess3.bind(this);
    this.onChangeProcess4 = this.onChangeProcess4.bind(this);
    // this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      date: new Date(),
      company: "",
      location: "",
      position: "",
      medium: "",
      cv: "",
      stepname: "",
      description: "",
      process1: "",
      process2: "",
      process3: "",
      process4: "",
      // duration: 0,
      steps: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/vacancies/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          date: new Date(response.data.date),
          company: response.data.company,
          location: response.data.location,
          position: response.data.position,
          medium: response.data.medium,
          cv: response.data.cv,
          stepname: response.data.stepname,
          description: response.data.description,
          process1: response.data.process1,
          process2: response.data.process2,
          process3: response.data.process3,
          process4: response.data.process4,
          // duration: response.data.duration,
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("http://localhost:5000/steps/")
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            steps: response.data.map((step) => step.stepname),
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeDate(date) {
    this.setState({
      date: date,
    });
  }

  onChangeCompany(e) {
    this.setState({
      company: e.target.value,
    });
  }

  onChangeLocation(e) {
    this.setState({
      location: e.target.value,
    });
  }

  onChangePosition(e) {
    this.setState({
      position: e.target.value,
    });
  }

  onChangeMedium(e) {
    this.setState({
      medium: e.target.value,
    });
  }

  onChangeCv(e) {
    this.setState({
      cv: e.target.value,
    });
  }

  onChangeStepname(e) {
    this.setState({
      stepname: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }
  onChangeProcess1(e) {
    this.setState({
      process1: e.target.value,
    });
  }
  onChangeProcess2(e) {
    this.setState({
      process2: e.target.value,
    });
  }
  onChangeProcess3(e) {
    this.setState({
      process3: e.target.value,
    });
  }
  onChangeProcess4(e) {
    this.setState({
      process4: e.target.value,
    });
  }

  // onChangeDuration(e) {
  //   this.setState({
  //     duration: e.target.value,
  //   });
  // }

  onSubmit(e) {
    e.preventDefault();

    const vacancy = {
      date: this.state.date,
      company: this.state.company,
      location: this.state.location,
      position: this.state.position,
      medium: this.state.medium,
      cv: this.state.cv,
      stepname: this.state.stepname,
      description: this.state.description,
      process1: this.state.process1,
      process2: this.state.process2,
      process3: this.state.process3,
      process4: this.state.process4,
      // duration: this.state.duration,
    };

    console.log(vacancy);

    axios
      .post(
        "http://localhost:5000/vacancies/update/" + this.props.match.params.id,
        vacancy
      )
      .then((res) => console.log(res.data));

    window.location = "/";
  }

  render() {
    return (
      <div className="container">
        <h3 className="col-lg-6 col-sm-12">Create New Vacancy Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group col-lg-6 col-sm-12">
            <label>Tahap Rekrutmen: </label>
            <select
              ref="stepInput"
              required
              className="form-control"
              value={this.state.stepname}
              onChange={this.onChangeStepname}
            >
              {this.state.steps.map(function (step) {
                return (
                  <option key={step} value={step}>
                    {step}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group col-lg-6 col-sm-12">
            <label>Nama Perusahaan: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.company}
              onChange={this.onChangeCompany}
            />
          </div>
          <div className="form-group col-lg-6 col-sm-12">
            <label>Lokasi: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.location}
              onChange={this.onChangeLocation}
            />
          </div>
          <div className="form-group col-lg-6 col-sm-12">
            <label>Posisi: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.position}
              onChange={this.onChangePosition}
            />
          </div>
          <div className="form-group col-lg-6 col-sm-12">
            <label>Medium: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.medium}
              onChange={this.onChangeMedium}
            />
          </div>
          <div className="form-group col-lg-6 col-sm-12">
            <label>Versi CV: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.cv}
              onChange={this.onChangeCv}
            />
          </div>
          <div className="form-group col-lg-6 col-sm-12">
            <label>Description: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group col-lg-6 col-sm-12">
            <label>Proses Pertama: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.process1}
              onChange={this.onChangeProcess1}
            />
          </div>
          <div className="form-group col-lg-6 col-sm-12">
            <label>Proses Kedua: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.process2}
              onChange={this.onChangeProcess2}
            />
          </div>
          <div className="form-group col-lg-6 col-sm-12">
            <label>Proses Ketiga: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.process3}
              onChange={this.onChangeProcess3}
            />
          </div>
          <div className="form-group col-lg-6 col-sm-12">
            <label>Proses Keempat: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.process4}
              onChange={this.onChangeProcess4}
            />
          </div>
          {/* <div className="form-group col-lg-6 col-sm-12">
            <label>Duration (in minutes): </label>
            <input
              type="text"
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
            />
          </div> */}
          <div className="form-group col-lg-6 col-sm-12">
            <label>Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>

          <div className="form-group col-lg-6 col-sm-12">
            <input
              type="submit"
              value="Edit Vacancy Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
