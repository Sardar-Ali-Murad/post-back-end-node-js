import mongoose from "mongoose";

let PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please Provide the title"],
      minlength: 3,
      maxlength: 30,
    },
    message: {
      type: String,
      required: [true, "Please provide the message"],
      minlength: 10,
      maxlength: 300,
    },
    image: {
      type: String,
      required: [true, "Provide the image"],
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "PostUser",
    },
  },
  { timestamps: true }
);

export default mongoose.model("PostSchema", PostSchema);
