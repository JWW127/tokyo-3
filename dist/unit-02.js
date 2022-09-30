"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unit02 = void 0;
const ascii_art_1 = __importDefault(require("ascii-art"));
const unit02 = () => {
    let image1 = new ascii_art_1.default.Image({
        filepath: "../images/sunset1.gif",
    });
    let image2 = new ascii_art_1.default.Image({
        filepath: "../images/sunset2.gif",
    });
    setInterval(() => {
        setTimeout(() => {
            image1.write((err, rendered) => {
                console.clear();
                console.log(rendered);
            });
        }, 1000);
        image2.write((err, rendered) => {
            console.clear();
            console.log(rendered);
        });
    }, 2000);
};
exports.unit02 = unit02;
