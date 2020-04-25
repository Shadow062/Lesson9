class Options {
    constructor(heigth, width, bg, fontSize, textAlign, color) {
        this.heigth = heigth;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
        this.color = color;
    }

    addDiv(text) {
        let newDiv = document.createElement('div');
        newDiv.innerHTML = `<h1>${text}</h1>`;
        newDiv.style.cssText = `height:${this.heigth};
                                width:${this.width};
                                background: ${this.bg};
                                fontSize: ${this.fontSize};
                                text-align: ${this.textAlign};
                                color: ${this.color}`;
        document.body.appendChild(newDiv);
    }
}

const newText = new Options('75px', '1024px', 'blue', '18px', 'center', 'white');
newText.addDiv('Я это сделал ооочень долго, в конце не выдержал и сделал с подсказками :)');