const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const app = express();
require("dotenv").config();

const PORT = 5000 || process.env.PORT;

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://niket2219:Niket250+@cluster0.3hlce2r.mongodb.net/Forms",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/auth", authRoutes);

const server = app.listen(PORT, () => console.log(`Server started on ${PORT}`));
