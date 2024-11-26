import express , {Request,Response } from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"

import { PrismaClient } from "@prisma/client";

//routes
import projectRoutes from "./routes/projectRoutes";
import taskRoutes from "./routes/taskRoutes";
import searchRoutes from "./routes/searchRoutes";
import userRoutes from "./routes/userRoutes";
import teamRoutes from "./routes/teamRoutes";

//configuration
dotenv.config();
const app = express()
const prisma = new PrismaClient();

app.use(express.json())
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// app.get("/",(req,res)=>{
//     res.send("This is home route");
// })

app.use("/projects", projectRoutes);
app.use("/tasks", taskRoutes);
app.use("/search", searchRoutes);
app.use("/users", userRoutes);
app.use("/teams", teamRoutes);


// Test database connection
const testDatabaseConnection = async () => {
    try {
      await prisma.$connect();
      console.log("Database connected successfully!");
    } catch (error) {
      console.error("Failed to connect to the database:", error);
      process.exit(1); // Exit the process if the database connection fails
    }
  };

const port = Number(process.env.PORT) || 8000
app.listen(port,"0.0.0.0",async() => {
    await testDatabaseConnection();
    console.log(`Server running on port ${port}`);
});