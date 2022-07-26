var audio = document.querySelector('.audio')

function clik1() {
  
  document.querySelector('.box').style.opacity = "0"
  setTimeout(()=>{
  document.querySelector('.box').style.width = "200px"
  document.querySelector('.box').style.height = "200px"
  document.querySelector('.box').style.marginBottom = "30vh"
  document.querySelector('.box .content span').style.display = "none"
  document.querySelector('.box').style.opacity = "1"
  document.querySelector('#butons').style.display = "block";
  document.querySelector('#butons').style.marginTop = "35vh";
  
  }, 600);
  setTimeout(()=> {
  document.querySelector('.third').style.display = "none"
  audio.play()
  }, 900);
}


function times() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  document.querySelector('.jam h3').innerHTML = h + ":" + m + ":" + s;
  setTimeout(times, 990);
  }

function checkTime(i) {
  if (i < 10) {
    i = "0" + i; 
  } 
  return i;
  } 
