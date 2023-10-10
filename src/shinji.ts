import { red, yellow, bold } from "colorette";
import terminalKitPackage from "terminal-kit";
import { notify } from "node-notifier";
import { example, rl } from ".";
import path from "path";

export const shinji = () => {
  const { terminal } = terminalKitPackage;
  let swap = 1;

  const run1 = async () => {
    return await terminal.drawImage(
      path.join(__dirname, `../images/unit-1-run/r${swap}.jpg`),
      {
        shrink: { width: 80, height: 80 },
      }
    );
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
  }, 200);
  const clearBaka = setTimeout(() => {
    clearInterval(bakaRun);
    clearTimeout(clearBaka);
    rl.write("\u001B[?25h");
    console.clear();
    console.log(yellow(example));
    process.exit();
  }, 10000);
  bakaRun;
  notify("🚨TIME🚨");
  clearBaka;
};
