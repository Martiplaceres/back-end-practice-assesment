const User = require("../models").user;
const Space = require("../models").space;
const Story = require("../models").story;
const { Router } = require("express");
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const spaces = await Space.findAll({
      include: { model: Story },
    });
    res.send(spaces);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const space = await Space.findByPk(id, {
      include: { model: Story, order: [["updatedAt", "DESC"]] },
    });
    res.send(space);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newSpace = await Space.create(req.body);

    res.send(newSpace);
  } catch (e) {
    next(e);
  }
});

// router.post("/", async (req, res, next) => {
//   try {
//     const newStory = await Story.create(req.body);

//     res.send(newStory);
//   } catch (e) {
//     next(e);
//   }
// });

router.delete("/stories/:id", async (req, res, next) => {
  try {
    // const spaceId = req.params.spaceId;
    const id = req.params.id;
    const story = await Story.findByPk(id);

    if (!story) {
      return res.status(404).send("Story not found");
    }

    await story.destroy();
    res.send("story deleted");
  } catch (e) {
    next(e);
  }
});

// router.get("/", async (req, res) => {
//   const spaces = await Space.findAll();
//   res.send(spaces);
// });
module.exports = router;
