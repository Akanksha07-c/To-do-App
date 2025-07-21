import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true

}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended:true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


app.get("/",(req, res) => {
    res.send("This is Akanksha Pandey ,a backend developer from India and also AI/Ml developer");
});

import userRouter from './routes/user.routes.js'

app.use("/api/v1/users", userRouter)

export default app;