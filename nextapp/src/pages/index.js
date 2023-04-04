import Head from 'next/head'
import chroma from "chroma-js"
import 'bulma/css/bulma.min.css'
import {color, motion} from 'framer-motion'
import { Particles } from "react-tsparticles"
import generateColorPalette from '../utils/colorPalette'
import { useEffect, useState } from 'react'
import Navbar from "@/components/Navbar"


const Home = () => {
  const backgroundColor = chroma.random().css()
  const textColor = chroma.contrast(backgroundColor, 'white') > 7 ? 'white' : 'black'
    const [colorPalette, setColorPalette] = useState(generateColorPalette())

    useEffect(() => {
        const colorPalette = generateColorPalette()
        document.documentElement.style.setProperty('--color-1', colorPalette[0])
        document.documentElement.style.setProperty('--color-2', colorPalette[1])
        document.documentElement.style.setProperty('--color-3', colorPalette[2])
        document.documentElement.style.setProperty('--color-4', colorPalette[3])
        document.documentElement.style.setProperty('--color-5', colorPalette[4])
    }, [])

    const titleVariants = {
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0 },
    }

    const subtitleVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
    }

  return (
      <div>
        <Head>
          <title>Fullstack Programmer</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <section
            className="hero is-fullheight"
            style={{ backgroundColor: colorPalette[0], color: colorPalette[5], position: 'relative' }}
        >
            <div className="colorsez">
                <div className="color" style={{ backgroundColor: colorPalette[0] }}></div>
                <div className="color" style={{ backgroundColor: colorPalette[1] }}></div>
                <div className="color" style={{ backgroundColor: colorPalette[2] }}></div>
                <div className="color" style={{ backgroundColor: colorPalette[3] }}></div>
                <div className="color" style={{ backgroundColor: colorPalette[4] }}></div>
                <div className="color" style={{ backgroundColor: colorPalette[5] }}></div>
                <div className="color" style={{ backgroundColor: colorPalette[6] }}></div>
            </div>

          <div className="hero-body">
            <div className="container has-text-centered">
                <motion.h1
                    className="title"
                    style={{ color: colorPalette[5] }}
                    variants={titleVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1 }}
                    >
                    Welcome to My Portfolio
                </motion.h1>
                <motion.h2
                    className="subtitle"
                    style={{ color: colorPalette[4] }}
                    variants={subtitleVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1 }}
                    >
                    I'm a Full-stack Programmer
                </motion.h2>
            </div>
          </div>
        </section>
      </div>
  )
}

export default Home