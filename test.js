let sum = 0
for (let i = 0; i <= 9647352000; i++){
    sum += i
}
console.log(sum)
console.log('finish')

let charArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u",
    "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "А", "В", "Г", "Д", "Є", "Ѕ", "З", "И", "Ѳ", "І",
    "К", "Л", "М", "Н", "Ѯ", "Ѻ", "П", "Ч", "Р", "С", "Т", "Ѵ", "Ф", "Х", "Ѱ", "Ѿ", "Ц",];
const chars = {
    '0': {
        '0': { '0': '夏', '1': '诶', '2': '左', '3': 'ϣ', '4': 'Ɠ', '5': 'Ƙ' },
        '1': { '0': '恩', '1': '亚', '2': '口', '3': 'Ə', '4': '⅊', '5': 'Ɲ' },
        '2': { '0': '哟', '1': '൩', '2': 'W', '3': '沙', '4': '%', '5': 'ق' },
        '3': { '0': 'ʤ', '1': '©', '2': '山', '3': '¶', '4': 'Δ', '5': 'ρ' },
        '4': { '0': 'Ķ', '1': 'Ѐ', '2': 'Ϥ', '3': 'ᚊ', '4': 'ʡ', '5': 'ʕ' },
        '5': { '0': 'Ξ', '1': 'ķ', '2': 'Ͼ', '3': 'ʢ', '4': 'η', '5': 'c' },
    },
    '1': {
        '0': { '0': '哦', '1': 'Ѿ', '2': '൧', '3': '⅌', '4': 'ෟ', '5': 'ઌ' },
        '1': { '0': '给', '1': 'ઐ', '2': 'Ɖ', '3': 'ශ', '4': 'ʨ', '5': 'Ͽ' },
        '2': { '0': 'ʥ', '1': 'Ф', '2': 'Ɗ', '3': 'ʠ', '4': 'ʜ', '5': 'ƍ' },
        '3': { '0': 'ઍ', '1': 'Ѯ', '2': 'ƌ', '3': 'ƞ', '4': 'd', '5': '¤' },
        '4': { '0': 'ස', '1': 'Ń', '2': 'Ļ', '3': 'Ɔ', '4': '¢', '5': 'Ϟ' },
        '5': { '0': 'Z', '1': 'Y', '2': 'ف', '3': 'ʔ', '4': 'ł', '5': 'ª' },
    },
    '2': {
        '0': { '0': '四', '1': 'Ϣ', '2': 'ʣ', '3': '今', '4': 'g', '5': 'ʦ' },
        '1': { '0': '切', '1': '൪', '2': 'Ё', '3': 'ђ', '4': 'k', '5': 'Ɛ' },
        '2': { '0': '®', '1': '水', '2': 'Ĳ', '3': 'Ł', '4': '±', '5': 'ʖ' },
        '3': { '0': 'Ϧ', '1': 'ʘ', '2': 'ʪ', '3': '8', '4': '[', '5': 'ľ' },
        '4': { '0': 'ƕ', '1': '川', '2': 'ϩ', '3': 'Ĵ', '4': 'ʟ', '5': 'ϟ' },
        '5': { '0': 'ĳ', '1': 'Ŀ', '2': 'µ', '3': 'ƚ', '4': '¬', '5': '^' },
    },
    '3': {
        '0': { '0': '@', '1': 'ʩ', '2': 'Β', '3': 'Ƌ', '4': 'Ľ', '5': 'V' },
        '1': { '0': 'Ɯ', '1': 'Ѻ', '2': 'm', '3': 'U', '4': '6', '5': 'ζ' },
        '2': { '0': 'ෂ', '1': 'X', '2': 'Ϡ', '3': '6', '4': 'f', '5': 'ϡ' },
        '3': { '0': 'Ѱ', '1': 'ƙ', '2': 'ń', '3': 'ຽ', '4': '>', '5': 'i' },
        '4': { '0': 'Ɣ', '1': 'ʙ', '2': 'ϧ', '3': 'ς', '4': '?', '5': 'ⅉ' },
        '5': { '0': 'Ѓ', '1': '§', '2': '<', '3': '«', '4': 'ᚋ', '5': 'ົ' },
    },
    '4': {
        '0': { '0': '卡', '1': 'Ц', '2': 'Ђ', '3': 'θ', '4': 'Ĺ', '5': '=' },
        '1': { '0': 'Ǝ', '1': 'Ε', '2': 'ك', '3': 'ʬ', '4': 'e', '5': 'ƒ' },
        '2': { '0': '൨', '1': 'Α', '2': 'Ϩ', '3': '4', '4': 'ļ', '5': 'j' },
        '3': { '0': 'Ƈ', '1': '小', '2': 'Ɨ', '3': 'ʗ', '4': 'Ɩ', '5': '²' },
        '4': { '0': 'ĸ', '1': 'π', '2': '൦', '3': 'l', '4': '³', '5': 'ຼ' },
        '5': { '0': '人', '1': 'ل', '2': '1', '3': '°', '4': 'ـ', '5': '·' },
    },
    '5': {
        '0': { '0': 'හ', '1': '⅋', '2': 'ʫ', '3': 'ʛ', '4': 'a', '5': 'ʝ' },
        '1': { '0': '¥', '1': 'ʧ', '2': 'h', '3': 'σ', '4': 'ʚ', '5': 'ŀ' },
        '2': { '0': 'Ƒ', '1': 'ʞ', '2': 'δ', '3': 'ƈ', '4': 'ĺ', '5': '¯' },
        '3': { '0': '£', '1': 'Γ', '2': 'ε', '3': 'ΐ', '4': 'ı', '5': '¸' },
        '4': { '0': 'b', '1': 'ƛ', '2': 'τ', '3': 'ι', '4': '¦', '5': '´' },
        '5': { '0': ']', '1': 'ĵ', '2': '_', '3': '¡', '4': '¨', '5': '`' },
    },
};
const input = document.querySelector('#input')
input.addEventListener('change', (e) => {
    console.log(e.files)
    const reader = new FileReader();
    reader.onload = function (e) {
        img.setAttribute('src', e.target.result);
    };
    reader.readAsDataURL(e.files[0]);
})
const img = document.querySelector('#image')
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const root = document.querySelector('#root')

