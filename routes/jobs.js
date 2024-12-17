const express = require("express");
const router = express.Router();

const {
  getAllJobs,
  createJob,
  getJop,
  updateJop,
  deleteJob,
} = require("../controllers/job");

router.route("/").post(createJob).get(getAllJobs);
router.route("/:id").get(getJop).delete(deleteJob).patch(updateJop);

module.exports = router;
