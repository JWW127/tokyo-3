import art from "ascii-art";
import { green, red, yellow, bold } from "colorette";
import { example, rl } from ".";

export const baka = () => {
  let swap = 1;

  const imageBase = new art.Image({
    filepath: "../images/small-sequenced/unit-1-base-small.png",
    threshhold: 100,
  });
  const image2 = new art.Image({
    filepath: "../images/small-sequenced/unit-1-2-small.png",
    threshhold: 100,
  });
  const image3 = new art.Image({
    filepath: "../images/small-sequenced/unit-1-3-small.png",
    threshhold: 100,
  });
  const image4 = new art.Image({
    filepath: "../images/small-sequenced/unit-1-4-small.png",
    threshhold: 100,
  });
  const image5 = new art.Image({
    filepath: "../images/small-sequenced/unit-1-5-small.png",
    threshhold: 100,
  });
  const image6 = new art.Image({
    filepath: "../images/small-sequenced/unit-1-6-small.png",
    threshhold: 100,
  });

  const bakaRun = setInterval(() => {
    if (swap === 1) {
      imageBase.write((err: any, rendered: any) => {
        console.clear();
        console.log(rendered);
        console.log(
          bold(
            green(
              "A.T. FIELD ▁                 A.T. FIELD ▁                 A.T. FIELD ▁                "
            )
          )
        );
        swap = swap + 1;
      });
    } else if (swap === 2) {
      image2.write((err: any, rendered: any) => {
        console.clear();
        console.log(rendered);
        console.log(
          bold(
            green(
              "A.T. FIELD ▁ ▂               A.T. FIELD ▁ ▂               A.T. FIELD ▁ ▂               "
            )
          )
        );
        swap = swap + 1;
      });
    } else if (swap === 3) {
      image3.write((err: any, rendered: any) => {
        console.clear();
        console.log(rendered);
        console.log(
          bold(
            yellow(
              "A.T. FIELD ▁ ▂ ▄             A.T. FIELD ▁ ▂ ▄             A.T. FIELD ▁ ▂ ▄            "
            )
          )
        );
        swap = swap + 1;
      });
    } else if (swap === 4) {
      image4.write((err: any, rendered: any) => {
        console.clear();
        console.log(rendered);
        console.log(
          bold(
            yellow(
              "A.T. FIELD ▁ ▂ ▄ ▅           A.T. FIELD ▁ ▂ ▄ ▅           A.T. FIELD ▁ ▂ ▄ ▅          "
            )
          )
        );
        swap = swap + 1;
      });
    } else if (swap === 5) {
      image5.write((err: any, rendered: any) => {
        console.clear();
        console.log(rendered);
        console.log(
          bold(
            red(
              "A.T. FIELD ▁ ▂ ▄ ▅ ▆         A.T. FIELD ▁ ▂ ▄ ▅ ▆         A.T. FIELD ▁ ▂ ▄ ▅ ▆        "
            )
          )
        );
        swap = swap + 1;
      });
    } else if (swap === 6) {
      image6.write((err: any, rendered: any) => {
        console.clear();
        console.log(rendered);
        console.log(
          bold(
            red(
              "A.T. FIELD ▁ ▂ ▄ ▅ ▆ ▇ █ █ █ A.T. FIELD ▁ ▂ ▄ ▅ ▆ ▇ █ █ █ A.T. FIELD ▁ ▂ ▄ ▅ ▆ ▇ "
            )
          )
        );
        swap = 1;
      });
    }
  }, 80);
  const clearBaka = setTimeout(() => {
    clearInterval(bakaRun);
    clearTimeout(clearBaka);
    rl.write("\u001B[?25h");
    console.clear();
    console.log(yellow(example));
    process.exit();
  }, 5000);
  bakaRun;
  clearBaka;
};
