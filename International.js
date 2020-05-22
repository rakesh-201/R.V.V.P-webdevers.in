
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
      name: 'Animal Trance',
      artist: '',
      url: 'Animal Trance.mp3',
      cover: 'Animal Trance.jpg'
  },
  { 
    name: 'Baby',
    artist: 'Justin Bieber',
    url: 'Baby.mp3',
    cover: 'Baby.jpg'
},
{ 
  name: 'Be Kind',
  artist: 'Marshallow and Halsey',
  url: 'Be Kind.mp3',
  cover: 'Be Kind.jpg'
},
{ 
  name: 'Despacito',
  artist:'Louis Founsi',
  url: 'Despacito.mp3',
  cover: 'Despacito.jpg'
},
{ 
  name: 'Dont Start Now',
  artist: 'Dua Lipa',
  url: 'Dont Start Now.mp3',
  cover: 'Dont Start Now.jpg'
},
{ 
  name: 'Joker BGM song',
  artist: '',
  url: 'Joker BGM song.mp3',
  cover: 'Joker BGM song.jpg'
},
{ 
  name: 'LM3ALLEM-arabic',
  artist: 'Saad Lamjarred',
  url: 'LM3ALLEM-arabic.mp3',
  cover: 'LM3ALLEM-arabic.jpg'
},
{ 
  name: 'Shape Of You',
  artist: 'Ed Sherran',
  url: 'Shape Of You.mp3',
  cover: 'Shape Of You.jpg'
},
{ 
  name: 'Sick and Tired',
  artist: '',
  url: 'Sick and Tired.mp3',
  cover: 'Sick and Tired.jpg'
},
{ 
  name: 'Yummy',
  artist: 'Justin Bieber',
  url: 'Yummy.mp3',
  cover: 'Yummy.jpg'
}
]
});
