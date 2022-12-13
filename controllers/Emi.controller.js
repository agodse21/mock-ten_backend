const { EmiModel } = require("../model/Emi.model");
const { UserModel } = require("../model/user.model");

const GetProfile = async (req, res) => {
  const { user_id } = req.body;
  console.log(user_id)
  const user = await UserModel.findOne({ _id: user_id });
  const { name, email } = user;
  res.send({ name, email });
};

const CalculateEmi = async (req, res) => {
    console.log(req)
  const { loan_amout, anual_interest, tenure_in_months,user_id} = req.body;
  const r = anual_interest / 12 / 100;
  const EMI =
    (loan_amout * r * (1 + r) * tenure_in_months) /
    ((1 + r) * tenure_in_months - 1);

  const total_intrest = (loan_amout / 100) * anual_interest;
  const total_payment=loan_amout + total_intrest
  const new_emi = new EmiModel({
    EMI: EMI,
    interest_payable: r,
    total_payment:total_payment,
    user_id: user_id,
  });
  await new_emi.save();
  res.send({ EMI, interest_payable: r,
    total_payment:total_payment});
};

const EmiController = {
  GetProfile,
  CalculateEmi,
};

module.exports = {
  EmiController,
};
