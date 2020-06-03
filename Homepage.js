
var images = [
  "music.jpg","diary.jpg","news.jpg"
];
var slideText= [
    "Let the Melody Go Into Your Soul", "Note and Review Your To Do List" , "Voice Controlled News Section"
]
var i=0;
function slides (){
document.getElementById("slideimage").src= images[i];
if(i<(images.length-1)){
    i++;
}
else{
  i=0;  
}
}
setInterval(slides,2000);

var j=0;
function slidetext (){
document.getElementById("slideText").innerText= slideText[j];
if(j<(slideText.length-1)){
    j++;
}
else{
  j=0;  
}
}
setInterval(slidetext,2000);