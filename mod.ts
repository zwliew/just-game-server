import { Application } from "https://deno.land/x/abc/mod.ts";
import { DB } from "https://deno.land/x/sqlite/mod.ts";
import { getRandomWord } from "./database/mod.ts";

console.log('Starting Just Game server');

const db = new DB("server.db");

const app = new Application();
app
  .get("/hangman/word", (c) => {
    return getRandomWord();
  })
  .start({ port: 8080 });
