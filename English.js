$(".album-poster").on("click", function() {
    var dataSwitchId = $(this).attr("data-switch");
    //console.log(dataSwitchId);

    ap.list.switch(dataSwitchId);

    ap.play();
    $("#aplayer").addClass("showPlayer");
});
$(function () {
    $('[data-toggle="popover"]').popover()
  })
  
  $('.popover-dismiss').popover({
    trigger: 'focus'
  });
  








const ap = new APlayer({
    container: document.getElementById('aplayer'),
    listFolded: true,
    audio: [
        {
            name: 'Stuck with u',
            artist: 'Ariana Grande & Justin Bieber',
            url: 'English songs/Stuck with u.mp3',
            cover: 'English songs/Stuck with u.jpeg'
        },
        {
            name: 'Intentions',
            artist: 'Justin Bieber',
            url: 'English songs/Intentions.mp3',
            cover: 'English songs/Intentions.jpeg'
        },
        {
            name: 'Blueberry Faygo ',
            artist: 'Lil Mosey',
            url: 'English songs/Lil Mosey.mp3',
            cover: 'English songs/Lil Mosey.jfif'
        },
        {
            name: 'LM3ALLEM-arabic',
            artist: 'Saad Lamjarred',
            url: 'English songs/LM3ALLEM-arabic.mp3',
            cover: 'English songs/LM3ALLEM-arabic.jpg'
        },
        {
            name: 'Say So ',
            artist: 'Doja Cat',
            url: 'English songs/Doja cat.mp3',
            cover: 'English songs/Doja cat.jpg'
        },
        {
            name: 'Travis Scott - Turks',
            artist: 'NAV & Gunna',
            url: 'English songs/NAV - No Debate feat.mp3',
            cover: 'English songs/NAV - No Debate feat.jpg'
        },
        {
            name: 'The Box',
            artist: 'Roddy Ricch',
            url: 'English songs/The box.mp3',
            cover: 'English songs/The box.jpg'
        },
        {
            name: 'Stupid Love',
            artist: 'Lady Gaga ',
            url: 'English songs/Stupid love.mp3',
            cover: 'English songs/Stupid love.png'
        },
        {
            name: 'Whats Poppin',
            artist: 'Jack Harlow',
            url: 'English songs/Whats poppin.mp3',
            cover: 'English songs/Whats poppin.jpg'
        },
        {
            name: 'The Weeknd - Blinding Lights',
            artist: 'Weeknd',
            url: 'English songs/The Weeknd - Blinding Lights.mp3',
            cover: 'English songs/The Weeknd - Blinding Lights.jpg'
        },
        {
            name: 'Be Kind',
            artist: 'Marshallow and Halsey',
            url: 'English songs/Be Kind.mp3',
            cover: 'English songs/Be Kind.jpg'
        },
        {
            name: 'Baby',
            artist: 'Justin Bieber',
            url: 'English songs/Baby.mp3',
            cover: 'English songs/Baby.jpg'
        },
        {
            name: 'Roses Imanbek Remix ',
            artist: 'SAINt JHN ',
            url: 'English songs/Roses.mp3',
            cover: 'English songs/Roses.jpg'
        },
        {
            name: 'Despacito',
            artist: 'Louis Founsi',
            url: 'English songs/Despacito.mp3',
            cover: 'English songs/Despacito.jpg'
        },
        {
            name: 'Dont Start Now',
            artist: 'Dua Lipa',
            url: 'English songs/Dont Start Now.mp3',
            cover: 'English songs/Dont Start Now.jpg'
        },
        {
            name: 'Joker BGM song',
            artist: 'Indila',
            url: 'English songs/Joker BGM song.mp3',
            cover: 'English songs/Joker BGM song.jpg'
        },
        {
            name: 'Shape Of You',
            artist: 'Ed Sherran',
            url: 'English songs/Shape Of You.mp3',
            cover: 'English songs/Shape Of You.jpg'
        },
        {
            name: 'Sick and Tired',
            artist: 'Anastacia',
            url: 'English songs/Sick and Tired.mp3',
            cover: 'English songs/Sick and Tired.jpg'
        },
        {
            name: 'Yummy',
            artist: 'Justin Bieber',
            url: 'English songs/Yummy.mp3',
            cover: 'English songs/Yummy.jpg'
        },
        {
            name: 'Animal Trance',
            artist: 'Jules Craig',
            url: 'English songs/Animal Trance.mp3',
            cover: 'English songs/Animal Trance.jpg'
        }
    ]
});



let search = document.getElementById("searchTxt");
search.addEventListener("input", function() {
    let inputVal = search.value;
    inputVal = inputVal.toLocaleLowerCase();
    console.log("input event fired!", inputVal);
    let songCards = document.getElementsByClassName("songCard");
    Array.from(songCards).forEach(function(element) {
        let songTxt = element.getElementsByTagName("h4")[0].innerText;
        songTxt = songTxt.toLocaleLowerCase();
        if (songTxt.includes(inputVal)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    })

})
function changeTheme(){
    let body = document.body;
    if(body.classList == "normal"){
      body.classList = "dark";
      let songName = document.querySelectorAll(".col-md-3 .songNameContainer h4");
      Array.from(songName).forEach((element)=>{
        element.style.color="yellow";
      })
      let artists = document.querySelectorAll("b");
      Array.from(artists).forEach((element)=>{
        element.style.color ="lightgreen";
      })
      
    }else{
      body.classList = "normal";
      let songName = document.querySelectorAll(".col-md-3 .songNameContainer h4");
      Array.from(songName).forEach((element)=>{
        element.style.color="blue";
      })
      let artists = document.querySelectorAll("b");
      Array.from(artists).forEach((element)=>{
        element.style.color ="green";
      })
    }
  }
  
  function changeIcon(element){
      let icon = element.childNodes[0];
      if(icon.classList == "fa fa-heart-o"){
        icon.classList ="fa fa-heart";
      }
      else{
        icon.classList = "fa fa-heart-o";
      }
      
  }