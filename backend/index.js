import express from 'express'
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv'
import connectDb from './utils/db.js';
import userRoute from './routes/user.route.js';
import companyRoute from './routes/company.route.js';
import jobRoute from './routes/job.route.js';
dotenv.config({});

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
const  corsOptions = {
  origin: 'http//localhost:5173',
  Credentials: true
}

app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

// APi's

app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);


app.listen(PORT, ()=>{
  connectDb()
  console.log(`Server is running on port ${PORT}`);
})