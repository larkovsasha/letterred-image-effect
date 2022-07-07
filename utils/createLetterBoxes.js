import {CH, CW, FONT_SIZE} from "../constants/constants.js";

export const createLetterBoxes = (pixels) => {
    const letterBoxes = []
    for (let y = 0; y < Math.ceil(CH / FONT_SIZE); y++) {
        for (let x = 0; x < Math.ceil(CW / FONT_SIZE); x++) {
            const block = [];
            for (let yBox = y * FONT_SIZE; yBox < Math.min(CH, (y + 1) * FONT_SIZE); yBox++) {
                for (let xBox = x * FONT_SIZE; xBox < Math.min(CW, (x + 1) * FONT_SIZE); xBox++) {
                    block.push(pixels[(yBox * CW) + xBox]);
                }
            }
            letterBoxes.push(block)
        }
    }
    return letterBoxes

}