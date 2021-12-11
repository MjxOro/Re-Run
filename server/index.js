require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const PORT = process.env.PORT || 8080;
const userRoutes = require("./routes/userRoutes");
const adPostRoutes = require("./routes/adPostRoutes");
const AdPost = require("./models/adPosts");
const secureUserRoutes = require("./routes/secure/sercureUser");
const authorize = require("./middleware/authorize");
const path = require("path");

mongoose.connect(
  process.env.MONGODB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to DB");
  }
);
app.use(cors());
app.use(express.json());
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));

app.use(express.static(path.join(__dirname, "public")));
app.use("/preview", adPostRoutes);
app.use("/users", userRoutes);
app.use("/secure", authorize, secureUserRoutes);

if (process.env.NODE_ENV === "production") {
  // Handle React routing, return all requests to React app
  app.use(express.static(path.resolve(__dirname, "..", "client", "build")));
  app.get("*", (request, response) => {
    response.sendFile(
      path.resolve(__dirname, "..", "client", "build", "index.html")
    );
  });
}
app.listen(PORT, () => {
  console.log("Server started, Listening on port " + PORT);
});
