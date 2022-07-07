import {FONT_SIZE, CH, CW} from './constants/constants.js'
import {drawCanvas} from './utils/drawCanvas.js'
import {getPixelsArray} from "./utils/getPixelsArray.js";
import {createLetterBoxes} from "./utils/createLetterBoxes.js";

const img = document.querySelector('#image')
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = CW;
canvas.height = CH;

const draw = () => {
    console.log(img.clientWidth)
    console.log(CW)
    ctx.drawImage(img, 0, 0);
    const imgData = ctx.getImageData(0, 0, CW, CH).data;
    const pixels = getPixelsArray(imgData)
    const letterBoxes = createLetterBoxes(pixels)
    drawCanvas(letterBoxes)
}


if(img.complete){
    draw()
} else{
    img.addEventListener('load', draw)
}



