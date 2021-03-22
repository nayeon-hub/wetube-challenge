export const localsMiddlewares = (req, res, next) => {
  res.locals.siteName = "Sexy Site";
  next();
};
