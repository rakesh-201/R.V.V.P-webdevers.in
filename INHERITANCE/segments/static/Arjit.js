
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
    name: 'Dil_Hi_Toh_Hai',
    artist: 'Arjit Singh',
    url: 'Dil_Hi_Toh_Hai.mp3',
    cover: 'Dil_Hi_Toh_Hai.jpg'
},
{ 
  name: 'Sanam Re',
  artist:'Arjit Singh',
  url: 'Sanam_Re.mp3',
  cover: 'Sanam_Re.jpg'
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
  url: 'Phir_Le_Aya_Dil.mp3',
  cover: 'Phir_Le_Aya_Dil.jpg'
},
{ 
  name: 'Pal',
  artist: 'Arjit Simgh',
  url: 'Pal.mp3',
  cover: 'Pal.jpg'
},
{ 
  name: 'Sooraj Dooba Hai Aaj',
  artist: 'Arjit Simgh',
  url: 'Sooraj_Dooba_Hai_Aaj.mp3',
  cover: 'Sooraj_Dooba_Hai_Aaj.jpg'
},
{ 
  name: 'Sukoon Mila',
  artist: 'Arjit Simgh',
  url: 'Sukoon_Mila.mp3',
  cover: 'Sukoon_Mila.jpg'
},
{ 
  name: 'Tera Hoke Rahoon',
  artist: 'Arjit Simgh',
  url: 'Tera_Hoke_Rahoon.mp3',
  cover: 'Tera_Hoke_Rahoon.jpg'
},
{ 
  name: 'Tu Hi Hai Aashiqui',
  artist: 'Arjit Simgh',
  url: 'Tu_Hi_Hai_Aashiqui.mp3',
  cover: 'Tu_Hi_Hai_Aashiqui.jpg'
},
{ 
  name: 'Tum Hi Ho',
  artist: 'Arjit Simgh',
  url: 'Tum_Hi_Ho.mp3',
  cover: 'Tum_Hi_Ho.jpg'
},
{ 
  name: 'Tum Saath Ho',
  artist: 'Arjit Simgh',
  url: 'Tum_Saath_Ho.mp3',
  cover: 'Tum_Saath_Ho.jpg'
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
  url: 'Laal_Ishq.mp3',
  cover: 'Laal_Ishq.jpg'
},
{ 
  name: 'Ilahi',
  artist: 'Arjit Simgh',
  url: 'Ilahi.mp3',
  cover: 'Ilahi'.jpg'
},
{ 
  name: 'Ik Vaari ya',
  artist: 'Arjit Simgh',
  url: 'Ik_Vaari_ya.mp3',
  cover: 'Ik_Vaari_ya.jpg'
},
{ 
  name: 'Hawayein',
  artist: 'Arjit Simgh',
  url: 'Hawayein.mp3',
  cover: 'Hawayein.jpg'
},
{ 
  name: 'Dhokha Dhadi',
  artist: 'Arjit Simgh',
  url: 'Dhokha_Dhadi.mp3',
  cover: 'Dhokha_Dhadi.jpg'
},
{ 
  name: 'Mast Magan',
  artist: 'Arjit Simgh',
  url: 'Mast_Magan.mp3',
  cover: 'Mast_Magan.jpg'
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
  url: 'Tu_Mila_Toh_Haina.mp3',
  cover: 'Tu_Mila_Toh_Haina.jpg'
},
{ 
  name: ' Tujhe Kitna Chahne Lage',
  artist: 'Arjit Simgh',
  url: 'Tujhe_Kitna_Chahne_Lage.mp3',
  cover: 'Tujhe_Kitna_Chahne_Lage.jpg'
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

