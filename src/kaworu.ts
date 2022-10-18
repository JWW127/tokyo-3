import { yellow, bold, cyan, magenta, bgBlack, bgBlueBright } from "colorette";
import terminalKitPackage from "terminal-kit";
import alert from "alert";
import { example, rl } from ".";
import path from "path";

export const kaworu = () => {
  const { terminal } = terminalKitPackage;
  let swap = true;

  const kaworu1 = async () => {
    return await terminal.drawImage(
      path.join(__dirname, "../images/kaworu/kaworu-1.jpg"),
      {
        shrink: { width: 80, height: 80 },
      }
    );
  };

  const kaworu2 = async () => {
    return await terminal.drawImage(
      path.join(__dirname, "../images/kaworu/kaworu-2.jpg"),
      {
        shrink: { width: 80, height: 80 },
      }
    );
  };

  const theBeast = setInterval(async () => {
    terminal.clear();

    if (swap) {
      await kaworu1();
      console.log(
        bgBlueBright(
          bold(
            magenta(
              "ᶫᵒᵛᵉᵧₒᵤ ᶫᵒᵛᵉᵧₒᵤ ᶫᵒᵛᵉᵧₒᵤ ᶫᵒᵛᵉᵧₒᵤ ᶫᵒᵛᵉᵧₒᵤ  ᶫᵒᵛᵉᵧₒᵤ ᶫᵒᵛᵉᵧₒᵤ ᶫᵒᵛᵉᵧₒᵤ ᶫᵒᵛᵉᵧₒᵤ ᶫᵒᵛᵉᵧₒᵤ"
            )
          )
        )
      );
    } else {
      await kaworu2();
      console.log(
        bgBlack(
          bold(
            cyan(
              "ᶫᵒᵛᵉᵧₒᵤ ᶫᵒᵛᵉᵧₒᵤ ᶫᵒᵛᵉᵧₒᵤ ᶫᵒᵛᵉᵧₒᵤ ᶫᵒᵛᵉᵧₒᵤ  ᶫᵒᵛᵉᵧₒᵤ ᶫᵒᵛᵉᵧₒᵤ ᶫᵒᵛᵉᵧₒᵤ ᶫᵒᵛᵉᵧₒᵤ ᶫᵒᵛᵉᵧₒᵤ"
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
  alert("🚨TIME🚨");
  clearAll;
};
