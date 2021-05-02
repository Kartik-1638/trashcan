class Ground 
{
    constructor()
    {
        var groundfeatures ={
            isStatic : true 
          }
        this.ground = Bodies.rectangle (400,690,800,10,groundfeatures) 
        World.add(world,this.ground) 
    }
    display()
    {
        rectMode (CENTER)
rect(this.ground.position.x,this.ground.position.y,800,10)
    }
}