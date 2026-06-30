import { prisma } from "../lib/prisma.js";
import { Role } from "./generated/prisma/edge.js";

async function main() {
//   const createManyPosts = await prisma.post.createMany({
//     data: [
//         {
//             title: "Post 101",
//             content: "This is my first post",
//             published: true
//         },
//         {
//             title: "Post 102",
//             content: "This is my second post",
//             published: true
//         },
//         {
//             title: "Post 103",
//             content: "This is my third post",
//             published: false
//         },
//         {
//             title: "Post 104",
//             content: "This is my fourth post",
//             published: false
//         },
//         {
//             title: "Post 105",
//             content: "This is my fifth post",
//             published: true
//         },
//         {
//             title: "Post 106",
//             content: "This is my sixth post",
//             published: true
//         },{
//             title: "Post 107",
//             content: "This is my seventh post",
//             published: false
//         },{
//             title: "Post 108",
//             content: "This is my eighth post",
//             published: false
//         },{
//             title: "Post 109",
//             content: "This is my ninth post",
//             published: true
//         },{
//             title: "Post 110",
//             content: "This is my tenth post",
//             published: true
//         },
//         {
//             title: "Post 111",
//             content: "This is my eleventh post",
//             published: false
//         },
//         {
//             title: "Post 112",
//             content: "This is my twelfth post",
//             published: false
//         },
//         {
//             title: "Post 113",
//             content: "This is my thirteenth post",
//             published: true
//         },
//         {
//             title: "Post 114",
//             content: "This is my fourteenth post",
//             published: true
//         },
//         {
//             title: "Post 115",
//             content: "This is my fifteenth post",
//             published: false
//         },
//         {
//             title: "Post 116",
//             content: "This is my sixteenth post",
//             published: false
//         },
//         {
//             title: "Post 117",
//             content: "This is my seventeenth post",
//             published: true
//         },
//         {
//             title: "Post 118",
//             content: "This is my eighteenth post",
//             published: true
//         },
//         {
//             title: "Post 119",
//             content: "This is my nineteenth post",
//             published: false
//         },
//         {
//             title: "Post 120",
//             content: "This is my twentieth post",
//             published: false
//         }
//     ]
//   })

//   console.log(`Created ${createManyPosts.count} posts`);

// const createManyUsers = await prisma.user.createMany({
//     data: [
//         {
//             name: "Md Shah Jalal",
//             email: "shah.jalal.ju.bd@gmail.com",
//             username: "shahjalal",
//             role: Role.ADMIN
//         },
//         {
//             name: "John Doe",
//             email: "john.doe@example.com",
//             username: "johndoe",
//             role: Role.USER
//         },
//         {
//             name: "Jane Smith",
//             email: "jane.smith@example.com",
//             username: "janesmith",
//             role: Role.USER
//         }
//     ]
// });

// console.log(`Created ${createManyUsers.count} users`);

// const creatManyProfiles = await prisma.profile.createMany({
//     data: [
//         {
//             bio: "This is my bio",
//             userId: 1
//         },
//         {
//             bio: "This is my bio",
//             userId: 2
//         },
//         {
//             bio: "This is my bio",
//             userId: 3
//         }
//     ]
// });

// console.log(`Created ${creatManyProfiles.count} profiles`);


// const createManyCategories = await prisma.category.createMany({
//     data: [
//         {
//             name: "Technology",
//             description: "All about technology"
//         },
//         {
//             name: "Science",
//             description: "All about science"
//         },
//         {
//             name: "Health",
//             description: "All about health"
//         }
//     ]
// });

// console.log(`Created ${createManyCategories.count} categories`);


const [post1, post2, post3] = await Promise.all([
  prisma.post.create({
    data: {
      title: "Post 1",
      content: "This is my first post",
      published: true,
      authorId: 1,
      postCategories: {
        create: [
          { category: { connect: { id: 1 } } },
          { category: { connect: { id: 2 } } },
        ],
      },
    },
  }),
  prisma.post.create({
    data: {
      title: "Post 2",
      content: "This is my second post",
      published: true,
      authorId: 2,
    },
  }),
  prisma.post.create({
    data: {
      title: "Post 3",
      content: "This is my third post",
      published: false,
      authorId: 3,
    },
  }),
]);

console.log(`Created ${post1.id}, ${post2.id}, and ${post3.id} posts`);

};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
