import request from "request";

export const controller = (req, res) => {
  const {
    query: { url },
  } = req;
  if (url) {
    if ((url.includes("https://") || url.includes("http://")) === true) {
      request(url, function (err, response, body) {
        if (response === undefined) {
          console.log("console: fail");
          res.send("Down!");
        } else {
          console.log("console: success");
          res.send("Up!");
        }
      });
    } else {
      request(`http://${url}`, function (err, response, body) {
        if (response === undefined) {
          console.log("fail");
          res.send("Down!");
        } else {
          console.log("success");
          res.send("Up!");
        }
      });
    }
  } else {
    res.send();
  }
};
