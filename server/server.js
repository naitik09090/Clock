import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 🔹 Connect to MongoDB
mongoose.connect("mongodb+srv://vclock:Naitik.41105@cluster0.nylszuw.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error("❌ MongoDB Error:", err));

// 🔹 User Schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  random_user: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

// 🔹 Login API
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // 1. Check if user exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      // ✅ Existing user check
      if (existingUser.password === password) {
        return res.json({ success: true, message: "Login successful", user: existingUser });
      } else {
        return res.status(401).json({ success: false, message: "Invalid password" });
      }
    }

    // ❌ Not found → store as random user
    const newUser = new User({
      email,
      password,
      random_user: true
    });

    await newUser.save();
    return res.json({ success: true, message: "Random user stored in MongoDB", user: newUser });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(5000, () => console.log("🚀 Server running on port 5000"));
