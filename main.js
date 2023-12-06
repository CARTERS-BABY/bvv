var video = ''
var status = ''
function preload(){


}

function setup(){
 canvas = createCanvas(630 , 360) 
    canvas.center()
    video = createCapture(VIDEO)

  // video.center()
   //video.position(340 , 230)
   video.hide()

}

function draw(){
image(video , 0 , 0 , 630 , 360)
}
function start(){
    objectdetctor = ml5.objectDetector('cocossd' , modeloaded)
    document.getElementById('status').innerHTML = 'status : detectando objetos'

}
function modeloaded(){
console.log('model')
status = true 
video.loop()
video.speed(1)
video.volume(0)
}


