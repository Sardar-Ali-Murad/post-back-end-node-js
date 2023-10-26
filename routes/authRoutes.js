import express from "express";
const router = express.Router();

import {
  register,
  login,
  getCurrentUser,
  logout,
  getSingleUser,
} from "../controllers/authController.js";
import authenticateUser from "../middleware/auth.js";
router.route("/register").post(register);
router.route("/login").post(login);
router.get("/logout", logout);
router.get("/user/:userId", getSingleUser);
router.route("/getCurrentUser").get(authenticateUser, getCurrentUser);

export default router;
