const canvas=document.getElementById("colorBlock");
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
        for(j = 0; j < row; j++){
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
function Piece(block,color){
    this.block=block;
    this.color=color;
    this.blockN=0;
    this.activeBlock=this.block[this.blockN];
    this.x=2;
    this.y=4;

}
//draw the piece on board
Piece.prototype.fill=function(){
    for(i=0;i<this.activeBlock.length;i++){
        for(j=0;j<this.activeBlock.length;j++){
        if(this.activeBlock[i][j]){
            drawSquare(this.x+j,this.y+i,this.color);
        }
            
        }
    }
}

Piece.prototype.draw = function(){
    this.fill(this.color);
}
// undraw a piece
Piece.prototype.unDraw = function(){
    this.fill(vacant);
}