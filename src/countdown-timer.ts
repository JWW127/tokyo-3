import yargs from "yargs";
const cfonts = require("cfonts");

//grab args from command line
const argv = yargs(process.argv.slice(2))
  .options({
    m: { type: "number" },
  })
  .parseSync();

//timer initial
let timer = {
  minutes: 0,
  seconds: 0,
};

// set timer logic
if (argv.m) {
  timer = {
    minutes: argv.m - 1,
    seconds: 59,
  };
}

const RemainingTime = () => {
  //count down logic
  timer.seconds = timer.seconds - 1;
  if (timer.seconds === 0) {
    timer.minutes = timer.minutes - 1;
    //exit logic
    if (timer.minutes < 1 && timer.seconds === 0) {
      clearInterval(remaining);
      clearInterval(renderClock);
      console.clear();
      console.log("see you space cowboy");
    } else {
      timer.seconds = 60;
    }
  }
};

// function that renders clock as a font
const color1 = () => {
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
      //colors: ["#52D053", "#3b0967"],
      colors: ["#52D053", "candy"],
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

// function that renders clock as a font
const color2 = () => {
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

//calls clock logic on 1sec interval
const remaining = setInterval(() => {
  RemainingTime();
}, 1000);
//calls color swapper & clock font render
const renderClock = setInterval(() => {
  Math.floor(Math.random() * 10) % 2 === 0 ? color1() : color2();
}, 300);

remaining;
renderClock;
