import { Router } from "express";
import { upload } from "../libs/multer.js";
import * as uploadController from "../controllers/upload.js";
const mainRouter = Router();
mainRouter.get("/ping", (req, res) => {
    res.json({
        pong: true,
    });
});
mainRouter.post("/upload", upload.single("arquivo"), uploadController.upload);
export default mainRouter;
//# sourceMappingURL=mainRouter.js.map