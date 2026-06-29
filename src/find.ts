import { prisma } from "../lib/prisma.js";

async function main() {

  const findAllPosts = await prisma.post.findMany();
  const findFirstPost = await prisma.post.findFirstOrThrow(
    {
      where: {
        id: 2
      }
    }
  );

  const findUniquePost = await prisma.post.findUniqueOrThrow(
    {
      where: {
        id: 2
      },
      select:{
        title: true,
        content: true,
        published: true
      }
    }
  )
  //   console.log(findAllPosts);
  console.log(findUniquePost);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
