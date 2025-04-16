import User from "../models/userModel.js";
import bcrypt from "bcrypt";

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });
    await newUser.save();
    res.status(201).send("User has been Created.");
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const userEmail = await User.findOne({email: req.body.email})
    if(!userEmail){
      return next(createError(404, "Email not found!"))  
    }
    const isPasswordCorrect = await bcrypt.compare(req.body.password, userEmail.password);
    if(!isPasswordCorrect){
        return next(createError(400, "Wrong password or username"))  
    }
    const {password, isAdmin, ...otherDetails} = userEmail._doc;
    res.status(201).json({...otherDetails});
  } catch (error) {
    next(error);
  }
};

// I have to login using [email and password]