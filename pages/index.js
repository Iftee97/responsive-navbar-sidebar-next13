import Head from "next/head"
import { useContext } from "react"
import { AppContext } from "@/context/AppContext"

export default function Home() {
  const {
    count,
    increaseCount,
    decreaseCount
  } = useContext(AppContext)

  return (
    <>
      <Head>
        <title>Next13</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <h1 className="text-3xl text-blue-500 font-bold mb-8">
          Hello Next13!
        </h1>
        <div className="flex items-center gap-4">
          <button
            className="px-3 py-2 bg-[#ccc] text-[#000] rounded-md"
            onClick={increaseCount}
          >
            increase count
          </button>
          <button
            className="px-3 py-2 bg-[#ccc] text-[#000] rounded-md"
            onClick={decreaseCount}
          >
            decrease count
          </button>
        </div>
        <p className="text-2xl mt-4">
          Count: {count}
        </p>
      </>
    </>
  )
}
