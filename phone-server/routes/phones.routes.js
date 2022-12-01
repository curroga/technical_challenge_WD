const router = require("express").Router();
const data = require("../data/phones.json")

// GET "/phones" =>
router.get("/", (req, res, next) => {
  res.status(200).json(data);
})

router.get("/:id", (req, res, next) => {
  const {id} = req.params
  res.status(200).json(data[id])
})

module.exports = router