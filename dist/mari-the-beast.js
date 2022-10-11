"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mari = void 0;
const ascii_art_1 = __importDefault(require("ascii-art"));
const colorette_1 = require("colorette");
const _1 = require(".");
const mari = () => {
    let swap = true;
    const image1 = new ascii_art_1.default.Image({
        filepath: "../images/mari-small.png",
        threshhold: 100,
    });
    const image2 = new ascii_art_1.default.Image({
        filepath: "../images/mari-small-invert.png",
        threshhold: 100,
    });
    const mariBeast = setInterval(() => {
        if (swap) {
            image1.write((err, rendered) => {
                console.clear();
                console.log(rendered);
                console.log((0, colorette_1.bgRedBright)((0, colorette_1.bold)((0, colorette_1.green)("BACK DOOR CODE: THE BEAST | BACK DOOR CODE: THE BEAST | BACK DOOR CODE: THE BEAST"))));
                swap = !swap;
            });
        }
        else {
            image2.write((err, rendered) => {
                console.clear();
                console.log(rendered);
                console.log((0, colorette_1.bold)((0, colorette_1.yellow)("BACK DOOR CODE: THE BEAST | BACK DOOR CODE: THE BEAST | BACK DOOR CODE: THE BEAST")));
                swap = !swap;
            });
        }
    }, 120);
    const clearMari = setTimeout(() => {
        clearInterval(mariBeast);
        clearTimeout(clearMari);
        _1.rl.write("\u001B[?25h");
        console.clear();
        console.log((0, colorette_1.yellow)(_1.example));
        process.exit();
    }, 5000);
    mariBeast;
    clearMari;
};
exports.mari = mari;
