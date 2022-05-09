const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

c.fillRect(0, 0, canvas.width, canvas.height)

const gravity = 0.7

class Sprite{
    constructor({position, velocity, color = 'red', offset}){
        this.position = position
        this.velocity = velocity
        this.height = 150
        this.width = 50
        this.lastkey
        this.attackBox = {
            position: {
                x: this.position.x,
                y: this.position.y
            },
            offset: offset,
            width: 100,
            height: 50,
        }
        this.color = color
        this.isAttacking
    }

    draw(){
        c.fillStyle = this.color
        c.fillRect(this.position.x, this.position.y, this.width, this.height)

        //attackBox
        if(this.isAttacking) {
        c.fillStyle = 'green'
        c.fillRect(
            this.attackBox.position.x, 
            this.attackBox.position.y, 
            this.attackBox.width, 
            this.attackBox.height
            )
        }
    }

    update() {
        this.draw()
        this.attackBox.position.x = this.position.x + this.attackBox.offset.x
        this.attackBox.position.y = this.position.y

        this.position.y += this.velocity.y
        this.position.x += this.velocity.x

        if(this.position.y + this.height + this.velocity.y >= canvas.height){
            this.velocity.y = 0
        } else 
        this.velocity.y += gravity
    }

    attack() {
        this.isAttacking = true
        //이런 문법 어떻게 쓰는건지 아직 잘 모르겠다
        setTimeout(() => {
            this.isAttacking = false
        }, 100)
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
    },
    offset: {
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
    },
    color: 'blue',
    offset: {
        x: -50,
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

function rectangularCollision ({ rectangle1, rectangle2}) {
    return (rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x && 
            rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width &&
            rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y &&
            rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
    )
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

    //detect for collision
    if( rectangularCollision({
        rectangle1: player,
        rectangle2: enemy
    }) &&
        player.isAttacking
    ) {
        player.isAttacking = false
        document.querySelector('#enemyHealth').style.width = '20%'
    }

    if( rectangularCollision({
        rectangle1: enemy,
        rectangle2: player
    }) &&
        enemy.isAttacking
        ) {
        enemy.isAttacking = false
        console.log('enemy attack successful');
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
        case ' ':
            player.attack()
            break
    }
    switch (event.key){
        case 's':
            enemy.attack()
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