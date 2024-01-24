import Image from 'next/image'
import HeroHeader from './components/HeroHeader'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import ProjectSection from './components/ProjectSection'
import EmailSection from './components/EmailSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className='py-4 px-14 mt-24 mx-auto container'>
        <HeroHeader />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
    </main>
  )
}
