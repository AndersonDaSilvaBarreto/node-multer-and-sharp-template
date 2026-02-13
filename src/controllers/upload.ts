import type { RequestHandler } from "express";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";
import fc from "fs/promises";
import { v4 } from "uuid";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const upload: RequestHandler = async (req, res) => {
  if (req.file) {
    const newName = v4() + ".webp";
    const image = await sharp(req.file.path)
      .resize(1280, 720)
      .webp({ quality: 70 })
      .toBuffer();

    await Promise.all([
      sharp(image).toFile(
        path.resolve(__dirname, "..", "..", "public", "images", newName),
      ),
      sharp(image)
        .resize(200)
        .toFile(
          path.resolve(
            __dirname,
            "..",
            "..",
            "public",
            "images",
            "mini-" + newName,
          ),
        ),
    ]);

    await fc.unlink(req.file.path);
  } else {
    console.log("Nenhum arquivo encontrado");
  }

  res.json({});
};
