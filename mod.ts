import { Application } from "https://deno.land/x/abc/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
import { getRandomWord } from "./database/mod.ts";

console.log("Starting Just Game server");

const { PORT } = config();

const app = new Application();
app
  .get("/hangman/word", (c) => {
    return getRandomWord();
  })
  .start({ port: +PORT });
