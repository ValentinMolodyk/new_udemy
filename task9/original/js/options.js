
const conf = [200, 200, 'red', 30, 'center'];
const conf2 = [200, 200, 'blue', 30, 'center'];

class Options {
  constructor(height, width, background, fontSize, textAlign) {
    this.height = height;
    this.width = width;
    this.background = background;
    this.fontSize = fontSize;
    this.textAlign = textAlign;
  }
  createDiv() {
    const parentDiv = document.querySelector('.options-container');
    const appendDiv  = document.createElement('div');

    appendDiv.style.height = `${this.height}px`;
    appendDiv.style.width = `${this.width}px`;
    appendDiv.style.backgroundColor = this.background;
    appendDiv.style.fontSize = `${this.fontSize}px`;
    appendDiv.style.textAlign = `${this.textAlign}`;

    parentDiv.appendChild(appendDiv);
  }
}


const option = new Options(...conf);
const option2 = new Options(...conf2);

option.createDiv();
option2.createDiv();
