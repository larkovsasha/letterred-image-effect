export const getMeanValueOfBlackAndWhiteInAnArea = (x, y, fontSize) => {
    let sum = 0;
    let count = 0;

    for (let i = Math.floor(y); i < y + fontSize && i < cw; i++) {
        for (let j = Math.floor(x); j < x + fontSize && j < ch; j++) {
            if (dTwoD[j][i] && !Number.isNaN(dTwoD[j][i])) {
                sum += dTwoD[j][i];
                count++;
            }
        }
    }

    return sum / count;
};