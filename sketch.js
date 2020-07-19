var trex, ground;
var myTouch=[];
var pos, temp_pos;
var first = true;
function setup() {
  createCanvas(1200,600);
  trex = createSprite(600, 580, 50, 50);
  trex.shapeColor = "pink";
  
}

function draw() {
  background("yellow");  
  drawSprites();
}
function touchMoved(){
  //stroke(255, 0, 0);
  //line(touchX, touchY, ptouchX, ptouchY);
  console.log("touchMoved");
  
  pos = [touchX,touchY];
  if(first){
    temp_pos = pos;
    myTouch.push(pos)
    console.log("touch pos first "+pos);
   // pos=[];
    first = false;
  }
  
  
  if(pos[0]!==temp_pos[0]){
    console.log("abc");
  myTouch.push(pos)
  temp_pos = pos;
  console.log("touch pos "+pos);
  pos=[];
  }
  
  for(var i = 0;i<myTouch.length;i++){
    console.log("myTouch length "+myTouch.length);
    if(myTouch.length>1 && myTouch[i][0]<myTouch[i+1][0]){
      trex.x = trex.x-1;
    }
    else{
      trex.x = trex.x+1;
    }
  }
  
  
  
}

function touchEnded(){
  //stroke(0, 0, 255);
  //line(touchX, touchY, ptouchX, ptouchY);
  console.log("touchEnded");
  
}
