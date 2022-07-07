export const getChar = (charBoxesArr) => {
    const length = charBoxesArr.length ? charBoxesArr.length : 1;
    let [r, g, b] = [0, 0, 0];
    charBoxesArr.forEach((charBox) => {
        const [pr, pg, pb] = charBox.split(' ');
        r += +pr;
        g += +pg;
        b += +pb;
    });
    return getRGB([r, g, b], length);
};
const getRGB = (rgbArr, length) => {
    const floor = (value) => {
        return Math.floor(value / length / 50).toString();
    };

    return rgbArr.map(floor);
};

