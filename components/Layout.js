import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="max-w-[1440px] mx-auto px-[30px] py-[60px] md:pt-[30px] md:pb-0">
        {children}
      </main>
      <Footer />
    </>
  )
}
