'use client'

import { Typewriter } from 'react-simple-typewriter'
// import Intro from 'components/modules/Intro'
import Experience from 'components/modules/Experience'
import Publications from 'components/modules/Publications'
import Projects from 'components/modules/Projects'
import Skills from 'components/modules/Skills'
import Contact from 'components/modules/Contact'
import AllProviders from 'components/AllProviders'
import Footer from 'components/ui/theme/Footer'

export default function HomePage() {
  return (
    <AllProviders>
      {/* ===== Hero Section ===== */}
      <section className="relative overflow-hidden font-mono h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[65vh]">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: "url('/images/hero-bg.png')",
            backgroundPosition: 'center 20%',
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-70" />

        {/* Terminal-style Header */}
        <div className="absolute top-2 left-2 z-20 flex flex-col items-start px-2 sm:px-4 text-xs sm:text-sm md:text-lg lg:text-2xl text-white">
          <div className="whitespace-nowrap font-bold text-green-500 mb-1">
            Gaurav_Raut @ Vision %
          </div>
          <div className="">
            <Typewriter
              words={[
                '“The world has all the answers. Perception helps us make sense.”'
              ]}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={1500}
              loop={false}
            />
          </div>
        </div>

        {/* Centered Icons & Button */}
        {/* Centered Icons & Buttons */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 md:px-8 text-center text-white">
          <div className="mt-2 sm:mt-10 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-4 sm:mb-8">
            {['google-scholar', 'github', 'linkedin'].map((icon, key) => (
              <a
                key={key}
                href={
                  icon === 'google-scholar'
                    ? 'https://scholar.google.com/citations?user=YOUR_ID'
                    : icon === 'github'
                    ? 'https://github.com/gauraut'
                    : 'https://linkedin.com/in/gauraut'
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`/icons/${icon}.svg`}
                  alt={icon}
                  className="h-6 w-6 sm:h-8 sm:w-8 md:h-12 md:w-12 lg:h-16 lg:w-16 hover:opacity-80 transition"
                />
              </a>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/files/Gaurav_Resume.pdf"
              download
              className="inline-block min-w-[200px] px-6 sm:px-8 md:px-10 lg:px-12 py-2 sm:py-3 md:py-4 bg-green-500 text-sm sm:text-base md:text-lg lg:text-xl font-medium rounded hover:bg-green-600 transition text-center"
            >
              Resume
            </a>
            <a
              href="/files/Cover_Letter.pdf"
              download
              className="inline-block min-w-[200px] px-6 sm:px-8 md:px-10 lg:px-12 py-2 sm:py-3 md:py-4 bg-orange-500 text-sm sm:text-base md:text-lg lg:text-xl font-medium rounded hover:bg-orange-600 transition text-center"
            >
              Cover Letter
            </a>
          </div>
        </div>
      </section>

      {/* ===== Main Content ===== */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 pt-6">
        {/* <Intro /> */}
        <Experience />
        <Publications />
        <Projects />
      </div>

      {/* ===== GitHub Link =====
      <section className="py-6 text-center px-4 sm:px-6 md:px-8 lg:px-12">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          My GitHub
        </h2>
        <p className="text-xs sm:text-sm md:text-base">
          Explore my code on{' '}
          <a
            href="https://github.com/gauraut"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            GitHub
          </a>.
        </p>
      </section> */}

      <Skills />
      <Contact />
      <Footer />
    </AllProviders>
  )
}