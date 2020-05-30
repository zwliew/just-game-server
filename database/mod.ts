import { DB } from "https://deno.land/x/sqlite/mod.ts";
import { DB_NAME } from "./constants.ts";

export function getRandomWord() {
  const db = new DB(DB_NAME);
  const [word] = db.query(
    "SELECT word FROM dictionary WHERE id IN (SELECT id FROM dictionary ORDER BY RANDOM() LIMIT 1)",
  );
  db.close();
  return word[0];
}
