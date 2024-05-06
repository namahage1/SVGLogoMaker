const { Circle } = require("./shapes")

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