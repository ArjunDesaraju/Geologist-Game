const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var stone;
var iron;
var rubber,rubber1,rubber2,rubber3;



function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone = new Stone (200,200,50,50);
    iron = new Iron (350,500,50,50);
    rubber = new Rubber (100,500,50,50);
    rubber1 = new Rubber (300,500,50,50);
    rubber2 = new Rubber (300,500,50,50);
    rubber3 = new Rubber (300,500,50,50);


    

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stone.display();
    iron.display();
    rubber.display();
    rubber1.display();
    rubber2.display();
    rubber3.display();
    
 
}