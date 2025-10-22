import Head from 'next/head'
import Layout from '../components/Layout'
import GamePlay from '../components/GamePlay'
import Footer from '../components/Footer'

export default function Game(){
  return (
    <Layout>
      <Head><title>Game — Happy Bhai Dooj Baccha ❤️</title></Head>
      <h2 className="text-xl font-bold">Game for Dipali (Baccha)</h2>
      <p className="text-sm mt-1">A tiny, easy game you can clear fast — perfect for mobile.</p>
      <div className="mt-4"><GamePlay /></div>
      <Footer />
    </Layout>
  )
}
