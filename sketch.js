var canvas;
var music;
var surface1,surface2,surface3,surface4;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(100,590,180,20);
    surface1.shapeColor = "blue";

    surface2 = createSprite(300,590,180,20);
    surface2.shapeColor  = "red";

    surface3 = createSprite(500,590,180,20);
    surface3.shapeColor = "green";

    surface4 = createSprite(700,590,180,20);
    surface4.shapeColor = "pink";

    invisible1 = createSprite(0,605,2000,11);

    invisible2 = createSprite(0,-5,2000,11);

    invisible3 = createSprite(-1,0,1,2000);

    invisible4 = createSprite(799,0,1,2000);


 //create box sprite and give velocity

    box = createSprite(random(20,750),100,30,30);
    box.shapeColor = "black";
    box.velocityX = -2;
    box.velocityY = 2;

}

function draw() {
    background(rgb(169,169,169));
    

    if(surface1.isTouching(box)&&box.bounceOff(surface1)){
        box.shapeColor = "pink";
    }

    if(surface3.isTouching(box)&&box.bounceOff(surface3)){
        box.shapeColor = "blue";
    }

    if(surface4.isTouching(box)&&box.bounceOff(surface4)){
        box.shapeColor = "red";
    }

    if(surface2.isTouching(box)){
       box.shapeColor = rgb(255,128,0);
       box.velocityX = 0;
       box.velocityY = 0;
    }

    box.bounceOff(invisible1);

    box.bounceOff(invisible2);

    box.bounceOff(invisible3);

    box.bounceOff(invisible4);



//add condition to check if box touching surface and make it box
    

   drawSprites();
}
