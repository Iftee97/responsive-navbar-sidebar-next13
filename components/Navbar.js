import Link from "next/link"
import { useContext } from "react"
import { AppContext } from "@/context/AppContext"
import { HiBars3 } from "react-icons/hi2"

export default function Navbar({ navLinks }) {
  const { toggleSidebar } = useContext(AppContext)

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-slate-50 border-b border-[#cccccc4d]">
      <Link href='/' className="inline-block">
        <span className="font-semibold text-[24px]">
          Next13
        </span>
      </Link>
      <ul className="md:hidden flex items-center gap-4">
        {navLinks.map((link, index) => (
          <li 
            key={index} className="text-[18px] font-medium" 
            // onClick={toggleSidebar}
          >
            <Link href={link.path}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <button className="hidden md:inline-block cursor-pointer" onClick={toggleSidebar}>
        <HiBars3 className="text-[24px]" />
      </button>
    </nav>
  )
}
