function playSoundy(e) {
  
  
 // const audio = e.keyCode;
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
   console.log('audio '+audio);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    console.log('key '+key);
    if (!audio) return;
    
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
    }

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    
window.addEventListener('keydown', playSoundy);
window.addEventListener('onclick', playSoundy);

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
    }

    function sayHello() {
        console.log("Hello there !!");
      }

     
     
      function playSound() {
        console.log(' iji')
    
      
     // const audio = e.keyCode;
        const audio = document.querySelector(`audio[data-key]`);
       console.log('audio '+audio);
        const key = document.querySelector(`div[data-key]`);
        console.log('key '+key);
        if (!audio) return;
        
        key.classList.add('playing');
        audio.currentTime = 0;
        audio.play();
        }