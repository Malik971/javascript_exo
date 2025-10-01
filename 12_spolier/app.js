// const span = document.querySelectorAll(".chiant");
// const background = document.querySelectorAll("span");

// span.forEach((btn) => {
//   btn.addEventListener("click", (event)=> {
//     if (background == "black") {
//       document.body.style.backgroundColor = 'red';
//     }
//   });
// });

// function() {

//   document.body.style.background = "red";

// }

// function changeBackground(color) {
//   document.span.
// }

// span.addEventListener("click", function () {
//   changeBackground("red");
// });


let spans = document.querySelectorAll('span')

spans.forEach(span => {
  span.addEventListener('click', (e)=>{
    span.classList.toggle('chiant')
    
  })
})

let p_cacher = document.querySelector('.cache')
let btn = document.querySelector("button")



  btn.addEventListener('click', (e)=>{
    console.log('Click');
    p_cacher.classList.toggle('cache')
    
  })