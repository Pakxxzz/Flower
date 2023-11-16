window.onload = function() {
  var audioPreference = localStorage.getItem('audioPreference');
  if (audioPreference === 'play') {
   var audio = document.getElementById('myAudio');
   if (audio) {
    audio.play();
   }
   localStorage.removeItem('audioPreference');
}
}
onload = () =>{
        document.body.classList.remove("container");
};

