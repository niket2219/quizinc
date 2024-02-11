const User = require("../models/userModel");

module.exports.register = async (req, res, next) => {
  try {
    const {
      fname,
      lname,
      roll,
      email,
      dob,
      gender,
      phone,
      stream,
      year,
      domains,
    } = req.body;
    const usernameCheck = await User.findOne({ phone });
    if (usernameCheck)
      return res.json({ msg: "Phone number already used", status: false });
    const emailCheck = await User.findOne({ email });
    if (emailCheck)
      return res.json({ msg: "Email already used", status: false });
    //   const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      fname,
      lname,
      roll,
      email,
      dob,
      gender,
      phone,
      stream,
      year,
      domains,
    });
    return res.json({ status: true, user });
  } catch (ex) {
    next(ex);
  }
};
