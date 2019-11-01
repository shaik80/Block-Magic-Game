let can =document.getElementById("background");
const ctx = can.getContext("2d")
let gravity = 0.3
let friction = 0.6
can.width = window.innerWidth;
can.height = window.innerHeight;
// can.width = innerWidth
// can.height = innerHeight




function randomIntFromRange(min,max){
    return Math.floor(Math.random() * (max - min +1)+min)
}
function randomColor(){
    return "#"+Math.floor(Math.random()*16777216).toString(16)
}

class Background{
    constructor(x, y, dy, radius, color) {
        this.x = x
        this.y = y
        this.dy = dy
        this.radius = radius
        this.color = color
    }
    draw(){
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.closePath()
    }
    update() {
        this.y +this.radius > can.height ? this.dy = -this.dy * friction : this.dy += gravity
        this.y +=this.dy
        this.draw()
    }
}




// Implementation
let ballarray = []
function init() {

    for (let i = 0; i < 100; i++) {
        let x =randomIntFromRange(0, can.width)
        let Y =randomIntFromRange(0, can.height - 20)
        ballarray.push(new Background(x,Y,1,20,randomColor()))
    }
}

// Animation Loop
function animateball() {
    init()
    ballarray.forEach(ball => {
     ball.draw()
    })
}


$("#btn-play").click(
    function animate() {
        requestAnimationFrame(animate)
        ctx.clearRect(0, 0, can.width, can.height)
        ctx.font = "30px Arial";
        ballarray.forEach(ball => {
         ball.update()
        })
    }
)
$("#btn-ok").on('click', () =>
    location.replace("./game.html")
)

animateball();
