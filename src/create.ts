import { prisma } from "../lib/prisma.js";

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

const createManyUsers = await prisma.user.createMany({
    data: [
        {
            name: "John Doe",
            email: "john7.doe@example.com"
        },
        {
            name: "Jane Smith",
            email: "jane5.smith@example.com"
        },
        {
            name: "Alice Johnson",
            email: "alice2.johnson@example.com"
        },
        {
            name: "Bob Brown",
            email: "bob3.brown@example.com"
        }
        
    ]
});

console.log(`Created ${createManyUsers.count} users`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
