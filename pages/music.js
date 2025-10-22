import Head from 'next/head'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import { Howl } from 'howler'
import { useState } from 'react'
import ConfettiButton from '../components/ConfettiButton'

export default function Music(){
  const [playing, setPlaying] = useState({ pal:false, phool:false })
  const pal = (typeof window !== 'undefined') ? new Howl({ src: ['/audio/pal-pal.mp3'], html5:true, volume:0.9 }) : null
  const phool = (typeof window !== 'undefined') ? new Howl({ src: ['/audio/phoolon-ka.mp3'], html5:true, volume:0.9 }) : null

  function toggle(which){
    if(which==='pal'){
      if(!pal) return
      if(playing.pal){ pal.pause(); setPlaying({ ...playing, pal:false }) }
      else{ pal.play(); setPlaying({ pal:true, phool:false }); phool && phool.pause() }
    } else {
      if(!phool) return
      if(playing.phool){ phool.pause(); setPlaying({ ...playing, phool:false }) }
      else{ phool.play(); setPlaying({ pal:false, phool:true }); pal && pal.pause() }
    }
  }

  return (
    <Layout>
      <Head><title>Music — Happy Bhai Dooj Baccha ❤️</title></Head>
      <h2 className="text-xl font-bold">Songs for Dipali (Baccha)</h2>
      <p className="text-sm mt-1">Click play and enjoy the lyrics snippet and floating hearts ✨</p>

      <div className="mt-4 bg-white/80 p-4 rounded-xl shadow">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <img src="/images/dance.gif" alt="dance" className="w-36 h-24 object-cover rounded" />
          <div className="flex-1">
            <div className="mb-3">
              <h3 className="font-semibold">Pal Pal Dil Ke Paas</h3>
              <p className="text-xs italic">"Pal pal dil ke paas, tum rehti ho..."</p>
              <div className="mt-2">
                <button onClick={()=>toggle('pal')} className="px-4 py-2 rounded bg-blue-500 text-white mr-2">{playing.pal ? 'Pause' : 'Play'}</button>
                <ConfettiButton>Celebrate</ConfettiButton>
              </div>
            </div>

            <div>
              <h3 className="font-semibold">Phoolon Ka Taron Ka</h3>
              <p className="text-xs italic">"Phoolon ka taron ka, sabka kehna..."</p>
              <div className="mt-2">
                <button onClick={()=>toggle('phool')} className="px-4 py-2 rounded bg-blue-500 text-white mr-2">{playing.phool ? 'Pause' : 'Play'}</button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4"><p className="text-xs text-gray-500">*Add your MP3 files to public/audio/pal-pal.mp3 and public/audio/phoolon-ka.mp3*</p></div>
      </div>

      <Footer />
    </Layout>
  )
}
