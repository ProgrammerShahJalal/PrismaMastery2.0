import { prisma } from "../lib/prisma.js";

async function main() {
  const post = await prisma.post.create({
    data: {
      title: "Hello World",
      content: "This is my first post",
      published: true,
    },
  });

  console.log(post);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
