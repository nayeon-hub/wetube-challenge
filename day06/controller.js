export const home = (req, res) => {
  res.render("home", { pageTitle: "Home" });
};
export const login = (req, res) => {
  res.render("login", { pageTitle: "Login" });
};
export const photo = (req, res) => {
  res.render("photo", { pageTitle: "Photo" });
};
export const profile = (req, res) => {
  res.render("profile", { pageTitle: "Profile" });
};
