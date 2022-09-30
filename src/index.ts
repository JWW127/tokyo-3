import yargs from "yargs";
import { unit02 } from "./unit-02";

unit02();
const argv = yargs(process.argv.slice(2))
  .options({
    a: { type: "boolean", default: true },
    b: { type: "boolean", default: true },
    c: { type: "boolean", default: true },
  })
  .parseSync();

//type Argv = typeof argv;

console.log("see you next time");
if (argv.c) {
  console.log("c works");
}
