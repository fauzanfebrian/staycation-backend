const mongoose = require("mongoose");
const { Schema } = mongoose;

const featureSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  itemId: {
    type: Schema.ObjectId,
    ref: "Item",
  },
});

module.exports = mongoose.model("Feature", featureSchema);
