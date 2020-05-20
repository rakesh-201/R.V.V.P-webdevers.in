
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
  name: 'Song name',
  artist: 'artist',
  url: 'Khairiyat.mp3',
  cover: 'arjit.jpg'
},
{ 
  name: 'Song name',
  artist: 'artist',
  url: 'Khairiyat.mp3',
  cover: 'arjit.jpg'
}
]
});
