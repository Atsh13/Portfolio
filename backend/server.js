console.log("THIS SERVER FILE IS RUNNING ✅");
// 📦 IMPORTS
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// 🚀 INIT
const app = express();
const PORT = 5000;

// 🔧 MIDDLEWARE
app.use(cors({
  origin: "https://frontend-portfolio-atshaya.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json());

// 🔗 MONGODB CONNECTION (USE YOUR WORKING URL)
mongoose.connect(
 "mongodb://atshayavdm_db_user:Atsh13Mongodb@ac-mowlztc-shard-00-00.qsvqbab.mongodb.net:27017,ac-mowlztc-shard-00-01.qsvqbab.mongodb.net:27017,ac-mowlztc-shard-00-02.qsvqbab.mongodb.net:27017/?ssl=true&replicaSet=atlas-10wlbj-shard-0&authSource=admin&appName=Cluster0"
)
.then(() => console.log("MongoDB Connected ✅"))
.catch((err) => console.log("MongoDB Error ❌:", err));

// 📁 IMPORT MODEL
const Project = require("./models/Project");

// 🧪 ROOT ROUTE (IMPORTANT)
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

// 📥 GET ALL PROJECTS
app.get("/projects", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 📤 ADD PROJECT
app.post("/projects", async (req, res) => {
  try {
    const newProject = new Project(req.body);
    await newProject.save();
    res.json(newProject);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🧪 TEST ROUTE (FOR DEBUG)
app.get("/test", (req, res) => {
  res.send("Test route working ✅");
});

// 🚀 START SERVER (MUST BE LAST)
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});