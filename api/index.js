import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/usersRoute.js";
import hotelRoute from "./routes/hotelsRoute.js";
import roomRoute from "./routes/roomsRoute.js";
import cookieParser  from 'cookie-parser';


const app = express();
const port = process.env.PORT || 5008;

// DB Connection
const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("Error while connecting to DB");
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB Disconnected!");
});
/*mongoose.connection.on("connected", ()=>{
    console.log("MongoDB Connected!");
})*/

//middlewares
app.use(cookieParser())
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/hotels", hotelRoute);
app.use("/api/rooms", roomRoute);

app.use((err, req, res, next) => {
  // This middleware for error handling
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Some thing went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

//Routing
app.get("/", (req, res) => {
  res.send("Hello from Rezzy Go");
});

//PORT Connection
app.listen(port, () => {
  dbConnect();
  console.log(`Backend connected to PORT: ${port}`);
});
