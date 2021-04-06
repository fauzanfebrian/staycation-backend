const mongoose = require("mongoose");
const { Schema } = mongoose;
const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  itemId: [
    {
      type: Schema.ObjectId,
      ref: "Item",
    },
  ],
});

module.exports = mongoose.model("Category", categorySchema);
