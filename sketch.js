const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box;

function setup() {
    var canvas = createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;
    //object/instance of Ground class/blueprint
    ground = new Ground(200, 350, 400, 20);
    box = new Box(250,250,50,80);
    box2 = new Box(250, 100, 50, 50);

    console.log(ground);
}

function draw() {
    background(0);
    Engine.update(engine);
    ground.display();
    box.display();
    box2.display();
}