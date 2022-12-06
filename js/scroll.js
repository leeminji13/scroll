const boxWidth = document.getElementById('box1').clientWidth;
let boxhalf = (boxWidth / 2);
console.log(boxWidth)
console.log(boxhalf)

window.addEventListener("wheel",function(e){
    if (e.deltaY > 0) {
        window.scrollBy({left:400, top:0, behavior: 'smooth'})
      } else {
        window.scrollBy({left:-400, top:0, behavior: 'smooth'})
      }
    // if (e.deltaY > 0) {
    //     window.scrollBy({left:boxhalf, top:0, behavior: 'smooth'})
    //   } else {
    //     window.scrollBy({left:-boxhalf, top:0, behavior: 'smooth'})
    //   }
})