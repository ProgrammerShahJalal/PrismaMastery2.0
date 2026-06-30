import { prisma } from "../lib/prisma.js";

const relationalQueries = async () => {
    // const result = await prisma.user.findUnique({
    //     where: {
    //         id: 1
    //     },
    //     include: {
    //         posts: true,
    //         profile: true
    //     },
    //     omit: {
    //         role: true
    //     },
    // });
    // console.log(result);

    // who's posts are published and have a category
//     const result = await prisma.post.findMany({
//         where: {
//             published: true,
//             postCategories: {
//                 some: {
//                     categoryId: 1
//                 }
//             }
//         },
//         include: {
//             postCategories: {
//                 include: {
//                     category: true
//                 }
//             }
//         }
//     });


// console.log(`Relational queries executed successfully`, result);

// who's posts are published, show his/her name, email, username and bio

// const result = await prisma.user.findMany({
//     where: {
//         posts: {
//             some: {
//                 published: true
//             }
//         }
//     },
//     select: {
//         name: true,
//         email: true,
//         username: true,
//         profile: {
//             select: {
//                 bio: true
//             }
//         }
//     }
// });

// console.log(`Relational queries executed successfully`, result);


//And /OR Filtering
// const result = await prisma.post.findMany({
//     where: {
//         AND:[
            
//             {
//                 title:{
//                     contains: "Post"
//                 }
//             },
//             {published: true}
                
//         ], 
//         OR:[
//             {
//                 postCategories: {
//                     some: {
//                         categoryId: 1
//                     }
//                 }
//             },
//             {
//                 published: true
//             }
//         ]
//     }
// })


// NOT filtering
const result = await prisma.post.findMany({
    where: {
        NOT: [
            {
                published: true
            },
            {
                postCategories: {
                    some: {
                        categoryId: 1
                    }
                }
            }
        ]
    }
})


console.log(`Relational queries executed successfully`, result);
}


relationalQueries();