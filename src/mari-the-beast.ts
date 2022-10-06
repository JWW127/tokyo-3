import art from "ascii-art";
import { green, yellow, bgRedBright, bold } from "colorette";
import { example, rl } from ".";

export const mari = () => {
  let swap = true;

  const image1 = new art.Image({
    filepath: "../images/mari-small.png",
    threshhold: 100,
  });

  const image2 = new art.Image({
    filepath: "../images/mari-small-invert.png",
    threshhold: 100,
  });

  const mariBeast = setInterval(() => {
    if (swap) {
      image1.write((err: any, rendered: any) => {
        console.clear();
        console.log(rendered);
        console.log(
          bgRedBright(
            bold(
              green(
                "BACK DOOR CODE: THE BEAST | BACK DOOR CODE: THE BEAST | BACK DOOR CODE: THE BEAST |"
              )
            )
          )
        );
        swap = !swap;
      });
    } else {
      image2.write((err: any, rendered: any) => {
        console.clear();
        console.log(rendered);
        console.log(
          bold(
            yellow(
              "BACK DOOR CODE: THE BEAST | BACK DOOR CODE: THE BEAST | BACK DOOR CODE: THE BEAST |"
            )
          )
        );
        swap = !swap;
      });
    }
  }, 200);
  const clearMari = setTimeout(() => {
    clearInterval(mariBeast);
    clearTimeout(clearMari);
    rl.write("\u001B[?25h");
    console.clear();
    console.log(yellow(example));
    process.exit();
  }, 10000);
  mariBeast;
  clearMari;
};
