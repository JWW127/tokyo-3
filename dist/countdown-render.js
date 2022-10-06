"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unit_02_1 = require("./unit-02");
const mari_the_beast_1 = require("./mari-the-beast");
const cfonts = require("cfonts");
const countdown = (argv) => {
    /*-------------------------------------------------------------*/
    /*-----------------Pick Countdown Duration---------------------*/
    let timer = {
        minutes: 0,
        seconds: 0,
    };
    if (argv.t) {
        timer = {
            minutes: 0,
            seconds: 2,
        };
    }
    else if (argv.m) {
        timer = {
            minutes: argv.m - 1,
            seconds: 59,
        };
    }
    else {
        timer = {
            minutes: 15,
            seconds: 59,
        };
    }
    /*-------------------------------------------------------------*/
    /*---------------------Color Picking--------------------------*/
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
    let colors = {
        main: "#52D053",
        accent: "#765898",
        speed: 120,
    };
    if (argv.c) {
        if (argv.c === "red") {
            colors.main = "#EC2323";
            colors.accent = "#EA8532";
            colors.speed = 120;
        }
        else if (argv.c === "angel") {
            colors.main = "#3e0694";
            colors.accent = "candy";
            colors.speed = 75;
        }
        else if (argv.c === "beast") {
            colors.main = "#EC2323";
            colors.accent = "candy";
            colors.speed = 75;
        }
        else if (argv.c === "green") {
            colors.main = "#765898";
            colors.accent = "#52D053";
            colors.speed = 200;
        }
        else if (argv.c === "random") {
            colors.main = `#${ranHex()}`;
            colors.accent = `#${ranHex()}`;
            colors.speed = 200;
        }
    }
    /*-------------------------------------------------------------*/
    /*---------------------Timings & Calls--------------------------*/
    const RemainingTime = (timer, argv) => {
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
                    (0, mari_the_beast_1.mari)();
                }
                else {
                    (0, unit_02_1.unit02)();
                }
            }
            else {
                timer.minutes = timer.minutes - 1;
                timer.seconds = 59;
            }
        }
    };
    /*-------------------------------------------------------------*/
    /*-------------------Clock & Animations------------------------*/
    const colorRender = (timer, colors) => {
        console.clear();
        cfonts.say(`   ${timer.minutes < 10
            ? timer.minutes < 1
                ? "00"
                : "0" + timer.minutes
            : timer.minutes} : ${timer.seconds < 10 ? "0" + timer.seconds : timer.seconds} : ${new Date().getMilliseconds()}     `, {
            font: "block",
            align: "left",
            colors: [`${colors.main}`, `${colors.accent}`],
            background: "transparent",
            letterSpacing: 0,
            lineHeight: 1,
            space: false,
            maxLength: "80",
            gradient: false,
            independentGradient: false,
            transitionGradient: false,
            env: "node",
        });
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
exports.default = countdown;
