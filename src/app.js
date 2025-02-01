import { generatePalette } from "./modules/util";
import { Color } from "./modules/Color";
import { generateShadow } from "./modules/util";
import * as convert from "color-convert";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

const notyf = new Notyf();

const form = document.querySelector("form");
const formInput = document.querySelector("input");
const main = document.querySelector("main");
const header = document.querySelector("header");
const root = document.documentElement;

const displayColors = (palette, inputValue) => {
    header.classList.add("minimized");
    main.innerHTML = " ";
    palette.forEach(color => {
        new Color(color).display(main);
    });

    const start = convert.hsl.hex(palette[0]);
    const mid = convert.hsl.hex(palette[10]);
    const end = convert.hsl.hex(palette[19]);
    document.body.style.background = `linear-gradient(-45deg, #${start}, #${mid}, #${end})`;
    document.body.style.backgroundSize = `400% 400%`;

    root.style.setProperty("--shadow-color", generateShadow(inputValue));
}

form.addEventListener("submit", e => {
    e.preventDefault();
    
    if (/^#[0-9A-F]{6}$/i.test(formInput.value)) {
        const palette = generatePalette(formInput.value);
        displayColors(palette, formInput.value);
        console.log("Your palette is generating")
    }else{
        console.log(`${formInput.value} is not valid Hexadecimal color`)
        notyf.error(`${formInput.value} is not valid Hexadecimal color`);
    }
})

main.addEventListener("click", async e => {
    if (e.target.classList.contains("color")) {
        const color = e.target.dataset.color;
        await navigator.clipboard.writeText(color);
        notyf.success(`copied ${color} to clipboard`);
    }
})