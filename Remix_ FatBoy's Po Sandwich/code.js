//set variables needed for program
setScreen("gameIntro");
var validateBreadIfStatement;
var validateLettuceIfStatement;
var validateMeatIfStatement;
var validateCheeseIfStatement;
var validateCondimentsIfStatement;
var movingBrocoli = []; //hold the id of the different moving brocoli
var brocoliId = 1;
var lol = 0;
var livesLeft = 5;

var xVelocity = 0;
var yVelocity = 0;
var keysPressed = [false, false, false, false];
onEvent("startButton", "click", function( ) {
  setScreen("gameScreen");

  //update for keys pressed
  timedLoop(17, function() {
      xVelocity = 0;
      yVelocity = 0;
      if (keysPressed[0]) {
        yVelocity += -3;
      }
      if (keysPressed[1]) {
        yVelocity += 3;
      }
      if (keysPressed[2]) {
        xVelocity += -3;
      }
      if (keysPressed[3]) {
        xVelocity += 3;
      }
      //set FatBoy Inital Postioning
      setPosition("fatBoyRunning", getXPosition("fatBoyRunning") + xVelocity, getYPosition("fatBoyRunning") + yVelocity);
      //time update to add brocoli
      if (lol % 75 === 0) {
        addBrocoli();
      }
      lol++;
      makeBrocolliMove();
      livesLost();


    });

  
});
//identify and update for which keys are pressed
onEvent("gameScreen", "keydown", function( event) {
    if (event.key == "Up") {
    keysPressed[0] = true;
  } else if ((event.key == "Down")) {
    keysPressed[1] = true;
  } else if ((event.key == "Left")) {
    keysPressed[2] = true;
  } else if ((event.key == "Right")){
    keysPressed[3] = true;
  }
  // check if we should run the following if statements (determining elements to appear or not appear)
if (getImageURL("bread1") == "4-40520_bread-png-clipart-bread-clipart-png-(1).png") {
    validateBreadIfStatement = true;
  } else {
    if (getImageURL("meat3") == "assets/cartoon-meat-not-png-yet.png") {
    validateMeatIfStatement = true;
  } else {
    validateMeatIfStatement = false;
  }
    validateBreadIfStatement = false;
  }
if (getImageURL("lettuce2") == "assets/green-lettuce-leaf-icon-cartoon-style-vector-web-design-isolated-white-background-130129787.png") {
    validateLettuceIfStatement = true;
  } else {
    validateLettuceIfStatement = false;
  }
if (getImageURL("cheese4") == "assets/114749313-sliced-cheese-icon-cartoon-of-sliced-cheese-vector-icon-for-web-design-isolated-on-white-background.png") {
    validateCheeseIfStatement = true;
  } else {
    validateCheeseIfStatement = false;
  }
  if (getImageURL("sauce5") == "assets/depositphotos_117196348-stock-illustration-sauce-vector-icon-cartoon-singe.png") {
    validateCondimentsIfStatement = true;
  } else {
    validateCondimentsIfStatement = false;
  }
  
  //check if each element is being hit by fatBoy 
if (validateBreadIfStatement == true && (Math.abs((getXPosition("bread1")+50) - (getXPosition("fatBoyRunning")+80)) <= 30 && Math.abs(((getYPosition("fatBoyRunning")+80) - (getYPosition("bread1")+23) <= 20)))) {
    showElement("lettuce2");
    hideElement("bread1");
    setProperty("lettuce2", "image", "assets/green-lettuce-leaf-icon-cartoon-style-vector-web-design-isolated-white-background-130129787.png");
    //loads a function after 500 milliseconds so if fat boy goys near the area of the orginal poisiton the code is not re ran since if statement would then become false causing the if statment within to no longer run.
    setTimeout(function() {
      showElement("bread1");
      setProperty("bread1", "image", "assets/440-4402664_cartoon-broccoli-png-plants-vs-zombies-broccoli.png");
    }, 500);
    setText("gameHelp", "Get Fatboy his lettuce!");
    playSound("assets/category_collect/collect_item_bling_1.mp3");
}
  if (validateLettuceIfStatement == true && Math.abs((getXPosition("lettuce2")+38) - (getXPosition("fatBoyRunning")+80) <= 30) && Math.abs(((getYPosition("lettuce2")+33) - (getYPosition("fatBoyRunning")+80) <= 20))) {
hideElement("lettuce2");
    showElement("meat3");
    setProperty("meat3", "image", "assets/cartoon-meat-not-png-yet.png");
    setTimeout(function() {
      showElement("lettuce2");
      setProperty("lettuce2", "image", "assets/440-4402664_cartoon-broccoli-png-plants-vs-zombies-broccoli.png");
    }, 500);
    setText("gameHelp", "Get Fatboy his meat!");
    playSound("assets/category_collect/collect_item_bling_1.mp3");
}
if (validateMeatIfStatement == true && Math.abs((getXPosition("meat3")+45) - (getXPosition("fatBoyRunning")+80)) <= 30 && Math.abs(((getYPosition("fatBoyRunning")+80) - (getYPosition("meat3")+18) <= 20))) {
hideElement("meat3");
    showElement("cheese4");
    setProperty("cheese4", "image", "assets/114749313-sliced-cheese-icon-cartoon-of-sliced-cheese-vector-icon-for-web-design-isolated-on-white-background.png");
setTimeout(function() {
      showElement("meat3");
      setProperty("meat3", "image", "assets/440-4402664_cartoon-broccoli-png-plants-vs-zombies-broccoli.png");
    }, 500);
setText("gameHelp", "Get Fatboy his cheese!");
    playSound("assets/category_collect/collect_item_bling_1.mp3");

  }
    if (validateCheeseIfStatement == true && Math.abs((getXPosition("cheese4")+20) - (getXPosition("fatBoyRunning")+80)) <= 30 && Math.abs(((getYPosition("fatBoyRunning")+80) - (getYPosition("cheese4")+25) <= 20))) {
hideElement("cheese4");
    showElement("sauce5");
    setProperty("sauce5", "image", "assets/depositphotos_117196348-stock-illustration-sauce-vector-icon-cartoon-singe.png");
setTimeout(function() {
      showElement("cheese4");
      setProperty("cheese4", "image", "assets/440-4402664_cartoon-broccoli-png-plants-vs-zombies-broccoli.png");
    }, 500);
setText("gameHelp", "Get Fatboy his condiments!");
    playSound("assets/category_collect/collect_item_bling_1.mp3");

  }
  if (validateCondimentsIfStatement == true && Math.abs((getXPosition("sauce5")+45) - (getXPosition("fatBoyRunning")+80)) <= 30 && Math.abs(((getYPosition("fatBoyRunning")+80) - (getYPosition("sauce5")+45) <= 20))) {
    playSound("assets/category_alerts/vibrant_game_carton_start_game_2_long.mp3");
setScreen("victoryScreen");
//stoping game nessary functions so they do not appear on other screens and constantly run
    stopTimedLoop(makeBrocolliMove());
    stopTimedLoop(addBrocoli());
    stopTimedLoop(livesLost());

//makes velocity of fat boy to false so he is no longer moving untill the game screen is uploaded
    keysPressed[0] = false;

    keysPressed[1] = false;

    keysPressed[2] = false;

    keysPressed[3] = false;
    setPosition("fatBoyRunning", -2, 290);
    resetGame();
}

});

