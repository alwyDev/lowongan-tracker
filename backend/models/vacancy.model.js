const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const vacancySchema = new Schema(
  {
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const Vacancy = mongoose.model("Vacancy", vacancySchema);

module.exports = Vacancy;
