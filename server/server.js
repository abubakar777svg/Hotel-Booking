import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import { connectDb } from "./config/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebhooks from "./controllers/clerkWebhooks.js";
import userRouter from "./routes/userRoutes.js";
const app = express();
app.use(cors());
app.use(clerkMiddleware());
//  api to listen webhooks

const port = process.env.PORT || 3000;
app.use("/api/clerk", clerkWebhooks);
app.use("/api/user", userRouter);
connectDb();
app.listen(port, () => {
  console.log(`Your app listening on port ${port}`);
});
