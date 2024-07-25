const { connectDB } = require("./config/database");
const express = require("express");
const compression = require("compression");
const cors = require("cors");
const workoutRoutes = require("./routes/workoutRoutes");
const {corsOptions} = require("./utils/Cors");
const app = express();

app.use(compression());

app.use(cors(corsOptions));
app.use(express.json());

app.use("/", workoutRoutes);

connectDB();

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} http://localhost:${PORT}`);
});
