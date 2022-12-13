const express = require("express");
const { EmiController } = require("../controllers/Emi.controller");
const { Authentication } = require("../middlewares/Authentication");

const EmiRouter = express.Router();
EmiRouter.post("/calculateEMI", Authentication, EmiController.CalculateEmi);
EmiRouter.get("/getProfile", Authentication, EmiController.GetProfile);
module.exports = {
  EmiRouter,
};
