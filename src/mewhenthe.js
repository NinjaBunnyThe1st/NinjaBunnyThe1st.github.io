
//The "Ohio" function is for the tab functionallty 
//the b1 size is 900px meant to be open for side images.




function ohio(evt, name) {
  var i, tabcontent, tablinks; tabcontent = document.getElementsByClassName("tabcontent")
    for(i=0;i<tabcontent.length;i++){tabcontent[i].style.display="none"}
    tablinks=document.getElementsByClassName("tablinks");for(i=0;i<tablinks.length;i++){
      tablinks[i].className=tablinks[i].className.replace(" active","")}
   document.getElementById(name).style.display="block";evt.currentTarget.className+=" active"}
    ohio("tablinks", "Home");
     
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
    x.innerHTML = "";
  }
}
function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)) }