let cw = window.innerWidth;
let ch = window.innerHeight;

canvas.width = cw;
canvas.height = ch;


let maxCharCount = 10;
let fallingCharArr = [];
let fontSize = 5
let maxColumns = cw / fontSize;

let frames = 0;
let sequenceLength = 4;
let sequenceLengthRandomness = 5;

const pixels = []
const letterBoxes = [];

img.onload = function () {
    ctx.drawImage(img, 0, 0);
    const imgData = ctx.getImageData(0, 0, cw, ch).data;
    for (let i = 0; i < imgData.length; i += 4) {
        let pixel = `${imgData[i]} ${imgData[i + 1]} ${imgData[i + 2]}`;
        pixels.push(pixel);
    }
    for (let y = 0; y < Math.ceil(ch / fontSize); y++) {
        for (let x = 0; x < Math.ceil(cw / fontSize); x++) {
            const block = [];
            for (let yBox = y * fontSize; yBox < Math.min(ch, (y + 1) * fontSize); yBox++) {
                for (let xBox = x * fontSize; xBox < Math.min(ch, (x + 1) * fontSize); xBox++) {
                    block.push(pixels[(yBox * cw) + xBox]);
                }
            }
            letterBoxes.push(block)
        }
    }
    createCanvas()
};
img.addEventListener('change',  (e) =>  {
    console.log('change')
})
const newCanvas = document.createElement('canvas')

root.appendChild(newCanvas)

newCanvas.width = cw
newCanvas.height = ch
const newCtx = newCanvas.getContext('2d')

function createCanvas() {
    for (let y = 0; y < Math.ceil(ch / fontSize); y++) {
        for (let x = 0; x < Math.ceil(cw / fontSize); x++) {
            const block = letterBoxes[y * Math.ceil(cw / fontSize) + x];
            const [r, g, b] = getChar(block)
            let char
            try {
                char = chars[r][g][b]
            }catch (e) {
                char = ' '
            }
            newCtx.fillText(char, x * fontSize, y * fontSize);
            // const block = [];
            // for (let yBox = y * fontSize; yBox < Math.min(ch, (y + 1) * fontSize); yBox++) {
            //     for (let xBox = x * fontSize; xBox < Math.min(ch, (x + 1) * fontSize); xBox++) {
            //         block.push(pixels[(yBox * cw) + xBox]);
            //     }
            // }
            // letterBoxes.push(block)
        }
    }
}