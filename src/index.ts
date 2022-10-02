import yargs from "yargs";
import { unit02 } from "./unit-02";

//unit02();
//
const argv = yargs(process.argv.slice(2))
  .options({
    m: { type: "number" },
  })
  .parseSync();

if (argv.b) {
  let times = {
    seconds: argv.b,
  };
  setInterval(() => {
    times.seconds = times.seconds - 1;
    if (times.seconds < 1) {
      process.exit();
    }
    console.log(times);
  }, 1000);
}
