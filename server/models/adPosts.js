const mongoose = require("mongoose");

const adPostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: String,
    },
    premium: {
      type: Boolean,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    location: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

adPostSchema.methods.toJSON = function () {
  const adPost = this;
  const adPostObject = adPost.toObject();
  return adPostObject;
};

const AdPost = mongoose.model("AdPost", adPostSchema);

module.exports = AdPost;
