import Head from 'next/head'
import Layout from '../components/Layout'
import ConfettiButton from '../components/ConfettiButton'
import Footer from '../components/Footer'

export default function Wishes(){
  return (
    <Layout>
      <Head><title>Wishes — Happy Bhai Dooj Baccha ❤️</title></Head>
      <h2 className="text-xl font-bold">Wishes for Dipali (Baccha)</h2>
      <p className="mt-2 text-sm">A little note from your bhai 💝</p>

      <div className="mt-4 bg-white/80 rounded-xl p-4 shadow">
        <p className="text-sm">Hello <strong>Dipali</strong> — my sweet <strong>Baccha</strong>,</p>
        <p className="mt-2 text-sm">I made this tiny site to make you smile on Bhai Dooj. I love you a lot and wish you endless laughter, sweets, and fun. — <em>Your Bhai</em></p>

        <div className="mt-4 flex gap-3">
          <ConfettiButton>Celebrate</ConfettiButton>
          <button onClick={() => alert('Surprise! A virtual hug ❤️')} className="px-4 py-2 rounded bg-yellow-400">Open Surprise</button>
        </div>
      </div>

      <Footer />
    </Layout>
  )
}
