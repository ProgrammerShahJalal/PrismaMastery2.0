import { prisma } from "../lib/prisma.js";

const relationalQueries = async () => {
    const result = await prisma.user.findUnique({
        where: {
            id: 1
        },
        include: {
            posts: true,
            profile: true
        },
        omit: {
            role: true
        },
    });
    console.log(result);
}

relationalQueries();