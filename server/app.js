import express from "express";
import {config} from "dotenv";
import ErrorMiddelware from "./middelware/error.js";

const app = express();

app.use(express.json());

config({
    path:"server/config/config.env"
})

app.get("/", (req, res)=>{
    res.send("Welcome")
})

// Importing and Using Routes
import contactRoute from "./routes/contactRoute.js"

app.use(contactRoute)

export default app;

// Using ErrorMiddelware
app.use(ErrorMiddelware);
