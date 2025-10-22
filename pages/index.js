import Head from 'next/head'
import Layout from '../components/Layout'
import AudioPlayer from '../components/AudioPlayer'
import ConfettiButton from '../components/ConfettiButton'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <Layout>
      <Head><title>Happy Bhai Dooj Baccha ❤️</title></Head>

      <div className="text-center">
        <h1 className="text-3xl font-extrabold">🎉 Happy Bhai Dooj, Dipali (Baccha)! ❤️</h1>
        <p className="mt-2 text-sm text-gray-700">A small surprise from your bhai — memes, music, a cute game and my message just for you.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        <div className="bg-white/80 rounded-xl p-4 shadow-md">
          <img src="/images/dipali.jpg" alt="Dipali" className="rounded-lg object-cover w-full h-64" />
          <p className="mt-3 text-sm">Hey <strong>Dipali (Baccha)</strong> — this is a tiny site I made just for you. Tap play to hear my message.</p>

          <div className="mt-4 flex gap-3">
            <AudioPlayer label={'Play Voice Message'} src={'/audio/voice-message.mp3'} />
            <ConfettiButton>Celebrate</ConfettiButton>
          </div>
        </div>

        <div className="bg-white/80 rounded-xl p-4 shadow-md">
          <h4 className="font-semibold">Quick Wishes</h4>
          <ul className="mt-2 list-disc list-inside text-sm">
            <li>Stay smiling, Baccha 😄</li>
            <li>May your days be full of fun and sweets 🍬</li>
            <li>Always my partner in mischief 😉</li>
          </ul>

          <div className="mt-4"><a href="/wishes" className="inline-block px-4 py-2 rounded bg-pink-400 text-white">Open Full Wishes</a></div>
        </div>
      </div>

      <Footer />
    </Layout>
  )
}
