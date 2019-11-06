var stage = new createjs.Stage("canvasport");
var trunk = new createjs.Shape();
trunk.graphics.beginFill("brown").drawRect(0, 0, 50, 100);
trunk.x = 100;
trunk.y = 150;
stage.addChild(trunk);

x=125, y=125, size=50, sides=3, angle=30;

polygon = new createjs.Shape();
polygon.graphics.beginFill("green").drawPolyStar(x, y, size, sides, 0, angle);
stage.addChild(polygon);

stage.update();
