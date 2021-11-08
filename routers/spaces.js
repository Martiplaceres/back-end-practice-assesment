const User = require("../models").user;
const Space = require("../models").space;
const Story = require("../models").story;
const { Router } = require("express");
const router = new Router();

//testing relations:

// router.get("/", async (req, res) => {
//   const spaces = await User.findAll({
//     include: { model: Space, include: [Story] },
//   });
//   res.send(spaces);
// });

router.get("/", async (req, res) => {
  const spaces = await Space.findAll();
  res.send(spaces);
});

module.exports = router;
