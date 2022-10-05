"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unit02 = void 0;
const ascii_art_1 = __importDefault(require("ascii-art"));
const colorette_1 = require("colorette");
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
                console.log((0, colorette_1.bold)((0, colorette_1.red)("DEATH! IMPACT! DEATH! IMPACT! DEATH! IMPACT! DEATH! IMPACT! DEATH! IMPACT! DEATH!")));
                swap = !swap;
            });
        }
        else {
            image2.write((err, rendered) => {
                console.clear();
                console.log(rendered);
                console.log((0, colorette_1.bold)((0, colorette_1.yellow)("IMPACT! DEATH! IMPACT! DEATH! IMPACT! DEATH! IMPACT! DEATH! IMPACT! DEATH! IMPACT!")));
                swap = !swap;
            });
        }
    }, 700);
    const clear02 = setTimeout(() => {
        clearInterval(walk);
        clearTimeout(clear02);
        console.clear();
        console.log((0, colorette_1.red)(".....(っ◔◡◔)っ EXAMPLE --> | tokyo --min 5 --color red |"));
    }, 10000);
    walk;
    clear02;
};
exports.unit02 = unit02;
