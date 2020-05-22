
$(".album-poster").on("click",function(){
  var dataSwitchId=$(this).attr("data-switch");
  //console.log(dataSwitchId);
   
  ap.list.switch(dataSwitchId);
  
  ap.play();
  $("#aplayer").addClass("showPlayer");
});


const ap = new APlayer({
  container: document.getElementById('aplayer'),
 listFolded:true,
  audio: [{ 
      name: 'Bekhayali',
      artist: 'Arjit Singh',
      url: 'Bekhayali.mp3',
      cover: 'Bekhayali.jpg'
  },{ 
    name: 'Dil Hi Toh Hai',
    artist: 'Arjit Singh',
    url: 'Dil Hi Toh Hai.mp3',
    cover: 'Dil Hi Toh Hai.jpg'
},
{ 
  name: 'Sanam Re',
  artist:'Arjit Singh',
  url: 'Sanam Re.mp3',
  cover: 'Sanam Re.jpg'
},
{ 
  name: 'Khairiyat',
  artist: 'Arjit Singh',
  url: 'Khairiyat.mp3',
  cover: 'Khairiyat.jpg'
},
{ 
  name: 'Phir Le Aaya Dil',
  artist: 'Arjit Simgh',
  url: 'Phir Le Aya Dil.mp3',
  cover: 'arjit.jpg'
},
{ 
  name: 'Pal',
  artist: 'Arjit Simgh',
  url: 'Pal.mp3',
  cover: 'arjit.jpg'
},
{ 
  name: 'Sooraj Dooba Hai Aaj',
  artist: 'Arjit Simgh',
  url: 'Sooraj Dooba Hai Aaj.mp3',
  cover: 'arjit.jpg'
},
{ 
  name: 'Sukoon Mila',
  artist: 'Arjit Simgh',
  url: 'Sukoon Mila.mp3',
  cover: 'arjit.jpg'
},
{ 
  name: 'Tera Hoke Rahoon',
  artist: 'Arjit Simgh',
  url: 'Tera Hoke Rahoon.mp3',
  cover: 'arjit.jpg'
},
{ 
  name: 'Tu Hi Hai Aashiqui',
  artist: 'Arjit Simgh',
  url: 'Tu Hi Hai Aashiqui.mp3',
  cover: 'arjit.jpg'
},
{ 
  name: 'Tum Hi Ho',
  artist: 'Arjit Simgh',
  url: 'Tum Hi Ho.mp3',
  cover: 'arjit.jpg'
},
{ 
  name: 'Tum Saath Ho',
  artist: 'Arjit Simgh',
  url: 'Tum Saath Ho.mp3',
  cover: 'arjit.jpg'
},
{ 
  name: 'Darkhaast',
  artist: 'Arjit Simgh',
  url: 'Darkhaast.mp3',
  cover: 'arjit.jpg'
},
{ 
  name: 'Laal Ishq',
  artist: 'Arjit Simgh',
  url: 'Laal Ishq.mp3',
  cover: 'Laal Ishq.jpg'
},
{ 
  name: 'Ilahi',
  artist: 'Arjit Simgh',
  url: 'Ilahi.mp3',
  cover: 'arjit.jpg'
},
{ 
  name: 'Ik Vaari ya',
  artist: 'Arjit Simgh',
  url: 'Ik Vaari ya.mp3',
  cover: 'arjit.jpg'
},
{ 
  name: 'Hawayein',
  artist: 'Arjit Simgh',
  url: 'Hawayein.mp3',
  cover: 'arjit.jpg'
},
{ 
  name: 'Dhokha Dhadi',
  artist: 'Arjit Simgh',
  url: 'Dhokha Dhadi.mp3',
  cover: 'arjit.jpg'
},
{ 
  name: 'Mast Magan',
  artist: 'Arjit Simgh',
  url: 'Mast Magan.mp3',
  cover: 'Mast Magan.jpg'
},
{ 
  name: 'Meet',
  artist: 'Arjit Simgh',
  url: 'Meet.mp3',
  cover: 'Meet.jpg'
},
{ 
  name: 'Tu Mila Toh Haina',
  artist: 'Arjit Simgh',
  url: 'Tu Mila Toh Haina.mp3',
  cover: 'Tu Mila Toh Haina.jpg'
},
{ 
  name: ' ',
  artist: 'Arjit Simgh',
  url: 'Tujhe Kitna Chahne Lage.mp3',
  cover: 'Tujhe Kitna Chahne Lage.jpg'
},
]
});
let search=document.getElementById("searchTxt");
search.addEventListener("input",function(){
    let inputVal=search.value;
    console.log("input event fired!",inputVal);
    let songCards=document.getElementsByClassName("songCard");
    Array.from(songCards).forEach(function(element){
        let songTxt=element.getElementsByTagName("h4")[0].innerText;
      
            if(songTxt.includes(inputVal)){
                element.style.display="block";
            }
            else{
                element.style.display="none";
            }
    })
    
})

