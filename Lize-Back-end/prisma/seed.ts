import { prisma } from "../src/db/prisma.js";

await prisma.user.create({
  data: {
    name: 'John',
    email: 'john@example.com',
    password: '123456'
  }
})

await prisma.chat.create({
  data: {
    name: "Abobik",
  }
})

await prisma.$disconnect()