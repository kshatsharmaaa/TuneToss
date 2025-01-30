// import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Users, Radio, Headphones } from "lucide-react"
import { Appbar } from "./components/Appbar"
import { Redirect } from "./components/Redirect"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-black via-purple-900 to-black text-white">     
      <Appbar />
      <Redirect/>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 ">
          <div className="container px-4 md:px-6">          
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none text-white">
                  Let Fans <span className="text-purple-600">Choose</span> Your Beat
                </h1>
                <p className="mx-auto max-w-[600px] text-xl text-gray-300 md:text-2xl">
                  tunetoss: Where your audience controls the playlist.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-purple-600 text-white hover:bg-purple-700">Get Started</Button>
                <Button
                  variant="outline"
                  className="text-purple-600 border-white hover:bg-purple-600 hover:text-white transition-colors"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8 text-purple-900">
              Why tunetoss?
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-2 p-6 rounded-lg bg-purple-500 text-white shadow-lg transform hover:scale-105 transition-transform duration-200">
                <Users className="h-12 w-12" />
                <h3 className="text-xl font-bold">Fan Engagement</h3>
                <p className="text-center">Let your audience choose the music.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-6 rounded-lg bg-purple-900 text-white shadow-lg transform hover:scale-105 transition-transform duration-200">
                <Radio className="h-12 w-12" />
                <h3 className="text-xl font-bold">Live Interaction</h3>
                <p className="text-center">Real-time voting and song requests.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-6 rounded-lg bg-purple-500 text-white shadow-lg transform hover:scale-105 transition-transform duration-200">
                <Headphones className="h-12 w-12" />
                <h3 className="text-xl font-bold">Diverse Library</h3>
                <p className="text-center">Millions of tracks at your fingertips.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Ready to tunetoss?</h2>
                <p className="mx-auto max-w-[600px] text-xl text-purple-100 md:text-2xl">
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
      <footer className="py-6 w-full shrink-0 px-4 md:px-6 border-t border-purple-900 bg-black">
        <div className="container flex flex-col gap-2 sm:flex-row items-center">
          <p className="text-xs text-gray-400">© 2024 tunetoss. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs text-gray-400 hover:text-purple-400 transition-colors" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs text-gray-400 hover:text-purple-400 transition-colors" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
    
  )
}


