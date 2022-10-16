#!/usr/bin/env node
import readline from "readline";
import yargs from "yargs";
import countdown from "./countdown-render";
import {
  red,
  cyan,
  green,
  magenta,
  white,
  blue,
  bold,
  bgBlackBright,
  yellow,
  blueBright,
  redBright,
  blackBright,
  magentaBright,
} from "colorette";
export type Argv = typeof argv;
export const example =
  "\n ........(っ◔◡◔)っ EXAMPLE|        $ tokyo --min 5 --color red             | \n";

process.stdin.resume();
export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

process.on("SIGINT", () => {
  rl.write("\u001B[?25h");
  console.clear();
  process.exit(0);
});

const version = require("../package").version;
export const argv = yargs(process.argv.slice(2))
  .usage(bgBlackBright(bold(yellow(`\n\n  ${example}`))))
  .options({
    m: {
      type: "number",
      alias: "min",
      describe: "Timer Duration ::  enter number of minutes",
      usage: "tokyo -m 5",
    },
    c: {
      type: "string",
      alias: "color",
      describe: `Color Options  ::  ${red("red")}, ${green(
        "green"
      )}, ${blueBright("angel")}, ${redBright("beast")}, ${blackBright(
        "rei"
      )}, ${magenta("shinji")}, ${blue("gendo")}, ${cyan("dss")}, ${white(
        "pen"
      )}, ${magentaBright("nerv")}, random`,
      usage: "tokyo -c red",
    },
    t: {
      alias: "test",
      describe: "Dev Testing    ::  sets timer sub 1 min",
    },
    h: {
      alias: "help",
    },
  })
  .help()
  .version(`${version}`)
  .parseSync();

countdown(argv);
