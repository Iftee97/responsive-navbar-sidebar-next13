import HiddenSidebar from "./HiddenSidebar"
import Navbar from "./Navbar"

export default function Header() {
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
    <header>
      <HiddenSidebar navLinks={navLinks} />
      <Navbar navLinks={navLinks} />
    </header>
  )
}
