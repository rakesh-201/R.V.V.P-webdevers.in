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
  audio: [
  {
    name: 'Tumne Kisi ki jaan ko',
    artist: 'Mohammad Rafi ',
    url: 'Tumne Kisi Ki Jaan Ko - Shammi Kapoor, Mohammed Rafi, Rajkumar Song ( 256kbps cbr ).mp3',
    cover: 'Tumne kisi.jpg'
  }, 
  {
    name: 'Dil tera deewana hai sanam',
    artist: 'Mohammad Rafi, Lata Mangeshkar',
    url: 'Dil tera deewana hai sanam.mp3',
    cover: 'dil tera (1).jpg'
  },
  {
    name: 'Tumne mujhe dekha',
    artist: 'Mohammad Rafi',
    url: 'TUMNE MUJHE DEKHA , MOVIE   TEESRI MANZIL 1966, SHAMMI KAPOOR ( 256kbps cbr ).mp3',
    cover: 'Tumne mujhe.jpg'
  },
  {
    name: 'Dil abhi bhara nahi',
    artist: 'Mohammad Rafi, Asha Bhosale',
    url: 'Dil abhi bhara nhi.mp3',
    cover: 'dil abhi.png'
  },
  {
    name: 'Hue hai tumpe aashiq hum',
    artist: 'Mohammad Rafi',
    url: 'Hue hain tumpe aashiq hum.mp3',
    cover: 'hue hai.jpg'
  },
  {
    name: 'Keh du tumhe ya chup rahu',
    artist: 'Kishore Kumar, Asha Bhosale',
    url: 'Keh Du Tumhe Ya Chup Rahu - Shashi Kapoor - Deewaar 1975 ( 256kbps cbr ).mp3',
    cover: 'kehdu tumhe.jpg'
  },
  {
    name: 'O mere dil ke chain',
    artist: 'Kishore Kumar',
    url: 'O Mere Dil Ke Chain   Rajesh Khanna, Kishore Kumar, Mere Jeevan Saathi Song ( 256kbps cbr ).mp3',
    cover: 'O mere.jpg'
  },
  {
    name: 'O meri soni meri tamanna',
    artist: 'Kishore Kumar,Asha Bhosale',
    url: 'O Meri Soni Meri Tamanna Kishore w Asha enhanced version 2018 ( 256kbps cbr ).mp3',
    cover: 'Meri soni.png'
  },
  {
    name: 'Tere bina Zindagi se koi',
    artist: 'Kishore Kumar,Lata Mangeshkar',
    url: 'Tere Bina Zindagi Se Koi Shikwa To Nahin _ Lata Mangeshkar, Kishore Kumar _ Aandhi 1975 Songs ( 256kbps cbr ).mp3',
    cover: 'Tere bina.jpg'
  },
  {
    name: 'Neele neele ambar par',
    artist: 'Kishore Kumar',
    url: 'Neele Neele Ambar Par - Male Version Lyric Video - Kalaakaar_Sridevi_Kishore Kumar ( 256kbps cbr ).mp3',
    cover: 'neele neele.jpg'
  },
  {
    name: 'Main tere ishq mein',
    artist: 'Lata Mangeshkar',
    url: 'Mein Tere Ishq Mein - Mumtaz, Lata Mangeshkar, Loafer Song ( 256kbps cbr ).mp3',
    cover: 'mein tere.jfif'
  },
  {
    name: 'Chhoti si umar mein',
    artist:'Lata Mangeshkar',
    url:'Chhoti Si Umar Mein Lag Gaya Rog _ Lata Mangeshkar _ Bairaag 1976 Songs _ Saira Banu, Dilip Kumar ( 256kbps cbr ).mp3',
    cover: 'chhoti si.jfif'
  },
  {
    name: 'Yeh galiyan yeh chaubara',
    artist: 'Lata Mangeshkar',
    url: 'Prem Rog - Yeh Galiyan Yeh Chaubara Yahan Aana Na Dobara  - Lata Mangeshkar ( 128kbps ).mp3',
    cover: 'yeh galiyan.jfif'
  },
  {
    name: 'Pyar Kiya To Darna',
    artist: 'Lata Mangeshkar',
    url: 'Pyar Kiya To Darna (HD) - Bollywood Classic Hits Karaoke Song - Mughal E Azam - Dilip K - Madhubala ( 128kbps ).mp3',
    cover: 'pyar kiya toh.jfif'
  },
  {
    name: 'Milo na tum to',
    artist: 'Lata Mangeshkar',
    url: '01. Milo Na Tum To - Lata Mangeshkar.mp3',
    cover: 'milo na.jfif'
  },
  {
    name: 'Chura Liya Hai Tumne',
    artist: 'Asha Bhosale,Mohammad Rafi',
    url: '_Chura Liya Hai Tumne Jo Dil Ko(PagalWorld.com).mp3',
    cover: 'chura liya.jpg'
  },
  {
    name: 'O mere sona re',
    artist: 'Asha Bhosale,Mohammad Rafi',
    url: '05. O Mere Sona Re Sona Re.mp3',
    cover: 'ohh mere.jpg'
  },
  {
    name: 'Do Lafzon Ki Hai',
    artist: 'Kishore Kumar,Asha Bhosale',
    url: '01. Do Lafzon Ki Hai Dil Ki Kahani.mp3',
    cover: 'do lafzon.jpg'
  },  
  {
    name: 'Isharon isharon mein',
    artist: 'Asha Bhosale,Mohammad Rafi',
    url: '04. Isharon Isharon Mein.mp3',
    cover: 'isharon isharon.jpg'
  },
  {
    name: 'Aayiye Mehrban',
    artist: 'Asha Bhosale',
    url: '05. Aayiye Mehrban Baithiye.mp3',
    cover: 'aaiye meharbaan.jpg'
  }
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
