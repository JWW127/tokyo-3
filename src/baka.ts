import { red, yellow, bold } from "colorette";
import { example, rl } from ".";
import terminalKitPackage from "terminal-kit";

export const baka = () => {
  const { terminal } = terminalKitPackage;
  let swap = 1;

  const run1 = async () => {
    return await terminal.drawImage(`./../images/unit-1-run/r${swap}.jpg`, {
      shrink: { width: 70, height: 70 },
    });
  };
  const atField = [
    "A.T. FIELD ▁                 A.T. FIELD ▁                 A.T. FIELD ▁                ",
    "A.T. FIELD ▁ ▂               A.T. FIELD ▁ ▂               A.T. FIELD ▁ ▂               ",
    "A.T. FIELD ▁ ▂ ▄             A.T. FIELD ▁ ▂ ▄             A.T. FIELD ▁ ▂ ▄            ",
    "A.T. FIELD ▁ ▂ ▄ ▅           A.T. FIELD ▁ ▂ ▄ ▅           A.T. FIELD ▁ ▂ ▄ ▅          ",
    "A.T. FIELD ▁ ▂ ▄ ▅ ▆         A.T. FIELD ▁ ▂ ▄ ▅ ▆         A.T. FIELD ▁ ▂ ▄ ▅ ▆        ",
    "A.T. FIELD ▁ ▂ ▄ ▅ ▆ ▇ █ █ █ A.T. FIELD ▁ ▂ ▄ ▅ ▆ ▇ █ █ █ A.T. FIELD ▁ ▂ ▄ ▅ ▆ ▇ ",
  ];

  const bakaRun = setInterval(async () => {
    terminal.clear();
    if (swap !== 6) {
      await run1();
      swap = swap + 1;
    } else {
      await run1();
      swap = 1;
    }
    console.log(bold(red(atField[swap - 1])));
  }, 300);
  const clearBaka = setTimeout(() => {
    clearInterval(bakaRun);
    clearTimeout(clearBaka);
    rl.write("\u001B[?25h");
    console.clear();
    console.log(yellow(example));
    process.exit();
  }, 5000);
  bakaRun;
  clearBaka;
};
