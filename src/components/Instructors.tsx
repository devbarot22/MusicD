'use client'

import { AnimatedTooltip } from "./ui/animated-tooltip"
import { WavyBackground } from "./ui/wavy-background"

const Instructor = [
  {
    id: 1,
    name: "Alice Johnson",
    designation: "Music Educator",
    image: "https://plus.unsplash.com/premium_photo-1691784778805-e1067ac42e01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 2,
    name: "Brian Smith",
    designation: "Technology Integration Specialist",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 3,
    name: "Clara Williams",
    designation: "Choral Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 4,
    name: "David Brown",
    designation: "Music Production Expert",
    image: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
  }
]


const Instructors = () => {
  return (
    <div className="h-[40rem] relative overflow-hidden flex items-center justify-center"> 
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Instructors</h2>
        <p className="text-base md:text-lg text-white text-center mb-4">Learn from professional musicians of industry and shape your journey</p>
        <div className="flex items-center justify-center flex-row mb-10 w-full">
        <AnimatedTooltip items={Instructor} />
        </div>
      </WavyBackground>
    </div>
  )
}

export default Instructors