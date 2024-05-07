/*
This test file is testing if colors, text, shape passing to the SVG classes and expecting returns same values
*/
const SVG  = require("./svg.js")

describe("Testing the SVG class", function() {


    it("should have a text color", function() {
        // test values
        const testText = "SVG";
        const testColor = "blue";
        const testShape = "triangle";

        // process
        const newSVG = new SVG(testText,testColor,testShape);
        // conclusion

        expect(newSVG.text).toBe(testText);
        expect(newSVG.textColor).toBe(testColor);
        expect(newSVG.shapeCode).toBe(testShape);
    })

})

