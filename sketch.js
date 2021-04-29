const Engine=Matter.Engine;
const World=Matter.World;
const Body=Matter.Body;
const Bodies=Matter.Bodies;

var gameState="start";
var engine,world;
var ground,ground2,ground3;
var score=0;
var count=0;
var particle;

var particles=[];
var plinkos=[];
var divisions=[];
var plinkos2=[];
var plinkos3=[];
var plinkos4=[];

var divisionHeight=300;

function setup(){
  createCanvas(480,800);

  engine=Engine.create();
  world=engine.world;

  ground=new Ground(240,795,width,10);
  
  ground2=new Ground(478,250,5,500);

  ground3=new Ground(2,250,5,500);


  for(var k=0;k<=width;k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
  }

  for(var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75,10));
  }

  for(var p=15;p<=width;p=p+50){
    plinkos2.push(new Plinko(p,175,10));
  }

  for(var c=40;c<=width;c=c+50){
    plinkos3.push(new Plinko(c,275,10));
  }

  for(var n=15;n<=width;n=n+50){
    plinkos4.push(new Plinko(n,375,10));
  }

}

function draw(){
  background("black");
  Engine.update(engine);

  textSize(30)
  fill("white");
  stroke("black")
  text("score:"+score,30,30)

  textSize(20);
  fill("white");
  stroke("black");
  text("500",25,600);

 textSize(20);
 fill("white");
 stroke("black");
 text("500",105,600);

 textSize(20);
 fill("white");
 stroke("black");
 text("100",185,600);
 
 textSize(20);
 fill("white");
 stroke("black");
 text("100",265,600);

 textSize(20);
 fill("white");
 stroke("black");
 text("200",345,600);

 textSize(20);
 fill("white");
 stroke("black");
 text("200",425,600);

 if ( gameState =="end") {
    
  textSize(90);
  text("GameOver", 150, 300);
  
}

  for(var k=0;k < divisions.length;k++){
     divisions[k].display();
  }

  for(var j =0;j < plinkos.length;j++){
    plinkos[j].display();
  }

  for(var p =0;p < plinkos2.length;p++){
    plinkos2[p].display();
  }

  for(var c =0;c < plinkos3.length;c++){
    plinkos3[c].display();
  }

  for(var n =0;n < plinkos4.length;n++){
    plinkos4[n].display();
  }
   
  ground.display();

  fill("brown");
  ground2.display();
  ground3.display();

  stroke("yellow");
  strokeWeight(5)
  line(0,450,480,450);

  if(particle!=null)
    {
       particle.display();
        
        if (particle.body.position.y>450)
        {
              if (particle.body.position.x < 300) 
              {
                  score=score+500;      
                  particle=null;
                  if ( count>= 5) gameState ="end";                          
              }


              else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
              {
                    score = score + 100;
                    particle=null;
                    if ( count>= 5) gameState ="end";

              }
              else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
              {
                    score = score + 200;
                    particle=null;
                    if ( count>= 5)  gameState ="end";

              }      
              
        }
  
      }

}

function mousePressed()
{
  if(gameState!=="end")
  {
      count++;
     particle=new Particle(mouseX, 10, 10, 10); 
  }   
}
