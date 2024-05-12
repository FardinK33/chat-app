import bcrypt from "bcryptjs";
import User from "../model/user.model.js";
import generateTokenandCookie from "../utils/generateTokenCookie.js";

export const signup = async (req, res) => {
  try {
    const { name, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" });
    }

    const user = await User.findOne({ username });

    if (user) {
      return res
        .status(400)
        .json({ error: "User Already Exists with This Username" });
    }

    // Hashing Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Boy avatar = https://avatar.iran.liara.run/public/boy?username=Scott
    // Girl avatar = https://avatar.iran.liara.run/public/girl?username=Maria

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      name,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      generateTokenandCookie(newUser._id, res);
      await newUser.save();

      return res.status(201).json({
        _id: newUser._id,
        name: newUser.name,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    }
  } catch (error) {
    console.log("Error in SignUp : ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordMatched = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (user) {
      if (!isPasswordMatched) {
        return res.status(400).json({ error: "Invalid Username or Password" });
      }

      generateTokenandCookie(user._id, res);

      return res.status(201).json({
        _id: user._id,
        name: user.name,
        username: user.username,
        profilePic: user.profilePic,
      });
    } else {
      res.status(201).json({ error: "User not Found. Please Sign Up." });
    }
  } catch (error) {
    console.log("Error in Login ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const logout = (req, res) => {
  // remove the token and cookie from the client
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged Out Successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
