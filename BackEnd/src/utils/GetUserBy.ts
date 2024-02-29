import { GetUserByUsernameQuery } from "../database/Querys/UtilQuerys";
import { pool } from "../database/database";

export async function getUserByUsername(username: string) {
  const client = await pool.connect();

  try {
    const { rows } = await client.query(GetUserByUsernameQuery, [username]);

    return rows.length > 0 ? rows[0].username : null;
  } catch (error) {
    console.error(`Error searching for user by username in the database:`, error);
    return null;
  } finally {
    client.release();
  }
}