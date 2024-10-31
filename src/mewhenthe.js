
//The "Ohio" function is for the tab functionallty 
//the b1 size is 900px meant to be open for side images.
//Its gonna take a meracal to finish this even AS. Guess its a lessen for me.

//This runs on load

style.backgroundColor="green";ohio("tablinks","Home");

//The code for #top-top this makes the tabs

function ohio(evt, name) {
var i,tabcontent,tablinks;tabcontent=document.getElementsByClassName("tabcontent")
for(i=0;i<tabcontent.length;i++){tabcontent[i].style.display="none"}
tablinks=document.getElementsByClassName("tablinks");for(i=0;i<tablinks.length;i++){
tablinks[i].className=tablinks[i].className.replace(" active","")}
document.getElementById(name).style.display="block";evt.currentTarget.className+=" active"}
  
 //The code for ordering. (Done't work for some reason I think its a github thing)
 //10/30/24 - I opened the website on my pc and it gives an error about the document. I will look at this later (not)
   
function grands() {
  var d = document.getElementById;
  var x = d("ordered");
  var y = d("yepe");
  if (y.innerHTML != "") {
    x.innerHTML = "<h2>Cool</h2>";
    sleep(2000);
    x.innerHTML = "";
  }
  else {
    x.innerHTML = "<h2>Goofy</h2>";
    sleep(2000);
    x.innerHTML = ""
  }
}

//A function that stops all things happening and waits. [1000 = 1 second]

function sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms))}

//for the funnis

var why = function(){return ""}

//I just lost my dawwwwawwwwg....and my brotha told me how to chase the baAAaaag.