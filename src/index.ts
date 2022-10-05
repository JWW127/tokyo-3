#!/usr/bin/env node

import yargs from "yargs";
import countdown from "./countdown-render";
import { red, green, bold, bgBlackBright, magentaBright } from "colorette";
const version = require("../package").version;

const argv = yargs(process.argv.slice(2))
  .usage(
    bgBlackBright(
      bold(
        magentaBright(
          ".....(っ◔◡◔)っ EXAMPLE --> | tokyo --min 5 --color red |"
        )
      )
    )
  )
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
      describe: `Color Options  ::  ${red("red")}, ${green("green")}, beast`,
      usage: "tokyo -c red",
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
