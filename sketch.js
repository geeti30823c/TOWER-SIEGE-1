const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine,world;
var ground,ball,stand1 ,stand2;
var slingShot;
var polygonImg;








 function preload (){



}


function setup (){
createCanvas(1000,600);

 engine = Engine.create();
  world = engine.world;
 Engine.run(engine);

ball=Bodies.circle(50,200,20);


















}




function draw (){
background(56,44,44);

Engine.update(engine);























}