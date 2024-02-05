// 'use client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/footer/footer'
import { ThemeProvider } from '../components/context/ThemeContext'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'News Blog',
  description: 'Updated News Blogs from Everywhere',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const { mode } = useContext(ThemeContext);
  return (
    <html lang="en">
    <body className={inter.className}>
     
        <div className='container'>
          <Navbar/>
          {children}
          <Footer/>
        </div>
      
      </body>
       
    </html>
  )
}
