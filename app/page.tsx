'use client'

import ClientSection from "./components/Landing/ClientSection"
import Hero from "./components/Landing/Hero"
import Navbar from "./components/Landing/Navbar"

export default function Home() {

  return (
    <div className={'container'}>
       {/* {session && <Dashboard />}
      {!session && <Login />} */}
      <Navbar />
      <Hero />
      {/* <div className="py-4">
        <ClientSection />
      </div> */}
    </div>
   )
}
