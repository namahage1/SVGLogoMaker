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

    fs.writeFile("./examples/logo.svg", svgCode, () => {
        console.log("Logo has been generated!")
    })

});

