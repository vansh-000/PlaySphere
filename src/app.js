import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

// use cors
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// excepting json and url format
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
// making the public folder eligible for the static files on the server
app.use(express.static("public"));
// app now have browser cookie access
app.use(cookieParser());

export { app };
