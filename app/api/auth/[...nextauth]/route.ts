import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import prisma from '../../../lib/prisma'
import bcrypt from 'bcryptjs'
import { PrismaAdapter } from "@next-auth/prisma-adapter";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            authorization: {
              params: {
                prompt: "consent",
                access_type: "offline",
                response_type: "code",
              },
            },
          }),
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            credentials: {
              email: { label: "email", type: "text", placeholder: "jsmith" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                  throw new Error('Invalid credentials');
                }
          
                const user = await prisma.user.findUnique({
                  where: {
                    email: credentials.email
                  }
                });
        
                if (!user || !user?.hashedPassword) {
                  throw new Error('Invalid credentials');
                }
        
                const isCorrectPassword = await bcrypt.compare(
                  credentials.password,
                  user.hashedPassword
                );
        
                if (!isCorrectPassword) {
                  throw new Error('Invalid credentials');
                }
                return user;
              }
          })
    ],
    session: {
      strategy: "jwt",
    },
    pages: {
      signIn: '/auth/signin',
      error: '/auth/error',
      newUser: '/auth/signup'
    },
    secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}