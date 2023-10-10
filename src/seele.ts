import { red, yellow, bold } from "colorette";
import terminalKitPackage from "terminal-kit";
import { notify } from "node-notifier";
import { example, rl } from ".";
import path from "path";

export const seele = () => {
  const { terminal } = terminalKitPackage;
  let swap = 1;

  const seele1 = async () => {
    return await terminal.drawImage(
      path.join(__dirname, `../images/seele/seele-${swap}.jpg`),
      {
        shrink: { width: 80, height: 80 },
      }
    );
  };
  const atField = [
    "🔥 𝔖𝔈𝔈𝔏𝔈 𝔖𝔈𝔈𝔏𝔈 𝔖𝔈𝔈𝔏𝔈 𝔖𝔈𝔈𝔏𝔈 𝔖𝔈𝔈𝔏𝔈 𝔖𝔈𝔈𝔏𝔈 🔥 𝔖𝔈𝔈𝔏𝔈 𝔖𝔈𝔈𝔏𝔈 𝔖𝔈𝔈𝔏𝔈 𝔖𝔈𝔈𝔏𝔈 𝔖𝔈𝔈𝔏𝔈 𝔖𝔈𝔈𝔏𝔈 🔥",
    "🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥",
    "𝔖𝔈𝔈𝔏𝔈 𝔖𝔈𝔈𝔏𝔈 𝔖𝔈𝔈𝔏𝔈 𝔖𝔈𝔈𝔏𝔈 𝔖𝔈𝔈𝔏𝔈 𝔖𝔈𝔈𝔏𝔈 🔥 🔥 🔥 𝔖𝔈𝔈𝔏𝔈 𝔖𝔈𝔈𝔏𝔈 𝔖𝔈𝔈𝔏𝔈 𝔖𝔈𝔈𝔏𝔈 𝔖𝔈𝔈𝔏𝔈 𝔖𝔈𝔈𝔏𝔈",
  ];

  const bakaRun = setInterval(async () => {
    terminal.clear();
    if (swap !== 3) {
      await seele1();
      swap = swap + 1;
    } else {
      await seele1();
      swap = 1;
    }
    console.log(bold(red(atField[swap - 1])));
  }, 800);
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
