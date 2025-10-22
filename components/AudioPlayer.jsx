import { useState, useEffect } from 'react'
import { Howl } from 'howler'

export default function AudioPlayer({ label='Play', src='/audio/voice-message.mp3' }){
  const [playing, setPlaying] = useState(false)
  const [sound, setSound] = useState(null)
  useEffect(()=>{
    if (typeof window === 'undefined') return
    setSound(new Howl({ src: [src], html5: true }))
  },[src])
  function toggle(){ if(!sound) return; if(playing){ sound.pause(); setPlaying(false) } else { sound.play(); setPlaying(true) } }
  return <button onClick={toggle} className="px-4 py-2 rounded bg-green-500 text-white">{playing ? 'Pause' : label}</button>
}
