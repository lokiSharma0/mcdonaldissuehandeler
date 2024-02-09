import { mongoose, Schema } from "mongoose";
const Status = ["open", "in_progress", "close"];
const issue = new Schema(
  {
    title: {
      type: String,
      require,
    },
    description: {
      type: String,
      require,
    },
    Status: {
      type: String,
      enum: Status,
      require,
      default: "open",
    },
  },
  {
    timestamps: true,
  }
);
const NewIssue = mongoose.model.NewIssue || mongoose.model("NewIssue", issue);
export default NewIssue;
