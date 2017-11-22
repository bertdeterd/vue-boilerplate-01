const express = require("express");
const router = express.Router();

const sccConnector = require("scc-connector");

router.use(sccConnector);

router.get("/ping", function(req, res) {
  
  //begin check scope
  let isAuthorized = req.authInfo.checkScope("$XSAPPNAME.Display");
  console.log(req.authInfo);

  if (!isAuthorized) {
    return res.status(403).send("Forbidden");
  }
  //einde check scope

  req.axios
    .get("/sap/bc/ping")
    .then(response => {
      //console.log(response);
      let rs = response.data;
      rs = rs.replace("<html><body>", "");
      rs = rs.replace("</body></html>", "");
      //console.log(rs);
      res.json(rs);
    })
    .catch(error => {
      res.send(response.data);
      console.log(error);
    });
});

module.exports = router;
