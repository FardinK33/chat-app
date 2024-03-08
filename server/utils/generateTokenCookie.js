import jwt from "jsonwebtoken";

const generateTokenandCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "10d", //
  });

  res.cookie("jwt", token, {
    maxAge: 10 * 24 * 60 * 60 * 1000, // 10 days in miliseconds
    httpOnly: true, // only accessible through
    sameSite: "strict", // prevents csrf attacks
    secure: process.env.NODE_ENV !== "development",
  });
};

export default generateTokenandCookie;
