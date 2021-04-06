const mongoose = require("mongoose");
const { Schema } = mongoose;

const itemSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  sumBooking: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    default: "Indonesia",
  },
  city: {
    type: String,
    required: true,
  },
  isPopular: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    default: "night",
  },
  imageId: [
    {
      type: Schema.ObjectId,
      ref: "Image",
    },
  ],
  categoryId: {
    type: Schema.ObjectId,
    ref: "Category",
  },
  featureId: [
    {
      type: Schema.ObjectId,
      ref: "Feature",
    },
  ],
  activityId: [
    {
      type: Schema.ObjectId,
      ref: "Activity",
    },
  ],
});

module.exports = mongoose.model("Item", itemSchema);
