/*----------------------------*/
/*----------------------------*/
/*----- How to implement -----*/
/*----- collision detection --*/
/*----- between just two -----*/
/*----------Objects-----------*/
/*----------------------------*/
/*----------------------------*/

var canvas = document.querySelector("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

window.addEventListener("mouseout", function () {
  mouse.x = undefined;
  mouse.y = undefined;
  c.clearRect(0, 0, innerWidth, innerHeight);

});
var c = canvas.getContext("2d");
radius1 = 100;
radius2 = 25;

function distance(x1, y1, x2, y2) {
  var xDist = x2 - x1;
  var yDist = y2 - y1;

  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

var mouse = {
  x: undefined,
  y: undefined
};
var colorArray = [
  "#b2b9c4",
  "#75d6c7",
  "#75d6c7",
  "#b2b9c4",
  "#5bd85d",
  "#82d85b",
  "#c1d85b",
  "#d8ae5b",
  "#ef4923",
  "#ef2394",
  "#b223ef"
];

window.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
});

function Circle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  minRadius = this.radius;

  this.radius = radius;

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
  };
  this.update = function () {
    if (distance(circle.x, circle.y, circle2.x, circle2.y) < radius1 + radius2) {
      this.color = colorArray[color + 1];
    } else {
      this.color = colorArray[color];
    }
    this.draw();
  };
}
var circle;
var circle2;

function init() {
  circle = new Circle(canvas.width / 2, canvas.height / 2, radius1, 0);
  circle2 = new Circle(undefined, undefined, radius2, 2);
}
// arc

function animation() {
  requestAnimationFrame(animation);
  c.clearRect(0, 0, innerWidth, innerHeight);
  circle.update();
  circle2.x = mouse.x;
  circle2.y = mouse.y;
  circle2.update();
}
init();
animation();