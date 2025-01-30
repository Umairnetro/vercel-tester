const app = require("../app");


/*
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://umairjd:netro709@saylanimicrofinance.czqqg.mongodb.net/miami");
    console.log("connected to database");
  } catch (error) {
    console.log("Error to connect to database", error);
  }
};

*/

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

module.exports = app;
