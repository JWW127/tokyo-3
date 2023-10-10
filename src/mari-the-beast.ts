import { green, yellow, bgRedBright, bold } from "colorette";
import terminalKitPackage from "terminal-kit";
import { notify } from "node-notifier";
import { example, rl } from ".";
import path from "path";

export const mari = () => {
  const { terminal } = terminalKitPackage;
  let swap = true;

  const mari1 = async () => {
    return await terminal.drawImage(
      path.join(__dirname, "../images/mari-small.png"),
      {
        shrink: { width: 80, height: 80 },
      }
    );
  };

  const mari2 = async () => {
    return await terminal.drawImage(
      path.join(__dirname, "../images/mari-small-invert.png"),
      {
        shrink: { width: 80, height: 80 },
      }
    );
  };

  const theBeast = setInterval(async () => {
    terminal.clear();

    if (swap) {
      await mari1();
      console.log(
        bold(
          yellow(
            "BACK DOOR CODE: THE BEAST | BACK DOOR CODE:THE BEAST | BACK DOOR CODE: THE BEAST"
          )
        )
      );
    } else {
      await mari2();
      console.log(
        bgRedBright(
          bold(
            green(
              "BACK DOOR CODE: THE BEAST | BACK DOOR CODE:THE BEAST | BACK DOOR CODE: THE BEAST"
            )
          )
        )
      );
    }
    swap = !swap;
  }, 300);

  const clearAll = setTimeout(() => {
    clearInterval(theBeast);
    clearTimeout(clearAll);
    rl.write("\u001B[?25h");
    terminal.clear();
    console.log(yellow(example));
    process.exit();
  }, 10000);
  theBeast;
  notify("🚨TIME🚨");
  clearAll;
};
