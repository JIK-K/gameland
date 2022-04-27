const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

c.fillRect(0, 0, canvas.width, canvas.height)

const gravity = 0.2

class Sprite{
    constructor({position, velocity}){
        this.position = position
        this.velocity = velocity
        this.height = 150
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
let lastkey

function animate(){
    window.requestAnimationFrame(animate)
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.update()
    enemy.update()

    player.velocity.x = 0
    
    if(keys.right.pressed && lastkey === 'ArrowRight'){
        player.velocity.x = 1
    } else if (keys.left.pressed && lastkey === 'ArrowLeft'){
        player.velocity.x = -1
    } else if (keys.up.pressed && lastkey === 'ArrowUp'){
        player.velocity.y = -5
    }
}

animate()

window.addEventListener('keydown', (event) => {
    switch(event.key){
        case 'ArrowRight':
            keys.right.pressed = true
            lastkey = 'ArrowRight'
            break
        case 'ArrowLeft':
            keys.left.pressed = true
            lastkey = 'ArrowLeft'
            break
        case 'ArrowUp':
            keys.up.pressed = true
            lastkey = 'ArrowUp'
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
    }
})