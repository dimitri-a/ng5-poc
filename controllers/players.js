//Require the express package and use express.Router()
const express = require("express");
const router = express.Router();

//GET HTTP method to /list
router.get("/", (req, res) => {
  res.write(
    JSON.stringify(
      { success: true, lists: [{ name: "Frenkie" }, { name: "Mathijs" }] },
      null,
      2
    )
  );
  res.end();
});

module.exports = router;
