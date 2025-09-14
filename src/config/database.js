import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { configDotenv } from "dotenv";

configDotenv();

const sql = neon(process.env.DATABASE_URL);

const db = drizzle(sql);