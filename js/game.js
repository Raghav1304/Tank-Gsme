class Game{
    constructor(){}

    getState(){
        database.ref("gameState").on("value", function(data){
            gameState= data.val();
        })
 }
 update(state){
database.ref("/").update({
    gameState: state
})
 }
async start(){
     if(gameState=== 0){
    player= new Player()
    var playerCountRef= await database.ref("playerCount").once("value");
    if(playerCountRef.exists()){
        playerCount=playerCountRef.val()
        player.getCount();
    }
    form=new Form();
    form.display();
 }
 tank1= createSprite(100,200,30,30);
 tank2= createSprite(300,200,30,30);
 wall1=createSprite(650,35,displayWidth-60,20)
 wall2=createSprite(650,540,displayWidth-60,20)
 wall3=createSprite(30,350,20,500)
 wall4=createSprite(105,95,190,20)
 wall5=createSprite(100,130,20,100)
 
 wall1.bounceOff(tank1);


 tank1.addAnimation("tank1",t1);
 tank1.scale=0.08
 tank2.addAnimation("tank2",t2);
 tank2.scale=0.15
 
 
 tanks=[tank1,tank2];
 }
 play(){
    form.hide();
    drawSprites();
        textSize(20);
        fill("blue");
        Player.getPlayerInfo()
        text(mouseX+","+mouseY,mouseX,mouseY)
        

if(allPlayers!==undefined){
    background(bg);

    
var index=0
var x=170
var y=200
for(var plr in allPlayers){
index=index+1
x=allPlayers[plr].x+100
tanks[index-1].x=x


y=allPlayers[plr].y+70
tanks[index-1].y=y
if(index===player.index){
 fill("lightgreen")
 ellipse(x,y+55,10,10);
  
}
/*extSize(5)
fill("blue");
textAlign(CENTER);
text(allPlayers[plr].name,x,y-50)
*/
if(keyIsDown(UP_ARROW)&&player.index!==null){
    player.y-=5
    player.updatePlayer()

}
if(keyIsDown(DOWN_ARROW)&&player.index!==null){
    player.y+=5
    player.updatePlayer()

}
if(keyIsDown(RIGHT_ARROW)&&player.index!==null){
    player.x+=5
    player.updatePlayer()
    
}
if(keyIsDown(LEFT_ARROW)&&player.index!==null){
    player.x-=5
    player.updatePlayer()
    
    


}
}
} 
       
    
}
}