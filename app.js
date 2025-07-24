import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
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
