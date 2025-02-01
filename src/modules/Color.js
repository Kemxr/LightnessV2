import * as convert from "color-convert";
export class Color {
    #hsl;
    #hex;
    #element;
    constructor(hsl){
        this.#hsl = hsl;
        this.#hex = `#${convert.hsl.hex(hsl)}`;
        this.#element = this.#generateElement();
    }

    #generateElement(){
        const div = document.createElement("div");
        div.classList.add("color");
        div.dataset.color = this.#hex;
        div.style.backgroundColor = this.#hex;

        const textElement = document.createElement("p");
        textElement.textContent = this.#hex;
        textElement.style.color = this.#hsl[2] < 60 ? "#ffffff" : "#000000";
        div.appendChild(textElement);

        return div;
    }

    display(parentElement){
        parentElement.appendChild(this.#element);
    }
}

