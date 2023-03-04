import './globals.css';
import Link from 'next/link';
import {Montserrat} from "@next/font/google";
const montserrat = Montserrat(
  {
    weight:['400','700','800'],
    subsets:['latin'],
    variable:"--font-montserrat"
  }
)
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${montserrat.className}`}>
        <header>
          <p> logo</p>
          <Link href="/about">about</Link>
          
        </header>
        
        {children}</body>
    </html>
  )
}
