const mongoose = require("mongoose");

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
    },
    icon: {
      type: String,
    },
  },
  {
    writeConcern: { w: "majority", wtimeout: 5000 },
  }
);

exports.Category = mongoose.model("Category", categorySchema);
