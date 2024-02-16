const express = require("express");
const authMiddelware = require("../middlewares/authMiddelware");
const {
  getDonarsListController,
  getHospitalListController,
  getOrgListController,
  deleteDonarController,
  updateDonarController, // Add this line
} = require("../controllers/adminController");
const adminMiddleware = require("../middlewares/adminMiddleware");

// router object
const router = express.Router();

// Routes

// GET || DONAR LIST
router.get(
  "/donar-list",
  authMiddelware,
  adminMiddleware,
  getDonarsListController
);

// GET || HOSPITAL LIST
router.get(
  "/hospital-list",
  authMiddelware,
  adminMiddleware,
  getHospitalListController
);

// GET || ORG LIST
router.get("/org-list", authMiddelware, adminMiddleware, getOrgListController);

// UPDATE DONAR || PUT
router.put(
  "/update-donar/:id",
  authMiddelware,
  adminMiddleware,
  updateDonarController
);

// DELETE DONAR || GET
router.delete(
  "/delete-donar/:id",
  authMiddelware,
  adminMiddleware,
  deleteDonarController
);

// EXPORT
module.exports = router;
