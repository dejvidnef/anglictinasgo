// JavaScript Document
//http://domscripting.com/

  
   


function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

function showSection(id) {
  var divs = document.getElementsByTagName("div");

document.getElementById('content').scrollTop=0;

//SRBD--get title
var placeheader = document.getElementById("sectiontitle");
for (var i=0; i<divs.length; i++ ) {
    if (divs[i].className.indexOf("section") == -1) continue;
    if (divs[i].getAttribute("id") != id) {
      divs[i].style.display = "none";
    } else {
      divs[i].style.display = "block";
	
//create header
var title=divs[i].getElementsByTagName("h2")[0].firstChild.nodeValue;
placeheader.firstChild.nodeValue=title;
divs[i].getElementsByTagName("h2")[0].style.display = "none";
	
    }
  }
}

function prepareInternalnav() {
  if (!document.getElementsByTagName) return false;
  if (!document.getElementById) return false;
  if (!document.getElementById("navigation")) return false;
  var nav = document.getElementById("navigation");
  var links = nav.getElementsByTagName("a");
  for (var i=0; i<links.length; i++ ) {
    var sectionId = links[i].getAttribute("href").split("#")[1];
    if (!document.getElementById(sectionId)) continue;
    document.getElementById(sectionId).style.display = "none";
    links[i].destination = sectionId;
    links[i].onclick = function() {
      showSection(this.destination);
     return false;
    }
  }
//  show intro-SRBD
   var intro=document.getElementById("home");
   intro.style.display = "block";
   intro.getElementsByTagName("h2")[0].style.display = "none";

}

addLoadEvent(prepareInternalnav);

//initial show for Intro
//document.getElementById("home").style.display = "block";
