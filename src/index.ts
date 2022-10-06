#!/usr/bin/env node
import readline from "readline";
import yargs from "yargs";
import countdown from "./countdown-render";
import {
  red,
  green,
  bold,
  bgBlackBright,
  yellow,
  blueBright,
  redBright,
} from "colorette";
const version = require("../package").version;

export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const example =
  "........(っ◔◡◔)っ EXAMPLE|        $ tokyo --min 5 --color red             |";

const argv = yargs(process.argv.slice(2))
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
      )}, ${blueBright("angel")}, ${redBright("beast")}, random`,
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

export type Argv = typeof argv;
