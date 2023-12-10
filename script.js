let player = new Image()
let spike = new Image()
let background = new Image()

player.src = './photo/ab67616d00001e02b142f3e646a5bdddbed5cd6c.jpg'
spike.src = './photo/geometry_dash_spike_by_pastilias2011_dfixr6b-fullview.png'
background.src = './photo/86yagye25g841.png'

let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 512

background.offsetHeight = window.innerWidth

let xPos = canvas.width / 5
let yPos = canvas.height / 1.3
let gravity = 7
let velY = yPos
let bgX = 0 
let jumpState = false

setInterval(()  =>{
    ctx.drawImage(background ,  bgX , 0, 1024, 512)
    ctx.drawImage(background ,1024 +  bgX , 0, 1024, 512)
    ctx.drawImage(player, xPos,yPos, 50 , 50 )
    
  
    bgX -= 4

    if(bgX <= -1024){
        bgX = 0
    }

    if(jumpState){
velY-= gravity
yPos = velY
if(yPos <= canvas.height - 200){
    jumpState = false
}
    }else if (yPos >= canvas.height - 50){
    }else {velY += gravity
        yPos =velY
    }
    }, 33 )




canvas.addEventListener('click' , () =>{
    if( yPos >= canvas.height - 50){
        jumpState = true
    }
 
})




