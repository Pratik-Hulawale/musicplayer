// const music=document.getElementsByClassName('player')

// function myFunction(){
//     alert("clear");
//     console.log("hello")
// }

// function Forward(){
//     alert("forward")
//     music.play();
// }

var play=document.getElementById('play')
var myMusic= document.getElementById("music");
// var isplay=true
// let mlist=[
//     {
//         name:HAZY Day
//         artist: A.M.
//         path: ./music/music-1.mp3
//     }
// ]


play.addEventListener('click',()=>{
    myMusic.play();
    play.innerHTML = '<button><i class="fa fa-pause-circle fa-3x"></i></button>';

})

// var list=document.querySelectorAll('player');
// var myMusic= document.getElementById("music");
// function play() {
// myMusic.play();
// }


// function Forward(){

// }