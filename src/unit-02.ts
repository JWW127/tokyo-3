import art from "ascii-art";

export const unit02 = () => {
  let swap = true;

  const image1 = new art.Image({
    filepath: "../images/sunset1.gif",
  });
  const image2 = new art.Image({
    filepath: "../images/sunset2.gif",
  });

  const walk = setInterval(() => {
    if (swap) {
      image1.write((err: any, rendered: any) => {
        console.clear();
        console.log(rendered);
        swap = !swap;
      });
    } else {
      image2.write((err: any, rendered: any) => {
        console.clear();
        console.log(rendered);
        console.log("YOU'RE DEAD");
        swap = !swap;
      });
    }
  }, 700);
  const clear02 = setTimeout(() => {
    clearInterval(walk);
    clearTimeout(clear02);
    console.clear();
    console.log("Bye Bye"); // should leave directions / options as exit messages
  }, 10000);
  walk;
  clear02;
};
