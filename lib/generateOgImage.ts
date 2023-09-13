
import { existsSync, mkdirSync } from "fs";
import drawMultilineText from "canvas-multiline-text";
import path from "path";
import * as PImage from "pureimage"
import fs from 'fs';

type Props = {
  title: string;
  image?: string;
};

const Inter = PImage.registerFont("public/fonts/Inter-Bold.ttf", {
  family: "Inter",
});

const loadImage = (filepath: string) => {
  console.log("Loading image: ", filepath);
  return PImage.decodePNGFromStream(fs.createReadStream(filepath))
}

// our function will receive, in this case, the title of the blog post
// as a parameter
export const createImage = async ({ title, image }: Props) => {
  // dimension of our image
  const width = 1200;
  const height = 630;

  await Inter.load();

  var canvas = PImage.make(width, height);

  // create an empty canvas
  const context = canvas.getContext("2d");

  // fill our frame with a white background
  context.fillStyle = "#191919";
  context.fillRect(0, 0, width, height);

  // load and draw our background image
  if (image) {
    context.alpha = 0.5;
    const dir = path.resolve("public");
    const filepath = path.resolve(dir, `./${image}`);
    const pixels = await loadImage(filepath);

    var hRatio = canvas.width / pixels.width;
    var vRatio = canvas.height / pixels.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - pixels.width * ratio) / 2;
    var centerShift_y = (canvas.height - pixels.height * ratio) / 2;

    context.drawImage(
      pixels,
      0,
      0,
      pixels.width,
      pixels.height,
      centerShift_x,
      centerShift_y,
      pixels.width * ratio,
      pixels.height * ratio
    );
    context.alpha = 1;
  }

  // draw our title
  context.font = "32px Inter";
  context.fillStyle = "#ffffff";
  context.textAlign = "center";

  // Render post title
  context.textAlign = "left";
  drawMultilineText(context, title, {
    rect: {
      x: 56,
      y: 120,
      width: canvas.width / 2,
      height: canvas.height - 170,
    },
    verbose: false,
    lineHeight: 1.4,
    minFontSize: 56,
    maxFontSize: 56,
  });

  // add our hostname at the bottom of the image
  context.font = "22px Inter";
  context.fillText("hatchhead.co", canvas.width / 2, 580, canvas.width - 20);

  return canvas;
};

export const generateOgImage = async ({
  slug,
  title,
  image,
}: {
  slug: string;
  title: string;
  image?: string;
}) => {
  // the path where our image is going to be saved.
  const dir = path.resolve("public", "og");
  const filepath = path.resolve(dir, `${slug}.png`);

  // check if directory doesn't exist, if it doesn't, we create it
  if (!existsSync(dir)) {
    mkdirSync(dir);
  }

  // check if the image already exists, if it does we don't need to generate it again
  // boolean added for development
  const shouldRender = !existsSync(filepath) || true;

  if (shouldRender) {
    console.log("Generating blog og:image: ", filepath);
    try {
      const imgBuffer = await createImage({ title, image });
      PImage.encodePNGToStream(imgBuffer, fs.createWriteStream(filepath)).then(() => {
        console.log("wrote out the png file to out.png");
      }).catch((e: Error) => {
        console.log("there was an error writing");
      });
    } catch (e) {
      console.log(e);
    }
  }
};
