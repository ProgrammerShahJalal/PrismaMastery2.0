import { prisma } from "../lib/prisma.js";

async function main() {
//   const updatePost = await prisma.post.update({
//     where: {
//       id: 1,
//     },
//     data: {
//       title: "Hello World Updated",
//       content: "This is my first post updated",
//       published: true,
//     },
//   });

//   console.log(updatePost);


// const upsertPost = await prisma.post.upsert({
//     where: {
//         id: 1,
//     },
//     create: {
//         title: "Hello World Upserted",
//         content: "This is my first post upserted",
//         published: true,
//     },
//     update: {
//         title: "Hello World Upserted",
//         content: "This is my first post upserted",
//         published: true,
//     },
// })
// console.log(upsertPost);

// update many posts where authorId is Null and authorName is Null and set authorId to 1 and authorName to "John Doe"
const updateManyPosts = await prisma.post.updateMany({
    where: {
        authorId: null,
        authorName: null,
    },
    data: {
        authorId: 1,
        authorName: "John Doe",
    },
});
console.log(updateManyPosts);


}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });