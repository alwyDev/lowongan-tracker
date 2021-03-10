const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const stepSchema = new Schema(
  {
    stepname: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      // minlength: 3
    },
  },
  {
    timestamps: true,
  }
);

const Step = mongoose.model("Step", stepSchema);

module.exports = Step;
