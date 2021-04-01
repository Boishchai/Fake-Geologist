const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;
var sand1, sand2, sand3, sand4, sand5, sand6, sand7;
var iron;
var stone;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(400, 500, 20, 20);
    sand1 = new Sand(200, 500, 5, 5);
    sand2 = new Sand(200, 500, 5, 5);
    sand3 = new Sand(200, 500, 5, 5);
    sand4 = new Sand(200, 500, 5, 5);
    sand5 = new Sand(200, 500, 5, 5);
    sand6 = new Sand(200, 500, 5, 5);
    sand7 = new Sand(200, 500, 5, 5);
    iron = new Iron(700,500,50,50);
    stone = new Stone(550, 500, 50, 80);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    sand1.display();
    sand2.display();
    sand3.display();
    sand4.display();
    sand5.display();
    sand6.display();
    sand7.display();
    iron.display();
    stone.display();

}