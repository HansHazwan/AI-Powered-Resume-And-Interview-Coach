import dotenv from "dotenv";

dotenv.config({});

import pool from "./database";

console.log("server port : " + process.env.PORT);

async function getUsers() {
  const result = await pool.query("SELECT * FROM users");
  console.log(result.rows);
}

getUsers();
