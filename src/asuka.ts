import { yellow, bgRedBright, bold, red, bgYellow } from "colorette";
import terminalKitPackage from "terminal-kit";
import { notify } from "node-notifier";
import { example, rl } from ".";
import path from "path";

export const asuka = () => {
  const { terminal } = terminalKitPackage;
  let swap = true;

  const asuka1 = async () => {
    return await terminal.drawImage(
      path.join(__dirname, "../images/asuka/asuka-transparent-1.png"),
      {
        shrink: { width: 80, height: 80 },
      }
    );
  };

  const asuka2 = async () => {
    return await terminal.drawImage(
      path.join(__dirname, "../images/asuka/asuka-transparent-2.png"),
      {
        shrink: { width: 80, height: 80 },
      }
    );
  };

  const theBeast = setInterval(async () => {
    terminal.clear();

    if (swap) {
      await asuka1();
      console.log(
        bgRedBright(
          bold(
            yellow(
              "THE SECOND CHILD: LANGLEY | THE SECOND CHILD:  ASUKA | THE SECOND CHILD: LANGLEY"
            )
          )
        )
      );
    } else {
      await asuka2();
      console.log(
        bgYellow(
          bold(
            red(
              "THE SECOND CHILD: LANGLEY | THE SECOND CHILD:  ASUKA | THE SECOND CHILD: LANGLEY"
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
