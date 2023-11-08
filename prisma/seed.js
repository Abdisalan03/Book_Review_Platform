// import prisma from "../api/lib/index.js";

// async function seed() {
//   try {
//   ///  Delete existing data
//     await prisma.admin.deleteMany();
//     await prisma.user.deleteMany();
//     await prisma.book.deleteMany();

//     // // Reset auto-increment counters
//     await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name = 'admin'`;
//     await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name = 'user'`;
//     await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name = 'book'`;

//     // Seed data for the Owner model
//     // await prisma.admin.create({
//     //   data: {
//     //     username : "Abdirahman04",
//     //     password: "12345",
//     //   },
//     // });
    
   
//     // await prisma.admin.create({
//     //     data: {
//     //       username : "Abdi76",
//     //       password: "12346",
//     //     },
//     //   });
//     //   await prisma.admin.create({
//     //     data: {
//     //       username : "c",
//     //       password: "1233",
//     //     },
//     //   });

//       // await prisma.user.create({
//       //   data: {
//       //     name: "Mohemed osman abdi",
//       //     email: "mohamed@gmail.com",
//       //     password:"123456",
//       //   },
//       // });
//     // await prisma.user.create({
//     //   data: {
//     //     authorId: 1,
//     //     title: "hagaha nafta",
//     //     price: 10,
//     //     image:
//     //       "https://www.facebook.com/photo?fbid=315090881195805&set=a.191846326853595",
//     //   },
//     // });
    
//     // await prisma.book.create({
//     //   data: {
//     //     authorId: 2,
//     //     title: "saxiib wangsan",
//     //     price: 10,
//     //     image:
//     //       "https://www.facebook.com/photo/?fbid=242887338416160&set=a.191846316853596",
//     //   },
//     // });

//     // await prisma.bookStore.create({
//     //   data: {
//     //     bookId: 1,
//     //     name: "home book ",
//     //     location: "Mogadisho - Somalia",
//     //   },
//     // });
//     //   await prisma.bookStore.create({
//     //     data: {
//     //       bookId: 2,
//     //       name: "somali book ",
//     //       location: "Mogadisho - Somalia",
//     //     },
//     //   });
//     // await prisma.book.create({
//     //     data: {
//     //         title: "naftayday gacalo",
//     //         image: "https://www.facebook.com/photo?fbid=315090881195805&set=a.191846326853595",    
//     //         author:"abdirahman" ,
//     //         year : 2023,    
//     //         price: 10
//     //     },
//     //   });

//     console.log("Seed data created successfully.");
//   } catch (error) {
//     console.error("Error seeding data:", error);
//   } finally {
//     await prisma.$disconnect();
//   }
// }

// seed();