const userModel = require("../models/userModel");

//GET DONAR LIST
const getDonarsListController = async (req, res) => {
  try {
    const donarData = await userModel
      .find({ role: "donar" })
      .sort({ createdAt: -1 });

    return res.status(200).send({
      success: true,
      Toatlcount: donarData.length,
      message: "Donar List Fetched Successfully",
      donarData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Donar List API",
      error,
    });
  }
};

//GET HOSPITAL LIST
const getHospitalListController = async (req, res) => {
  try {
    const hospitalData = await userModel
      .find({ role: "hospital" })
      .sort({ createdAt: -1 });

    return res.status(200).send({
      success: true,
      Totalcount: hospitalData.length,
      message: "Hospital List Fetched Successfully",
      hospitalData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Hospital List API",
      error,
    });
  }
};

//GET ORG LIST
const getOrgListController = async (req, res) => {
  try {
    const orgData = await userModel
      .find({ role: "organisation" })
      .sort({ createdAt: -1 });

    return res.status(200).send({
      success: true,
      Totalcount: orgData.length,
      message: "ORG List Fetched Successfully",
      orgData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In ORG List API",
      error,
    });
  }
};

//DELETE DONAR
const deleteDonarController = async (req, res) => {
  try {
    await userModel.findByIdAndDelete(req.params.id);
    return res.status(200).send({
      success: true,
      message: " Record Deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error while deleting ",
      error,
    });
  }
};

// UPDATE DONAR DETAILS
const updateDonarController = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body; // Assuming the updated data is sent in the request body

    // Check if the user with the given ID exists
    const existingDonar = await userModel.findById(id);
    if (!existingDonar) {
      return res.status(404).send({
        success: false,
        message: "Donar not found",
      });
    }

    // Update the user's details
    const updatedDonar = await userModel.findByIdAndUpdate(id, updateData, {
      new: true, // Return the updated document
    });

    return res.status(200).send({
      success: true,
      message: "Donar details updated successfully",
      updatedDonar,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error while updating donar details",
      error,
    });
  }
};

//DELETE HOSPITAL
const deleteHospitalController = async (req, res) => {
  try {
    await userModel.findByIdAndDelete(req.params.id);
    return res.status(200).send({
      success: true,
      message: "Hospital Record Deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error while deleting hospital",
      error,
    });
  }
};

// UPDATE HOSPITAL DETAILS
const updateHospitalController = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const existingHospital = await userModel.findById(id);
    if (!existingHospital || existingHospital.role !== "hospital") {
      return res.status(404).send({
        success: false,
        message: "Hospital not found",
      });
    }

    const updatedHospital = await userModel.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    return res.status(200).send({
      success: true,
      message: "Hospital details updated successfully",
      updatedHospital,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error while updating hospital details",
      error,
    });
  }
};

//DELETE ORGANIZATION
const deleteOrgController = async (req, res) => {
  try {
    await userModel.findByIdAndDelete(req.params.id);
    return res.status(200).send({
      success: true,
      message: "Organization Record Deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error while deleting organization",
      error,
    });
  }
};

// UPDATE ORGANIZATION DETAILS
const updateOrgController = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const existingOrg = await userModel.findById(id);
    if (!existingOrg || existingOrg.role !== "organisation") {
      return res.status(404).send({
        success: false,
        message: "Organization not found",
      });
    }

    const updatedOrg = await userModel.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    return res.status(200).send({
      success: true,
      message: "Organization details updated successfully",
      updatedOrg,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error while updating organization details",
      error,
    });
  }
};

module.exports = {
  getDonarsListController,
  getHospitalListController,
  getOrgListController,
  deleteDonarController,
  updateDonarController,
  deleteHospitalController,
  updateHospitalController,
  deleteOrgController,
  updateOrgController,
};
