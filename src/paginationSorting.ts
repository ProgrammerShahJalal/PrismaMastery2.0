import { prisma } from "../lib/prisma.js";

const paginationSorting = async() => {
    //offset pagination
    // const posts = await prisma.post.findMany({
    //     skip: 0, //skip first 0 records
    //     take: 2, //take 2 records
    // });
    // console.log(posts);

    //cursor pagination
    // const postsCursor = await prisma.post.findMany({
    //     cursor: {
    //         id: 3,
    //     },
    //     take: 2,
    // });
    // console.log(postsCursor);

    //sorting
    const postsSorting = await prisma.post.findMany({
        orderBy: {
            published: "desc",
        },
    });
    console.log(postsSorting);

}

paginationSorting();