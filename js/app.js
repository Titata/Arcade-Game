// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x,
    this.y = y,
    this.speed = speed,

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed*dt;
    if (this.x > 505) {
        this.x=0;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y) {
    this.x = 200,
    this.y = 420,

  // The image/sprite for our player, this uses
  // a helper we've provided to easily load images
    this.sprite = 'images/char-cat-girl.png';
};

Player.prototype.update = function() {
    var girl=this;
    allEnemies.forEach(function(el,index,array){
        if (el.y>(girl.y-75)&&el.y<(girl.y+75)){
            if (el.x>(girl.x-80)&&el.x<(girl.x+80)){
                girl.y=420;girl.x=200;
            }
        }
    });
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.handleInput = function(key) {
    if (key=='left') {
        this.x-=101;
    } else if (key=='right') {
        this.x+=101;
    } else if (key=='down') {
        this.y+=83;
    } else if (key=='up') {
        this.y-=83;
    }
    if (this.x<0){this.x=0};
	  if (this.x>450){this.x=400};
    if (this.y<=0){this.y=420};
	  if (this.y>420){this.y=420};
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [];
var enemyOne = new Enemy(-10, 60, 100);
allEnemies.push(enemyOne);
var enemyTwo = new Enemy(-100, 60, 80);
allEnemies.push(enemyTwo);
var enemyThree = new Enemy(-30, 150, 80);
allEnemies.push(enemyThree);
var enemyFour = new Enemy(-60, 150, 50);
allEnemies.push(enemyFour);
var enemyFive = new Enemy(-20, 230, 70);
allEnemies.push(enemyFive);
var enemySix = new Enemy(-800, 230, 40);
allEnemies.push(enemySix);

// Place the player object in a variable called player
var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
