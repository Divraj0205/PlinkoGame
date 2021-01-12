const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground, bar1, bar2, bar3, bar4, bar5, bar6, bar7;
var bor1, bor2, bor3, bor4;
var plinko1,plinko2,plinko3,plinko4;

function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;

    bor1=new border(0,height/2,10,height);
    bor2=new border(width/2,0,width,10);
    bor3=new border(width,height/2,10,height);
    bor4=new border(width/2,height,width,10);

    ground=new Ground(width/2,height,width,20);
    bar1=new Ground(0,height-height/5,20,300);
    bar2=new Ground(80,height-height/5,20,300);
    bar3=new Ground(160,height-height/5,20,300);
    bar4=new Ground(240,height-height/5,20,300);
    bar5=new Ground(320,height-height/5,20,300);
    bar6=new Ground(400,height-height/5,20,300);
    bar7=new Ground(480,height-height/5,20,300);
    
}

var particles=[];

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();

    bar1.display();
    bar3.display();
    bar4.display();
    bar5.display();
    bar6.display();
    bar2.display();
    bar7.display();

    bor1.display();
    bor2.display();
    bor3.display();
    bor4.display();
    for (let i = 70; i < 450; i=i+50) {
        plinko1=new Plinko(i,50,10);
        plinko1.display();
      }
      for (let i = 40; i < 480; i=i+60) {
        plinko1=new Plinko(i,100,10);
        plinko1.display();
      }
      for (let i = 70; i < 450; i=i+50) {
        plinko1=new Plinko(i,150,10);
        plinko1.display();
      }
      for (let i = 40; i < 480; i=i+50) {
        plinko1=new Plinko(i,200,10);
        plinko1.display();
      }
      for (let i = 70; i < 450; i=i+50) {
        plinko1=new Plinko(i,250,10);
        plinko1.display();
      }
      for (let i = 40; i < 480; i=i+50) {
        plinko1=new Plinko(i,200,10);
        plinko1.display();
      }
      for (let i = 70; i < 450; i=i+50) {
        plinko1=new Plinko(i,300,10);
        plinko1.display();
      }
      for (let i = 40; i < 480; i=i+50) {
        plinko1=new Plinko(i,350,10);
        plinko1.display();
      }
      for (let i = 70; i < 450; i=i+50) {
        plinko1=new Plinko(i,400,10);
        plinko1.display();
      }
      for (let i = 40; i < 480; i=i+50) {
        plinko1=new Plinko(i,450,10);
        plinko1.display();
      }

      if(frameCount%20===0){
        particles.push(new particle(random(120,360),10,7.5));
      }
      for(var j=0;j<particles.length;j++){
        particles[j].display();
      }

}