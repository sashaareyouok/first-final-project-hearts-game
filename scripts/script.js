//const myGameZone={
//canvas: document.createElement('canvas'),

//start: function(){
//this.canvas.width=480;
//this.canvas.height=270;
//this.context = this.canvas.getContext('2d');

//this.ctx = canvas.getContex('2d');

//document.body.insertBefore(this.canvas, document.body.childNodes[0]);

//(TIME UPDATE) update my game every 10 m.sec

//this.interval = setInterval(updateGameZone,10);

//},

//clear: function () {
//this.context.clearRect (0,0, this.canvas.width, this.canvas.height,);
//},

//score: function () {
//const points = Math.floor(this.frames / 20);
//this.context.font = '20px serif';
//this.context.fillstyle = 'bleu';
//this.context.fillText (`YOUR SCORE ${points}`, 200, 30);
//},

//};

// player related

//class Player {
//constructor(width,height,x,y,src){

//this.width=width;
//this.height=height;

//this.x = x;
//this.y = y;

//this.playerImage = this.createPlayer();

//this.speedX= 0;
//this.speedY= 0;

//}

// draw my user - this connected only to my user - main player

//update() {

//const ctx = myGameZone.context;

//ctx.drawImage(this.playerImage, this.x, this.y, this.width, this.height)

// }

//createPlayer (){
//const heart = new Image() ;
//heart.src = 'https://art.pixilart.com/5aefe2bd2dc747b.png';
//return heart
//}

// move my user

//newPos = function () {
//this.x += this.speedX;
//this.y += this.speedY;
//}

//left(){
//return this.x;
//}

//right(){
//return this.x + this.width
//}

//top(){
//return this.y;
//}

//bottom(){
//return this.y + this.height
//}

//}

// my main Player

//const MainPlayer = new Player (100,100,50,110);

// this part is animation part - draw everything - all functions that should work here

//function updateGameZone() {
//myGameZone.clear();

//MainPlayer.update();
//MainPlayer.newPos();

//heart.newPos();
//myGameZone.score();
//updateOb();
//}

//myGameZone.start();

// obstacles

//const obstacles = [];

//function updateOb () {

//myGameZone.frames += 2;

//obstacles.push(new Component (10, 30, 0, 0));

//obstacles.push(new Component(10, 30, 0, 0));

//}

class gameArea {
  constructor() {
    this.ctx = null;
    this.bg = null;
    this.player = null;
    this.black = null;
    this.blood = null;
    this.frames = 0;
  }

  startGame() {
    const canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");

    const player = new Player(500, 500, 120, 300);

    this.player = player;

    // const black = new blackHeart(400,400,130,100);

    // this.black = black;

    // const blood = new bloodHeart(400,400,50,30);

    // this.blood = blood;

    const backgroung = new Image();

    backgroung.src = "./images/IMG_1061.JPG";

    backgroung.onload = () => {
      this.bg = backgroung;

    //   this.updateCanvas();
      this.drawMainPlayer();
      // this.drawBlack()
      // this.drawBlood()

      //this.score()
    };
  }

  drawMainPlayer() {
    this.ctx.drawImage(
      this.player.img,
      this.player.posX,
      this.player.posY,
      this.player.width,
      this.player.height
    );
  }

  // drawBlack(){
  //     this.ctx.drawImage(
  //         this.black.img,
  //         this.black.posX,
  //         this.black.posY,
  //         this.black.width,
  //         this.black.height
  //     );

  // }

  // drawBlood(){
  //     this.ctx.drawImage(
  //         this.blood.img,
  //         this.blood.posX,
  //         this.blood.posY,
  //         this.blood.width,
  //         this.blood.height
  //     );
  // }

  score() {
    const points = Math.floor(this.frames / 20); //?
    this.ctx.font = "18px serif";
    this.ctx.fillStyle = "deepskyblue";
    this.ctx.fillText(`score: ${points}`, 700, 95); //position
  }

  break() {
    clearInterval(this.interval);
  }

  updateCanvas() {
    // setInterval(() => {
      this.ctx.clearRect(0, 0, 500, 600);
      this.ctx.drawImage(this.bg, 0, 0, 800, 600);
      this.drawMainPlayer();
      // this.drawBlack()
      // this.drawBlood()
      this.score()
    // }, 20);
  }
}

class Player {
  constructor(width, height, posX, posY) {
    this.width = width;
    this.height = height;
    this.posX = posX;
    this.posY = posY;
    this.img = this.createPlayer();
  }

  createPlayer() {
    const player = new Image();

    player.src = "./images/IMG_1032.PNG";

    return player;
  }

  moveRight() {
    this.posX += 15;
  }

  moveLeft() {
    this.posX -= 15;
  }

  moveTop() {
    this.posY -= 15;
  }

  moveBottom() {
    this.posY += 15;
  }

  movePlayer(event) {
    switch (event) {
      case "ArrowRight":
        this.moveRight();
        break;

      case "ArrowLeft":
        this.moveLeft();
        break;

      case "ArrowUp":
        this.moveTop();
        break;

      case "ArrowDown":
        this.moveBottom();
        break;
    }
  }
}

class blackHeart {
  constructor(width, height, posX, posY) {
    this.width = width;
    this.height = height;
    this.posX = posX;
    this.posY = posY;
    this.img = this.createBlack();
  }

  createBlack() {
    const black = new Image();

    black.src = "./images/IMG_1131.PNG";

    return black;
  }
}

class bloodHeart {
  constructor(width, height, posX, posY) {
    this.width = width;
    this.height = height;
    this.posX = posX;
    this.posY = posY;
    this.img = this.createBlood();
  }

  createBlood() {
    const blood = new Image();

    blood.src = "./images/IMG_1133.PNG";

    return blood;
  }
}

// class Obstacles {
//     constructor(width,height,posX,posY)
//this.width= width;
//this.height=height;
//this.posX=posX;
//this.posY=posY;
// }

// let myObstacles;

//     function blueObstacles() {
//         myObstacles = new component (10,200,300,120)

//     }

const myObstacles = [];

function updateObstacles(game) {
    // console.log('hello')
  game.frames += 1;
    // console.log(gameArea.frames)
  for (i = 0; i < myObstacles.length; i++) {
    moveObstacles(myObstacles[i], game)   
  }

  if (game.frames % 150 === 0) {
    //position of start
    let x = 800;

    let minWidth = 50;
    let maxWidth = 300;
    let width = Math.floor(
      Math.random() * (maxWidth - minWidth + 1) + minWidth
    );
    let minGap = 60;
    let maxGap = 180;
    let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap); 

    const rightOb = {
     width: x - width - gap, 
     height: 20, 
     x: width + gap,
     y: 0
    }

    const leftOb = {
     width:  width, 
     height: 20, 
     x: 0,
     y: 0
    }

    myObstacles.push(rightOb, leftOb)
  }
}

// this.width = width;
// this.height = height;
// this.posX = posX;
// this.posY = posY;

let interval = null

function moveObstacles(obstacle, game) {
    obstacle.y += 1;
    game.ctx.filStyle = 'black'
    game.ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height)
    if (
        (game.player.posX + game.player.width / 2 < obstacle.x + obstacle.width)
        &&
        (game.player.posX + game.player.width / 2> obstacle.x) 
        &&
        (game.player.posY + game.player.height / 2 < obstacle.y + obstacle.height)
        &&
        (game.player.posY + game.player.height / 2 > obstacle.y)
        ) {
            clearInterval(interval)
            window.alert('TRY AGAIN!')
            location.reload()
        }
}

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    const game = new gameArea();
    game.startGame();

    interval = setInterval(() => {
        game.updateCanvas()
        updateObstacles(game)
    }, 15)

    

    document.addEventListener("keydown", (e) => {
      game.player.movePlayer(e.key);
    });
  };
};
