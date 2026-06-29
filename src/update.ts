import { prisma } from "../lib/prisma.js";

async function main() {
  const updatePost = await prisma.post.update({
    where: {
      id: 1,
    },
    data: {
      title: "Hello World Updated",
      content: "This is my first post updated",
      published: true,
    },
  });

  console.log(updatePost);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });