import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/index.js";
import PostModel from "../models/Post.js";

const createPost = async (req, res) => {
  let { title, message, image } = req.body;
  if (!title || !message || !image) {
    throw new BadRequestError("Please provide all the values");
  }
  req.body.createdBy = req.user.userId;
  await PostModel.create(req.body);
  res.status(StatusCodes.CREATED).json({ msg: "Success" });
};

const getAllPosts = async (req, res) => {
  let Post = await PostModel.find({}).populate("createdBy");
  res.status(StatusCodes.OK).json({ Post });
};

let getSingleUserPost = async (req, res) => {
  let { userId } = req.params;
  let UserPosts = await PostModel.find({ createdBy: userId });
  res.status(StatusCodes.OK).json({ UserPosts });
};

const getCurrentUserPosts = async (req, res) => {
  let Posts = await PostModel.find({ createdBy: req.user.userId });
  res.status(StatusCodes.OK).json({ Posts });
};

export { createPost, getAllPosts, getSingleUserPost, getCurrentUserPosts };
