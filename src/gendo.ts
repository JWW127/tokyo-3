import { yellow, bgBlack, bold, red, bgRed, black } from "colorette";
import terminalKitPackage from "terminal-kit";
import alert from "alert";
import { example, rl } from ".";
import path from "path";

export const gendo = () => {
  const { terminal } = terminalKitPackage;
  let swap = true;

  const gendo1 = async () => {
    return await terminal.drawImage(
      path.join(__dirname, "../images/gendo/gendo-1.jpg"),
      {
        shrink: { width: 80, height: 80 },
      }
    );
  };

  const gendo2 = async () => {
    return await terminal.drawImage(
      path.join(__dirname, "../images/gendo/gendo-2.jpg"),
      {
        shrink: { width: 80, height: 80 },
      }
    );
  };

  const theFather = setInterval(async () => {
    terminal.clear();

    if (swap) {
      await gendo1();
      console.log(
        bgBlack(
          bold(
            red(
              "漫*'¨¯¨'*·舞~ ﾶﾑ刀'丂 ム尺乇ﾑｲ乇丂ｲ ｷ乇ﾑ尺 ﾉ丂 ﾶﾑ刀ズﾉ刀り ﾉｲ丂乇ﾚｷ ~舞*'¨¯¨'*漫"
            )
          )
        )
      );
    } else {
      await gendo2();
      console.log(
        bgRed(
          bold(
            black(
              "漫*'¨¯¨'*·舞~ ﾶﾑ刀'丂 ム尺乇ﾑｲ乇丂ｲ ｷ乇ﾑ尺 ﾉ丂 ﾶﾑ刀ズﾉ刀り ﾉｲ丂乇ﾚｷ ~舞*'¨¯¨'*漫"
            )
          )
        )
      );
    }
    swap = !swap;
  }, 800);

  const clearAll = setTimeout(() => {
    clearInterval(theFather);
    clearTimeout(clearAll);
    rl.write("\u001B[?25h");
    terminal.clear();
    console.log(yellow(example));
    process.exit();
  }, 10000);
  theFather;
  alert("🚨TIME🚨");
  clearAll;
};
