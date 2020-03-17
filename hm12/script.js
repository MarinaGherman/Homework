'use strict';


class Options {
    constructor(height, width, bg, fontSize, textAlign ) {
      this.height = height;
      this.width = width;
      this.bg = bg;
      this.fontSize = fontSize;
      this.textAlign = textAlign;  
    }
    myDiv() {
        let newDiv = document.createElement('div');
        document.body.appendChild(newDiv);
        let parametrs = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
        newDiv.style.cssText = parametrs;
      } 
}
const item = new Options(200, 200, "green", 4, "center");

item.myDiv();
