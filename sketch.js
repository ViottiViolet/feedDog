var dog,sadDog,happyDog;
var foodObj, addButton, feedButton;

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage('saddog', sadDog);
  dog.scale=0.15;

  foodObj = new Food();
  addButton = createButton('add food')
  addButton.position(800, 95)
  addButton.mousePressed(addFood)

  feedButton = createButton('feed dog')
  feedButton.position(700, 95)
  feedButton.mousePressed(feedDog)
}

function draw() {
  background(46,139,87);
  drawSprites();

  foodObj.display();
}

//function to read food Stock


//function to update food stock and last fed time
function feedDog() {
  dog.addImage('happydog', happyDog);
  
  if(foodObj.getFoodStock() <= 0) {
    foodObj.updateFoodStock(foodObj.getFoodStock * 0)
  }
  else {
    foodObj.updateFoodStock(foodObj.getFoodStock - 1)
  }
}

//function to add food in stock
function addFood() {
  foodObj.updateFoodStock(foodObj.getFoodStock + 1);
}