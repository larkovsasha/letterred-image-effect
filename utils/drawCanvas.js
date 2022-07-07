import {FONT_SIZE, CH, CW} from '../constants/constants.js'
import {getChar} from './getChar.js'
import {chars} from '../constants/chars.js'

const newCanvas = document.createElement('canvas')
newCanvas.id = 'newCanvas'
newCanvas.classList.add('newCanvas')
const root = document.querySelector('#root')

root.appendChild(newCanvas)

newCanvas.width = CW
newCanvas.height = CH
const newCtx = newCanvas.getContext('2d')

export const drawCanvas = (letterBoxes) => {
    newCtx.clearRect(0, 0, CW, CH)
    console.log('clear rect')
    for (let y = 0; y < Math.ceil(CH / FONT_SIZE); y++) {
        for (let x = 0; x < Math.ceil(CW / FONT_SIZE); x++) {
            const block = letterBoxes[y * Math.ceil(CW / FONT_SIZE) + x];
            const [r, g, b] = getChar(block)
            let char = chars[r][g][b]
            newCtx.fillText(char, x * FONT_SIZE, y * FONT_SIZE);
        }
    }

}