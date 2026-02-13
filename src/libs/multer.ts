import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const diskStorage = multer.diskStorage({
  filename: (req, file, cb) => {
    const prefix = "img-" + Math.floor(Math.random() * 9999);
    cb(null, prefix);
  },
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, "..", "..", "public", "tmp"));
  },
});

export const upload = multer({
  storage: diskStorage,
});
