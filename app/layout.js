import './globals.css';
import Navbar from '@/components/Navbar';
import { Merriweather, Poppins, Source_Sans_Pro } from 'next/font/google'

export const merriweather = Merriweather({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '700', '900']
})

export const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const sourceSans = Source_Sans_Pro({
  subsets: ['latin'],
  display: 'swap',
  weight: ['200', '300', '400', '600', '700', '900']
})

export const metadata = {
  title: 'Digio | Grow your business today',
  description: 'Digio is a leading web development and digital marketing company that helps businesses grow their online presence. With a team of experts in web design, development, SEO, PPC, and social media marketing, Digio delivers customized solutions that drive results. Contact us today to learn how we can help you achieve your online goals.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className={`${poppins.className}`}>
          {children}
        </div>
      </body>
    </html>
  )
}
