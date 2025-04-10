// import { saltAndHashPassword } from "@/app/utils/helper";
import { Prisma, PrismaClient } from "@prisma/client";
import bcrypt, { hash } from "bcryptjs";
const prisma = new PrismaClient();
const secret = process.env.AUTH_SECRET;
const pass = process.env.SEED_PASSWORD

function saltAndHashPassword(password: any) {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds)
  const hash = bcrypt.hashSync(password, salt)
  return hash;
}

async function main() {
  const password = await saltAndHashPassword(pass)
  const andi = await prisma.user.upsert({
    where: { email: "web.aeriallistique@gmail.com" },
    update: {},
    create: {
      email: "web.aeriallistique@gmail.com",
      name: 'Andi Taz',
      hashedPassword: password,
      blog: {
        create: [{
          blogTitle: 'First Blog',
          blogContent: 'a whole lot of text to make it seem like it is a proper blog.',
          blogImg: ''
        }]
      }
    },
  });
  console.log(`Seeded user:`, andi);

}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });