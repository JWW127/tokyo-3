import {
  yellow,
  bgBlackBright,
  bold,
  magentaBright,
  bgBlack,
  cyan,
} from "colorette";
import { notify } from "node-notifier";
import terminalKitPackage from "terminal-kit";
import { example, rl } from ".";
import path from "path";

export const rei = () => {
  const { terminal } = terminalKitPackage;
  let swap = true;

  const rei1 = async () => {
    return await terminal.drawImage(
      path.join(__dirname, "../images/rei/rei-1.jpg"),
      {
        shrink: { width: 80, height: 80 },
      }
    );
  };

  const rei2 = async () => {
    return await terminal.drawImage(
      path.join(__dirname, "../images/rei/rei-2.jpg"),
      {
        shrink: { width: 80, height: 80 },
      }
    );
  };

  const blink = setInterval(async () => {
    terminal.clear();

    if (swap) {
      await rei1();
      console.log(
        bgBlack(
          bold(
            magentaBright(
              "[̲̅ə̲̅٨̲̅٥̲̅٦̲̅] [̲̅ə̲̅٨̲̅٥̲̅٦̲̅] [̲̅ə̲̅٨̲̅٥̲̅٦̲̅] [̲̅ə̲̅٨̲̅٥̲̅٦̲̅]  [̲̅ə̲̅٨̲̅٥̲̅٦̲̅]  [̲̅ə̲̅٨̲̅٥̲̅٦̲̅]  [̲̅ə̲̅٨̲̅٥̲̅٦̲̅]  [̲̅ə̲̅٨̲̅٥̲̅٦̲̅] [̲̅ə̲̅٨̲̅٥̲̅٦̲̅] [̲̅ə̲̅٨̲̅٥̲̅٦̲̅] [̲̅ə̲̅٨̲̅٥̲̅٦̲̅]"
            )
          )
        )
      );
    } else {
      await rei2();
      console.log(
        bgBlackBright(
          bold(
            cyan(
              "ᶫᵒᵛᵉᵧₒᵤ ᶫᵒᵛᵉᵧₒᵤ ᶫᵒᵛᵉᵧₒᵤ ᶫᵒᵛᵉᵧₒᵤ ᶫᵒᵛᵉᵧₒᵤ  ᶫᵒᵛᵉᵧₒᵤ ᶫᵒᵛᵉᵧₒᵤ ᶫᵒᵛᵉᵧₒᵤ ᶫᵒᵛᵉᵧₒᵤ ᶫᵒᵛᵉᵧₒᵤ"
            )
          )
        )
      );
    }
    swap = !swap;
  }, 800);

  const clearAll = setTimeout(() => {
    clearInterval(blink);
    clearTimeout(clearAll);
    rl.write("\u001B[?25h");
    terminal.clear();
    console.log(yellow(example));
    process.exit();
  }, 10000);
  blink;
  notify("🚨TIME🚨");
  clearAll;
};
