var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start111() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function run(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content;
    if (content == "take my selfie"){
    console.log("taking your selfie in 5,4,3,2,1");
    speak();
    }
}
function speak(){
  var anyname=window.speechSynthesis;
  speakit="taking your selfie in 5,4,3,2,1";
  var utterThis = new SpeechSynthesisUtterance(speakit);
  anyname.speak(utterThis);
}
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 900
   });
   camera=document.getElementById("camera");
   