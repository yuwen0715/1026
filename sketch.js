function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  textSize(40)
  text("X:"+mouseX+"  Y:"+mouseY,50,50)
 
  push()
    translate(width/2,height/2)
    ellipse(0,0,400)
    ellipse(0,0,100,50)
    ellipse(-25,0,20)
    ellipse(25,0,20)

    ellipse(-75,-100,60)
    ellipse(75,-100,60)

    fill(0)
    ellipse(-75+map(mouseX,0,width,-20,20),-100+map(mouseY,0,height,-20,20),20)
    ellipse(75+map(mouseX,0,width,-20,20),-100+map(mouseY,0,height,-20,20),20)
    if(mouseIsPressed)
    {
      fill(255)
      arc(0,75,200,150,0,PI*3/2)
    }
    else
    {
    fill(255)
    arc(0,75,200,100,0,PI)
    }
    fill()
    arc(0,75,200,50,0,PI)
  pop()
  

}
