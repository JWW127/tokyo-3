import { Argv, rl } from ".";
import alert from "alert";
import { unit03 } from "./unit-03";
import { mari } from "./mari-the-beast";
import { shinji } from "./shinji";
import { rei } from "./rei";
import { pen } from "./pen";
import { dss } from "./dss";
import { gendo } from "./gendo";
import { nerv } from "./nerv";
const cfonts = require("cfonts");

export type Timer = {
  minutes: number;
  seconds: number;
};

const countdown = (argv: Argv) => {
  /*-------------------------------------------------------------*/
  /*-----------------Pick Countdown Duration---------------------*/
  let timer: Timer = {
    minutes: 0,
    seconds: 0,
  };

  if (argv.t) {
    timer = {
      minutes: 0,
      seconds: 2,
    };
  } else if (argv.m) {
    timer = {
      minutes: argv.m - 1,
      seconds: 59,
    };
  } else {
    timer = {
      minutes: 14,
      seconds: 59,
    };
  }

  /*-------------------------------------------------------------*/
  /*---------------------Color Picking--------------------------*/

  //------------------------------------------hex randomizer
  const ranHex = () => {
    let result = [];
    let hexRef = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
    ];

    for (let n = 0; n < 6; n++) {
      result.push(hexRef[Math.floor(Math.random() * 16)]);
    }
    return result.join("");
  };
  //-------------------------------------------------------

  let colors = {
    main: `#${ranHex()}`,
    accent: `#${ranHex()}`,
    speed: 300,
  };

  type Colors = {
    main: string;
    accent: string;
    speed: number;
  };

  switch (argv.c) {
    case "red":
      colors.main = "#EC2323";
      colors.accent = "#EA8532";
      colors.speed = 120;
      break;
    case "green":
      colors.main = "#52D053";
      colors.accent = "#765898";
      colors.speed = 120;
      break;
    case "pen":
      colors.main = "#FFC933";
      colors.accent = "#C5C3BF";
      colors.speed = 120;
      break;
    case "angel":
      colors.main = "#3e0694";
      colors.accent = "candy";
      colors.speed = 75;
      break;
    case "beast":
      colors.main = "#EC2323";
      colors.accent = "candy";
      colors.speed = 75;
      break;
    case "shinji":
      colors.main = "#39ff14";
      colors.accent = "#765898";
      colors.speed = 300;
      break;
    case "rei":
      colors.main = "#FF929E";
      colors.accent = "#A9D4FC";
      colors.speed = 200;
      break;
    case "gendo":
      colors.main = "#987f57";
      colors.accent = "#9c382f";
      colors.speed = 200;
      break;
    case "nerv":
      colors.main = "#F97D00";
      colors.accent = "#F90000";
      colors.speed = 200;
      break;
    case "dss":
      colors.main = "#000000";
      colors.accent = "candy";
      colors.speed = 200;
      break;
    case "random":
      colors.main = `#${ranHex()}`;
      colors.accent = `#${ranHex()}`;
      colors.speed = 300;
      break;
  }

  /*-------------------------------------------------------------*/
  /*---------------------Timings & Calls--------------------------*/
  const RemainingTime = (timer: Timer, argv: Argv) => {
    //-------------main logic for countdown of clock
    timer.seconds = timer.seconds - 1;
    if (timer.seconds === 0) {
      if (timer.minutes < 1 && timer.seconds === 0) {
        //--need this timeout to allow for user to see clock hit ~ 00:00:
        let last = setTimeout(() => {
          //---clear inital timers
          clearInterval(remaining);
          clearInterval(renderClock);
          //
          //-------------call ending animation
          if (argv.c === "beast") {
            mari();
            clearTimeout(last);
          } else if (argv.c === "angel") {
            unit03();
            clearTimeout(last);
          } else if (argv.c === "shinji") {
            shinji();
            clearTimeout(last);
          } else if (argv.c === "rei") {
            rei();
            clearTimeout(last);
          } else if (argv.c === "pen") {
            pen();
            clearTimeout(last);
          } else if (argv.c === "nerv") {
            nerv();
            clearTimeout(last);
          } else if (argv.c === "gendo") {
            gendo();
            clearTimeout(last);
          } else if (argv.c === "dss") {
            dss();
            clearTimeout(last);
          } else {
            rl.write("\u001B[?25h");
            console.clear();
            alert("🚨TIME🚨");
            clearTimeout(last);
            process.exit();
          }
        }, 1000);
        last;
      } else {
        timer.minutes = timer.minutes - 1;
        timer.seconds = 59;
      }
    }
  };

  /*-------------------------------------------------------------*/
  /*-------------------Clock & Animations------------------------*/
  const colorRender = (timer: Timer, colors: Colors) => {
    console.clear();
    cfonts.say(
      `   ${
        timer.minutes < 10
          ? timer.minutes < 1
            ? "00"
            : "0" + timer.minutes
          : timer.minutes
      } : ${
        timer.seconds < 10 ? "0" + timer.seconds : timer.seconds
      } : ${new Date().getMilliseconds()}     `,
      {
        font: "block",
        align: "left",
        colors: [`${colors.main}`, `${colors.accent}`],
        background: "transparent",
        letterSpacing: 0,
        lineHeight: 1,
        space: true,
        maxLength: "80",
        gradient: false,
        independentGradient: false,
        transitionGradient: false,
        env: "node",
      }
    );
  };

  /*-------------------------------------------------------------*/
  /*------------------------Intervals ---------------------------*/
  const remaining = setInterval(() => {
    RemainingTime(timer, argv);
  }, 1000);
  //calls color swapper & clock font render
  const renderClock = setInterval(() => {
    colorRender(timer, colors);
  }, colors.speed);

  //------------------------------------- hide cursor
  rl.write("\u001B[?25l");
  remaining;
  renderClock;
};

export default countdown;
