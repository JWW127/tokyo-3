import { rl } from ".";
import { Colors, Timer, Argv } from "./types";
import { colorChoice } from "./colors";
import { endingAnimationCall } from "./endings";
const cfonts = require("cfonts");

const countdown = (argv: Argv) => {
  let timer: Timer = {
    minutes: 0,
    seconds: 0,
  };

  const startingTime = () => {
    if (argv.t) {
      timer = {
        minutes: 0,
        seconds: 1,
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
  };

  startingTime();

  const RemainingTime = (timer: Timer, argv: Argv) => {
    timer.seconds = timer.seconds - 1;
    if (timer.seconds === 0) {
      if (timer.minutes < 1 && timer.seconds === 0) {
        //--need this timeout to allow for user to see clock hit ~ 00:00:xx
        let last = setTimeout(() => {
          //---clear initial timers
          clearInterval(remaining);
          clearInterval(renderClock);
          endingAnimationCall(argv);
          clearTimeout(last);
        }, 1000);
        last;
      } else {
        timer.minutes = timer.minutes - 1;
        timer.seconds = 59;
      }
    }
  };

  /*-------------------Clock & Animations------------------------*/

  const colors = colorChoice(argv);
  const colorRender = (timer: Timer, colors: Colors) => {
    console.clear();
    cfonts.say(
      `  ${
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

  //interval that maintains clock accuracy
  const remaining = setInterval(() => {
    RemainingTime(timer, argv);
  }, 1000);

  //interval for rendering to screen
  const renderClock = setInterval(() => {
    colorRender(timer, colors);
  }, colors.speed);

  //hides cursor
  rl.write("\u001B[?25l");

  remaining;
  renderClock;
};

export default countdown;
