import Link from 'next/link'

export default function NavBar(){ 
  return (
    <nav className="bg-white/80 backdrop-blur-sm sticky top-0 z-20 shadow-sm">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="font-bold">Happy Bhai Dooj Baccha ❤️</div>
        <div className="flex gap-2 text-sm">
          <Link href="/">Home</Link>
          <Link href="/game">Game</Link>
          <Link href="/memes">Memes</Link>
          <Link href="/music">Music</Link>
          <Link href="/wishes">Wishes</Link>
        </div>
      </div>
    </nav>
  )
}
