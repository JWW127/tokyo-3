"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.baka = void 0;
const ascii_art_1 = __importDefault(require("ascii-art"));
const colorette_1 = require("colorette");
const _1 = require(".");
const baka = () => {
    let swap = 1;
    const imageBase = new ascii_art_1.default.Image({
        filepath: "../images/small-sequenced/unit-1-base-small.png",
        threshhold: 100,
    });
    const image2 = new ascii_art_1.default.Image({
        filepath: "../images/small-sequenced/unit-1-2-small.png",
        threshhold: 100,
    });
    const image3 = new ascii_art_1.default.Image({
        filepath: "../images/small-sequenced/unit-1-3-small.png",
        threshhold: 100,
    });
    const image4 = new ascii_art_1.default.Image({
        filepath: "../images/small-sequenced/unit-1-4-small.png",
        threshhold: 100,
    });
    const image5 = new ascii_art_1.default.Image({
        filepath: "../images/small-sequenced/unit-1-5-small.png",
        threshhold: 100,
    });
    const image6 = new ascii_art_1.default.Image({
        filepath: "../images/small-sequenced/unit-1-6-small.png",
        threshhold: 100,
    });
    const bakaRun = setInterval(() => {
        if (swap === 1) {
            imageBase.write((err, rendered) => {
                console.clear();
                console.log(rendered);
                console.log((0, colorette_1.bold)((0, colorette_1.green)("A.T. FIELD ▁                 A.T. FIELD ▁                 A.T. FIELD ▁                ")));
                swap = swap + 1;
            });
        }
        else if (swap === 2) {
            image2.write((err, rendered) => {
                console.clear();
                console.log(rendered);
                console.log((0, colorette_1.bold)((0, colorette_1.green)("A.T. FIELD ▁ ▂               A.T. FIELD ▁ ▂               A.T. FIELD ▁ ▂               ")));
                swap = swap + 1;
            });
        }
        else if (swap === 3) {
            image3.write((err, rendered) => {
                console.clear();
                console.log(rendered);
                console.log((0, colorette_1.bold)((0, colorette_1.yellow)("A.T. FIELD ▁ ▂ ▄             A.T. FIELD ▁ ▂ ▄             A.T. FIELD ▁ ▂ ▄            ")));
                swap = swap + 1;
            });
        }
        else if (swap === 4) {
            image4.write((err, rendered) => {
                console.clear();
                console.log(rendered);
                console.log((0, colorette_1.bold)((0, colorette_1.yellow)("A.T. FIELD ▁ ▂ ▄ ▅           A.T. FIELD ▁ ▂ ▄ ▅           A.T. FIELD ▁ ▂ ▄ ▅          ")));
                swap = swap + 1;
            });
        }
        else if (swap === 5) {
            image5.write((err, rendered) => {
                console.clear();
                console.log(rendered);
                console.log((0, colorette_1.bold)((0, colorette_1.red)("A.T. FIELD ▁ ▂ ▄ ▅ ▆         A.T. FIELD ▁ ▂ ▄ ▅ ▆         A.T. FIELD ▁ ▂ ▄ ▅ ▆        ")));
                swap = swap + 1;
            });
        }
        else if (swap === 6) {
            image6.write((err, rendered) => {
                console.clear();
                console.log(rendered);
                console.log((0, colorette_1.bold)((0, colorette_1.red)("A.T. FIELD ▁ ▂ ▄ ▅ ▆ ▇ █ █ █ A.T. FIELD ▁ ▂ ▄ ▅ ▆ ▇ █ █ █ A.T. FIELD ▁ ▂ ▄ ▅ ▆ ▇ ")));
                swap = 1;
            });
        }
    }, 80);
    const clearBaka = setTimeout(() => {
        clearInterval(bakaRun);
        clearTimeout(clearBaka);
        _1.rl.write("\u001B[?25h");
        console.clear();
        console.log((0, colorette_1.yellow)(_1.example));
        process.exit();
    }, 5000);
    bakaRun;
    clearBaka;
};
exports.baka = baka;
