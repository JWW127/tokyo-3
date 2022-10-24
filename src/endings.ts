import { rl } from ".";
import { Argv } from "./types";
import { unit03 } from "./unit-03";
import { mari } from "./mari-the-beast";
import { shinji } from "./shinji";
import { rei } from "./rei";
import { pen } from "./pen";
import { dss } from "./dss";
import { gendo } from "./gendo";
import { nerv } from "./nerv";
import { seele } from "./seele";
import alert from "alert";
import { kaworu } from "./kaworu";
import { asuka } from "./asuka";

export const endingAnimationCall = (argv: Argv) => {
  if (argv.c === "beast") {
    return mari();
  } else if (argv.c === "angel") {
    return unit03();
  } else if (argv.c === "shinji") {
    return shinji();
  } else if (argv.c === "rei") {
    return rei();
  } else if (argv.c === "pen") {
    return pen();
  } else if (argv.c === "nerv") {
    return nerv();
  } else if (argv.c === "gendo") {
    return gendo();
  } else if (argv.c === "dss") {
    return dss();
  } else if (argv.c === "asuka") {
    return asuka();
  } else if (argv.c === "red") {
    return unit03();
  } else if (argv.c === "seele") {
    return seele();
  } else if (argv.c === "kaworu") {
    return kaworu();
  } else {
    rl.write("\u001B[?25h");
    console.clear();
    alert("🚨TIME🚨");
    process.exit();
  }
};
