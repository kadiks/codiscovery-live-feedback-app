require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const { PORT, DB_URL } = process.env;

// DB connect

mongoose.connect(
  DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log("Cannot connect to DB", err);
      return;
    }
    console.log("DB connected");
  }
);

const feedbackSchema = {
  title: String,
  description: String,
  type: {
    type: String,
    required: true,
    enum: ["live", "tutorial", "article"],
  },
  created: {
    type: Date,
    default: Date.now,
  },
};

const FeedbackModel = mongoose.model("Feedback", feedbackSchema);

// Server setup
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// CRUD
// // Create -> POST
// // Read -> GET
// // Update -> PUT
// // Delete -> DELETE

// app[VERB](route<String>, callback(request, response)<Function>)

app.get("/", (req, res) => {
  res.json({
    name: "Welcome to Codiscovery Feedback API",
  });
});

const addNewFeedback = async (req, res) => {
  // catch route
  console.log("req.body", req.body); // get data from client
  const entry = new FeedbackModel(req.body); // turn client data to model
  try {
    const savedEntry = await entry.save(); // get back DB entry = send model data to DB
    res.json({
      success: true,
      data: savedEntry, // display DB entry
    });
  } catch (e) {
    res.json({
      success: false,
      data: {
        message: e.toString(),
      },
    });
  }
};

app.post("/feedbacks", addNewFeedback); // Same URL => Different URI

const receiveFeedback = async (req, res) => {
  const feedbacks = await FeedbackModel.find();

  res.json({
    success: true,
    data: feedbacks,
  });
};

app.get("/feedbacks", receiveFeedback); // Same URL => Different URI

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});

/**
 *
 * [{
 *      name: "Jason",
 *      age: 28
 * }, {
 *      name "Jénaïc",
 *      age: 18
 * }]
 *
 */
