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
      url: 'vishal/Bekhayali.mp3',
      cover: 'vishal/Bekhayali.jpg'
  },{ 
    name: 'Dil Hi TohHai',
    artist: 'Arjit Singh',
    url: 'vishal/Dil_Hi_Toh_Hai.mp3',
    cover: 'vishal/Dil_Hi_Toh_Hai.jpg'
},
{ 
  name: 'Sanam Re',
  artist:'Arjit Singh',
  url: 'vishal/Sanam_Re.mp3',
  cover: 'vishal/Sanam_Re.jpg'
},
{ 
  name: 'Khairiyat',
  artist: 'Arjit Singh',
  url: 'vishal/Khairiyat.mp3',
  cover: 'vishal/Khairiyat.jpg'
},
{ 
  name: 'Phir Le Aaya Dil',
  artist: 'Arjit Singh',
  url: 'vishal/Phir_Le_Aya_Dil.mp3',
  cover: 'vishal/Phir_Le_Aya_Dil.jpg'
},
{ 
  name: 'Pal',
  artist: 'Arjit Singh',
  url: 'vishal/Pal.mp3',
  cover: 'vishal/Pal.jpg'
},
{ 
  name: 'Sooraj Dooba Hai Aaj',
  artist: 'Arjit Singh',
  url: 'vishal/Sooraj_Dooba_Hai_Aaj.mp3',
  cover: 'vishal/Sooraj_Dooba_Hai_Aaj.jpg'
},
{ 
  name: 'Sukoon Mila',
  artist: 'Arjit Singh',
  url: 'vishal/Sukoon_Mila.mp3',
  cover: 'vishal/Sukoon_Mila.jpg'
},
{ 
  name: 'Tera Hoke Rahoon',
  artist: 'Arjit Singh',
  url: 'vishal/Tera_Hoke_Rahoon.mp3',
  cover: 'vishal/Tera_Hoke_Rahoon.jpg'
},
{ 
  name: 'Tu Hi Hai Aashiqui',
  artist: 'Arjit Singh',
  url: 'vishal/Tu_Hi_Hai_Aashiqui.mp3',
  cover: 'vishal/Tu_Hi_Hai_Aashiqui.jpg'
},
{ 
  name: 'Tum Hi Ho',
  artist: 'Arjit Singh',
  url: 'vishal/Tum Hi Ho.mp3',
  cover: 'vishal/arjit.jpg'
},
{ 
  name: 'Tum Saath Ho',
  artist: 'Arjit Singh',
  url: 'vishal/Tum_Saath_Ho.mp3',
  cover: 'vishal/Tum_Saath_Ho.jpg'
},
{ 
  name: 'Darkhaast',
  artist: 'Arjit Singh',
  url: 'vishal/Darkhaast.mp3',
  cover: 'vishal/Darkhaast.jpg'
},
{ 
  name: 'Laal Ishq',
  artist: 'Arjit Singh',
  url: 'vishal/Laal_Ishq.mp3',
  cover: 'vishal/Laal_Ishq.jpg'
},
{ 
  name: 'Ilahi',
  artist: 'Arjit Singh',
  url: 'vishal/Ilahi.mp3',
  cover: 'vishal/Illahi.jpg'
},
{ 
  name: 'Ik Vaari ya',
  artist: 'Arjit Singh',
  url: 'vishal/Ik_Vaari_ya.mp3',
  cover: 'vishal/Ik_Vaari_ya.jpg'
},
{ 
  name: 'Hawayein',
  artist: 'Arjit Singh',
  url: 'vishal/Hawayein.mp3',
  cover: 'vishal/Hawayein.jpg'
},
{ 
  name: 'Dhokha Dhadi',
  artist: 'Arjit Singh',
  url: 'vishal/Dhokha_Dhadi.mp3',
  cover: 'vishal/Dhokha_Dhadi.jpg'
},
{ 
  name: 'Mast Magan',
  artist: 'Arjit Singh',
  url: 'vishal/Mast_Magan.mp3',
  cover: 'vishal/Mast_Magan.jpg'
},
{ 
  name: 'Meet',
  artist: 'Arjit Singh',
  url: 'vishal/Meet.mp3',
  cover: 'vishal/Meet.jpg'
},
{ 
  name: 'Tu Mila Toh Haina',
  artist: 'Arjit Singh',
  url: 'vishal/Tu_Mila_Toh_Haina.mp3',
  cover: 'vishal/Tu_Mila_Toh_Haina.jpg'
},
{ 
  name: ' Tujhe Kitna Chahne Lage',
  artist: 'Arjit Singh',
  url: 'vishal/Tujhe_Kitna_Chahne_Lage.mp3',
  cover: 'vishal/Tujhe_Kitna_Chahne_Lage.jpg'
},
{ 
  name: 'Chahun_Main_Ya_Naa',
  artist: 'Arjit Singh',
  url: 'vishal/chahun_Main_Ya_Naa.mp3',
  cover: 'vishal/chahun_Main_Ya_Na.jpg'
},
{ 
  name: 'Mahi Bolna',
  artist: 'Arjit Singh',
  url: 'vishal/Bolna.mp3',
  cover: 'vishal/Bolna.jpg'
},
{ 
  name: 'Janam Janam',
  artist: 'Arjit Singh',
  url: 'vishal/Janam_Janam.mp3',
  cover: 'vishal/Janam_Janam.jpg'
},
{ 
  name: 'Kabhi Jo Baadal Barse',
  artist: 'Arjit Singh',
  url: 'vishal/Kabhi_Jo_Baadal_Barse.mp3',
  cover: 'vishal/Kabhi_Jo_Baadal_Barse.jpg'
},
{ 
  name: 'Main Phir Bhi Tumko Chahunga',
  artist: 'Arjit Singh',
  url: 'vishal/Main_Phir_Bhi_Tumko_Chahunga.mp3',
  cover: 'vishal/Main_Phir_Bhi_Tumko_Chahunga.jpg'
},
{ 
  name: 'Main Rang Sharbaton Ka',
  artist: 'Arjit Singh',
  url: 'vishal/Main_Rang_Sharbaton_Ka.mp3',
  cover: 'vishal/Main_Rang_Sharbaton_Ka.jpg'
},
{ 
  name: 'Nashe Si Chadh Gayi',
  artist: 'Arjit Singh',
  url: 'vishal/Nashe_Si_Chadh_Gayi.mp3',
  cover: 'vishal/Nashe_Si_Chadh_Gayi.jpg'
},
{ 
  name: 'Milne Hai Mujhse Aayi',
  artist: 'Arjit Singh',
  url: 'vishal/Milne_Hai_Mujhse _Aayi.mp3',
  cover: 'vishal/Milne_Hai_Mujhse _Aayi.jpg'
},

