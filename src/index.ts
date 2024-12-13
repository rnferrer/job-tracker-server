import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
/* ROUTE IMPORTS */
import userRoutes from "./routes/userRouter";
import appliedJobRoutes from "./routes/appliedJobRouter";
import savedJobRoutes from "./routes/savedJobRouter";
import interviewRoutes from "./routes/interviewRouter";

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));
app.use(cors());

/* ROUTES */
app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

app.use("/user", userRoutes);
app.use("/applied", appliedJobRoutes);
app.use("/saved", savedJobRoutes);
app.use("/interview", interviewRoutes);

/* SERVER */
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server sunning on port ${port}`);
});