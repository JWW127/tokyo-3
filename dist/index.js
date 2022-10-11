#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.example = exports.rl = void 0;
const readline_1 = __importDefault(require("readline"));
const yargs_1 = __importDefault(require("yargs"));
const countdown_render_1 = __importDefault(require("./countdown-render"));
const colorette_1 = require("colorette");
const version = require("../package").version;
exports.rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
exports.example = "........(っ◔◡◔)っ EXAMPLE|        $ tokyo --min 5 --color red             |";
const argv = (0, yargs_1.default)(process.argv.slice(2))
    .usage((0, colorette_1.bgBlackBright)((0, colorette_1.bold)((0, colorette_1.yellow)(`\n\n  ${exports.example}`))))
    .options({
    m: {
        type: "number",
        alias: "min",
        describe: "Timer Duration ::  enter number of minutes",
        usage: "tokyo -m 5",
    },
    c: {
        type: "string",
        alias: "color",
        describe: `Color Options  ::  ${(0, colorette_1.red)("red")}, ${(0, colorette_1.green)("green")}, ${(0, colorette_1.blueBright)("angel")}, ${(0, colorette_1.redBright)("beast")}, random, baka`,
        usage: "tokyo -c red",
    },
    t: {
        alias: "test",
        describe: "Dev Testing    ::  sets timer sub 1 min",
    },
    h: {
        alias: "help",
    },
})
    .help()
    .version(`${version}`)
    .parseSync();
(0, countdown_render_1.default)(argv);
