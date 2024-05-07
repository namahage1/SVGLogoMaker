/* Shape class. 
 * This file includes all shape classes. Shape class is the parent and other classes expends Shape class
 Shape class set the value of color of shape from user input and child classes (circle, triangle and square) inherit the color and render to svg format
 *
*/
class Shape{
    constructor(color) {
        this.color = color;
    }

    render(){
         throw new Error('Sub class must implement a render() method.');
    }
}

class Circle extends Shape{
    render(){
        return `<circle cx="100" cy="100" r="80" fill="${this.color}"/>`
    }
}

class Triangle extends Shape{
    render(){
        return `<polygon points="100,0 200,200 0,200" fill="${this.color}" />`
    }
}

class Square extends Shape{
    render(){
        return `<rect width="200" height="200" fill="${this.color}" />`
    }
}

module.exports = {
    Circle,
    Triangle,
    Square
};