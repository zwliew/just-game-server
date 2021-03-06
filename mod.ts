import { Application } from "https://deno.land/x/abc/mod.ts";
import { logger } from "https://deno.land/x/abc/middleware/logger.ts";
import { cors } from "https://deno.land/x/abc/middleware/cors.ts";
import { HttpMethod } from "https://deno.land/x/abc/constants.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
import { getRandomWord } from "./database/mod.ts";

console.log("Starting Just Game server");

const { PORT } = config();

const app = new Application();

const root = app.group("/just-game");
root.get("/", (c) => {
  return "Hello! Welcome to Just Game's server :)";
});

const hangman = root.group("/hangman");
hangman.get("/word", (c) => {
  return getRandomWord();
});

app
  .use(logger())
  .use(
    cors({
      allowMethods: [HttpMethod.Get],
    })
  )
  .start({ port: +PORT });
