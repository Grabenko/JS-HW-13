class Rectangle {
    constructor(width, height) {
      this._width = width;
      this._height = height;
    }
  
    get width() {
      return this._width;
    }
  
    set width(value) {
      this._width = value;
    }
  
    get height() {
      return this._height;
    }
  
    set height(value) {
      this._height = value;
    }
  
    getArea() {
      return this._width * this._height;
    }
  
    getPerimeter() {
      return 2 * (this._width + this._height);
    }
  }
  
  const myRectangle = new Rectangle(5, 7);
  console.log(myRectangle.getArea()); // Output: 35
  console.log(myRectangle.getPerimeter()); // Output: 24
  console.log(myRectangle.width); // Output: 5
  console.log(myRectangle.height); // Output: 7
  myRectangle.width = 10;
  myRectangle.height = 12;
  console.log(myRectangle.width); // Output: 10
  console.log(myRectangle.height); // Output: 12
  