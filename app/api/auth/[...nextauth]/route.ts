/* eslint-disable @typescript-eslint/no-unused-vars */
import { prismaClient } from "@/app/lib/db";
import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github";

const handler = NextAuth({
  // what code should i write to login with google
  providers: [
    GitHubProvider({
      clientId : process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    })
  ], 
  callbacks: {
    async signIn(params) {
      if(!params.user.email) {
        return false;
      }
      try {
        await prismaClient.user.create({
          data: {
            email: params.user.email ?? "", 
            provider: "Github"
          }
        })
      } catch(e) {

      }
      
      return true;
    }
  }
  
})

export { handler as GET, handler as POST }