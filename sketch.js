const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    var box_options={
    'restitution':1
    }
    box=Bodies.rectangle(200,200,20,box_options)
    World.add(world,box)
    console.log(ground);
    var box1_options={
    'restitution':1
    }
    box1=Bodies.rectangle(200,300,40,40,box1_options)
    World.add(world,box1)
    var box2_options={
 'restitution':1
    }
    box2=Bodies.rectangle(200,350,40,40,box2_options)
    World.add(world,box2)

    var box3_options={
    'restitution':1
    }
    box3=Bodies.rectangle(200,370,40,40,box3_options)
    World.add(world,box3)
    
    var box4_options={
    'restitution':1
    }
    box4=Bodies.rectangle(200,380,40,40,box4_options)
    World.add(world,box4)

    
    
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    rectMode(RADIUS)
    rect(box.position.x,box.position.y,40,40)
    rectMode
    rect(box1.position.x,box1.position.y,40,40)
    rectMode
    rect(box2.position.x,box2.position.y,40,40)
    rectMode
    rect(box3.position.x,box3.position.y,40,40)
    rectMode
    rect(box4.position.x,box4.position.y,40,40)
}