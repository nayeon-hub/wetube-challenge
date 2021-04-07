import fs from "fs";

export const home = (req, res) => {
  res.render("home");
};

export const upload = (req, res) => {
  const {
    file: { path },
  } = req;
  fs.readFile(path, "utf8", function (err, data) {
    res.send(data);
  });
};
