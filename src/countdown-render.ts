import { Argv } from ".";
import { unit02 } from "./unit-02";
const cfonts = require("cfonts");

const countdown = (argv: Argv) => {
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
  }

  /*-------------------------------------------------------------*/
  /*---------------------Timings & Calls--------------------------*/
  /*-------------------------------------------------------------*/
  const RemainingTime = (timer: Timer) => {
    //
    //-------------main logic for countdown of clock
    timer.seconds = timer.seconds - 1;
    if (timer.seconds === 0) {
      timer.minutes = timer.minutes - 1;
      if (timer.minutes < 1 && timer.seconds === 0) {
        //
        //-------------when clock is zero clearing everything will exit process
        clearInterval(remaining);
        clearInterval(renderClock);
        //
        //-------------call animation
        unit02();
      } else {
        //
        //-------------if still minutes to go reset seconds back to 59
        timer.seconds = 59;
      }
    }
  };

  /*-------------------------------------------------------------*/
  /*-------------------Clock & Animations------------------------*/
  /*-------------------------------------------------------------*/
  const color2 = (timer: Timer) => {
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
        colors: ["#52D053", "candy"],
        //colors: ["#3b0967", "#52D053"],
        background: "transparent",
        letterSpacing: 1,
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
  /*-------------------------------------------------------------*/
  const remaining = setInterval(() => {
    RemainingTime(timer);
  }, 1000);
  //calls color swapper & clock font render
  const renderClock = setInterval(() => {
    color2(timer);
  }, 300);

  remaining;
  renderClock;
};

export default countdown;
