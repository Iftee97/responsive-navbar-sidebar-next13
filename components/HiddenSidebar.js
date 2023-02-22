import Link from "next/link"
import { useContext } from "react"
import { AppContext } from "@/context/AppContext"
import { HiXMark } from "react-icons/hi2"

export default function HiddenSidebar() {
  const { showSidebar, toggleSidebar } = useContext(AppContext)

  const navLinks = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'About',
      path: '/about'
    },
    {
      name: 'Contact',
      path: '/contact'
    }
  ]

  return (
    <div className={`fixed top-0 left-0 z-[999] block w-screen h-screen ${showSidebar ? 'w-full translate-x-0 transition-all ease-in-out duration-500' : 'translate-x-[-300%] transition-all ease-in-out duration-500'}`}>
      <div className="block overflow-auto bg-[#fff] h-full">
        <div className="flex items-center justify-between px-8 py-4 bg-slate-50 border-b border-[#cccccc4d]">
          <Link href='/' className="inline-block" onClick={toggleSidebar}>
            <span className="font-semibold text-[24px]">
              LogoLink
            </span>
          </Link>
          <button className="inline-block cursor-pointer" onClick={toggleSidebar}>
            <HiXMark className="text-[24px]" />
          </button>
        </div>
        <ul className="flex flex-col items-center justify-center gap-4 py-8">
          {/* <li className="text-[18px] font-medium">
            <Link href='/'>
              Home
            </Link>
          </li>
          <li className="text-[18px] font-medium">
            <Link href='/about'>
              About
            </Link>
          </li>
          <li className="text-[18px] font-medium">
            <Link href='/contact'>
              Contact
            </Link>
          </li> */}
          {navLinks.map((link, index) => (
            <li key={index} className="text-[18px] font-medium" onClick={toggleSidebar}>
              <Link href={link.path}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
