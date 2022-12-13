const mongoose = require("mongoose");
const EmiSchema = new mongoose.Schema(
  {
    loan_amout: { type: Number, require: true },
    anual_interest: { type: Number, require: true },
    tenure_in_months: { type: Number, require: true },
    user_id: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

const EmiModel = mongoose.model("Emi", EmiSchema);

module.exports = {
  EmiModel,
};
