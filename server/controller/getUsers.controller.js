import User from "../model/user.model";

const getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");

    res.status(200).json(users);
  } catch (error) {
    console.log("Error in getUsers Controller : ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default getUsers;
