class SVG {
    // properties
    constructor(text, textColor, shapeCode) {
        this.text = text;
        this.textColor = textColor;
        this.shapeCode = shapeCode;
    }

    // methods 
    render() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="200" height="200">
            ${this.shapeCode}
            <text x="100" y="125" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    }
}

module.exports = SVG;
