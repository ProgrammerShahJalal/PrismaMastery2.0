import { prisma } from "../lib/prisma.js";

const deleteData = async () => {
//   const deletePost = await prisma.post.delete({
//     where: {
//       id: 1,
//     },
//   });

  const deleteManyPosts = await prisma.post.deleteMany({ 
     where: {
        published: false
     }
   });

//   console.log(deletePost);
  console.log(`Deleted ${deleteManyPosts.count} posts`);
};

deleteData();