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
  })




const ap = new APlayer({
    container: document.getElementById('aplayer'),
    listFolded: true,
    audio: [{
            name: 'Stuck with u',
            artist: 'Ariana Grande & Justin Bieber',
            url: 'static/English_songs/Stuck_with_u.mp3',
            cover: 'static/English_songs/Stuck_with_u.jpeg'
        },
        {
            name: 'Intentions',
            artist: 'Justin Bieber',
            url: 'static/English_songs/Intentions.mp3',
            cover: 'static/English_songs/Intentions.jpeg'
        },
        {
            name: 'Blueberry Faygo ',
            artist: 'Lil Mosey',
            url: 'static/English_songs/Lil_Mosey.mp3',
            cover: 'static/English_songs/Lil_Mosey.jfif'
        },
        {
            name: 'LM3ALLEM-arabic',
            artist: 'Saad Lamjarred',
            url: 'static/English_songs/LM3ALLEM-arabic.mp3',
            cover: 'static/English_songs/LM3ALLEM-arabic.jpg'
        },
        {
            name: 'Say So ',
            artist: 'Doja Cat',
            url: 'static/English_songs/Doja_cat.mp3',
            cover: 'static/English_songs/Doja_cat.jpg'
        },
        {
            name: 'Travis Scott - Turks',
            artist: 'NAV & Gunna',
            url: 'static/English_songs/NAV-No_Debate_feat.mp3',
            cover: 'static/English_songs/NAV-No_Debate_feat.jpg'
        },
        {
            name: 'The Box',
            artist: 'Roddy Ricch',
            url: 'static/English_songs/The_box.mp3',
            cover: 'static/English_songs/The_box.jpg'
        },
        {
            name: 'Stupid Love',
            artist: 'Lady Gaga ',
            url: 'static/English_songs/Stupid_love.mp3',
            cover: 'static/English_songs/Stupid_love.png'
        },
        {
            name: 'Whats Poppin',
            artist: 'Jack Harlow',
            url: 'static/English_songs/Whats_poppin.mp3',
            cover: 'static/English_songs/Whats_poppin.jpg'
        },
        {
            name: 'The Weeknd - Blinding Lights',
            artist: 'Weeknd',
            url: 'static/English_songs/The_Weeknd-Blinding_Lights.mp3',
            cover: 'static/English_songs/The_Weeknd-Blinding_Lights.jpg'
        },
        {
            name: 'Be Kind',
            artist: 'Marshallow and Halsey',
            url: 'static/English_songs/Be_Kind.mp3',
            cover: 'static/English_songs/Be_Kind.jpg'
        },
        {
            name: 'Baby',
            artist: 'Justin Bieber',
            url: 'static/English_songs/Baby.mp3',
            cover: 'static/English_songs/Baby.jpg'
        },
        {
            name: 'Roses Imanbek Remix ',
            artist: 'SAINt JHN ',
            url: 'static/English_songs/Roses.mp3',
            cover: 'static/English_songs/Roses.jpg'
        },
        {
            name: 'Despacito',
            artist: 'Louis Founsi',
            url: 'static/English_songs/Despacito.mp3',
            cover: 'static/English_songs/Despacito.jpg'
        },
        {
            name: 'Dont Start Now',
            artist: 'Dua Lipa',
            url: 'static/English_songs/Dont_Start_Now.mp3',
            cover: 'static/English_songs/Dont_Start_Now.jpg'
        },
        {
            name: 'Joker BGM song',
            artist: 'Indila',
            url: 'static/English_songs/Joker_BGM_song.mp3',
            cover: 'static/English_songs/Joker_BGM_song.jpg'
        },
        {
            name: 'Shape Of You',
            artist: 'Ed Sherran',
            url: 'static/English_songs/Shape_Of_You.mp3',
            cover: 'static/English_songs/Shape_Of_You.jpg'
        },
        {
            name: 'Sick and Tired',
            artist: 'Anastacia',
            url: 'static/English_songs/Sick_and_Tired.mp3',
            cover: 'static/English_songs/Sick_and_Tired.jpg'
        },
        {
            name: 'Yummy',
            artist: 'Justin Bieber',
            url: 'static/English_songs/Yummy.mp3',
            cover: 'static/English_songs/Yummy.jpg'
        },
        {
            name: 'Animal Trance',
            artist: 'Jules Craig',
            url: 'static/English_songs/Animal_Trance.mp3',
            cover: 'static/English_songs/Animal_Trance.jpg'
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