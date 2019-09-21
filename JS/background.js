let canvas =document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d")
canvas.width = innerWidth
canvas.height = innerHeight


const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

let gravity = 0.3
let friction = 0.6

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight

    init()
})

function randomIntFromRange(min,max){
    return Math.floor(Math.random() * (max - min +1)+min)
}
function randomColor(colors){
    return colors(Math.floor(Math.random()*color.length))
}
// Objects
function squre(x, y, dy, radius, color) {
    this.x = x
    this.y = y
    this.dy = dy
    this.radius = radius
    this.color = color
}

Ball.prototype.draw = function() {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    ctx.fillStyle = this.color
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
}

Ball.prototype.update = function() {
    if(this.y +this.radius > canvas.height){
        this.dy = -this.dy * friction
    }
    else{
        this.dy += gravity
    }
    this.y +=this.dy

    this.draw()
}

// Implementation
let ball;
let ballarray = []

function init() {
    ball = new squre(canvas.width/2,canvas.height/2,1,30,"red")

    for (let i = 0; i < 100; i++) {
        let x =randomIntFromRange(0, canvas.width)
        let Y =randomIntFromRange(0, canvas.height - 20)
        ballarray.push(new squre(x,Y,2,30,"red"))
    }
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.font = "30px Arial";
// ctx.fillText("Hello World",canvas.width/2, canvas.height/2);
// ctx.fillStyle = "#FF0000";
// ctx.fillRect(0,0,200,55)
    ballarray.forEach(ball => {
     ball.update()
    })
    ball.update()
}

init()
animate()