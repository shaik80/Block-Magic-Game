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
function start(button){
    x= document.getElementById("Block")
x.style.display="block";


if(button==='c'){
    y= document.getElementById("startpage")
y.style.display="none";
}}
var myGamePiece;

function startGame() {
    myGamePiece = new component(30, 30, "red", 80, 75);
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
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
}
