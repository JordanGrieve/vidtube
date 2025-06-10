import mongoose, { Scheme } from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    subscriber: {
      type: Schema.Types.ObjectId, // one who subscribes
      ref: "User", // Reference to User model
      required: true,
    },
    channel: {
      type: Schema.Types.ObjectId, // the channel being subscribed to
      ref: "User", // Reference to User model
      required: true,
    },
  },
  { timestamps: true }
);
export const Subscription = mongoose.model("Subscription", subscriptionSchema);
