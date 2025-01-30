"use client";
import { signIn, signOut, useSession } from "next-auth/react";

import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
import { Music } from "lucide-react"
export function Appbar () {
    const session = useSession();
    return  <div>
        <Link className="flex items-center justify-center" href="#">
          <Music className="h-6 w-6 text-red-600" />
          <span className="ml-2 text-2xl font-bold text-red-600">tunetoss</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-red-400 transition-colors" href="#">
            Features
          </Link>
          
          <Link className="text-sm font-medium hover:text-red-400 transition-colors" href="#">
            Pricing
          </Link>
          {session.data?.user && <button className ="m-2 p-2 bg-blue-400" onClick={()=> signOut()}>Logout</button>}
          {!session.data?.user && <button className ="m-2 p-2 bg-blue-400" onClick={()=>signIn()}>Sign In</button>}
        </nav>
    </div>
}