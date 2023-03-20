import { Hero, About, Services, Process, Testimonials, Projects, Pricing, StartToday } from "@/sections"

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Process />
      <div className="h-[70px] rounded-b-[70px] md:h-[90px] md:rounded-b-[90px] bg-darkBackground"></div>
      <Projects />
      <Pricing />
      <StartToday />
    </main>
  )
}
