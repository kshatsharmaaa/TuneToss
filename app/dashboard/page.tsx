/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";
import { signOut, useSession} from "next-auth/react";
import { useRouter } from "next/navigation";
import { Share2, LogOut } from "lucide-react";
import VideoInput from "../components/VideoInput";
import VideoQueue from "../components/VideoQueue";
import CurrentlyPlaying from "../components/CurrentlyPlaying";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import axios from "axios";

const REFRESH_INTERVAL_MS = 10* 1000;

export default function Dashboard() {
  
  const { data: session } = useSession();
  const router = useRouter();

  async function refreshStreams() {
    const res = await fetch(`/api/streams/my`, {
      credentials: "include"
    })
  }

  useEffect(()=> {
    refreshStreams();
    const interval = setInterval(() => {

    }, REFRESH_INTERVAL_MS)
  }, []) 

  

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Stream Song Voting",
        text: "Join me in voting for the best song!",
        url: window.location.href,
      });
    } else {
      alert("Sharing is not supported in your browser.");
    }
  };

  const handleLogout = async () => {
    await signOut({ redirect: false }); // Prevent NextAuth from redirecting
    router.push("/"); // Manually redirect to homepage
  };

  
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-center text-purple-300 flex-grow">
            tunetoss - Song Voting
          </h1>
          <button
            onClick={handleShare}
            className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <Share2 size={20} />
            Share
          </button>
          {session?.user && (
            <Button onClick={handleLogout} className="bg-purple-600 hover:bg-purple-500 text-white flex items-center gap-2 ml-4">
              <LogOut size={20} />
              Logout
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-purple-200">Currently Playing</h2>
            <CurrentlyPlaying videoId="dQw4w9WgXcQ" />
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-200">Submit a Song</h2>
            <VideoInput />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-purple-200">Upcoming Songs</h2>
            <VideoQueue />
          </div>
        </div>
      </div>
    </main>
  );
}


