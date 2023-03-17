import { Hero, About, Services, Process, Testimonials } from "@/sections"

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Process />
    </main>
  )
}
