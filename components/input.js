import {CH, CW} from "../constants/constants.js";
import {getPixelsArray} from "../utils/getPixelsArray.js";
import {createLetterBoxes} from "../utils/createLetterBoxes.js";
import {drawCanvas} from "../utils/drawCanvas.js";

const input = document.querySelector('#input')
const fileReader = new FileReader()

fileReader.addEventListener('load', (e) => {
    const img = document.querySelector('#image')
    img.src = e.target.result
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, CW, CH)
    ctx.drawImage(img, 0, 0);
    const draw = () => {
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
})

input.addEventListener('change', (e) => {
    fileReader.readAsDataURL(input.files[0])
})
