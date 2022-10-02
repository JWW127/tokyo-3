import art from "ascii-art";

export const unit02 = () => {
  let image1 = new art.Image({
    filepath: "../images/sunset1.gif",
  });
  let image2 = new art.Image({
    filepath: "../images/sunset2.gif",
  });

  setInterval(() => {
    setTimeout(() => {
      image1.write((err: any, rendered: any) => {
        console.clear();
        console.log(rendered);
      });
    }, 1000);

    image2.write((err: any, rendered: any) => {
      console.clear();
      console.log(rendered);
    });
  }, 2000);
};
