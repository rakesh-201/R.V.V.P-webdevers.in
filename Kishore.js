$(".album-poster").on("click", function () {
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
  audio: [
    {
      name: 'Pal pal dil ke paas',
      artist: 'Blackmail',
      url: 'Kishore_songs/Pal_pal.mp3',
      cover: 'Kishore_songs/Pal_pal.jpg'
    },
    {
      name: 'Yeh shaam mastani',
      artist: 'Kati Patang',
      url: 'Kishore_songs/Yeh_shaam.mp3',
      cover: 'Kishore_songs/Yeh_shaam.jpg'
    },
    {
      name: 'O mere dil ke chain',
      artist: 'Mere Jeevan Saathi',
      url: 'Kishore_songs/O_mere.mp3',
      cover: 'Kishore_songs/O_mere.jpg'
    },
    {
      name: 'Tere bina Zindagi se koi',
      artist: 'Aandhi',
      url: 'Kishore_songs/Tere_bina.mp3',
      cover: 'Kishore_songs/Tere_bina.jpg'
    },
    {
      name: 'Raat kali ek khwab me',
      artist: 'Buddha Mil Gaya',
      url: 'Kishore_songs/Raat_kali.mp3',
      cover: 'Kishore_songs/Raat_kali.jpg'
    },
    {
      name: 'O meri soni meri tamanna',
      artist: 'Yaadon Ki Barat',
      url: 'Kishore_songs/Meri_soni.mp3',
      cover: 'Kishore_songs/Meri_soni.png'
    },
    {
      name: 'Neele neele ambar par',
      artist: 'Kalaakar',
      url: 'Kishore_songs/Neele_neele.mp3',
      cover: 'Kishore_songs/Neele_neele.jpg'
    },
    {
      name: 'Kehdu tumhe ya chup rahu',
      artist: 'Deewar',
      url: 'Kishore_songs/Kehdu_tumhe.mp3',
      cover: 'Kishore_songs/Kehdu_tumhe.jpg'
    },
    {
      name: 'Khaike paan banaras wala',
      artist: 'Don',
      url: 'Kishore_songs/Khaike_paan.mp3',
      cover: 'Kishore_songs/Khaike_paan.jpg'
    },
    {
      name: 'Kora kagaz tha ye man mera',
      artist: 'Aaradhna',
      url: 'Kishore_songs/Kora_kagaz.mp3',
      cover: 'Kishore_songs/Kora_kagaz.jpg'
    },
    {
      name: 'Mere mehboob quyamat hogi',
      artist: 'Mr.X in Bombay',
      url: 'Kishore_songs/Mere_mehboob.mp3',
      cover: 'Kishore_songs/Mere_mehboob.jpg'
    },
    {
      name: 'Mere sapno ki rani',
      artist: 'Aaradhna',
      url: 'Kishore_songs/Mere_sapno.mp3',
      cover: 'Kishore_songs/Mere_sapno.jpg'
    },
    {
      name: 'O saathi chal',
      artist: 'Seeta Aur Geeta',
      url: 'Kishore_songs/O_saathi.mp3',
      cover: 'Kishore_songs/O_saathi.jpg'
    },
    {
      name: 'Chhod do aanchal',
      artist: 'Paying Guest',
      url: 'Kishore_songs/Chhod_do.mp3',
      cover: 'Kishore_songs/Chhod_do.jpg'
    },
    {
      name: 'Dil kya kare',
      artist: 'Julee',
      url: 'Kishore_songs/Dil_kya_kare.mp3',
      cover: 'Kishore_songs/Dil_kya_kare.jpg'
    },
    {
      name: 'Gaata rahe mera dil',
      artist: 'Guide',
      url: 'Kishore_songs/Gaata_rahe.mp3',
      cover: 'Kishore_songs/Gaata_rahe.jpg'
    },
    {
      name: 'Gham ka fasana',
      artist: 'Manchali',
      url: 'Kishore_songs/Gham_ka.mp3',
      cover: 'Kishore_songs/Gham_ka.jpg'
    },
    {
      name: 'Gum hai kisi ke',
      artist: 'Rampur Ka Lakshman',
      url: 'Kishore_songs/Gum_hai.mp3',
      cover: 'Kishore_songs/Gum_hai.jpg'
    },
    {
      name: 'Jai jai shiv shankar',
      artist: 'Aap Ki kasam',
      url: 'Kishore_songs/Jai_jai.mp3',
      cover: 'Kishore_songs/Jai_jai.jpg'
    },
    {
      name: 'Rimjhim gire saavan',
      artist: 'Manzil',
      url: 'Kishore_songs/Rimjhim_gire.mp3',
      cover: 'Kishore_songs/Rimjhim_gire.jpg'
    },
    {
      name: 'Sara zamana haseeno ka deewana',
      artist: 'Yaarana',
      url: 'Kishore_songs/Sara_zamana.mp3',
      cover: 'Kishore_songs/Sara_zamana.jpg'
    },
    {
      name: 'Tum aa gaye ho',
      artist: 'Aandhi',
      url: 'Kishore_songs/Tum_aa.mp3',
      cover: 'Kishore_songs/Tum_aa.jpg'
    },
    {
      name: 'Wada tera wada',
      artist: 'Dushman',
      url: 'Kishore_songs/Wada_tera.mp3',
      cover: 'Kishore_songs/Wada_tera.jpg'
    },
    {
      name: 'Ek mai aur ek tu',
      artist: 'Khel Khel Mein',
      url: 'Asha_songs/Ek_mai.mp3',
      cover: 'Asha_songs/Ek_mai.jpg'
    },
    {
      name: 'Suno kaho suna',
      artist: 'Aap Ki Kasam',
      url: 'Lata_Songs/Suno_kaho.mp3',
      cover: 'Lata_Songs/Suno_kaho.jpeg'
    },
    {
      name: 'Bheegi bheegi raaton me',
      artist: 'Ajanbee',
      url: 'Lata_Songs/Bheegi_bheegi.mp3',
      cover: 'Lata_Songs/Bheegi_bheegi.jpeg'
    },
    {
      name: 'Sagar jaisi aankhovali',
      artist: 'Sagar',
      url: 'Kishore_songs/Sagar_jaisi.mp3',
      cover: 'Kishore_songs/Sagar_jaisi.jpg'
    },
    {
      name: 'aise na mujhe tum dekho',
      artist: 'Darling Darling',
      url: 'Kishore_songs/Aise_na.mp3',
      cover: 'Kishore_songs/Aise_na.jpg'
    },
    {
      name: 'Ha tu hai wahi',
      artist: 'Yeh Wada Raha',
      url: 'Kishore_songs/Ha_tu_hai.mp3',
      cover: 'Kishore_songs/Ha_tu_hai.jpeg'
    },
    {
      name: 'Pyar ka dard hai',
      artist: 'Dard',
      url: 'Asha_songs/Pyar_ka.mp3',
      cover: 'Asha_songs/Pyar_ka.jpg'
    }
  ]
});

