import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Users, Radio, Headphones } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-red-800">
        
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-black via-red-900 to-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none text-white">
                  Let Fans <span className="text-red-600">Choose</span> Your Beat
                </h1>
                <p className="mx-auto max-w-[600px] text-xl text-gray-300 md:text-2xl">
                  tunetoss: Where your audience controls the playlist.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-red-600 text-white hover:bg-red-700">Get Started</Button>
                <Button
                  variant="outline"
                  className="text-white border-white hover:bg-red-600 hover:text-white transition-colors"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8 text-black">
              Why tunetoss?
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-2 p-6 rounded-lg bg-red-600 text-white shadow-lg transform hover:scale-105 transition-transform duration-200">
                <Users className="h-12 w-12" />
                <h3 className="text-xl font-bold">Fan Engagement</h3>
                <p className="text-center">Let your audience choose the music.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-6 rounded-lg bg-black text-white shadow-lg transform hover:scale-105 transition-transform duration-200">
                <Radio className="h-12 w-12" />
                <h3 className="text-xl font-bold">Live Interaction</h3>
                <p className="text-center">Real-time voting and song requests.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-6 rounded-lg bg-red-600 text-white shadow-lg transform hover:scale-105 transition-transform duration-200">
                <Headphones className="h-12 w-12" />
                <h3 className="text-xl font-bold">Diverse Library</h3>
                <p className="text-center">Millions of tracks at your fingertips.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="DJ mixing music"
                className="mx-auto rounded-lg object-cover shadow-lg"
              />
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-red-600">For Creators</h2>
                <p className="text-gray-300 text-lg">
                  Elevate your streams with tunetoss. Engage your audience, grow your fanbase, and create unforgettable
                  musical experiences.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2 text-white">
                    <svg
                      className=" h-5 w-5 text-red-600"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Boost engagement with interactive music selection</span>
                  </li>
                  <li className="flex items-center space-x-2 text-white">
                    <svg
                      className=" h-5 w-5 text-red-600"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Gain insights into your audience&apos;s music preferences</span>
                  </li>
                  <li className="flex items-center space-x-2 text-white">
                    <svg
                      className=" h-5 w-5 text-red-600"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Monetize your streams with premium features</span>
                  </li>
                </ul>
                <Button className="bg-red-600 text-white hover:bg-red-700">Start Streaming</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-red-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Ready to tunetoss?</h2>
                <p className="mx-auto max-w-[600px] text-xl text-red-100 md:text-2xl">
                  Join the interactive music streaming revolution. Sign up now!
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="flex-1 bg-white text-black placeholder-gray-500"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit" className="bg-black text-white hover:bg-gray-800">
                    Join
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-6 w-full shrink-0 px-4 md:px-6 border-t border-red-800 bg-black">
        <div className="container flex flex-col gap-2 sm:flex-row items-center">
          <p className="text-xs text-gray-400">© 2024 tunetoss. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs text-gray-400 hover:text-red-400 transition-colors" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs text-gray-400 hover:text-red-400 transition-colors" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}


