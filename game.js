const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

c.fillRect(0, 0, canvas.width, canvas.height)

const gravity = 0.7

class Sprite{
    constructor({position, velocity}){
        this.position = position
        this.velocity = velocity
        this.height = 150
        this.lastkey
    }

    draw(){
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, 50, this.height)
    }

    update() {
        this.draw()

        this.position.y += this.velocity.y
        this.position.x += this.velocity.x

        if(this.position.y + this.height + this.velocity.y >= canvas.height){
            this.velocity.y = 0
        } else 
        this.velocity.y += gravity
    }
}

const player = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    velocity: {
        x: 0,
        y: 0
    }
})

player.draw()

const enemy = new Sprite({
    position: {
    x: 400,
    y: 100
    },
    velocity: {
    x: 0,
    y: 0
    }
})

enemy.draw()

console.log(player);

//이게 맞나?
const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    },
    up: {
        pressed: false
    }
}

let isGround = false;
let doubleJump = false;
let jumpCount = 2;

let disxPtE, disyPtE;

function animate(){
    window.requestAnimationFrame(animate)
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.update()
    enemy.update()

    player.velocity.x = 0
    enemy.velocity.x = 0
    
    //이런 느낌이긴 한데~ 음음음음
    disxPtE = player.position.x - enemy.position.x
    disyPtE = player.position.y - enemy.position.y

    if(disxPtE > -300 && disxPtE < 0){
        enemy.velocity.x = -1
        if(disyPtE < -100){
           enemy.velocity.y = -10
    }
    } else if (disxPtE < 300 && disxPtE > 0){
        enemy.velocity.x = 1
        if(disyPtE < -100){
           enemy.velocity.y = -5
    }
    }


    if(keys.right.pressed && player.lastkey === 'ArrowRight'){
        player.velocity.x = 10
    } else if (keys.left.pressed && player.lastkey === 'ArrowLeft'){
        player.velocity.x = -10
    } /*else if (keys.up.pressed && player.lastkey === 'ArrowUp'){
        player.velocity.y = -10
    } */

    /*
    if(player.velocity.y == 0){
        isGround = true;
    } else {
        isGround = false;
    }

    if(isGround){
        doubleJump = true;
    }

    if(isGround && keys.up.pressed){
        player.velocity.y = -20
    } else if(doubleJump && keys.up.pressed){
        player.velocity.y = -20
        doubleJump = false;
    }
    */

    //더블점프 할거야
    if(player.velocity.y == 0){
        isGround = true;
    } else {
        isGround = false;
    }
    if(isGround){
        jumpCount = 2;
    }

/*
    if(keys.up.pressed && player.position.y > 426){
        player.velocity.y = -20
    }
*/
}

animate()

window.addEventListener('keydown', (event) => {
    switch(event.key){
        case 'ArrowRight':
            keys.right.pressed = true
            player.lastkey = 'ArrowRight'
            break
        case 'ArrowLeft':
            keys.left.pressed = true
            player.lastkey = 'ArrowLeft'
            break
        case 'ArrowUp':
        if(jumpCount > 0){
                player.velocity.y = -15
                jumpCount--;
        }
            keys.up.pressed = true
            //player.lastkey = 'ArrowUp'
            break
    }
    
})

window.addEventListener('keyup', (event) => {
    switch(event.key){
        case 'ArrowRight':
            keys.right.pressed = false
            break
        case 'ArrowLeft':
            keys.left.pressed = false
            break
        case 'ArrowUp':
            keys.up.pressed = false
            break
    }
})