/* Shape class. 
 * This file includes all shape classes. Shape class is the parent and other classes expends Shape class
 *
*/
class Shape{
    constructor(color) {
        this.color = color;
    }

    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`

        // throw new Error('Child class must implement a render() method.');
    }
}

// class Circle extends Shapes{
//     render(){
//         return `<circle cx="50" cy="50" r="40" fill="red" /> `; 
//     }
// }

// class Triangle extends Shapes{
//     constructor(children){
//         super(children);
//     }
//     render(){

//     }
// }

// class Square extends Shapes{
//     constructor(children){
//         super(children);
//     }
//     render(){

//     }
// }

module.exports = Shape;