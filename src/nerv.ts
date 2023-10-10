import { yellow, bgBlack, bold, redBright } from "colorette";
import terminalKitPackage from "terminal-kit";
import { notify } from "node-notifier";
import { example, rl } from ".";
import path from "path";

export const nerv = () => {
  const { terminal } = terminalKitPackage;
  let swap = true;

  const nerv1 = async () => {
    return await terminal.drawImage(
      path.join(__dirname, "../images/nerv/nerv1.jpg"),
      {
        shrink: { width: 100, height: 100 },
      }
    );
  };

  const nerv2 = async () => {
    return await terminal.drawImage(
      path.join(__dirname, "../images/nerv/nerv2.jpg"),
      {
        shrink: { width: 100, height: 100 },
      }
    );
  };

  const theNerv = setInterval(async () => {
    terminal.clear();

    if (swap) {
      await nerv1();
      console.log(
        bgBlack(
          bold(
            yellow(
              "| EMERGENCY | WARNING | EMERGENCY | WARNING |  ANGEL!!  | WARNING | EMERGENCY | WARNING | EMERGENCY "
            )
          )
        )
      );
    } else {
      await nerv2();
      console.log(
        bgBlack(
          bold(
            redBright(
              "| EMERGENCY | WARNING | EMERGENCY | WARNING | EMERGENCY | WARNING | EMERGENCY | WARNING | EMERGENCY "
            )
          )
        )
      );
    }
    swap = !swap;
  }, 1000);

  const clearAll = setTimeout(() => {
    clearInterval(theNerv);
    clearTimeout(clearAll);
    rl.write("\u001B[?25h");
    terminal.clear();
    console.log(yellow(example));
    process.exit();
  }, 10000);
  theNerv;
  notify("🚨TIME🚨");
  clearAll;
};
