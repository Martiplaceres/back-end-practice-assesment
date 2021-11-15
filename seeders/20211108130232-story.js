"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "stories",
      [
        {
          name: "Monday's story",
          content: "this morning I woke up at 7am and I went to yoga class",
          imageUrl:
            "https://images.squarespace-cdn.com/content/v1/5b4d7c29f407b42939a95bc5/1558104429602-EIP3OEXQT061A8DQBRHY/CasaVinyasa-2891.jpg?format=2500w",

          spaceId: 1,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tuesday's story",
          content:
            "this morning I woke up at 8am and I went for walk at the park",
          imageUrl:
            "https://tiogatours.nl/dynamic/img/amerika/new-york/new-york-central-park-laan.6.b958.jpg",
          spaceId: 1,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Monday's story",
          content: "this morning I woke up at 7am and I went to yoga class",
          imageUrl:
            "https://images.squarespace-cdn.com/content/v1/5b4d7c29f407b42939a95bc5/1558104429602-EIP3OEXQT061A8DQBRHY/CasaVinyasa-2891.jpg?format=2500w",

          spaceId: 1,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Monday's story",
          content: "I slept till 12",
          imageUrl:
            "https://images.medicinenet.com/images/article/main_image/woman-sleeping-mask-rest-bed-sleep-morning.jpg",
          spaceId: 2,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Monday's story",
          content: "this morning I woke up at 7am and I went to yoga class",
          imageUrl:
            "https://images.squarespace-cdn.com/content/v1/5b4d7c29f407b42939a95bc5/1558104429602-EIP3OEXQT061A8DQBRHY/CasaVinyasa-2891.jpg?format=2500w",

          spaceId: 1,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tuesday's story",
          content:
            "this morning I woke up at 9am and I went for workout at the park",
          imageUrl:
            "https://www.verywellfit.com/thmb/D73LH6x4KRRIOJ0YusGr1lFmtxQ=/3000x2000/filters:fill(FFDB5D,1)/outdoor-workout-5ae76cdbc673350036de2685.jpg",
          spaceId: 2,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Monday's story",
          content: "this morning I woke up at 7am and I went to yoga class",
          imageUrl:
            "https://images.squarespace-cdn.com/content/v1/5b4d7c29f407b42939a95bc5/1558104429602-EIP3OEXQT061A8DQBRHY/CasaVinyasa-2891.jpg?format=2500w",

          spaceId: 1,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tuesday's story",
          content:
            "this morning I woke up at 9am and I went for workout at the park",
          imageUrl:
            "https://www.verywellfit.com/thmb/D73LH6x4KRRIOJ0YusGr1lFmtxQ=/3000x2000/filters:fill(FFDB5D,1)/outdoor-workout-5ae76cdbc673350036de2685.jpg",
          spaceId: 2,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Monday's story",
          content: "this morning I woke up at 7am and I went to yoga class",
          imageUrl:
            "https://images.squarespace-cdn.com/content/v1/5b4d7c29f407b42939a95bc5/1558104429602-EIP3OEXQT061A8DQBRHY/CasaVinyasa-2891.jpg?format=2500w",

          spaceId: 1,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tuesday's story",
          content:
            "this morning I woke up at 9am and I went for workout at the park",
          imageUrl:
            "https://www.verywellfit.com/thmb/D73LH6x4KRRIOJ0YusGr1lFmtxQ=/3000x2000/filters:fill(FFDB5D,1)/outdoor-workout-5ae76cdbc673350036de2685.jpg",
          spaceId: 2,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Monday's story",
          content: "this morning I woke up at 7am and I went to yoga class",
          imageUrl:
            "https://images.squarespace-cdn.com/content/v1/5b4d7c29f407b42939a95bc5/1558104429602-EIP3OEXQT061A8DQBRHY/CasaVinyasa-2891.jpg?format=2500w",

          spaceId: 1,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("stories", null, {});
  },
};
