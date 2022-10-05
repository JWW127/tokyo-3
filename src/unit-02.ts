import art from "ascii-art";
import { red, yellow, bold } from "colorette";

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
              "DEATH! IMPACT! DEATH! IMPACT! DEATH! IMPACT! DEATH! IMPACT! DEATH! IMPACT! DEATH!"
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
              "IMPACT! DEATH! IMPACT! DEATH! IMPACT! DEATH! IMPACT! DEATH! IMPACT! DEATH! IMPACT!"
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
    console.clear();
    console.log(
      red(".....(っ◔◡◔)っ EXAMPLE --> | tokyo --min 5 --color red |")
    );
  }, 10000);
  walk;
  clear02;
};
