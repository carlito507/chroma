import chroma from 'chroma-js'

const baseColor = '#D88D73'

const generateColorPalette = () => {
    //return chroma.scale([baseColor, '#2A4858']).mode('lch').colors(6)
    let color = chroma.random()
    if (chroma.contrast(color, "white") > 5) {
        while (chroma.contrast(color, "white") > 5) {
            color = chroma.random()
        }
    }
    let color2 = chroma.random()
    if (chroma.contrast(color, color2) < 4.5) {
        while (chroma.contrast(color, color2) < 4.5) {
            color2 = chroma.random()
        }
    }
    return chroma.scale([color, color2]).mode('lch').colors(6)
}

export default generateColorPalette