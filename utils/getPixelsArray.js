export const getPixelsArray = (imgData) => {
    console.log(imgData)
    const pixels = []
    for (let i = 0; i < imgData.length; i += 4) {
        let pixel = `${imgData[i]} ${imgData[i + 1]} ${imgData[i + 2]}`;
        pixels.push(pixel);
    }
    return pixels
}