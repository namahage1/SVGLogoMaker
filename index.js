const  inquirer = require("inquirer");
const colors = require('colors');
const shape = require('./lib/shapes.js');
const validateColor = require("validate-color").default;
const fs = require('fs');
const { Circle, Triangle, Square} = require("./lib/shapes.js")
const SVG = require("./lib/svg.js")

inquirer
.prompt([
    {
        type:'input',
        name:'text',
        message:'type text (up to three charactors)',
        validate: (answer) => {
            if(answer.length <= 3 && answer.length > 0){
                return true;
            } else {
                console.log("\nInvalid text. Please try again!");
                return false;
            }
        }
    },
    {
        type:'input',
        name:'textColor',
        message:'what text color do you want? (color keyword or hex)',
        validate: (answer) => {
            if(validateColor(answer)) {
                return true;
            } else {
                console.log("\nInvalid color. Please try again!");
                return false;
            }
        }
    },
    {
        type:'list',
        name:'shape',
        message:'what shape do you want?',
        choices:['circle', 'triangle', 'square']
    },
    {
        type:'input',
        name:'color',
        message:'what color do you want?(color keyword or hex)',
        validate: (answer) => {
            if(validateColor(answer)) {
                return true;
            } else {
                console.log("\nInvalid color. Please try again!");
                return false;
            }
        }
    }
]).then((answers)=>{
    console.log(`${answers.text}`);
    console.log(`${answers.textColor}`);
    console.log(`${answers.shape}`);
    console.log(`${answers.color}`);

    let myShape;
    if(answers.shape == "circle") {
        myShape = new Circle(answers.color);
    } else if(answers.shape == "square") {
        myShape = new Square(answers.color);
    }else if(answers.shape == "triangle") {
        myShape = new Triangle(answers.color);
    }
    
    const mySVGLogo = new SVG(answers.text, answers.textColor, myShape.render());
    const svgCode = mySVGLogo.render();

    fs.writeFile("./output/logo.svg", svgCode, () => {
        console.log("Logo has been generated!")
    })

});


/*
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
*/
