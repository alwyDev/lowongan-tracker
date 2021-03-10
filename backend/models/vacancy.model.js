const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const vacancySchema = new Schema(
  {
    date: { type: Date, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    position: { type: String, required: true },
    medium: { type: String, required: true },
    cv: { type: String, required: true },
    stepname: { type: String, required: true },
    description: { type: String, required: false },
    process1: { type: String, required: false },
    process2: { type: String, required: false },
    process3: { type: String, required: false },
    process4: { type: String, required: false },
    // duration: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Vacancy = mongoose.model("Vacancy", vacancySchema);

module.exports = Vacancy;
