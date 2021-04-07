import multer from "multer";

const multerText = multer({ dest: "uploads/" });

export const uploadText = multerText.single("textFile");
