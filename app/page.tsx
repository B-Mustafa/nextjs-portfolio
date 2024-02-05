
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
  <>
    <section className="hero-container flex items-center justify-center h-screen bg-[#DEE4E7] dark:bg-gray-900">
      
      <div className="hero-content-container flex items-center justify-between max-w-7xl w-full  py-5 z-10 px-5">
        <div className="hero-content">
          <div className="text max-w-xl text-left">
            <h1 className="text-4xl text-[#333] dark:text-white ">Hi, I&apos;m Mustafa ,</h1>
            <span className="red-font text-3xl font-semibold text-red-600">Developer</span>
            <h2 className="text-4xl text-[#333] dark:text-white">From India</h2>
            <p className="p-text my-2 font-medium text-lg">
              Full stack developer. Coffee-fueled coder. Pizza-powered problem solver. Embracing new tech with a smile.
            </p>
          </div>

          <div className="links flex gap-5 ">
            <Link href="/project">
              <Button className="btn-main bg-[#333] text-white px-2 py-2 rounded text-center cursor-pointer hover:bg-[#222]">
                Projects
              </Button>
            </Link>
            <Link href="/contact">
              <Button  className="btn-main bg-[#333] text-white px-2 py-2 rounded text-center cursor-pointer hover:bg-[#222]">
                Let&apos;s Talk
              </Button >
            </Link>
          </div>
        </div>
        <Image src="/assets/sidemenu.jpg" width={300} height={400} alt="Mustafa Bhikhapurwala" className="img z-10 max-w-full h-auto rounded-md" />
      </div>
      {/* Added custom bg animated  */}
      <div className='wrapper '>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    </section>
    <Footer/>
  </>
  );
}

