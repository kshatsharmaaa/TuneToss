import { YouTubeEmbed } from "@next/third-parties/google"

export default function CurrentlyPlaying({ videoId }: { videoId: string }) {
  return (
    <div className="aspect-video rounded-lg overflow-hidden">
      <YouTubeEmbed videoid={videoId} height={400} params="controls=1" />
    </div>
  )
}

