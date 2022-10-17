import { ranHex, colorChoice } from "../src/colors";
import yargs from "yargs";

const argv = yargs(process.argv.slice(2))
  .options({
    m: { type: "number" },
    c: { type: "string" },
    t: {},
    h: {},
  })
  .parseSync();

test("Should return a hexidecimal", () => {
  const hexadecimal = /^[a-f0-9]/i;
  expect(ranHex()).toMatch(hexadecimal);
});

test("Should return a colors object", async () => {
  const data = colorChoice(argv);
  expect(data).toMatchObject({
    main: /^#[a-f0-9]/i,
    accent: /^#[a-f0-9]/i,
    speed: /^[0-0]/,
  });
});

afterAll(() => {});
