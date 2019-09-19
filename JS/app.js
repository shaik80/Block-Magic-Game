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
for( r = 0; r <ROW; r++){
    board[r] = [];
    for(c = 0; c < COL; c++){
        board[r][c] = VACANT;
    }
}
// draw the board
function drawBoard(){
    for( r = 0; r <ROW; r++){
        for(c = 0; c < COL; c++){
            drawSquare(c,r,board[r][c]);
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
//initiate a piece
let p= new Piece(PIECES[0][0],PIECES[0][1])
//The object piece
function Piece(block,color){
    this.block=block;
    this.color=color;
    this.blockN=0;
    this.activeBlock=this.block[this.blockN];
    this.x=2;
    this.y=4;

}