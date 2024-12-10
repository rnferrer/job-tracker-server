import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import cors from "cors"


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

/* SERVER */
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server sunning on port ${port}`);
});