const router = require("express").Router();
let Step = require("../models/step.model");

router.route("/").get((req, res) => {
  Step.find()
    .then((steps) => res.json(steps))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const stepname = req.body.stepname;

  const newStep = new Step({ stepname });

  newStep
    .save()
    .then(() => res.json("Step added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
