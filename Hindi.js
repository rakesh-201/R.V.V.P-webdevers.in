
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
      name: 'Aankh Mare',
      artist: 'Kumar Sanu, Mika Singh, Neha Kakkar',
      url: 'Aankh Mare.mp3',
      cover: 'Aankh Mare.jpg'
  },{ 
    name: 'Ae Dil Hai Mushkil',
    artist: 'Arjit Singh',
    url: 'Ae Dil Hai Mushkil.mp3',
    cover: 'Ae Dil Hai Mushkil.jpg'
},
{ 
  name: 'All Black',
  artist:'Raftaar, Sukh-E',
  url: 'All Black.mp3',
  cover: 'All Black.jpg'
},
{ 
  name: 'Ankhiyon Se Goli Maare',
  artist: 'Jaspender Narula, Sonu Nigam',
  url: 'Ankhiyon Se Goli Maare.mp3',
  cover: 'Ankhiyon Se Goli Maare.jpg'
},
{ 
  name: 'Apna Time Aayega',
  artist: 'Ranveer Singh',
  url: 'Apna Time Aayega.mp3',
  cover: 'Apna Time Aayega.jpg'
},
{ 
  name: 'Ban Ja Rani',
  artist: 'Guru Randhawa, Shraddha Vajpayee',
  url: 'Ban Ja Rani.mp3',
  cover: 'Ban Ja Rani.jpg'
},
{ 
  name: 'Bekhayali',
  artist: 'Arigit Singh',
  url: 'Bekhayali.mp3',
  cover: 'Bekhayali.jpg'
},
{ 
  name: 'Bekhudi',
  artist: 'Aditi Sharma and Darshan Raval',
  url: 'Bekhudi.mp3',
  cover: 'Bekhudi.jpg'
},
{ 
  name: 'Bheegi Bheegi',
  artist: 'Neha Kakkar and Tony Kakkar',
  url: 'Bheegi Bheegi.mp3',
  cover: 'Bheegi Bheegi.jpg'
},
{ 
  name: 'Bom Diggy Diggy',
  artist: 'Jasmine Walia and Zack Knight',
  url: 'Bom Diggy Diggy.mp3',
  cover: 'Bom Diggy Diggy.jpg'
},
{ 
  name: 'Breathless',
  artist: 'Shankar Mahadevan',
  url: 'Breathless.mp3',
  cover: 'Breathless.jpg'
},
{ 
  name: 'Chal Bombay',
  artist: 'Divine',
  url: 'Chal Bombay.mp3',
  cover: 'Chal Bombay.jpg'
},
{ 
  name: 'Cheez Badi',
  artist: 'Neha Kakkar',
  url: 'Cheez Badi.mp3',
  cover: 'Cheez Badi.jpg'
},
{ 
  name: 'Coca Cola',
  artist: 'Tony Kakkar',
  url: 'Coca Cola.mp3',
  cover: 'Coca Cola.jpg'
},
{ 
  name: 'Daddy Mummy',
  artist: 'Devi Sri Prasad and M.M.Manasi',
  url: 'Daddy Mummy.mp3',
  cover: 'Daddy Mummy.jpg'
},
{ 
  name: 'Das Bahane 2.0',
  artist: 'Vishal-Shekhar',
  url: 'Das Bahane 2.0.mp3',
  cover: 'Das Bahane 2.0.jpg'
},
{ 
  name: 'Deewani Mastani',
  artist: 'Shreya Ghoshal',
  url: 'Deewani Mastani.mp3',
  cover: 'Deewani Mastani.jpg'
},
{ 
  name: 'Dilbar',
  artist: 'Dhvani Bhanushali, Ikka Singh and Neha Kakkar',
  url: 'Dilbar.mp3',
  cover: 'Dilbar.jpg'
},
{ 
  name: 'Dil abhi bhara nhi',
  artist: 'Jaspinder Narula and Shankar Mahadevan',
  url: 'Dil abhi bhara nhi,mp3',
  cover: 'Dil abhi bhara nhi.jpg'
},
{ 
  name: 'Dil Hi Toh Hai',
  artist: 'Antara Mitra and Arijit Singh',
  url: 'Dil Hi Toh Hai.mp3',
  cover: 'Dil Hi Toh Hai.jpg'
},
{ 
  name: 'FIRSE MACHAYENGE',
  artist: 'EMIWAY BANTAI',
  url: 'FIRSE MACHAYENGE.mp3',
  cover: 'FIRSE MACHAYENGE.jpg'
},
{ 
  name: 'Gali Gali.jpg',
  artist: 'Neha Kakkar',
  url: 'Gali Gali.mp3',
  cover: 'Gali Gali.jpg'
},
{ 
  name: 'Garmi Song',
  artist: 'Badshah and Neah Kakkar',
  url: 'Garmi Song.mp3',
  cover: 'Garmi Song.jpg'
},
{ 
  name: 'Ghammand Kar',
  artist: 'Parampara Thakur and Sachet Tandon',
  url: 'Ghammand Kar.mp3',
  cover: 'Ghammand Kar.jpg'
},
{ 
  name: 'Ghunghroo',
  artist: 'Arijit Singh',
  url: 'Ghunghroo.mp3',
  cover: 'Ghunghroo.jpg'
},
{ 
  name: 'High Rated',
  artist: 'Gururandhawa',
  url: 'High Rated.mp3',
  cover: 'High Rated.jpg'
},
{ 
  name: 'Ik Mulakat',
  artist: 'Altamash Faridi, Palak Muchhal and Meet Bros',
  url: 'Ik Mulakat.mp3',
  cover: 'Ik Mulakat.jpg'
},
{ 
  name: 'Illegal Weapon 2.0',
  artist: 'Garry Sandhu and Jasmine Sandias',
  url: 'Illegal Weapon 2.0 .mp3',
  cover: 'Illegal Weapon 2.0 .jpg'
},
{ 
  name: 'Ishare Tere',
  artist: 'Gururandhawa and Dhvani Bhanushali',
  url: 'Ishare Tere.mp3',
  cover: 'Ishare Tere.jpg'
},
{ 
  name: 'Jo Bheji Thi Duaa',
  artist: 'Arijit Singh',
  url: 'Jo Bheji Thi Duaa.mp3',
  cover: 'Jo Bheji Thi Duaa.jpg'
},
{ 
  name: 'Kabhi Jo Badal Barse',
  artist: 'Arijit Singh',
  url: 'Kabhi Jo Badal Barse.mp3',
  cover: 'Kabhi Jo Badal Barse.jpg'
},
{ 
  name: 'Kamariya',
  artist: 'Aastha Gill, Divya Kumar and Sachin Sanghvi',
  url: 'Kamariya.mp3',
  cover: 'Kamariya.jpg'
}
]
});
