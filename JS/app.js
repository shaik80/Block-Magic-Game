const canvas=document.getElementById("Block");
const c=canvas.getContext('2d');
const row=20;
const col=column=10;
const sq=squareSize= 20;
//color of empty square
const vacant="white";
//draw a square
function drawSquare(x,y,color){
    c.fillStyle=color;
    c.fillRect(x*sq,y*sq,sq,sq);

    c.strokeStyle="black";
    c.strokeRect(x*sq,y*sq,sq,sq);
}
// create the board

let board = [];
for( i = 0; i <row; i++){
    board[i] = [];
    for(j = 0; j < col; j++){
        board[i][j] = vacant;
    }
}
// draw the board
function drawBoard(){
    for( i = 0; i <row; i++){
        for(j = 0; j < col; j++){
            drawSquare(j,i,board[i][j]);
        }
    }
}

drawBoard();

// the pieces and their colors

const PIECES = [
    [Z,"red"],
    [S,"green"],
    [T,"yellow"],
    [O,"blue"],
    [L,"purple"],
    [I,"cyan"],
    [J,"orange"]
];
//Random block
function randomPiece(){
    let r = randomN = Math.floor(Math.random() * PIECES.length) // 0 -> 6
    return new Piece( PIECES[r][0],PIECES[r][1]);
}

let p = randomPiece();
//The object piece
class Piece{
constructor(block,color){
    this.block=block;
    this.color=color;
    this.blockN=0;
    this.activeBlock=this.block[this.blockN];
    this.x=2;
    this.y=4;

}
//draw the piece on board
fill(){
    for(i=0;i<this.activeBlock.length;i++){
        for(j=0;j<this.activeBlock.length;j++){
        if(this.activeBlock[i][j]){
            drawSquare(this.x+j,this.y+i,this.color);
        }
            
        }
    }
}

draw(){
    this.fill(this.color);
}
// undraw a piece
unDraw(){
    this.fill(vacant);
}}



//Start page with logo and name
function start(button){
    x= document.getElementById("Block")
x.style.display="block";


if(button==='c'){
    y= document.getElementById("startpage")
y.style.display="none";
}}

//Gravity boxe
var myGamePiece;
var myGamePiece1;
var myGamePiece2;
var myGamePiece3;
var myGamePiece4;
var myGamePiece5;
var myGamePiece6;
var myGamePiece7;
var myGamePiece8;
var myGamePiece9;
var myGamePiece10;
var myGamePiece11;
var myGamePiece12;
var myGamePiece13;
var myGamePiece14;
var myGamePiece15;

function startGame() {
    myGamePiece = new component(30, 30, "red", 80, 75);
    myGamePiece1 = new component(30, 30, "blue", 50, 55);
    myGamePiece2 = new component(30, 30, "green", 100, 105);
    myGamePiece3 = new component(30, 30, "yellow", 300, 455);
    myGamePiece4 = new component(30, 30, "orange", 400, 45);
    myGamePiece5 = new component(30, 30, "pink", 900, 35);
    myGamePiece6 = new component(30, 30, "green", 2000, 205);
    myGamePiece7 = new component(30, 30, "orange", 300, 505);
    myGamePiece8 = new component(30, 30, "yellow", 700, 305);
    myGamePiece9 = new component(30, 30, "blue", 600, 805);
    myGamePiece10 = new component(30, 30, "red", 400, 605);
    myGamePiece11 = new component(30, 30, "green", 500, 705);
    myGamePiece12 = new component(30, 30, "cyan", 700, 685);
    myGamePiece13 = new component(30, 30, "red", 30, 805);
    myGamePiece14 = new component(30, 30, "darkpink", 80, 905);
    myGamePiece15 = new component(30, 30, "red", 500, 405);
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);        
    },
    stop : function() {
        clearInterval(this.interval);
    },    
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y, type) {
    this.type = type;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;    
    this.speedX = 0;
    this.speedY = 0;    
    this.gravity = 0.1;
    this.gravitySpeed = 0;
    this.bounce = 0.6;
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;
        this.hitBottom();
    }
    this.hitBottom = function() {
        var rockbottom = myGameArea.canvas.height - this.height;
        if (this.y > rockbottom) {
            this.y = rockbottom;
            this.gravitySpeed = -(this.gravitySpeed * this.bounce);
        }
    }
}

function updateGameArea() {
    myGameArea.clear();
    myGamePiece.newPos();
    myGamePiece.update();
    myGamePiece1.newPos();
    myGamePiece1.update();
    myGamePiece2.newPos();
    myGamePiece2.update();
    myGamePiece3.newPos();
    myGamePiece3.update();
    myGamePiece4.newPos();
    myGamePiece4.update();
    myGamePiece5.newPos();
    myGamePiece5.update();
    myGamePiece6.newPos();
    myGamePiece6.update();
    myGamePiece7.newPos();
    myGamePiece7.update();
    myGamePiece8.newPos();
    myGamePiece8.update();
    myGamePiece9.newPos();
    myGamePiece9.update();
    myGamePiece10.newPos();
    myGamePiece10.update();
    myGamePiece11.newPos();
    myGamePiece11.update();
    myGamePiece12.newPos();
    myGamePiece12.update();
    myGamePiece13.newPos();
    myGamePiece13.update();
    myGamePiece14.newPos();
    myGamePiece14.update();
    myGamePiece15.newPos();
    myGamePiece15.update();
    // myGamePiece5.newPos();
    // myGamePiece5.update();
    // myGamePiece5.newPos();
    // myGamePiece5.update();
   
    }