import { Argv, Colors } from "./types";

export const ranHex = () => {
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

export const colorChoice = (argv: Argv) => {
  let colors: Colors = {
    main: `#${ranHex()}`,
    accent: `#${ranHex()}`,
    speed: 300,
  };

  switch (argv.c) {
    case "red":
      colors.main = "#EC2323";
      colors.accent = "#EA8532";
      colors.speed = 400;
      break;
    case "green":
      colors.main = "#52D053";
      colors.accent = "#765898";
      colors.speed = 120;
      break;
    case "pen":
      colors.main = "#FFC933";
      colors.accent = "#C5C3BF";
      colors.speed = 120;
      break;
    case "seele":
      colors.main = "#760000";
      colors.accent = "#E90000";
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
    case "shinji":
      colors.main = "#39ff14";
      colors.accent = "#765898";
      colors.speed = 300;
      break;
    case "rei":
      colors.main = "#FF929E";
      colors.accent = "#A9D4FC";
      colors.speed = 200;
      break;
    case "gendo":
      colors.main = "#987f57";
      colors.accent = "#9c382f";
      colors.speed = 200;
      break;
    case "nerv":
      colors.main = "#F97D00";
      colors.accent = "#F90000";
      colors.speed = 200;
      break;
    case "dss":
      colors.main = "#000000";
      colors.accent = "candy";
      colors.speed = 200;
      break;
    case "random":
      colors.main = `#${ranHex()}`;
      colors.accent = `#${ranHex()}`;
      colors.speed = 300;
      break;
  }
  return colors;
};
