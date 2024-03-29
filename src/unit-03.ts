import { red, yellow, bold } from "colorette";
import terminalKitPackage from "terminal-kit";
import { notify } from "node-notifier";
import { example, rl } from ".";
import path from "path";

export const unit03 = () => {
  const { terminal } = terminalKitPackage;
  let swap = true;

  const sunset1 = async () => {
    return await terminal.drawImage(
      path.join(__dirname, "../images/unit-3-walk/sunset-1.jpg"),
      {
        shrink: { width: 80, height: 60 },
      }
    );
  };

  const sunset2 = async () => {
    return await terminal.drawImage(
      path.join(__dirname, "../images/unit-3-walk/sunset-2.jpg"),
      {
        shrink: { width: 80, height: 60 },
      }
    );
  };

  const walk = setInterval(async () => {
    terminal.clear();
    if (swap) {
      await sunset1();
      console.log(
        bold(
          red(
            "WARNING! 9th ANGEL! WARNING! 9th ANGEL! WARNING! 9th ANGEL! WARNING! 9th ANGEL"
          )
        )
      );
      swap = !swap;
    } else {
      await sunset2();
      console.log(
        bold(
          yellow(
            "9th ANGEL! WARNING! 9th ANGEL! WARNING! 9th ANGEL! WARNING! 9th ANGEL! WARNING"
          )
        )
      );
      swap = !swap;
    }
  }, 900);

  const clearAll = setTimeout(() => {
    clearInterval(walk);
    clearTimeout(clearAll);
    rl.write("\u001B[?25h");
    terminal.clear();
    console.log(yellow(example));
    process.exit();
  }, 10000);
  walk;
  notify("🚨TIME🚨");
  clearAll;
};
