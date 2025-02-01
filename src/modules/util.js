import * as convert from "color-convert";
export const generatePalette = (hex) => {

    const colors = [];

    const hsl = convert.hex.hsl(hex);

    const h = hsl[0];
    const s = hsl[1];

    for (let i = 0; i < 100; i+=5) {
        colors.push([h,s,i]);
    }

    return colors;
};

export const generateShadow = (inputValue) => {

    const shadow = [];

    const hsl = convert.hex.hsl(inputValue);
    shadow.push([`${hsl[0]}deg`, `${hsl[1]}%`, `${hsl[2]}%`]);
    
    return shadow;
}