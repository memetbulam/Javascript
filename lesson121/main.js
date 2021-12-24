import * as lesson121libA from '../JS/lesson121libA.js';
import multi, { x, z } from '../JS/lesson121libB.js';
import Car from '../JS/lesson121libC.js';
$('#resultA').innerHTML =
    "<b>sum(5, 4): </b>" + lesson121libA.sum(5, 4) + "<br>" +
    "<b>PI: </b>" + lesson121libA.PI + "<br>" +
    "<b>square(13): </b>" + lesson121libA.square(13) + "<br>" +
    "<b>hypotenuse(3, 4): </b>" + lesson121libA.hypotenuse(3, 4) + "<br>" +
    "<b>num: </b>" + lesson121libA.num + "<br>" +
    "<b>incrementNum(): </b>" + lesson121libA.incrementNum();

$('#resultB').innerHTML =
    "<b>multi(5, 4): </b>" + multi(5, 4) + "<br>" +
    "<b>x: </b>" + x, z;


class Text {
    constructor() {
        this.newCar = new Car("BMW");
        this.Name = this.newCar.name;
    }
}
let y = new Text();
$('#resultC').innerHTML = "<b>y: </b>" + y.Name;