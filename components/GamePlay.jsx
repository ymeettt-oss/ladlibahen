import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function GamePlay(){
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(12)
  const [won, setWon] = useState(false)
  useEffect(()=>{ if(score>=3) setWon(true) },[score])
  useEffect(()=>{ if(timeLeft<=0) return; const t=setTimeout(()=>setTimeLeft(s=>s-1),1000); return ()=>clearTimeout(t) },[timeLeft])
  function pop(){ if(timeLeft<=0||won) return; setScore(s=>s+1) }
  function reset(){ setScore(0); setTimeLeft(12); setWon(false) }
  return (
    <div className="bg-white/70 rounded-xl p-4 shadow-md">
      <h3 className="font-semibold text-center">Catch 3 hearts — super easy! 💖</h3>
      <p className="text-xs text-center mt-1">Tap the floating hearts. You have {timeLeft}s</p>
      <div className="relative h-40 mt-4 overflow-hidden">
        {[0,1,2,3,4].map(i=>(
          <motion.img key={i} src="/images/meme1.jpg" alt="heart" onClick={pop}
            className="absolute w-14 h-14 rounded-full object-cover shadow-lg cursor-pointer"
            initial={{ y:220, x: Math.random()*220-110, opacity:0 }}
            animate={{ y: -20 - Math.random()*80, x: Math.random()*160-80, opacity:1 }}
            transition={{ repeat: Infinity, repeatType: 'reverse', duration: 3 + Math.random()*2, ease: 'easeInOut' }} />
        ))}
      </div>
      <div className="mt-3 flex justify-between items-center">
        <div>Score: <strong>{score}</strong></div>
        <div>{won? <span className="text-green-600 font-bold">You won! 🎉</span>: <span className="text-orange-600">Keep going</span>}</div>
      </div>
      <div className="mt-3 flex gap-2 justify-center"><button onClick={reset} className="px-3 py-1 rounded bg-gray-200">Play again</button></div>
    </div>
  )
}
