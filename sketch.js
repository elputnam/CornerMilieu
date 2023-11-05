//a technological/geographic milieu

let base;
let Che;
let cart;
let callerBig;
let EL;
let dad;
let callers;
let callerSmall;
let cleaner;
let alp1 = 0;
let alp2 = 100;
let colour = 360;

function preload(){
  base = loadImage('assets/ELDad_StreetCorner_base.png');
  Che = loadImage('assets/ELDad_StreetCorner_Che.png');
  cart = loadImage('assets/ELDad_StreetCorner_cart.png');
  callerBig = loadImage('assets/ELDad_StreetCorner_callerBig.png');
  EL = loadImage('assets/ELDad_StreetCorner_EL.png');
  dad = loadImage('assets/ELDad_StreetCorner_dad.png');
  callers = loadImage('assets/ELDad_StreetCorner_callers.png');
  callerSmall = loadImage('assets/ELDad_StreetCorner_callerSmall.png');
  cleaner = loadImage('assets/ELDad_StreetCorner_cleaner.png');

}




function setup() {
  createCanvas(base.width, base.height);
  colorMode(HSB, 360, 100, 100, 100);
  frameRate(2);
}

function draw() {
  background(0);
    //base
  push();
  tint(255, random(70, 100));
  image(base, 0, 0, width, height);
  pop();

  //cart
  blend(cart, 0, 0, cart.width, cart.height, 0, 0, width, height, LIGHTEST);

  //Che
  blend(Che, 0, 0, Che.width, Che.height, 0, 0, width, height, LIGHTEST);

  //caller  
   blend(callerBig, 0, 0, callerBig.width, callerBig.height, 0, 0, width, height, DARKEST);

  




  //bars
  noStroke();
  fill(colour, random(100), random(100), alp1);
  rect(0, 0, width, height);
  for (let i = 0; i < 50; i++){
    fill(colour-180, random(100), random(100), random(alp1));
    //fill(255, random(alp1));
    //rect(random(width), 0, random(10), height);
    fill(random(255), alp1);
    rect(0, random(height), width, random(20));
  }

  //EL
   push();
   tint(colour, random(50), alp2);
   EL.filter(GRAY);
   image(EL, 0, 0, width, height);
   pop();
  
   //dad
  push();
  tint(colour-180, random(100), alp2);
  dad.filter(GRAY);
  image(dad, 0, 0, width, height);
  pop();

  //callers
  push();
  tint(colour-180, 100, 100, alp1);
  // callers.filter(THRESHOLD, 0.25);
  if (frameCount%int(random(5))==0){
    callers.filter(INVERT);
  }
  //callers.filter(THRESHOLD, 0.25);
  image(callers, 0, 0, width, height);
  pop();

  //Small caller
  push();
  tint(colour-180, random(50), alp1);
  // callerSmall.filter(THRESHOLD, 0.25);
  callerSmall.filter(INVERT);
  image(callerSmall, 0 , 0, width, height);
  pop();

  //Cleaner
  push();
  tint(colour-180, random(50), alp1);
  if (frameCount%int(random(5))==0){
    cleaner.filter(INVERT);
  }
  // cleaner.filter(THRESHOLD, 0.25);
  image(cleaner, random(-50, 50), 0, width, height);
  pop();

  if (frameCount%int(random(20))==0){
    colour = random(180, 360);
    if (alp1 <= 0){
      alp1 = 100;
      alp2 = 0;
  } else {
    alp1 = 0;
    alp2 = 100;
    }
  }
}

function mousePressed(){
  saveCanvas('SedimentPhotos'+frameCount);
}