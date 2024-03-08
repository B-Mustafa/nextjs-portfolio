import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Sidebar from "@/components/Sidebar";
import Hamburger from "@/components/Hamburger";
import { Toaster } from "react-hot-toast";
import './posts.css'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mustafa Bhikhapurwala | Portfolio",
  description: "Explore Mustafa's world of coding and innovation at mustafadev.me. Discover web applications, Python projects, and the art of development. Join the journey!",
  keywords: "Portfolio, Web Design, Graphic Design, Web Development, Portfolio, Front-End, Back-End, HTML, CSS, JavaScript, Mustafa, mustafadev, Mustafa Bikhapurwala, bhikhapurmustafa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

    <head>
   
    
    </head>

      <body className={inter.className}>
        <ThemeProvider defaultTheme="dark" attribute="class">
          <SpeedInsights/>
        <Toaster/>
        <div className="flex h-screen overflow-hidden">

            {/* Sidebar */}
            <Sidebar />

            {/* Main content container */}
            <div className="flex flex-col flex-grow overflow-auto">
            <Hamburger/>
              
              {children}

              <Analytics/>
            </div>

          </div>
        
          
        </ThemeProvider>
      </body>
    </html>
  );
}
