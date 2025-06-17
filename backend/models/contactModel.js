const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // corrected: `required` not `require`
    description: "Name must be string and required",
  },
  email: {
    type: String,
    required: true,
    description: "Email must be string and required",
  },
  message: {
    type: String,
    required: true,
    description: "Message must be string and required",
  },
}, {
  collection: "portfolioCollection",
});

const contactModel = mongoose.model("Contact", contactSchema);
module.exports = contactModel;
