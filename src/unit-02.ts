import art from "ascii-art";
import { red, yellow, bold } from "colorette";
import { example, rl } from ".";

export const unit02 = () => {
  let swap = true;

  const image1 = new art.Image({
    filepath: "../images/sunset1.png",
  });

  const image2 = new art.Image({
    filepath: "../images/sunset2.png",
  });

  const walk = setInterval(() => {
    if (swap) {
      image1.write((err: any, rendered: any) => {
        console.clear();
        console.log(rendered);
        console.log(
          bold(
            red(
              "WARNING! 9th ANGEL! WARNING! 9th ANGEL! WARNING! 9th ANGEL! WARNING! 9th ANGEL!"
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
              "9th ANGEL! WARNING! 9th ANGEL! WARNING! 9th ANGEL! WARNING! 9th ANGEL! WARNING!"
            )
          )
        );
        swap = !swap;
      });
    }
  }, 700);

  const clear02 = setTimeout(() => {
    clearInterval(walk);
    clearTimeout(clear02);
    //------------------------------------------ unhide cursor
    rl.write("\u001B[?25h");
    console.clear();
    console.log(yellow(example));
    process.exit();
  }, 10000);

  walk;
  clear02;
};
