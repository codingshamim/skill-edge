import mongoose, { Schema } from "mongoose";

const courseSchema = new Schema({
  title: {
    required: true,
    type: String,
  },
  subtitle: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  thumbnail: {
    required: true,
    type: String,
  },
  modules: [{ type: Schema.ObjectId, ref: "Module" }],

  price: {
    required: true,
    type: Number,
  },
  active: {
    required: true,
    type: Boolean,
  },

  category: { type: Schema.ObjectId, ref: "Category" },

  instructor: { type: Schema.ObjectId, ref: "User" },

  quizSet: { type: Schema.ObjectId, ref: "Quizset" },

  testimonials: [{ type: Schema.ObjectId, ref: "Testimonial" }],

  learning: {
    required: true,
    type: [String],
  },

  createdOn: {
    required: true,
    type: Date,
  },

  modifiedOn: {
    required: true,
    type: Date,
  },
});

export const Courses =
  mongoose.models.courses ?? mongoose.model("courses", courseSchema);
