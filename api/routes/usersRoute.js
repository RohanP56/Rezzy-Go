import express from "express";
const router = express.Router();

import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/usersController.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";


/*
router.get("/checkauthentication", verifyToken, (req, res, next)=>{
  res.send("Hello user, you are logged in.");
})


router.get("/checkuser/:id", verifyUser, (req, res, next)=>{
  res.send("Hello user, you are logged in and you can delete your account.");
})

router.get("/checkadmin/:id", verifyAdmin, (req, res, next)=>{
  res.send("Hello admin, you are logged in and you can delete all user accounts.");
})
*/


//UPDATE
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id",verifyUser, deleteUser);

//GET
router.get("/:id", verifyUser, getUser);

//GET ALL
router.get("/", verifyAdmin, getUsers);  // All user can be accessed only by admin

export default router;
