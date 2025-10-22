import Head from 'next/head'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

export default function Memes(){
  return (
    <Layout>
      <Head><title>Memes — Happy Bhai Dooj Baccha ❤️</title></Head>
      <h2 className="text-xl font-bold">Memes & Laughs</h2>
      <p className="text-sm mt-1">Tap the memes to make them dance!</p>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <motion.div whileTap={{ scale: 0.95 }} className="bg-white/80 rounded-xl p-2 shadow">
          <img src="/images/meme1.jpg" alt="meme1" className="rounded w-full h-40 object-cover" />
        </motion.div>
        <motion.div whileTap={{ scale: 0.95 }} className="bg-white/80 rounded-xl p-2 shadow">
          <img src="/images/meme2.jpg" alt="meme2" className="rounded w-full h-40 object-cover" />
        </motion.div>
      </div>

      <Footer />
    </Layout>
  )
}
