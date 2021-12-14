import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    const fileName = req.user.username + "." + ext;
    cb(null, fileName);
    req.avatar = `http://localhost:5000/${fileName}`;
  },
});

const upload = multer({ storage: storage });

export default upload;
