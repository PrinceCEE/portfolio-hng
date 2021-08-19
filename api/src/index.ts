import express from 'express';
import mongoose from 'mongoose';
import Log from 'morgan';
import cors from 'cors';
import { IResponse, Req, Res, Next } from './interfaces';
import { asyncHandler } from './util';
import { postContact } from './handlers';

const NODE_ENV = process.env.NODE_ENV || "development"
    , DB_URL = process.env.DB_URL || "mongodb://127.0.0.1:27017"
    , PORT = process.env.PORT || 3002;

// init server and connect to the db
const app = express();
mongoose.connect(DB_URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true
})
  .then(() => console.log("Server connected to the db"))
  .catch(err => console.log(err.message));

// set up the middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(Log("dev"));
if(NODE_ENV === "development") {
  app.use(cors({
    credentials: true,
    origin: [
      "http://localhost:3000",
      "https://princecee-portfolio.herokuapp.com"
    ],
    methods: [
      "POST",
      "GET",
      "OPTIONS",
      "PUT",
      "UPDATE",
      "DELETE"
    ],
    allowedHeaders: [
      "X-Requested-With",
      "X-HTTP-Method-Override",
      "Content-Type",
      "Accept",
      "Authorization"
    ]
  }));
}

// process the contact form
// @ts-ignore
app.post('/contact', asyncHandler(postContact));

// @ts-ignore
app.use((err, req: Req, res: Res, next: Next) => {
  const response: IResponse = {
    success: false,
    data: err.message
  };
  res.status(500).json(response);
});

app.use((req: Req, res: Res, next: Next) => {
  const response: IResponse = {
    success: false,
    data: "Not found"
  };

  res.status(404).json(response);
});

// catch uncaught errors
process.on("uncaughtException", (err) => {
  console.log(err);
  process.exit(process.exitCode);
});

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(process.exitCode);
});

app.listen(PORT, () => console.log("App listening on port " + PORT));