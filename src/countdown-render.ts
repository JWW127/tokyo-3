import { Argv } from ".";
import { unit02 } from "./unit-02";
import { mari } from "./mari-the-beast";
const cfonts = require("cfonts");

const countdown = (argv: Argv) => {
  /*-------------------------------------------------------------*/
  /*-----------------Pick Countdown Duration---------------------*/
  let timer = {
    minutes: 0,
    seconds: 0,
  };

  type Timer = typeof timer;

  if (argv.m) {
    timer = {
      minutes: argv.m - 1,
      seconds: 59,
    };
  } else {
    timer = {
      minutes: 15,
      seconds: 59,
    };
  }

  /*-------------------------------------------------------------*/
  /*---------------------Color Picking--------------------------*/
  let colors = {
    main: "#52D053",
    accent: "#765898",
    speed: 120,
  };

  type Colors = {
    main: string;
    accent: string;
    speed: number;
  };

  if (argv.c) {
    if (argv.c === "red") {
      colors.main = "#EC2323";
      colors.accent = "#EA8532";
      colors.speed = 120;
    } else if (argv.c === "beast") {
      colors.main = "#EC2323";
      colors.accent = "candy";
      colors.speed = 75;
    } else {
      colors.main = "#765898";
      colors.accent = "#52D053";
      colors.speed = 200;
    }
  }

  /*-------------------------------------------------------------*/
  /*---------------------Timings & Calls--------------------------*/
  const RemainingTime = (timer: Timer, argv: Argv) => {
    //
    //-------------main logic for countdown of clock
    timer.seconds = timer.seconds - 1;
    if (timer.seconds === 0) {
      if (timer.minutes < 1 && timer.seconds === 0) {
        //
        //-------------when clock is zero clearing everything will exit process
        clearInterval(remaining);
        clearInterval(renderClock);
        //
        //-------------call ending animation
        if (argv.c === "beast") {
          mari();
        } else {
          unit02();
        }
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
      `${
        timer.minutes < 10
          ? timer.minutes < 1
            ? "00"
            : "0" + timer.minutes
          : timer.minutes
      } : ${
        timer.seconds < 10 ? "0" + timer.seconds : timer.seconds
      } : ${new Date().getMilliseconds()}`,
      {
        font: "block",
        align: "left",
        colors: [`${colors.main}`, `${colors.accent}`],
        //colors: ["#3b0967", "#52D053"],
        background: "transparent",
        letterSpacing: 0,
        lineHeight: 1,
        space: false,
        maxLength: "0",
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

  remaining;
  renderClock;
};

export default countdown;
