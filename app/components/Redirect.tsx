/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import {useEffect} from "react"
import {useSession} from "next-auth/react"
import { useRouter } from "next/navigation";
export function Redirect() {
    const session = useSession();
    const router = useRouter();
    useEffect(() => {
        if(session?.data?.user) {
            router.push("/dashboard");
        }
    }, [session])
    
    return null
}