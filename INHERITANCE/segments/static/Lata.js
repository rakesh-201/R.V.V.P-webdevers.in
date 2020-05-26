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
        name: 'Main tere ishq mein',
        artist: 'Lata Mangeshkar',
        url: 'Lata songs/Main tere.mp3',
        cover: 'Lata songs/Main tere.jfif'
    },
    {
        name: 'Yeh galiyan yeh chaubara',
        artist: 'Lata Mangeshkar',
        url: 'Lata songs/Yeh galiyaan.mp3',
        cover: 'Lata songs/Yeh galiyaan.jfif'
    },
    {
        name: 'Pyar Kiya To Darna',
        artist: 'Lata Mangeshkar',
        url: 'Lata songs/Pyar kiya.mp3',
        cover: 'Lata songs/Pyar kiya.jfif'
    },
    {
      name: 'Aaj phir jeene ki',
      artist: 'Lata Mangeshkar',
      url: 'Lata songs/Aaj phir.mp3',
      cover: 'Lata songs/Aaj phir.jpg'
    },
    {
        name: 'Kitna pyara wada',
        artist: 'Lata Mangeshkar, Mohammad Rafi',
        url:'MdRafi Songs/Kitna Pyara.mp3',
        cover: 'MdRafi Songs/Kitna pyara.jpg'
    },
    {
      name: 'Rangeela re',
      artist: 'Lata Mangeshkar',
      url:'Lata songs/Rangeela re.mp3',
      cover: 'Lata Songs/Rangeela re.jpg'
    },
    {
        name: 'Chhoti si umar mein',
        artist:'Lata Mangeshkar',
        url:'Lata songs/Chhoti si.mp3',
        cover: 'Lata songs/Chhoti si.jfif'
    },
    {
        name: 'Milo na tum to',
        artist: 'Lata Mangeshkar',
        url: 'Lata songs/Milo na.mp3',
        cover: 'Lata songs/Milo na.jfif'
    },
    {
        name: 'Itna toh yaad hai mujhe',
        artist: 'Lata Mangeshkar, Mohammad Rafi',
        url:'MdRafi Songs/Itna to.mp3',
        cover: 'MdRafi Songs/Itna to.jpg'
    },
    {
      name: 'Bekhudi mein sanam',
      artist: 'Lata Mangeshkar, Mohammad Rafi ',
      url: 'Lata songs/Bekhudi mein.mp3',
      cover: 'Lata songs/Bekhudi mein.jpg'
    },
    {
        name: 'Tere bina Zindagi se koi',
        artist: 'Lata Mangeshkar, Kishore Kumar',
        url: 'Kishore songs/Tere bina.mp3',
        cover: 'Kishore songs/Tere bina.jpg'
    }, 
    {
        name: 'Patta patta boota boota',
        artist: 'Lata Mangeshkar, Mohammad Rafi',
        url:'MdRafi Songs/Patta patta.mp3',
        cover: 'MdRafi Songs/Patta patta.jpg'
    },
    {
        name: 'Yuhi tum mujhse baat',
        artist: 'Lata Mangeshkar, Mohammad Rafi',
        url:'Lata songs/Yuhi tum.mp3',
        cover: 'Lata songs/Yuhi tum.jfif'
    },
    {
      name: 'Dil tera deewana hai sanam',
      artist: 'Lata Mangeshkar, Mohammad Rafi',
      url: 'MdRafi Songs/Dil tera.mp3',
      cover: 'MdRafi Songs/Dil tera.jpg'
    },
    {
      name: 'Kora kagaz tha ye man mera',
      artist: 'Lata Mangeshkar, Kishore Kumar',
      url: 'Kishore songs/Kora kagaz.mp3',
      cover: 'Kishore songs/Kora kagaz.jpg'
    },
    {
      name: 'Gaata rahe mera dil',
      artist: 'Lata Mangeshkar, Kishore Kumar',
      url: 'Kishore songs/Gaata rahe.mp3',
      cover: 'Kishore songs/Gaata rahe.jpg'
    },
    {
      name: 'Gum hai kisi ke',
      artist: 'Lata Mangeshkar, Kishore Kumar',
      url: 'Kishore songs/Gum hai.mp3',
      cover: 'Kishore songs/Gum hai.jpg'
    },
    {
      name: 'Jai jai shiv shankar',
      artist: 'Lata Mangeshkar, Kishore Kumar',
      url: 'Kishore songs/Jai jai.mp3',
      cover: 'Kishore songs/Jai jai.jpg'
    },
    {
      name: 'Rimjhim gire saavan',
      artist: 'Lata Mangeshkar, Kishore Kumar',
      url: 'Kishore songs/Rimjhim gire.mp3',
      cover: 'Kishore songs/Rimjhim gire.jpg'
    },
    {
      name: 'Tum aa gaye ho',
      artist: 'Lata mageshkar, Kishore Kumar',
      url: 'Kishore songs/Tum aa.mp3',
      cover: 'Kishore songs/Tum aa.jpg'
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