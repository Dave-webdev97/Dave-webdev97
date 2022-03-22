var myName = "DAVE";
var yourName = prompt ("What's your name?");
var firstChar = yourName.slice(0.1);
var upperFirstChar = firstChar.toUpperCase();
var restofName = yourName.slice(1,5);
restofName = restofName.toLowerCase();
var capitalizedName = firstChar + restofName;
alert ("My name is " + myName + ", welcome to my course, " + capitalizedName + "!");


var tweet = prompt ("Compose your tweet here:");
var tweetCount = tweet.length;
alert ("You have written " + tweetCount + " characters, you have " + (140 - tweetCount) + " characters remaining!");
var tweetUnder140 = tweet.slice(0,140);
alert (tweetUnder140);



function getMilk (money) {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");

  var numberOfBottles = Math.floor(money / 1.5);

  console.log("buy " + numberOfBottles + " bottles of milk");

  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}

getMilk (10);
