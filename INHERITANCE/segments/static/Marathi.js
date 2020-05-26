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
      url: 'Marathi songs/A Savita Aga Savita.mp3',
      cover: 'Marathi songs/A Savita Aga Savita.jpg'
  },
  { 
      name: 'Aai Tujha deul.jpg',
      artist: '',
      url: 'Marathi songs/Aai Tujha deul.mp3',
      cover: 'Marathi songs/Aai Tujha deul.jpg'
  },
  { 
      name: 'Aamdar Zalya Sarkha Vatatay',
      artist: '',
      url: 'Marathi songs/Aamdar Zalya Sarkha Vatatay.mp3',
      cover: 'Marathi songs/Aamdar Zalya Sarkha Vatatay.jpg'
  },
  { 
      name: 'Aaple Saheb Thackrey',
      artist:'',
      url: 'Marathi songs/Aaple Saheb Thackrey.mp3',
      cover: 'Marathi songs/Aaple Saheb Thackrey.jpg'
  },
  { 
    name: 'Aatach Baya Ka Baavarla',
    artist:'',
    url: 'Marathi songs/Aatach Baya Ka Baavarla.mp3',
    cover: 'Marathi songs/Aatach Baya Ka Baavarla.jpg'
  },
  { 
    name: 'Aho Mami Tumchi Mulagi Lay Sundar',
    artist:'',
    url: 'Marathi songs/Aho Mami Tumchi Mulagi Lay Sundar.mp3',
    cover: 'Marathi songs/Aho Mami Tumchi Mulagi Lay Sundar.jpg'
  },
  { 
    name: 'Apsara Aali',
    artist:'Sonalee Kulkarni and Ajay-Atul',
    url: 'Marathi songs/Apsara Aali.mp3',
    cover: 'Marathi songs/Apsara Aali.jpg'
  },
  { 
    name: 'Bablya Ekas Kesavar Fuge',
    artist: '',
    url: 'Marathi songs/Bablya Ekas Kesavar Fuge.mp3',
    cover: 'Marathi songs/Bablya Ekas Kesavar Fuge.jpg'
  },
  { 
    name: 'Bhau - Shambu',
    artist: 'Shambu',
    url: 'Marathi songs/Bhau - Shambu.mp3',
    cover: 'Marathi songs/Bhau - Shambu.jpg'
  },
  { 
    name: 'Fandry Song',
    artist: 'Ajay-Atul',
    url: 'Marathi songs/Fandry Song.mp3',
    cover: 'Marathi songs/Fandry Song.jpg'
  },
  { 
    name: 'Gondhal',
    artist: 'Ajay-Atul',
    url: 'Marathi songs/Gondhal.mp3',
    cover: 'Marathi songs/Gondhal.jpg'
  },
  { 
    name: 'Govyachya Kinaryav',
    artist: '',
    url: 'Marathi songs/Govyachya Kinaryav.mp3',
    cover: 'Marathi songs/Govyachya Kinaryav.jpg'
  },
  { 
    name: 'Gulabachi Kali',
    artist: '',
    url: 'Marathi songs/Gulabachi Kali.mp3',
    cover: 'Marathi songs/Gulabachi Kali.jpg'
  },
  { 
    name: 'Hi Poli Saajuk',
    artist: 'Reshma Sonawane',
    url: 'Marathi songs/Hi Poli Saajuk.mp3',
    cover: 'Marathi songs/Hi Poli Saajuk.jpg'
  },
  { 
    name: 'Halad Lagali',
    artist: '',
    url: 'Marathi songs/Halad Lagali.mp3',
    cover: 'Marathi songs/Halad Lagali.jpg'
  },
  { 
    name: 'Ishkkachi Nauka',
    artist: '',
    url: 'Marathi songs/Ishkkachi Nauka.mp3',
    cover: 'Marathi songs/Ishkkachi Nauka.jpg'
  },
  { 
    name: 'Ka Kalena',
    artist: '',
    url: 'Marathi songs/Ka Kalena.mp3',
    cover: 'Marathi songs/Ka Kalena.jpg'
  },
  { 
    name: 'Khel Mandala',
    artist: '',
    url: 'Marathi songs/Khel Mandala.mp3',
    cover: 'Marathi songs/Khel Mandala.jpg'
  },
  { 
    name: 'Koliwada Jhingla',
    artist: '',
    url: 'Marathi songs/Koliwada Jhingla.mp3',
    cover: 'Marathi songs/Koliwada Jhingla.jpg'
  },
  { 
    name: 'Kombadi Palali',
    artist: '',
    url: 'Marathi songs/Kombadi Palali.mp3',
    cover: 'Marathi songs/Kombadi Palali.jpg'
  },
  { 
    name: 'Mala Ved Lagale',
    artist: '',
    url: 'Marathi songs/Mala Ved Lagale.mp3',
    cover: 'Marathi songs/Mala Ved Lagale.jpg'
  },
  { 
    name: 'O kaka',
    artist: '',
    url: 'Marathi songs/O kaka.mp3',
    cover: 'Marathi songs/O kaka.jpg'
  },
  { 
    name: 'O Raje',
    artist: '',
    url: 'Marathi songs/O Raje.mp3',
    cover: 'Marathi songs/O Raje.jpg'
  },
  { 
    name: 'Pune RAP',
    artist: '',
    url: 'Marathi songs/Pune RAP.mp3',
    cover: 'Marathi songs/Pune RAP.jpg'
  },
  { 
    name: 'Saavar Re Mana',
    artist: '',
    url: 'Marathi songs/Saavar Re Mana.mp3',
    cover: 'Marathi songs/Saavar Re Mana.jpg'
  },
  { 
    name: 'Sairat Zala Ji',
    artist: 'Ajay-Atul',
    url: 'Marathi songs/Sairat Zala Ji.mp3',
    cover: 'Marathi songs/Sairat Zala Ji.jpg'
  },
  { 
    name: 'Shantabai',
    artist: '',
    url: 'Marathi songs/Shantabia.mp3',
    cover: 'Marathi songs/Shantabia.jpg'
  },
  { 
    name: 'Shitti Vajali',
    artist: '',
    url: 'Marathi songs/Shitti Vajali.mp3',
    cover: 'Marathi songs/Shitti Vajali.jpg'
  },
  { 
    name: 'TAN TAN BHAN BHAN',
    artist: 'Shambu',
    url: 'Marathi songs/TAN TAN BHAN BHAN.mp3',
    cover: 'Marathi songs/TAN TAN BHAN BHAN.jpg'
  },
  { 
    name: 'Tola Tola',
    artist: 'Bela Shende and Amitraj',
    url: 'Marathi songs/Tola Tola.mp3',
    cover: 'Marathi songs/Tola Tola.jpg'
  },
  { 
    name: 'Tu Chal Re Mana',
    artist: 'Virat M and Mahesh M',
    url: 'Marathi songs/Tu Chal Re Mana.mp3',
    cover: 'Marathi songs/Tu Chal Re Mana.jpg'
  },
  { 
    name: 'Wajle Ki Bara',
    artist: 'Amrita Khanvelkar and Ajay-Atul',
    url: 'Marathi songs/Wajle Ki Bara.mp3',
    cover: 'Marathi songs/Wajle Ki Bara.jpg'
  },
  { 
    name: 'Yad Lagla',
    artist: 'Ajay-Atul',
    url: 'Marathi songs/Yad Lagla.mp3',
    cover: 'Marathi songs/Yad Lagla.jpg'
  },
  { 
    name: 'Zingat',
    artist: 'Ajay-Atul',
    url: 'Marathi songs/Zingat.mp3',
    cover: 'Marathi songs/Zingat.jpg'
  }
  ]
  });