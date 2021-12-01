import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Jusangs!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Jusangs page" />
        <p className="description">
          김주상의 페이지에 오신 것을 환영합니다.
        </p>
      </main>

      <Footer />
    </div>
  )
}
