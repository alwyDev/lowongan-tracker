const router = require("express").Router();
let Vacancy = require("../models/vacancy.model");

router.route("/").get((req, res) => {
  Vacancy.find()
    .then((vacancies) => res.json(vacancies))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const date = Date.parse(req.body.date);
  const company = req.body.company;
  const location = req.body.location;
  const position = req.body.position;
  const medium = req.body.medium;
  const cv = req.body.cv;
  const stepname = req.body.stepname;
  const description = req.body.description;
  const process1 = req.body.process1;
  const process2 = req.body.process2;
  const process3 = req.body.process3;
  const process4 = req.body.process4;
  // const duration = Number(req.body.duration);

  const newVacancy = new Vacancy({
    date,
    company,
    location,
    position,
    medium,
    cv,
    stepname,
    description,
    process1,
    process2,
    process3,
    process4,
    // duration,
  });

  newVacancy
    .save()
    .then(() => res.json("Vacancy added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Vacancy.findById(req.params.id)
    .then((vacancy) => res.json(vacancy))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Vacancy.findByIdAndDelete(req.params.id)
    .then(() => res.json("Vacancy deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Vacancy.findById(req.params.id)
    .then((vacancy) => {
      vacancy.date = Date.parse(req.body.date);
      vacancy.company = req.body.company;
      vacancy.location = req.body.location;
      vacancy.position = req.body.position;
      vacancy.medium = req.body.medium;
      vacancy.cv = req.body.cv;
      vacancy.stepname = req.body.stepname;
      vacancy.description = req.body.description;
      vacancy.process1 = req.body.process1;
      vacancy.process2 = req.body.process2;
      vacancy.process3 = req.body.process3;
      vacancy.process4 = req.body.process4;
      // vacancy.duration = Number(req.body.duration);

      vacancy
        .save()
        .then(() => res.json("Vacancy updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
