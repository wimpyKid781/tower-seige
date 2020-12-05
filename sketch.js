var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];

var divisionHeight=300;
var divisions=[];
var turn = 0;
var score =0;
var gameState = "end";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  if( keyWentDown(LEFT_ARROW)){
    particle.position.x =particle.position.x-5
  }
  if( keyWentDown(RIGHT_ARROW)){
    particle.position.x =particle.position.x+5
  }
 text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%175===0){
     particles.push(new Particle(random(width/2-200, width/2+200), 10,10));
    // score = score;
   }
   
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
     if(particles!=null&&particles[j].body.position.x >0 && particles[j].body.position.x <50){
         score = score+1

       //particles.destroyEach();
       particles.visible = false;
     }
     else if(particles!=null&&particles[j].body.position.x >51&&particles[j].body.position.x<100&&particles[j].body.position.y>760){
      // score = score
       particles.visible = false;
       //particles.destroyEach();
       //particles = null;
     }
     else if(particles!=null&&particles[j].body.position.x >101&&particles[j].body.position.x<1500&&particles[j].body.position.y>760){
      //score = score
      particles.visible = false;
      //particles.destroyEach();
      //particles = null;
    }
    else if(particles!=null&&particles[j].body.position.x >151&&particles[j].body.position.x<200&&particles[j].body.position.y>760){
      //score = score
      particles.visible = false;
      //particles.destroyEach();
      // particles = null;
    }
    else if(particles!=null&&particles[j].body.position.x >201&&particles[j].body.position.x<250&&particles[j].body.position.y>760){
      //score = score+250
      particles.visible = false;
      //particles.destroyEach();
      // particles = null;
      
    }
    }

    

    /*if(particles!=null){
      //particles.display();
      //if(particles.body.position.y>760){
        //if(particles.body.position.x<360){
          score = score+500;
          //particles = null;
          if(count>=5){
            gameState = "end"
          }
        }
      }
    }
    */
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}
function destroy(){
  
}