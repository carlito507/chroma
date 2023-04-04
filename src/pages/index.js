import 'bulma/css/bulma.min.css'
import chroma from "chroma-js"
import "../styles/main.scss"


const Home = () => {
    const colors = chroma.scale(["#fafa6e", "#2A4858"]).mode('lch').colors(6)

    return (
        <div className="container">
            {/* Header */}
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            Color Palette Generator
                        </h1>
                        <h2 className="subtitle">
                            Generate a color palette from a single color
                        </h2>
                    </div>
                </div>
            </section>
            {/* Color Palette */}
            <section className="section">
                <div className="columns">
                    <div className="column">
                        <div className="box" style={{backgroundColor: colors[0]}}>
                            <h3 className="title is-3" style={{color: chroma(colors[0]).luminance() > 0.5 ? 'black' : 'white'}}>{colors[0]}</h3>
                            <h3 className="subtitle is-3" style={{color: chroma(colors[0]).luminance() > 0.5 ? 'black' : 'white'}}>Color 1</h3>
                        </div>
                        <h3>About Me</h3>
                        <p>Hi, I'm a fullstack developer with experience in Node.js, React, Python, and more.</p>
                    </div>
                    <div className="column">
                        <div className="box" style={{backgroundColor: colors[1]}}>
                            <h3 className="title is-3" style={{color: chroma(colors[1]).luminance() > 0.5 ? 'black' : 'white'}}>Skills</h3>
                            <p>Javascript, Node.js, React, HTML, CSS, Python, Django, and more.</p>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <div className="box" style={{backgroundColor: colors[2]}}>
                                <h3 className="title is-3" style={{color: chroma(colors[2]).luminance() > 0.5 ? 'black' : 'white'}}>Projects</h3>
                                <p>Check out my GitHub for more projects.</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="box" style={{backgroundColor: colors[3]}}>
                                <h3 className="title is-3" style={{color: chroma(colors[3]).luminance() > 0.5 ? 'black' : 'white'}}>Contact</h3>
                                <p>Feel free to reach out to me at <a href="mailto:carlito@carltardifdesign.com">carlito@carltardifdesign.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home