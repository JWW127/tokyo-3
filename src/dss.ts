import { yellow, bgBlack, bold, red } from "colorette";
import terminalKitPackage from "terminal-kit";
import alert from "alert";
import { example, rl } from ".";

export const dss = () => {
  const { terminal } = terminalKitPackage;
  let swap = true;

  const dss1 = async () => {
    return await terminal.drawImage("./../images/dss/dss-1.jpg", {
      shrink: { width: 80, height: 80 },
    });
  };

  const dss2 = async () => {
    return await terminal.drawImage("./../images/dss/dss-2.jpg", {
      shrink: { width: 80, height: 80 },
    });
  };

  const theChoker = setInterval(async () => {
    terminal.clear();

    if (swap) {
      await dss1();
      console.log(
        bgBlack(
          bold(yellow("WILLE: Deification Shutdown System Choker | WILLE: DSS"))
        )
      );
    } else {
      await dss2();
      console.log(
        bgBlack(
          bold(red("WILLE: DSS | WILLE: Deification Shutdown System Choker"))
        )
      );
    }
    swap = !swap;
  }, 500);

  const clearAll = setTimeout(() => {
    clearInterval(theChoker);
    clearTimeout(clearAll);
    rl.write("\u001B[?25h");
    terminal.clear();
    console.log(yellow(example));
    process.exit();
  }, 10000);
  theChoker;
  alert("🚨TIME🚨");
  clearAll;
};
