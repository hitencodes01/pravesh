import mongoose from "mongoose";

type Course = "BBA" | "BCA" | "MBA" | "BTECH" | "ITI" | "POLYTECHNIC";
type Status = "query" | "contacted" | "success" | "failed";
type Board = "CBSE" | "UP";
type ScoreCard = {
  type: "JEE" | "CUET" | "JEECUP";
  score: string;
};

interface ILeadSchema {
  id: string;
  fullName: string;
  email: string;
  contact: string;
  interestedCourse: Course;
  status: Status;
  counsler: mongoose.Schema.Types.ObjectId;
  board: Board;
  percentage10: string;
  percentage12: string;
  scoreCard: ScoreCard;
  document: string;
}

const leadSchema = new mongoose.Schema<ILeadSchema>(
  {
    board: {
      type: String,
      enum: ["CBSE", "UP"],
      required: true,
    },
    contact: {
      type: String,
      required: true,
      unique: true,
    },
    counsler: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    email: {
      type: String,
    },
    fullName: {
      type: String,
      required: true,
      toLowerCase: true,
      trim: true,
    },
    interestedCourse: {
      type: String,
      enum: ["BBA", "BCA", "MBA", "BTECH", "ITI", "POLYTECHNIC"],
      required: true,
    },
    percentage10: {
      type: String,
      trim: true,
    },
    percentage12: {
      type: String,
      trim: true,
    },
    scoreCard: {
      type: {
        type: String,
        enum: ["JEE", "JEECUP", "CUET"],
      },
      score: {
        type: String,
        trim: true,
      },
    },
    status: {
      type: String,
      enum: ["query", "contacted", "visited", "success", "failed"],
      default: "query",
    },
  },
  { timestamps: true },
);

export const Lead =
  mongoose.models.Lead || mongoose.model<ILeadSchema>("Lead", leadSchema);
