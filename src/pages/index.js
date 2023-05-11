import Head from 'next/head'
import Home from '@/components/pages/Home'

export default function Index() {
  return (
    <>
      <Head>
        <title>Daniel Allott</title>
        <meta name="description" content="Daniel Allott - personal site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/pictures/me.png" />
      </Head>
      <main >
       <Home />
      </main>
    </>
  )
}
