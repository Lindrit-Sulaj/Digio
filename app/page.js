import { Hero, About, Services, Process, Testimonials, Projects, Pricing } from "@/sections"

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Process />
      <div className="h-[90px] rounded-b-[90px] bg-darkBackground"></div>
      <Projects />
      <Pricing />
    </main>
  )
}
