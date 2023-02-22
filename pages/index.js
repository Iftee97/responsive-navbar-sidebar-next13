import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Next13</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl text-blue-500 font-bold">
          Hello Next13!
        </h1>
      </main>
    </>
  )
}
