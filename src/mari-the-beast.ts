import art from "ascii-art";
import { green, yellow, bgRedBright, bold } from "colorette";

export const mari = () => {
  let swap = true;

  const image1 = new art.Image({
    filepath: "../images/mari-small.png",
  });

  const image2 = new art.Image({
    filepath: "../images/mari-small-invert.png",
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
                "BACK DOOR CODE: BEAST | BACK DOOR CODE: BEAST | BACK DOOR CODE: BEAST | BACK DOOR"
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
              "A.T. FIELD: MAX | LIMITER: OFF | A.T. FIELD: MAX | LIMITER: OFF | A.T. FIELD: MAX"
            )
          )
        );
        swap = !swap;
      });
    }
  }, 700);
  const clearMari = setTimeout(() => {
    clearInterval(mariBeast);
    clearTimeout(clearMari);
    console.clear();
    console.log("tokyo-3 | -m [number] | -c [red, green, beast]");
  }, 10000);
  mariBeast;
  clearMari;
};
