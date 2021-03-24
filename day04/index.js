import express from "express";

const app = express();
const PORT = 4000;

const handleHome = (req, res) => {
  res.send("Home");
};

const handleAbout = (req, res) => {
  res.send("About Us");
};

const handleContact = (req, res) => {
  res.send("Contact");
};

const handleProtect = (req, res) => {
  res.send("Protected");
};

const betweenAll = (req, res, next) => {
  console.log("I'm a middleware");
  next();
};

const betweenRedirect = (req, res) => {
  res.redirect("/");
  //redirect경우 전달해줄게 없어서 next사용 안해도 됨!
};

app.use(betweenAll);
app.get("/", handleHome);
app.get("/about-us", handleAbout);
app.get("/contact", handleContact);
app.get("/protected", betweenRedirect, handleProtect);

app.listen(PORT, () => console.log(`Listening!`));
