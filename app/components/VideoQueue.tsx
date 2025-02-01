"use client"

import { useState } from "react"
import { ThumbsUp, ThumbsDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axios from "axios"

type Video = {
  id: string
  title: string
  upvotes: number
  downvotes: number
  thumbnailUrl: string
}

export default function VideoQueue() {
  const [queue, setQueue] = useState<Video[]>([
    {
      id: "video1",
      title: "Awesome Song 1",
      upvotes: 15,
      downvotes: 3,
      thumbnailUrl: "https://img.youtube.com/vi/dQw4w9WgXcQ/default.jpg",
    },
    {
      id: "video2",
      title: "Cool Music Video",
      upvotes: 10,
      downvotes: 2,
      thumbnailUrl: "https://img.youtube.com/vi/9bZkp7q19f0/default.jpg",
    },
    {
      id: "video3",
      title: "Best Track Ever",
      upvotes: 20,
      downvotes: 1,
      thumbnailUrl: "https://img.youtube.com/vi/JGwWNGJdvx8/default.jpg",
    },
  ])

  const handleVote = (id: string, isUpvote: boolean) => {
    setQueue(
      queue
        .map((video) =>
          video.id === id
            ? {
                ...video,
                upvotes: isUpvote ? video.upvotes + 1 : video.upvotes,
                downvotes: isUpvote ? video.downvotes : video.downvotes + 1,
              }
            : video,
        ).sort((a, b) => b.upvotes - b.downvotes - (a.upvotes - a.downvotes)))

        fetch("/api/streams/upvote", {
          method: "POST",
          body: JSON.stringify({
            streamId: id
          })
        })
  }

  return (
    <ul className="space-y-4">
      {queue.map((video) => (
        <li key={video.id} className="flex items-center justify-between bg-purple-800 bg-opacity-50 p-4 rounded-lg">
          <div className="flex items-center space-x-4">
            <Image
              src={video.thumbnailUrl || "/placeholder.svg"}
              alt={video.title}
              width={90}
              height={68}
              className="rounded"
            />
            <span className="font-medium text-purple-100">{video.title}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleVote(video.id, true)}
              className="bg-purple-700 hover:bg-purple-600 text-white border-purple-500"
            >
              <ThumbsUp className="h-4 w-4 mr-1" />
              <span>{video.upvotes}</span>
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleVote(video.id, false)}
              className="bg-purple-700 hover:bg-purple-600 text-white border-purple-500"
            >
              <ThumbsDown className="h-4 w-4 mr-1" />
              <span>{video.downvotes}</span>
            </Button>
          </div>
        </li>
      ))}
    </ul>
  )
}

