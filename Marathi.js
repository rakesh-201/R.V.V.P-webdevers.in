
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
    name: 'A Savita Aga Savita',
    artist: '',
    url: 'A Savita Aga Savita.mp3',
    cover: 'A Savita Aga Savita.jpg'
},
{ 
    name: 'Aai Tujha deul.jpg',
    artist: '',
    url: 'Aai Tujha deul.mp3',
    cover: 'Aai Tujha deul.jpg'
},
{ 
    name: 'Aamdar Zalya Sarkha Vatatay',
    artist: '',
    url: 'Aamdar Zalya Sarkha Vatatay.mp3',
    cover: 'Aamdar Zalya Sarkha Vatatay.jpg'
},
{ 
    name: 'Aaple Saheb Thackrey',
    artist: '',
    url: 'Aaple Saheb Thackrey.mp3',
    cover: 'Aaple Saheb Thackrey.jpg'
},
{ 
  name: 'Aatach Baya Ka Baavarla',
  artist:'',
  url: 'Aatach Baya Ka Baavarla.mp3',
  cover: 'Aatach Baya Ka Baavarla.jpg'
},
{ 
  name: 'Aho Mami Tumchi Mulagi Lay Sundar',
  artist:'',
  url: 'Aho Mami Tumchi Mulagi Lay Sundar.mp3',
  cover: 'Aho Mami Tumchi Mulagi Lay Sundar.jpg'
},
{ 
  name: 'Apsara Aali',
  artist:'Sonalee Kulkarni and Ajay-Atul',
  url: 'Apsara Aali.mp3',
  cover: 'Apsara Aali.jpg'
},
{ 
  name: 'Bablya Ekas Kesavar Fuge',
  artist: '',
  url: 'Bablya Ekas Kesavar Fuge.mp3',
  cover: 'Bablya Ekas Kesavar Fuge.jpg'
},
{ 
  name: 'Bhau - Shambu',
  artist: 'Shambu',
  url: 'Bhau - Shambu.mp3',
  cover: 'Bhau - Shambu.jpg'
},
{ 
  name: 'Fandry Song',
  artist: 'Ajay-Atul',
  url: 'Fandry Song.mp3',
  cover: 'Fandry Song.jpg'
},
{ 
  name: 'Gondhal',
  artist: 'Ajay-Atul',
  url: 'Gondhal.mp3',
  cover: 'Gondhal.jpg'
},
{ 
  name: 'Govyachya Kinaryav',
  artist: '',
  url: 'Govyachya Kinaryav.mp3',
  cover: 'Govyachya Kinaryav.jpg'
},
{ 
  name: 'Gulabachi Kali',
  artist: '',
  url: 'Gulabachi Kali.mp3',
  cover: 'Gulabachi Kali.jpg'
},
{ 
  name: 'Halad Lagali',
  artist: '',
  url: 'Halad Lagali.mp3',
  cover: 'Halad Lagali.jpg'
},
{ 
  name: 'Hi Poli Saajuk',
  artist: 'Reshma Sonawane',
  url: 'Hi Poli Saajuk.mp3',
  cover: 'Hi Poli Saajuk.jpg'
},
{ 
  name: 'Ishkkachi Nauka',
  artist: '',
  url: 'Ishkkachi Nauka.mp3',
  cover: 'Ishkkachi Nauka.jpg'
},
{ 
  name: 'Ka Kalena',
  artist: '',
  url: 'Ka Kalena.mp3',
  cover: 'Ka Kalena.jpg'
},
{ 
  name: 'Khel Mandala',
  artist: '',
  url: 'Khel Mandala.mp3',
  cover: 'Khel Mandala.jpg'
},
{ 
  name: 'Koliwada Jhingla',
  artist: '',
  url: 'Koliwada Jhingla.mp3',
  cover: 'Koliwada Jhingla.jpg'
},
{ 
  name: 'Kombadi Palali',
  artist: '',
  url: 'Kombadi Palali.mp3',
  cover: 'Kombadi Palali.jpg'
},
{ 
  name: 'Mala Ved Lagale',
  artist: '',
  url: 'Mala Ved Lagale.mp3',
  cover: 'Mala Ved Lagale.jpg'
},
{ 
  name: 'Mendi Chya panavar',
  artist: '',
  url: 'Mendi Chya panavar.mp3',
  cover: 'Mendi Chya panavar.jpg'
},
{ 
  name: 'O kaka',
  artist: '',
  url: 'O kaka.mp3',
  cover: 'O kaka.jpg'
},
{ 
  name: 'O Raje',
  artist: '',
  url: 'O Raje.mp3',
  cover: 'O Raje.jpg'
},
{ 
  name: 'Pune RAP',
  artist: '',
  url: 'Pune RAP.mp3',
  cover: 'Pune RAP.jpg'
},
{ 
  name: 'Saavar Re Mana',
  artist: '',
  url: 'Saavar Re Mana.mp3',
  cover: 'Saavar Re Mana.jpg'
},
{ 
  name: 'Sairat Zala Ji',
  artist: 'Ajay-Atul',
  url: 'Sairat Zala Ji.mp3',
  cover: 'Sairat Zala Ji.jpg'
},
{ 
  name: 'Shantabia',
  artist: '',
  url: 'Shantabia.mp3',
  cover: 'Shantabia.jpg'
},
{ 
  name: 'Shitti Vajali',
  artist: '',
  url: 'Shitti Vajali.mp3',
  cover: 'Shitti Vajali.jpg'
},
{ 
  name: 'TAN TAN BHAN BHAN',
  artist: 'Shambu',
  url: 'TAN TAN BHAN BHAN.mp3',
  cover: 'TAN TAN BHAN BHAN.jpg'
},
{ 
  name: 'Tola Tola',
  artist: 'Bela Shende and Amitraj',
  url: 'Tola Tola.mp3',
  cover: 'Tola Tola.jpg'
},
{ 
  name: 'Tu Chal Re Mana',
  artist: 'Virat M and Mahesh M',
  url: 'Tu Chal Re Mana.mp3',
  cover: 'Tu Chal Re Mana.jpg'
},
{ 
  name: 'Wajle Ki Bara',
  artist: 'Amrita Khanvelkar and Ajay-Atul',
  url: 'Wajle Ki Bara.mp3',
  cover: 'Wajle Ki Bara.jpg'
},
{ 
  name: 'Yad Lagla',
  artist: 'Ajay-Atul',
  url: 'Yad Lagla.mp3',
  cover: 'Yad Lagla.jpg'
},
{ 
  name: 'Zingat',
  artist: 'Ajay-Atul',
  url: 'Zingat.mp3',
  cover: 'Zingat.jpg'
}
]
});
