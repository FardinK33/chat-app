import User from "../model/user.model.js";

const getUsers = async (req, res) => {
  try {
    const users = await User.find({ _id: { $ne: req.user._id } }).select(
      "-password"
    );

    res.status(200).json(users);
  } catch (error) {
    console.log("Error in getUsers Controller : ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default getUsers;
