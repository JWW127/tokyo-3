"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const unit_02_1 = require("./unit-02");
const mari_the_beast_1 = require("./mari-the-beast");
const baka_1 = require("./baka");
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
        main: "#52D053",
        accent: "#765898",
        speed: 120,
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
        case "baka":
            colors.main = "#39ff14";
            colors.accent = "#765898";
            colors.speed = 200;
            break;
        case "random":
            colors.main = `#${ranHex()}`;
            colors.accent = `#${ranHex()}`;
            colors.speed = 200;
            break;
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
                else if (argv.c === "angel") {
                    (0, unit_02_1.unit02)();
                }
                else if (argv.c === "baka") {
                    (0, baka_1.baka)();
                }
                else {
                    _1.rl.write("\u001B[?25h");
                    console.clear();
                    process.exit();
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
            space: true,
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
    //------------------------------------- hide cursor
    _1.rl.write("\u001B[?25l");
    remaining;
    renderClock;
};
exports.default = countdown;