onEvent("gameScreen", "keyup", function(event) {
  // causes elements within the "key pressed" list to be false which means it will no longer set the veloctiy of fat boy
  if (event.key == "Up") {
    keysPressed[0] = false;
  } else if ((event.key == "Down")) {
    keysPressed[1] = false;
  } else if ((event.key == "Left")) {
    keysPressed[2] = false;
  } else if ((event.key == "Right")){
    keysPressed[3] = false;
  }
});
hideElement("lettuce2");
hideElement("meat3");
hideElement("cheese4");
hideElement("sauce5");
onEvent("winPlayAgain", "click", function( ) {
  setScreen("gameIntro");
});
onEvent("tryAgainButton", "click", function( ) {
  setScreen("gameIntro");
  resetGame();
});

//function that adds brocoli to the screen using a local variable, append iteam into insert the list and positioning so brocoli movement remains consistent
function addBrocoli() {
  var test = "movingBrocoli" + brocoliId;
  appendItem(movingBrocoli, test);
  brocoliId++;
  image(test, "assets/440-4402664_cartoon-broccoli-png-plants-vs-zombies-broccoli.png");
  setPosition(test, 245, randomNumber(0, 400), 75, 75);
}

//making brocoli move using for function to itterate generated brocolis through the list and setting their positions to update within the 17 millisecond timed loop above
function makeBrocolliMove() {
  for (var i = 0; i < movingBrocoli.length; i++) {
    var movingBrocoliX = getXPosition(movingBrocoli[i]);
    var movingBrocoliY = getYPosition(movingBrocoli[i]);
    setPosition(movingBrocoli[i], movingBrocoliX - 2, movingBrocoliY);
  }
}
//lives lost function that determines if fatBoy has touched each brocoli generated through a conditional within a for loop, also checks if the number of lives is less than 1 making the function run a serious of other functions that reset the game
function livesLost() {
  for (var i = 0; i < movingBrocoli.length; i++) {
    if ((Math.abs((getXPosition(movingBrocoli[i]) + 38) - (getXPosition("fatBoyRunning") + 50))) <= 30 && (Math.abs((getYPosition("fatBoyRunning") + 70) - (getYPosition(movingBrocoli[i]) + 38))) <= 15) {
      livesLeft--;
      setImageURL(movingBrocoli[i], "assets/gifofimageblowup.gif");
      setText("livesId", "Lives: " + livesLeft );
      setPosition(movingBrocoli[i], 75, 380, 75, 75);
      playSound("assets/category_alerts/retro_game_health_pickup_6.mp3");
      if (livesLeft <= 0) {
        stopTimedLoop(makeBrocolliMove());
        stopTimedLoop(addBrocoli());
        stopTimedLoop(livesLost());
        setScreen("lossScreen");
        livesLeft = 5;
//code that makes the velocity of the fat boy to not change while the user is in a different screen 
    keysPressed[0] = false;

    keysPressed[1] = false;

    keysPressed[2] = false;

    keysPressed[3] = false;
        resetGame();
  }
      }
    }
  }
  
