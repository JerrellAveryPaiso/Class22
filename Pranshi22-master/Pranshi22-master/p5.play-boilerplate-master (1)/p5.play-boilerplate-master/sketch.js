
//namespacing
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ground,ball,ball2;

function setup() {
  var canvas=createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

 var properties_ground={
   //key:value
  isStatic: true


 }
  ground=Bodies.rectangle(200,390,200,20,properties_ground);
  World.add(world,ground);
var ball_property={
restitution: 1
}
  ball=Bodies.circle(300,100,20,ball_property)
  World.add(world,ball);

  ball2=Bodies.circle(100,50,40,ball_property)
  World.add(world,ball2)


}

function draw() {
  background("pink");
  Engine.update(engine); 
  fill("red")
  rectMode(CENTER);
  rect( ground.position.x,ground.position.y,400,20);
  fill("blue")
  ellipseMode(RADIUS)
 ellipse(ball.position.x,ball.position.y,20,40);

 fill("purple")
 ellipseMode(RADIUS)
ellipse(ball2.position.x,ball2.position.y,20,40);

}