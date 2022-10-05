"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mari = void 0;
const ascii_art_1 = __importDefault(require("ascii-art"));
const colorette_1 = require("colorette");
const mari = () => {
    let swap = true;
    const image1 = new ascii_art_1.default.Image({
        filepath: "../images/mari-small.png",
    });
    const image2 = new ascii_art_1.default.Image({
        filepath: "../images/mari-small-invert.png",
    });
    const mariBeast = setInterval(() => {
        if (swap) {
            image1.write((err, rendered) => {
                console.clear();
                console.log(rendered);
                console.log((0, colorette_1.bgRedBright)((0, colorette_1.bold)((0, colorette_1.green)("BACK DOOR CODE: BEAST | BACK DOOR CODE: BEAST | BACK DOOR CODE: BEAST | BACK DOOR"))));
                swap = !swap;
            });
        }
        else {
            image2.write((err, rendered) => {
                console.clear();
                console.log(rendered);
                console.log((0, colorette_1.bold)((0, colorette_1.yellow)("A.T. FIELD: MAX | LIMITER: OFF | A.T. FIELD: MAX | LIMITER: OFF | A.T. FIELD: MAX")));
                swap = !swap;
            });
        }
    }, 700);
    const clearMari = setTimeout(() => {
        clearInterval(mariBeast);
        clearTimeout(clearMari);
        console.clear();
        console.log((0, colorette_1.red)(".....(っ◔◡◔)っ EXAMPLE --> | tokyo --min 5 --color red |"));
    }, 10000);
    mariBeast;
    clearMari;
};
exports.mari = mari;
