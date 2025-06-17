const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const contactModel = require("./models/contactModel.js");
const nodemailer = require("nodemailer");

dotenv.config();

const app = express();

const cors = require("cors");
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("MongoDB connected");
}).catch((err) => {
  console.error("MongoDB connection failed:", err.message);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// POST /send route
app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Save to MongoDB
    await contactModel.create({ name, email, message });

    // Email setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (err) {
    console.error("Error in /send:", err);
    res.status(500).json({ error: "Error sending message" });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
