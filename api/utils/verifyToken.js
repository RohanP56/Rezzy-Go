import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

// Verify token
export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "You are not authenticated"));
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      return next(createError(403, "Invalid Token!"));
    }
    //if token is valid
    req.user = user;
    next();
  });
};

// verify user
export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    // only verified user and admin can delete account
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      if (err) {
        return next(createError(403, "You are not Authorized!"));
      }
    }
  });
};

// verify admin
export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    // only verified user and admin can delete account
    if (req.user.isAdmin) {
      next();
    } else {
      if (err) {
        return next(createError(403, "You are not Authorized!"));
      }
    }
  });
};
