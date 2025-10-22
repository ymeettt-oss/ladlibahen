import NavBar from './NavBar'

export default function Layout({ children }){
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-pink-50 flex flex-col">
      <NavBar />
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-6">{children}</main>
    </div>
  )
}
