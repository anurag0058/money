import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/connection.js";
import authRoutes from "./routes/userAuth.js";
import productRoutes from "./routes/itemRoutes.js";
import { swaggerDocs } from "./swagger.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/", authRoutes);
app.use("/products", productRoutes);

swaggerDocs(app);
connectDB();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