//function that resets the game when function is called, resets image url to original, randomly assign new position for elements to st  
function resetGame() {
  setPosition("fatBoyRunning", -2, 290);
  setPosition("bread1", randomNumber(0, 250), randomNumber(50, 380));
  setPosition("lettuce2", randomNumber(0, 250), randomNumber(50, 380));
  setPosition("meat3", randomNumber(0, 250), randomNumber(50, 380));
  setPosition("cheese4", randomNumber(0, 250), randomNumber(50, 380));
  setPosition("sauce5", randomNumber(0, 250), randomNumber(50, 380));
  setImageURL("bread1", "4-40520_bread-png-clipart-bread-clipart-png-(1).png");
  setImageURL("lettuce2", "assets/440-4402664_cartoon-broccoli-png-plants-vs-zombies-broccoli.png");
  setImageURL("meat3", "assets/440-4402664_cartoon-broccoli-png-plants-vs-zombies-broccoli.png");
  setImageURL("cheese4", "assets/440-4402664_cartoon-broccoli-png-plants-vs-zombies-broccoli.png");
  setImageURL("sauce5", "assets/440-4402664_cartoon-broccoli-png-plants-vs-zombies-broccoli.png");
  hideElement("lettuce2");
  hideElement("meat3");
  hideElement("cheese4");
  hideElement("sauce5");
  setText("gameHelp", "Get Fatboy his bread!");
  livesLeft = 5;
setText("livesId", "Lives: " + livesLeft );
}


//hasn't worked
