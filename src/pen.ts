import { white, yellow, bgBlack, bold } from "colorette";
import terminalKitPackage from "terminal-kit";
import alert from "alert";
import { example, rl } from ".";
import path from "path";

export const pen = () => {
  const { terminal } = terminalKitPackage;
  let swap = true;

  const pen1 = async () => {
    return await terminal.drawImage(
      path.join(__dirname, "../images/penpen/pen-1.jpg"),
      {
        shrink: { width: 80, height: 80 },
      }
    );
  };

  const pen2 = async () => {
    return await terminal.drawImage(
      path.join(__dirname, "../images/penpen/pen-2.jpg"),
      {
        shrink: { width: 80, height: 80 },
      }
    );
  };

  const thePen = setInterval(async () => {
    terminal.clear();

    if (swap) {
      await pen1();
      console.log(
        bgBlack(
          bold(
            yellow(
              "BACK DOOR CODE: PEN PEN  |  BACK DOOR CODE:  PEN PEN  |  BACK DOOR CODE: PEN PEN"
            )
          )
        )
      );
    } else {
      await pen2();
      console.log(
        bgBlack(
          bold(
            white(
              "BACK DOOR CODE: PEN PEN  |  BACK DOOR CODE:  PEN PEN  |  BACK DOOR CODE: PEN PEN"
            )
          )
        )
      );
    }
    swap = !swap;
  }, 300);

  const clearAll = setTimeout(() => {
    clearInterval(thePen);
    clearTimeout(clearAll);
    rl.write("\u001B[?25h");
    terminal.clear();
    console.log(yellow(example));
    process.exit();
  }, 10000);
  thePen;
  alert("🚨TIME🚨");
  clearAll;
};