console.log(ap.audio);
let audiofiles=[

      'Kishore_songs/Pal_pal.mp3','Kishore_songs/Yeh_shaam.mp3',
      'Kishore_songs/O_mere.mp3','Kishore_songs/Tere_bina.mp3','Kishore_songs/Raat_kali.mp3',
      'Kishore_songs/Meri_soni.mp3','Kishore_songs/Neele_neele.mp3','Kishore_songs/Kehdu_tumhe.mp3',
      'Kishore_songs/Khaike_paan.mp3','Kishore_songs/Kora_kagaz.mp3','Kishore_songs/Mere_mehboob.mp3',
      'Kishore_songs/Mere_sapno.mp3','Kishore_songs/O_saathi.mp3','Kishore_songs/Chhod_do.mp3',
      'Kishore_songs/Dil_kya_kare.mp3','Kishore_songs/Gaata_rahe.mp3','Kishore_songs/Gham_ka.mp3',
      'Kishore_songs/Gum_hai.mp3','Kishore_songs/Jai_jai.mp3','Kishore_songs/Rimjhim_gire.mp3',
      'Kishore_songs/Sara_zamana.mp3','Kishore_songs/Tum_aa.mp3','Kishore_songs/Wada_tera.mp3',
      'Asha_songs/Ek_mai.mp3','Lata_Songs/Suno_kaho.mp3','Lata_Songs/Bheegi_bheegi.mp3',
      'Kishore_songs/Sagar_jaisi.mp3','Kishore_songs/Aise_na.mp3','Kishore_songs/Ha_tu_hai.mp3',
      'Asha_songs/Pyar_ka.mp3'
];   


let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
  let inputVal = search.value;
  inputVal = inputVal.toLocaleLowerCase();
  console.log("input event fired!", inputVal);
  let songCards = document.getElementsByClassName("songCard");
  Array.from(songCards).forEach(function (element) {
    let songTxt = element.getElementsByTagName("h4")[0].innerText;
    songTxt = songTxt.toLocaleLowerCase();
    if (songTxt.includes(inputVal)) {
      element.style.display = "block";
    }
    else {
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

let songCards = document.getElementsByClassName("songCard");
var myFavprop = JSON.parse(localStorage.getItem("favProp"));
// console.log(myFavprop);
Array.from(songCards).forEach((e)=>{
  let songCard = e.childNodes;
  let songName = songCard[3].childNodes[1].innerHTML;
  if (myFavprop.some(e => e.songName === songName)) {
    /*localStorage contains this song*/
    console.log(songCard[7].childNodes[0]);
    let favBtn  = songCard[7].childNodes[0];
    console.log("Both are same");
    console.log(favBtn);
    favBtn.classList = "fa fa-heart";
  }

})
 

$(function () {
  $(".favBtn").on("click", function (e) {
    var icon = e.target;
    var songCard = this.parentNode.childNodes;
    var imgFile = songCard[1].childNodes[1].src;
    var songName = songCard[3].childNodes[1].innerHTML;
    var songInfo = songCard[5].childNodes[0].innerHTML;
    var dataId = $(songCard[1]).attr("data-switch");
    var audioFile = audiofiles[dataId];
    console.log(audioFile);
    var propToAdd = {
      imgFile: imgFile,
      songName: songName,
      songInfo: songInfo,
      audioFile: audioFile
    }
    var myFavprop = JSON.parse(localStorage.getItem("favProp"));
    console.log(propToAdd);
    console.log(myFavprop);
    if (icon.classList == "fa fa-heart") {    
      
      if (myFavprop == null) {
        myFavprop = [];
      }
      console.log(myFavprop);
      if(myFavprop != null){
         if(myFavprop.some(e => e.songName === propToAdd.songName)){
           console.log("already included");
            if(propToAdd == myFavprop[j]){
               propToAdd = {};
            }
         }else{
          console.log("pushing");
          myFavprop.push(propToAdd);
         }
      }
      localStorage.setItem("favProp", JSON.stringify(myFavprop));
    }
    if(icon.classList == "fa fa-heart-o"){
      for(let j=0;j<myFavprop.length;j++){
        if((myFavprop[j].songName == propToAdd.songName)&&(myFavprop[j].songInfo == propToAdd.songInfo)){
          console.log("already included");
          myFavprop.splice(j,1);
        }
        console.log(myFavprop);
      }
      localStorage.setItem("favProp", JSON.stringify(myFavprop));
    }

  })
})



