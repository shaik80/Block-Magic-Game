const canvas=document.getElementById("Block");
const scoreElement = document.getElementById("score");
const ctx = canvas.getContext("2d")
const ROW=20;
const COL=column=10;
const sqsquareSize = SQ =25;
const VACANT = "white"; // color of an empty square
let board = [];
for( r = 0; r <ROW; r++){
    board[r] = [];
    for(c = 0; c < COL; c++){
        board[r][c] = VACANT
    }
}
const PIECES = [
    [Z,"red"],
    [S,"green"],
    [T,"yellow"],
    [O,"blue"],
    [L,"purple"],
    [I,"cyan"],
    [J,"orange"]
];

function drawSquare(x,y,color){
    ctx.fillStyle = color;
    ctx.fillRect(x*SQ,y*SQ,SQ,SQ);
    ctx.strokeStyle = "black";
    ctx.strokeRect(x*SQ,y*SQ,SQ,SQ);
}


function drawBoard(){
    for( r = 0; r < ROW; r++){
        for(c = 0; c < COL; c++){
            drawSquare(c,r,board[r][c]);
        }
    }
}



class Blockmagiclogic{
    constructor(tetromino,color){
        this.tetromino = tetromino;
        this.color = color
        
        this.tetrominoN = 0; // we start from the first pattern
        this.activeTetromino = this.tetromino[this.tetrominoN];
            // we need to control the pieces
        this.x = 3;
        this.y = -2;    
    }



    draw (){
        this.fill(this.color);
    }

    unDraw(){
        this.fill(VACANT);
    }

    fill (color){
        this.activeTetromino.forEach((v,r) => {
            this.activeTetromino.forEach((v,c) => {
            (this.activeTetromino[r][c]) ? drawSquare(this.x + c,this.y + r, color):null;
            })
        });
    }

    moveDown(){
        !this.collision(0,1,this.activeTetromino) ? (this.unDraw(),this.y++,this.draw()) : (this.lock(),p = randomPiece())
    }

    moveRight() {
        (!this.collision(1,0,this.activeTetromino)) ? (this.unDraw(),this.x++,this.draw()):null;
    }
    
    moveLeft() {
        (!this.collision(-1,0,this.activeTetromino)) ? (this.unDraw(),this.x--,this.draw()):null;
    }


    rotate(){
            let n = this.activeTetromino.length;
            console.log(n)
            let r = Math.floor(n/ 2);
            let c = n - 1;
            let temp;
            for (let i = 0; i < r; i++) {
               for (let j = i; j < c - i; j++) {
                  temp = this.activeTetromino[i][j];
                  this.activeTetromino[i][j] = this.activeTetromino[c - j][i];
                  this.activeTetromino[c - j][i] = this.activeTetromino[c - i][c - j];
                  this.activeTetromino[c - i][c - j] = this.activeTetromino[j][c - i]
                  this.activeTetromino[j][c - i] = temp
               }
            }
        // let nextPattern = this.tetromino[(this.tetrominoN + 1)%this.tetromino.length];
        // console.log(nextPattern)
        // let kick = 0 
    }





    lock(){
        for( r = 0; r < this.activeTetromino.length; r++){
            for(c = 0; c < this.activeTetromino.length; c++){
                // we skip the vacant squares
            if( !this.activeTetromino[r][c]){
                    continue;
                }
                // pieces to lock on top = game over
                if(this.y + r < 0){
                    
                    alert("Game Over");
                    // stop request animation frame
                    gameOver = true;
                    location.replace("./game.html")
                    break;
                }
                // we lock the piece
                board[this.y+r][this.x+c] = this.color;
            }
        }

        
        // remove full rows
        for(r = 0; r < ROW; r++){
            let isRowFull = true;
            for( c = 0; c < COL; c++){
                isRowFull = isRowFull && (board[r][c] != VACANT);
            }
            if(isRowFull){
                // if the row is full
                // we move down all the rows above it
                for(let y = r; y > 1; y--){
                    for( c = 0; c < COL; c++){
                        board[y][c] = board[y-1][c];
                    }
                }
                // the top row board[0][..] has no row above it
                for( c = 0; c < COL; c++){
                    board[0][c] = VACANT;
                }
                // increment the score
                
                localStorage.setItem("high score", score += 10)
            }
        }
        // update the board
        drawBoard();
        
        // update the score
        scoreElement.innerHTML = score;
    }
    
    

     collision(x,y,piece){
        for( r = 0; r < piece.length; r++){
            for(c = 0; c < piece.length; c++){
                // if the square is empty, we skip it
                if(!piece[r][c]){
                    continue;
                }
                // coordinates of the piece after movement
                let newX = this.x + c + x;
                let newY = this.y + r + y;
                
                // conditions
                if(newX < 0 || newX >= COL || newY >= ROW){
                    return true;
                }
                // skip newY < 0; board[-1] will crush our game
                if(newY < 0){
                    continue;
                }
                // check if there is a locked piece alrady in place
                if( board[newY][newX] != VACANT){
                    return true;
                }
            }
        }
        return false;
    }
    

}


function randomPiece(){
    let r = randomN = Math.floor(Math.random() * PIECES.length) // 0 -> 6
    return new Blockmagiclogic( PIECES[r][0],PIECES[r][1]);
}

let score = 0;
let p = randomPiece()

document.addEventListener("keydown",CONTROL);


 

function controlmove(move){
    (move == "Left") ? (p.moveLeft(),dropStart = Date.now()) :
    (move == "Up") ? (p.rotate(),dropStart = Date.now()) :
    (move == "Right") ? (p.moveRight(),dropStart = Date.now()) : 
    (move == "Down") ? (p.moveDown()) : null
}

function CONTROL(event){
    (event.keyCode == 37) ? (controlmove("Left"))
    :(event.keyCode == 38 )? (controlmove("Up"))
    :(event.keyCode == 39)? (controlmove("Right"))
    :(event.keyCode == 40 )? (controlmove("Down"))
    :null
}

let dropStart = Date.now();
let gameOver = false;
function drop(){
    let now = Date.now();
    let delta = now - dropStart;
    delta > 1*200 ?
        (p.moveDown(), dropStart = Date.now()):null
    !gameOver? requestAnimationFrame(drop):null
}


drop();
drawBoard();

$("#Left").on( "click" , () => {controlmove("Left")});
$("#Up").on( "click", () => {controlmove("Up")})
$("#Right").on( "click" , () => {controlmove("Right")});
$("#Down").on( "click" , () => {controlmove("Down")});
