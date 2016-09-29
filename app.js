var Player = function (name, jerseyNumber, fieldPosition, image) {
  this.name = name;
  this.jerseyNumber = jerseyNumber;
  this.fieldPosition = fieldPosition;
  this.image = image;
};
var players = [];
players.push(new Player ("Adrian Peterson", 28, "Running Back", "http://blogs.psychcentral.com/life-goals/files/2014/09/adrian-peterson-child-abuse.jpg"));
players.push(new Player ("Teddy Bridgewater", 5, "Quarterback"));
players.push(new Player ("Blair Walsh", 3, "Placekicker"));

Player.prototype.playerInfo = function () {
  alert("The players's name is " + this.name + ". Their jersey number is " + this.jerseyNumber + ". Their field position is " + this.fieldPosition + ".");
};

var playerRoster = function (number) {
  if(document.getElementById('playerfocus')){
      document.getElementById('playerfocus').parentNode.removeChild(document.getElementById('playerfocus'));
  }
  var person = {};
  for (var i = 0; i < players.length; i++) {
    if(number == players[i].jerseyNumber) {
      person = players[i];
    }
  }
  document.getElementById('playerInfo').insertAdjacentHTML('beforeend',
  '<div id="playerfocus"><h1>Player Name: '+person.name+'</h1><img src='+person.image+'><h3>Jersey Number: '+person.jerseyNumber+'</h1><h3>Field Position: '+person.fieldPosition+'</h1></div>');
};


var arr = [1,2,4,6]
for (var i = 0;i < arr.length;i++){
  arr[i]
}
