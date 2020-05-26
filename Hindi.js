$(".album-poster").on("click", function () {
  var dataSwitchId = $(this).attr("data-switch");
  //console.log(dataSwitchId);

  ap.list.switch(dataSwitchId);

  ap.play();
  $("#aplayer").addClass("showPlayer");
});





const ap = new APlayer({
  container: document.getElementById('aplayer'),
  listFolded: true,
  audio: [{
    name: 'Aankh Mare',
    artist: 'Kumar Sanu, Mika Singh, Neha Kakkar',
    url: 'Hindi songs/Aankh Mare.mp3',
    cover: 'Hindi songs/Aankh Mare.jpg'
  }, {
    name: 'Ae Dil Hai Mushkil',
    artist: 'Arjit Singh',
    url: 'Hindi songs/Ae Dil Hai Mushkil.mp3',
    cover: 'Hindi songs/Ae Dil Hai Mushkil.jpg'
  },
  {
    name: 'All Black',
    artist: 'Raftaar, Sukh-E',
    url: 'Hindi songs/All Black.mp3',
    cover: 'Hindi songs/All Black.jpg'
  },
  {
    name: 'Ankhiyon Se Goli Maare',
    artist: 'Jaspender Narula, Sonu Nigam',
    url: 'Hindi songs/Ankhiyon Se Goli Maare.mp3',
    cover: 'Hindi songs/Ankhiyon Se Goli Maare.jpg'
  },
  {
    name: 'Apna Time Aayega',
    artist: 'Ranveer Singh',
    url: 'Hindi songs/Apna Time Aayega.mp3',
    cover: 'Hindi songs/Apna Time Aayega.jpg'
  },
  {
    name: 'Ban Ja Rani',
    artist: 'Guru Randhawa, Shraddha Vajpayee',
    url: 'Hindi songs/Ban Ja Rani.mp3',
    cover: 'Hindi songs/Ban Ja Rani.jpg'
  },
  {
    name: 'Bekhayali',
    artist: 'Arigit Singh',
    url: 'Hindi songs/Bekhayali.mp3',
    cover: 'Hindi songs/Bekhayali.jpg'
  },
  {
    name: 'Bekhudi',
    artist: 'Aditi Sharma and Darshan Raval',
    url: 'Hindi songs/Bekhudi.mp3',
    cover: 'Hindi songs/Bekhudi.jpg'
  },
  {
    name: 'Bheegi Bheegi',
    artist: 'Neha Kakkar and Tony Kakkar',
    url: 'Hindi songs/Bheegi Bheegi.mp3',
    cover: 'Hindi songs/Bheegi Bheegi.jpg'
  },
  {
    name: 'Bom Diggy Diggy',
    artist: 'Jasmine Walia and Zack Knight',
    url: 'Hindi songs/Bom Diggy Diggy.mp3',
    cover: 'Hindi songs/Bom Diggy Diggy.jpg'
  },
  {
    name: 'Breathless',
    artist: 'Shankar Mahadevan',
    url: 'Hindi songs/Breathless.mp3',
    cover: 'Hindi songs/Breathless.jpg'
  },
  {
    name: 'Chal Bombay',
    artist: 'Divine',
    url: 'Hindi songs/Chal Bombay.mp3',
    cover: 'Hindi songs/Chal Bombay.jpg'
  },
  {
    name: 'Cheez Badi',
    artist: 'Neha Kakkar',
    url: 'Hindi songs/Cheez Badi.mp3',
    cover: 'Hindi songs/Cheez Badi.jpg'
  },
  {
    name: 'Coca Cola',
    artist: 'Tony Kakkar',
    url: 'Hindi songs/Coca Cola.mp3',
    cover: 'Hindi songs/Coca Cola.jpg'
  },
  {
    name: 'Daddy Mummy',
    artist: 'Devi Sri Prasad and M.M.Manasi',
    url: 'Hindi songs/Daddy Mummy.mp3',
    cover: 'Hindi songs/Daddy Mummy.jpg'
  },
  {
    name: 'Das Bahane 2.0',
    artist: 'Vishal-Shekhar',
    url: 'Hindi songs/Das Bahane 2.0.mp3',
    cover: 'Hindi songs/Das Bahane 2.0.jpg'
  },
  {
    name: 'Deewani Mastani',
    artist: 'Shreya Ghoshal',
    url: 'Hindi songs/Deewani Mastani.mp3',
    cover: 'Hindi songs/Deewani Mastani.jpg'
  },
  {
    name: 'Dilbar',
    artist: 'Dhvani Bhanushali, Ikka Singh and Neha Kakkar',
    url: 'Hindi songs/Dilbar.mp3',
    cover: 'Hindi songs/Dilbar.jpg'
  },
  {
    name: 'Dil abhi bhara nhi',
    artist: 'Jaspinder Narula and Shankar Mahadevan',
    url: 'Hindi songs/Dil abhi bhara nhi.mp3',
    cover: 'Hindi songs/Dil abhi bhara nhi.jpg'
  },
  {
    name: 'Dil Hi Toh Hai',
    artist: 'Antara Mitra and Arijit Singh',
    url: 'Hindi songs/Dil Hi Toh Hai.mp3',
    cover: 'Hindi songs/Dil Hi Toh Hai.jpg'
  },
  {
    name: 'FIRSE MACHAYENGE',
    artist: 'EMIWAY BANTAI',
    url: 'Hindi songs/FIRSE MACHAYENGE.mp3',
    cover: 'Hindi songs/FIRSE MACHAYENGE.jpg'
  },
  {
    name: 'Gali Gali.jpg',
    artist: 'Neha Kakkar',
    url: 'Hindi songs/Gali Gali.mp3',
    cover: 'Hindi songs/Gali Gali.jpg'
  },
  {
    name: 'Garmi Song',
    artist: 'Badshah and Neah Kakkar',
    url: 'Hindi songs/Garmi Song.mp3',
    cover: 'Hindi songs/Garmi Song.jpg'
  },
  {
    name: 'Ghammand Kar',
    artist: 'Parampara Thakur and Sachet Tandon',
    url: 'Hindi songs/Ghammand Kar.mp3',
    cover: 'Hindi songs/Ghammand Kar.jpg'
  },
  {
    name: 'Ghunghroo',
    artist: 'Arijit Singh',
    url: 'Hindi songs/Ghunghroo.mp3',
    cover: 'Hindi songs/Ghunghroo.jpg'
  },
  {
    name: 'High Rated',
    artist: 'Gururandhawa',
    url: 'Hindi songs/High Rated.mp3',
    cover: 'Hindi songs/High Rated.jpg'
  },
  {
    name: 'Ik Mulakat',
    artist: 'Altamash Faridi, Palak Muchhal and Meet Bros',
    url: 'Hindi songs/Ik Mulakat.mp3',
    cover: 'Hindi songs/Ik Mulakat.jpg'
  },
  {
    name: 'Illegal Weapon 2.0',
    artist: 'Garry Sandhu and Jasmine Sandias',
    url: 'Hindi songs/Illegal Weapon 2.0 .mp3',
    cover: 'Hindi songs/Illegal Weapon 2.0 .jpg'
  },
  {
    name: 'Ishare Tere',
    artist: 'Gururandhawa and Dhvani Bhanushali',
    url: 'Hindi songs/Ishare Tere.mp3',
    cover: 'Hindi songs/Ishare Tere.jpg'
  },
  {
    name: 'Jo Bheji Thi Duaa',
    artist: 'Arijit Singh',
    url: 'Hindi songs/Jo Bheji Thi Duaa.mp3',
    cover: 'Hindi songs/Jo Bheji Thi Duaa.jpg'
  },
  {
    name: 'Kabhi Jo Badal Barse',
    artist: 'Arijit Singh',
    url: 'Hindi songs/Kabhi Jo Badal Barse.mp3',
    cover: 'Hindi songs/Kabhi Jo Badal Barse.jpg'
  },
  {
    name: 'Kamariya',
    artist: 'Aastha Gill, Divya Kumar and Sachin Sanghvi',
    url: 'Hindi songs/Kamariya.mp3',
    cover: 'Hindi songs/Kamariya.jpg'
  }
  ]
});

let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
  let inputVal = search.value;
  inputVal=inputVal.toLocaleLowerCase();
  console.log("input event fired!", inputVal);
  let songCards = document.getElementsByClassName("songCard");
  Array.from(songCards).forEach(function (element) {
    let songTxt = element.getElementsByTagName("h4")[0].innerText;
    songTxt=songTxt.toLocaleLowerCase();
    if (songTxt.includes(inputVal)) {
      element.style.display = "block";
    }
    else {
      element.style.display = "none";
    }
  })

})