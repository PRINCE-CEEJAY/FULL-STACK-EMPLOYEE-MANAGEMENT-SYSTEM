import { staff } from "./handleDB.js";

export const createUser = async (req, res) => {
  const ref = req.body;
  try {
    const user = await staff.create(ref);
    res.json({
      success: true,
      message: "Successfully created user",
      data: user,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "error occured, could not create user",
    });
    console.log(error.message);
  }
};

export const readUser = async (req, res) => {
  const userId = req.params.id || req.body.id;
  try {
    const user = await staff.findById({ _id: userId });
    if (!user) {
      return res.json({
        success: false,
        message: "user does not exist in the database",
      });
    }
    res.json({
      success: true,
      message: "user succesfully retrieved",
      data: user,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "error occured, could not retrieve user",
    });
    console.log(error.message);
  }
};
export const readAllUsers = async (req, res) => {
  try {
    const user = await staff.find({});
    res.json({
      success: true,
      message: "users retrieved successfully",
      data: user,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "error occured, could not retrieve users",
    });
    console.log(error.message);
  }
};

export const updateUser = async (req, res) => {
  const userId = req.params.id || req.body.id;
  try {
    const user = await staff.findByIdAndUpdate(userId, req.body, { new: true });
    if (!user) {
      return res.json({ success: false, message: "No  user with such ID" });
    }
    res.json({
      success: true,
      message: "Successfully updated user",
      data: user,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "unable to update user record",
    });
  }
};
export const removeUser = async (req, res) => {
  const userId = req.params.id || req.body.id;
  try {
    const user = await staff.findByIdAndDelete(userId);
    if (!user) {
      return res.json({ success: false, message: "No  user with such ID" });
    }
    res.json({
      success: true,
      message: "user  succsesfully deleted",
      data: user,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "unable to delete  user",
    });
  }
};
