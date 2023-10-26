import express from "express";
let router = express.Router();
import authenticateUser from "../middleware/auth.js";

import {
  createPost,
  getAllPosts,
  getSingleUserPost,
  getCurrentUserPosts,
} from "../controllers/postController.js";

router.route("/").post(authenticateUser, createPost).get(getAllPosts);
router
  .route("/singleUserPosts/:userId")
  .get(authenticateUser, getSingleUserPost);
router.route("/currentUserPosts").get(authenticateUser, getCurrentUserPosts);

export default router;
