import { prisma } from "../lib/prisma.js";

async function main() {
  const createManyPosts = await prisma.post.createMany({
    data: [
        {
            title: "Hello World",
            content: "This is my first post",
            published: true
        },
        {
            title: "Hello World 2",
            content: "This is my second post",
            published: true
        },
        {
            title: "Hello World 3",
            content: "This is my third post",
            published: false
        },
        {
            title: "Hello World 4",
            content: "This is my fourth post",
            published: false
        }
    ]
  })

  console.log(`Created ${createManyPosts.count} posts`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
