import { DB } from "https://deno.land/x/sqlite/mod.ts";
import { readJson } from "https://deno.land/std/fs/mod.ts";
import { DB_NAME } from "./constants.ts";

interface Data {
  words: string[];
}

function isData(val: unknown): val is Data {
  return (val as Data).words !== undefined;
}

const db = new DB(DB_NAME);
db.query(
  "CREATE TABLE IF NOT EXISTS dictionary (id INTEGER PRIMARY KEY AUTOINCREMENT, word TEXT)",
);

const data = await readJson("./database/data.json");
if (isData(data)) {
  for (const word of data.words) {
    db.query("INSERT INTO dictionary (word) VALUES (?)", [word]);
  }
}

db.close();
