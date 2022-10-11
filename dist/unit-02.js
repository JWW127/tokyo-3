"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unit02 = void 0;
const ascii_art_1 = __importDefault(require("ascii-art"));
const colorette_1 = require("colorette");
const _1 = require(".");
const unit02 = () => {
    let swap = true;
    const image1 = new ascii_art_1.default.Image({
        filepath: "../images/sunset1.png",
    });
    const image2 = new ascii_art_1.default.Image({
        filepath: "../images/sunset2.png",
    });
    const walk = setInterval(() => {
        if (swap) {
            image1.write((err, rendered) => {
                console.clear();
                console.log(rendered);
                console.log((0, colorette_1.bold)((0, colorette_1.red)("WARNING! 9th ANGEL! WARNING! 9th ANGEL! WARNING! 9th ANGEL! WARNING! 9th ANGEL!")));
                swap = !swap;
            });
        }
        else {
            image2.write((err, rendered) => {
                console.clear();
                console.log(rendered);
                console.log((0, colorette_1.bold)((0, colorette_1.yellow)("9th ANGEL! WARNING! 9th ANGEL! WARNING! 9th ANGEL! WARNING! 9th ANGEL! WARNING!")));
                swap = !swap;
            });
        }
    }, 700);
    const clear02 = setTimeout(() => {
        clearInterval(walk);
        clearTimeout(clear02);
        //------------------------------------------ unhide cursor
        _1.rl.write("\u001B[?25h");
        console.clear();
        console.log((0, colorette_1.yellow)(_1.example));
        process.exit();
    }, 5000);
    walk;
    clear02;
};
exports.unit02 = unit02;
