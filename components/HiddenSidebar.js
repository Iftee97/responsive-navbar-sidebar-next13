import Link from "next/link"
import { useContext } from "react"
import { AppContext } from "@/context/AppContext"
import { HiXMark } from "react-icons/hi2"

export default function HiddenSidebar({ navLinks }) {
  const { showSidebar, toggleSidebar } = useContext(AppContext)

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