{ 
  name: 'Pachtaoge',
  artist: 'Arjit Singh',
  url: 'vishal/Pachtaoge.mp3',
  cover: 'vishal/Pachtaoge.jpg'
},
{ 
  name: 'Roke Na Ruke Naina',
  artist: 'Arjit Singh',
  url: 'vishal/Roke_Na_Ruke_Naina.mp3',
  cover: 'vishal/Roke_Na_Ruke_Naina.jpg'
},

{ 
  name: 'Tose Naina',
  artist: 'Arjit Singh',
  url: 'vishal/Tose_Naina.mp3',
  cover: 'vishal/Tose_Naina.jpg'
},
{ 
  name: 'GIMA Awards',
  artist: 'Arjit Singh',
  url: 'vishal/GIMA_Awards.mp3',
 cover: 'vishal/GIMA_Awards.jpg'
},

{ 
  name: 'Tose Naina',
  artist: 'Arjit Singh',
  url: 'vishal/Tose_Naina.mp3',
  cover: 'vishal/Tose_Naina.jpg'
},

{ 
  name: 'Tose Naina',
  artist: 'Arjit Singh',
  url: 'vishal/Tose_Naina.mp3',
  cover: 'vishal/Tose_Naina.jpg'
},

{ 
  name: 'Tose Naina',
  artist: 'Arjit Singh',
  url: 'vishal/Tose_Naina.mp3',
  cover: 'vishal/Tose_Naina.jpg'
},

{ 
  name: 'Tose Naina',
  artist: 'Arjit Singh',
  url: 'vishal/Tose_Naina.mp3',
  cover: 'vishal/Tose_Naina.jpg'
},
]
});
let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
  let inputVal = search.value;
  inputVal = inputVal.toLocaleLowerCase();
  console.log("input event fired!", inputVal);
  let songCards = document.getElementsByClassName("songCard");
  Array.from(songCards).forEach(function (element) {
    let songTxt = element.getElementsByTagName("h4")[0].innerText;
    songTxt = songTxt.toLocaleLowerCase();
    if (songTxt.includes(inputVal)) {
      element.style.display = "block";
    }
    else {
      element.style.display = "none";
    }
  })

})

// function changeBodyBg(color){
//   document.body.style.background = color;
// }



// Function to change heading background color
document.getElementById("favIcon").click(function favourite(){
  console.log("added favourites");
    


    if(docsument.getElementById("favIcon").style.color = "whitesmoke")
    {
      document.getElementById("favIcon").style.color = "red";
      console.log("added  1");
    }


});

  



