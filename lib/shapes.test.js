/*
This test file is testing if colors passing to the child classes of Shape returns same value
*/
const { Circle,Triangle,Square } = require("./shapes")

describe("Testing the Circle class", function() {


    it("should have a color", function() {
        // test values
        const testValue = "blue"

        // process
        const newShape = new Circle(testValue)
        

        // conclusion

        expect(newShape.color).toBe(testValue)
    })

})
describe("Testing the Triangle class", function() {


    it("should have a color", function() {
        // test values
        const testValue = "#FFFF"

        // process
        const newShape = new Triangle(testValue)
        

        // conclusion

        expect(newShape.color).toBe(testValue)
    })

})
describe("Testing the Square class", function() {


    it("should have a color", function() {
        // test values
        const testValue = "Cyan"

        // process
        const newShape = new Square(testValue)
        
        console.log(newShape.color);
        // conclusion

        expect(newShape.color).toBe(testValue)
    })

})
