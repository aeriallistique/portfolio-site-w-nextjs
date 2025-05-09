import NextAuth from "next-auth"
import Github from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import prisma from "./db"
import { saltAndHashPassword } from "./app/utils/helper"
const secret = process.env.AUTH_SECRET;


export const { handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  providers: [
    Github({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email@example.com", },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        if (!credentials || !credentials.email || !credentials.password) {
          return null
        }

        const email = credentials.email as string;
        // const hash = saltAndHashPassword(credentials.password);
        let user = await prisma.user.findUnique({
          where: {
            email,
          }
        })

        if (!user) {
          throw new Error('No user found!!!')
        } else {
          const isMatched = await bcrypt.compare(credentials.password as string, user.hashedPassword as string)
          if (!isMatched) {
            throw new Error('Incorrect password')
          }
        }
        return user
      }
    })
  ],

})