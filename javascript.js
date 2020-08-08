document.addEventListener ('DOMContentLoaded', function(){
  

const myPix = [

 /* {

    "species": "cat",
    "image": "img/1.jpg",
    "sound": "sound/cat1.mp3"

  },

  {

    "species": "cat",
    "image": "img/2.jpg",
    "sound": "sound/cat1.mp3"
  },

  {

    "species": "cat",
    "image": "img/3.jpg",
    "sound": "sound/cat1.mp3"
  },

  {

    "species": "cat",
    "image": "img/4.jpg",
    "sound": "sound/cat1.mp3"

  },

  {

    "species": "cat",
    "image": "img/5.jpg",
    "sound": "sound/cat2.mp3"

  },

  {

    "species": "cat",
    "image": "img/6.jpg",
    "sound": "sound/cat2.mp3"
  },

  {

    "species": "cat",
    "image": "img/7.jpg",
    "sound": "sound/cat2.mp3"
  },

  {

    "species": "cat",
    "image": "img/8.jpg",
    "sound": "sound/cat3.mp3"
  },

  {

    "species": "cat",
    "image": "img/9.jpg",
    "sound": "sound/cat3.mp3"
  },

  {

    "species": "cat",
    "image": "img/10.jpg",
    "sound": "sound/cat3.mp3"
  },

  {

    "species": "cat",
    "image": "img/11.jpg",
    "sound": "sound/cat3.mp3"
  },*/

  {

    "species": "cat",
    "image": "img/100.jpg",
    "sound": "sound/cat3.mp3"
  },

  {

    "species": "cat",
    "image": "img/101.jpg",
    "sound": "sound/cat1.mp3"
  },

  {

    "species": "cat",
    "image": "img/102.jpg",
    "sound": "sound/cat2.mp3"
  },

  {

    "species": "cat",
    "image": "img/103.jpg",
    "sound": "sound/cat3.mp3"
  },

  {

    "species": "cat",
    "image": "img/104.jpg",
    "sound": "sound/cat1.mp3"
  },

  {

    "species": "cat",
    "image": "img/105.jpg",
    "sound": "sound/cat2.mp3"
  },

  {

    "species": "cat",
    "image": "img/106.jpg",
    "sound": "sound/cat3.mp3"
  },

  {

    "species": "cat",
    "image": "img/107.jpg",
    "sound": "sound/cat1.mp3"
  },

  {

    "species": "cat",
    "image": "img/108.jpg",
    "sound": "sound/cat2.mp3"
  },

  {

    "species": "cat",
    "image": "img/109.jpg",
    "sound": "sound/cat1.mp3"
  },

  {

    "species": "cat",
    "image": "img/110.jpg",
    "sound": "sound/cat2.mp3"
  },

  {

    "species": "cat",
    "image": "img/111.jpg",
    "sound": "sound/cat3.mp3"
  },

  {

    "species": "cat",
    "image": "img/112.jpg",
    "sound": "sound/cat1.mp3"
  },
  {

    "species": "cat",
    "image": "img/113.jpg",
    "sound": "sound/cat2.mp3"
  },

  {

    "species": "cat",
    "image": "img/114.jpg",
    "sound": "sound/cat3.mp3"
  },

  {

    "species": "cat",
    "image": "img/115.jpg",
    "sound": "sound/cat1.mp3"
  },

  {

    "species": "cat",
    "image": "img/116.jpg",
    "sound": "sound/cat2.mp3"
  },

  {

    "species": "cat",
    "image": "img/117.jpg",
    "sound": "sound/cat3.mp3"
  },

  {

    "species": "cat",
    "image": "img/118.jpg",
    "sound": "sound/cat1.mp3"
  },

  {

    "species": "cat",
    "image": "img/119.jpg",
    "sound": "sound/cat2.mp3"
  },

  {

    "species": "cat",
    "image": "img/120.jpg",
    "sound": "sound/cat3.mp3"
  },
  {

    "species": "cat",
    "image": "img/121.jpg",
    "sound": "sound/cat1.mp3"
  },
  {

    "species": "cat",
    "image": "img/122.jpg",
    "sound": "sound/cat2.mp3"
  },
  {

    "species": "cat",
    "image": "img/123.jpg",
    "sound": "sound/cat3.mp3"
  },

  {

    "species": "cat",
    "image": "img/124.jpg",
    "sound": "sound/cat1.mp3"
  },

  {

    "species": "cat",
    "image": "img/125.jpg",
    "sound": "sound/cat2.mp3"
  },

  {

    "species": "cat",
    "image": "img/126.jpg",
    "sound": "sound/cat3.mp3"
  },


  {

    "species": "cat",
    "image": "img/127.jpg",
    "sound": "sound/cat1.mp3"
  },

  {

    "species": "cat",
    "image": "img/128.jpg",
    "sound": "sound/cat2.mp3"
  },

  {

    "species": "cat",
    "image": "img/129.jpg",
    "sound": "sound/cat3.mp3"
  },

  {

    "species": "cat",
    "image": "img/130.jpg",
    "sound": "sound/cat1.mp3"
  },

  {

    "species": "cat",
    "image": "img/131.jpg",
    "sound": "sound/cat2.mp3"
  },

  {

    "species": "cat",
    "image": "img/132.jpg",
    "sound": "sound/cat3.mp3"
  },

  {

    "species": "cat",
    "image": "img/133.jpg",
    "sound": "sound/cat1.mp3"
  },
  {

    "species": "cat",
    "image": "img/134.jpg",
    "sound": "sound/cat2.mp3"
  },

  {

    "species": "cat",
    "image": "img/135.jpg",
    "sound": "sound/cat3.mp3"
  },

  {

    "species": "cat",
    "image": "img/136.jpg",
    "sound": "sound/cat1.mp3"
  },




 /* {

    "species": "pig",
    "image": "img/31.jpg",
    "sound": "sound/pig1.wav"
  },

  {

    "species": "pig",
    "image": "img/32.jpg",
    "sound": "sound/pig1.wav"
  },

  {

    "species": "pig",
    "image": "img/33.jpg",
    "sound": "sound/pig2.wav"
  },*/

  {

    "species": "pig",
    "image": "img/300.jpg",
    "sound": "sound/pig1.wav"
  },

  {

    "species": "pig",
    "image": "img/301.jpg",
    "sound": "sound/pig2.wav"
  },

  {

    "species": "pig",
    "image": "img/302.jpg",
    "sound": "sound/pig1.wav"
  },

  {

    "species": "pig",
    "image": "img/303.jpg",
    "sound": "sound/pig2.wav"
  },


  {

    "species": "pig",
    "image": "img/304.jpg",
    "sound": "sound/pig2.wav"
  },

  {

    "species": "pig",
    "image": "img/305.jpg",
    "sound": "sound/pig1.wav"
  },

  {

    "species": "pig",
    "image": "img/306.jpg",
    "sound": "sound/pig2.wav"
  },

  {

    "species": "pig",
    "image": "img/307.jpg",
    "sound": "sound/pig1.wav"
  },

  {

    "species": "pig",
    "image": "img/308.jpg",
    "sound": "sound/pig2.wav"
  },

 /* {

    "species": "horse",
    "image": "img/40.jpg",
    "sound": "sound/horse1.mp3"
  },

  {

    "species": "horse",
    "image": "img/41.jpg",
    "sound": "sound/horse1.mp3"
  },

  {

    "species": "horse",
    "image": "img/42.jpg",
    "sound": "sound/horse2.mp3"
  },*/

  {

    "species": "horse",
    "image": "img/400.jpg",
    "sound": "sound/horse2.mp3"
  },

  {

    "species": "horse",
    "image": "img/401.jpg",
    "sound": "sound/horse3.mp3"
  },

  {

    "species": "horse",
    "image": "img/402.jpg",
    "sound": "sound/horse1.mp3"
  },

  {

    "species": "horse",
    "image": "img/403.jpg",
    "sound": "sound/horse2.mp3"
  },
  {

    "species": "horse",
    "image": "img/404.jpg",
    "sound": "sound/horse3.mp3"
  },

  {

    "species": "horse",
    "image": "img/405.jpg",
    "sound": "sound/horse1.mp3"
  },

  {

    "species": "horse",
    "image": "img/406.jpg",
    "sound": "sound/horse2.mp3"
  },

  {

    "species": "horse",
    "image": "img/407.jpg",
    "sound": "sound/horse3.mp3"
  },

  {

    "species": "horse",
    "image": "img/408.jpg",
    "sound": "sound/horse2.mp3"
  },

  {

    "species": "horse",
    "image": "img/409.jpg",
    "sound": "sound/horse3.mp3"
  },


 /* {

    "species": "dog",
    "image": "img/50.jpg",
    "sound": "sound/dog4.wav"
  },

  {

    "species": "dog",
    "image": "img/51.jpg",
    "sound": "sound/dog1.mp3"
  },

  {

    "species": "dog",
    "image": "img/52.jpg",
    "sound": "sound/dog3.wav"
  },

  {

    "species": "dog",
    "image": "img/53.jpg",
    "sound": "sound/dog2.mp3"
  },
  {

    "species": "dog",
    "image": "img/54.jpg",
    "sound": "sound/dog3.wav"
  },

  {

    "species": "dog",
    "image": "img/55.jpg",
    "sound": "sound/dog2.mp3"
  },*/

  {

    "species": "dog",
    "image": "img/500.jpg",
    "sound": "sound/dog4.wav"
  },

  {

    "species": "dog",
    "image": "img/501.jpg",
    "sound": "sound/dog1.mp3"
  },

  
  {

    "species": "dog",
    "image": "img/502.jpg",
    "sound": "sound/dog3.wav"
  },
  {

    "species": "dog",
    "image": "img/503.jpg",
    "sound": "sound/dog1.mp3"
  },

  {

    "species": "dog",
    "image": "img/504.jpg",
    "sound": "sound/dog4.wav"
  },

  {

    "species": "dog",
    "image": "img/505.jpg",
    "sound": "sound/dog3.wav"
  },

  {

    "species": "dog",
    "image": "img/506.jpg",
    "sound": "sound/dog2.mp3"
  },

  {

    "species": "dog",
    "image": "img/507.jpg",
    "sound": "sound/dog3.wav"
  },

  {

    "species": "dog",
    "image": "img/508.jpg",
    "sound": "sound/dog4.wav"
  },

  

  {

    "species": "dog",
    "image": "img/509.jpg",
    "sound": "sound/dog4.wav"
  },

  {

    "species": "dog",
    "image": "img/510.jpg",
    "sound": "sound/dog3.wav"
  },

  {

    "species": "dog",
    "image": "img/511.jpg",
    "sound": "sound/dog1.mp3"
  },

  {

    "species": "dog",
    "image": "img/512.jpg",
    "sound": "sound/dog2.mp3"
  },

  {

    "species": "dog",
    "image": "img/513.jpg",
    "sound": "sound/dog4.wav"
  },

  {

    "species": "dog",
    "image": "img/514.jpg",
    "sound": "sound/dog3.wav"
  },

  {

    "species": "dog",
    "image": "img/515.jpg",
    "sound": "sound/dog3.wav"
  },

  {

    "species": "dog",
    "image": "img/516.jpg",
    "sound": "sound/dog3.wav"
  },

  {

    "species": "dog",
    "image": "img/517.jpg",
    "sound": "sound/dog2.mp3"
  },

  {

    "species": "dog",
    "image": "img/518.jpg",
    "sound": "sound/dog3.wav"
  },

  {

    "species": "dog",
    "image": "img/519.jpg",
    "sound": "sound/dog3.wav"
  },

  {

    "species": "dog",
    "image": "img/520.jpg",
    "sound": "sound/dog3.wav"
  },

  {

    "species": "dog",
    "image": "img/521.jpg",
    "sound": "sound/dog3.wav"
  }




];
//ICON CLICK STARTER
//Icon click sound on/off
document.getElementById("hojtal").addEventListener("click", function (){
  let hoj = document.getElementById ("hojtal");
  let ssound = document.getElementById ("soundAnim");
  let eeffect = document.getElementById ("soundPop");
  
  /*hoj.classList.remove("hojtaler");
  hoj.classList.add("hojtalermut");
  ssound.muted = true;*/
  
  if (ssound.muted == false && eeffect.muted == false){
    ssound.muted = true;
    eeffect.muted = true;

    hoj.classList.remove("hojtaler");
    hoj.classList.add("hojtalermut");
    
    
  }
  
  else {
    ssound.muted = false;
    eeffect.muted = false;
    hoj.classList.add("hojtaler");
    hoj.classList.remove("hojtalermut");
    
  
  }



//return;

})

//ICON CLICK SLUTTER

let catCount = 0;
var animalSound = document.getElementById("soundAnim");

function toggleSoundEffect() {
  animalSound.play();
}


var popEffect = document.getElementById("soundPop");

function toggleSoundEffect2() {
  popEffect.play();
}

var sprinkleEffect = document.getElementById("soundSprinkle");

function toggleSoundEffect3() {
  sprinkleEffect.play();
}

let section = document.createElement('section');
section.classList.add("test0");
output.appendChild(section);







const mixedResults = myPix.sort(() => Math.random() - 0.5);
const endResults = mixedResults.slice(0, 16)
console.log(endResults);
endResults.forEach(spreadIt);










function spreadIt(item) {

  let a1 = document.createElement('article');
  a1.classList.add("test1");
  let e1 = document.createElement('img');
  //let s1 = document.createElement ('audio');
  e1.classList.add("effect1");
  

  setTimeout(imageDelay, 1000);

 

  function imageDelay (){

    e1.src = item.image;
    e1.style.transform = "rotateY(180deg)";
    e1.style.transition = "1s";
    toggleSoundEffect3(item);
    
    

  }

 // --> e1.src = item.image;

  //s1.src = item.sound;
  //s1.id = "soundAnim";
  //s1.classList.add ("soundAnim");

  if (item.species == "cat") {
    catCount++
  };

  console.log(catCount)




  section.appendChild(a1);
  a1.appendChild(e1);
  //a1.appendChild (s1);
  
 



  //Her kommer click events

  document.body.addEventListener("click", event => {

    
    if (event.target == e1) {
      document.getElementById("soundAnim").src = item.sound;
      toggleSoundEffect();
      console.log(item.species);
      console.log(item.sound);

      if (item.species == "cat") {
        catCount--

      }

      event.target.style.transform = "rotateY(360deg)";
      event.target.style.transition = "1s";
      setTimeout(displayDelay, 1000);



      function displayDelay (){

        event.target.style.display = "none";
        toggleSoundEffect2();

      }
      
      
      console.log(catCount);

      if (catCount == 0) {
        activatePopSign ()

        


      }




      return;

    }












  })


}

if (catCount == 0) {
  activatePopSign ()

  


}

function activatePopSign (){

  //document.getElementById("level").innerHTML = "Tillykke! Du har fundet alle kattene!";
  document.getElementById("popUp").style.display = "flex";


  document.getElementById("jaNu").addEventListener("click", event => {
    console.log(event);
    location.reload();
  })

  document.getElementById("nejNu").addEventListener("click", event => {
    document.getElementById("popUp").style.display = "none";
    catCount++;
  })

}


document.getElementById("tak").addEventListener("click", event => {
 let thankyou = document.getElementById("thankspop");
 let thankbutt = document.getElementById("tak");
if (thankyou.style.display == "none"){

  thankyou.style.display="block";
  thankbutt.innerHTML = "Klik igen ...";
}

  else {thankyou.style.display="none";
  thankbutt.innerHTML = "Tak til ..";
  }
})


document.getElementById("startNu").addEventListener("click", event => {
  console.log(event);
  location.reload();
})





})





















