import yargs from "yargs";
import countdown from "./countdown-render";

const argv = yargs(process.argv.slice(2))
  .options({
    m: { type: "number" },
    c: { type: "string" },
  })
  .parseSync();

if (argv.m) {
  countdown(argv);
}

export type Argv = typeof argv;
