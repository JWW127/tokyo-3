"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
const unit_02_1 = require("./unit-02");
(0, unit_02_1.unit02)();
const argv = (0, yargs_1.default)(process.argv.slice(2))
    .options({
    a: { type: "boolean", default: true },
    b: { type: "boolean", default: true },
    c: { type: "boolean", default: true },
})
    .parseSync();
//type Argv = typeof argv;
console.log("see you next time");
if (argv.c) {
    console.log("c works");
}
