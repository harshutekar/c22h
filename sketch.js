
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;
var ball;

var top_ball;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
 
  

  ball =new Ball(200,390,20);
 
 ball1_wall = new Ground(50,200,30,20);
  ball2_wall1 = new Ground(150,200,30,20);
  ball3_wall2 = new Ground(250,200,30,20);
  ball4_wall3 = new Ground(350,200,30,20);

  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  
  

  ball.show();
  ball.show();
  ball1.show();
  ball2.show();
  ball3.show();


}

