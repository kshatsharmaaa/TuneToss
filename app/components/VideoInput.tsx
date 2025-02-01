"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function VideoInput() {
  const [videoUrl, setVideoUrl] = useState("")
  const [previewId, setPreviewId] = useState("")

  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the video URL to your backend
    console.log("Submitted:", videoUrl)
    setVideoUrl("")
    setPreviewId("")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value
    setVideoUrl(url)
    const videoId = extractVideoId(url)
    setPreviewId(videoId || "")
  }

  const extractVideoId = (url: string) => {
    const regex = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/
    const match = url.match(regex)
    return match ? match[1] : null
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex space-x-2">
        <Input
          type="text"
          value={videoUrl}
          onChange={handleInputChange}
          placeholder="Paste YouTube video URL here"
          className="flex-grow bg-purple-800 bg-opacity-50 text-white placeholder-purple-300 border-purple-600"
        />
        <Button type="submit" className="bg-purple-600 hover:bg-purple-500 text-white">
          Submit
        </Button>
      </div>
      {previewId && (
        <div className="aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${previewId}`}
            className="w-full h-full rounded-lg"
            allowFullScreen
          />
        </div>
      )}
    </form>
  )
}

