const router = require("express").Router();
let Vacancy = require("../models/vacancy.model");

router.route("/").get((req, res) => {
  Vacancy.find()
    .then((vacancies) => res.json(vacancies))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newVacancy = new Vacancy({
    username,
    description,
    duration,
    date,
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
      vacancy.username = req.body.username;
      vacancy.description = req.body.description;
      vacancy.duration = Number(req.body.duration);
      vacancy.date = Date.parse(req.body.date);

      vacancy
        .save()
        .then(() => res.json("Vacancy updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
