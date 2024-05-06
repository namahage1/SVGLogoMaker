/* Shape class. 
 * This file includes all shape classes. Shape class is the parent and other classes expends Shape class
 *
*/
class Shapes{
    constructor(children = [],textColor, text, color) {
        this.children = children;
        this.textColor =  textColor;
        this.text = text;
        this.color = color;
      }
    render(){
        throw new Error('Child class must implement a render() method.');
    }
    renderInnerHtml() {
        // Loop over children and convert any children that aren't strings to an
        // html string by calling its render method.
        return this.children
          .map((child) => {
            if (typeof child === 'string') {
              return child;
            }
            return child.render();
          })
          .join('');
      }
}

class Circle extends Shapes{
    render(){
        return `<circle cx="50" cy="50" r="40" fill="red" /> `; 
    }
}

class Triangle extends Shapes{
    constructor(children){
        super(children);
    }
    render(){

    }
}

class Square extends Shapes{
    constructor(children){
        super(children);
    }
    render(){

    }
}

module.exports = Shapes;
module.exports = Circle;
module.exports = Triangle;
module.exports = Square;