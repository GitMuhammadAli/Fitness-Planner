const { connectDB } = require("./config/database")
const express = require("express")
const workoutRoutes = require('./routes/workoutRoutes')
const cors = require('cors');
const app = express()

const corsOptions = {
    origin: 'http://localhost:5174',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true 
  };
  
  app.use(cors(corsOptions));
  app.use(express.json());
  
app.use('/', workoutRoutes)

connectDB()

const PORT = process.env.PORT || 9000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} http://localhost:${PORT}`)
})
