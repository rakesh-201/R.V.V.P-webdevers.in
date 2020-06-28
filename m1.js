$(".album-poster").on("click",function(){
  var dataSwitchId=$(this).attr("data-switch");
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
 listFolded:true,
  audio: [{ 
      name: 'Bekhayali',
      artist: 'Arjit Singh',
      url: 'Vishal/arjit/Bekhayali.mp3',
      cover: 'Vishal/arjit/Bekhayali.jpg'
  },{ 
    name: 'Dil Hi Toh Hai',
    artist: 'Arjit Singh',
    url: 'Vishal/arjit/Dil_Hi_Toh_Hai.mp3',
    cover: 'Vishal/arjit/Dil_Hi_Toh_Hai.jpg'
},
{ 
  name: 'Sanam Re',
  artist:'Arjit Singh',
  url: 'Vishal/arjit/Sanam_Re.mp3',
  cover: 'Vishal/arjit/Sanam_Re.jpg'
},
{ 
  name: 'Khairiyat',
  artist: 'Arjit Singh',
  url: 'Vishal/arjit/Khairiyat.mp3',
  cover: 'vishal/arjit/Khairiyat.jpg'
},
{ 
  name: 'Phir Le Aaya Dil',
  artist: 'Arjit Singh',
  url: 'vishal/arjit/Phir_Le_Aya_Dil.mp3',
  cover: 'vishal/arjit/Phir_Le_Aya_Dil.jpg'
},
{ 
  name: 'Pal',
  artist: 'Arjit Singh',
  url: 'Vishal/arjit/Pal.mp3',
  cover: 'Vishal/arjit/Pal.jpg'
},
{ 
  name: 'Sooraj Dooba Hai Aaj',
  artist: 'Arjit Singh',
  url: 'Vishal/arjit/Sooraj_Dooba_Hai_Aaj.mp3',
  cover: 'Vishal/arjit/Sooraj_Dooba_Hai_Aaj.jpg'
},
{ 
  name: 'Sukoon Mila',
  artist: 'Arjit Singh',
  url: 'Vishal/arjit/Sukoon_Mila.mp3',
  cover: 'Vishal/arjit/Sukoon_Mila.jpg'
},
{ 
  name: 'Tera Hoke Rahoon',
  artist: 'Arjit Singh',
  url: 'Vishal/arjit/Tera_Hoke_Rahoon.mp3',
  cover: 'Vishal/arjit/Tera_Hoke_Rahoon.jpg'
},
{ 
  name: 'Tu Hi Hai Aashiqui',
  artist: 'Arjit Singh',
  url: 'Vishal/arjit/Tu_Hi_Hai_Aashiqui.mp3',
  cover: 'Vishal/arjit/Tu_Hi_Hai_Aashiqui.jpg'
},
{ 
  name: 'Tum Hi Ho',
  artist: 'Arjit Singh',
  url: 'Vishal/arjit/Tum_Hi_Ho.mp3',
  cover: 'Vishal/arjit/Tum_Hi_Ho.jpg'
},
{ 
  name: 'Tum Saath Ho',
  artist: 'Arjit Singh',
  url: 'Vishal/arjit/Tum_Saath_Ho.mp3',
  cover: 'Vishal/arjit/Tum_Saath_Ho.jpg'
},
{ 
  name: 'Darkhaast',
  artist: 'Arjit Singh',
  url: 'Vishal/arjit/Darkhaast.mp3',
  cover: 'Vishal/arjit/Darkhaast.jpg'
},
{ 
  name: 'Laal Ishq',
  artist: 'Arjit Singh',
  url: 'Vishal/arjit/Laal_Ishq.mp3',
  cover: 'Vishal/arjit/Laal_Ishq.jpg'
},
{ 
  name: 'Ilahi',
  artist: 'Arjit Singh',
  url: 'Vishal/arjit/Ilahi.mp3',
  cover: 'Vishal/arjit/Illahi.jpg'
},
{ 
  name: 'Ik Vaari ya',
  artist: 'Arjit Singh',
  url: 'Vishal/arjit/Ik_Vaari_ya.mp3',
  cover: 'Vishal/arjit/Ik_Vaari_ya.jpg'
},
{ 
  name: 'Hawayein',
  artist: 'Arjit Singh',
  url: 'Vishal/arjit/Hawayein.mp3',
  cover: 'Vishal/arjit/Hawayein.jpg'
},
{ 
  name: 'Dhokha Dhadi',
  artist: 'Arjit Singh',
  url: 'Vishal/arjit/Dhokha_Dhadi.mp3',
  cover: 'Vishal/arjit/Dhokha_Dhadi.jpg'
},
{ 
  name: 'Mast Magan',
  artist: 'Arjit Singh',
  url: 'Vishal/arjit/Mast_Magan.mp3',
  cover: 'Vishal/arjit/Mast_Magan.jpg'
},
{ 
  name: 'Meet',
  artist: 'Arjit Singh',
  url: 'Vishal/arjit/Meet.mp3',
  cover: 'Vishal/arjit/Meet.jpg'
},
{ 
  name: 'Tu Mila Toh Haina',
  artist: 'Arjit Singh',
  url: 'Vishal/arjit/Tu_Mila_Toh_Haina.mp3',
  cover: 'Vishal/arjit/Tu_Mila_Toh_Haina.jpg'
},
{ 
  name: ' Tujhe Kitna Chahne Lage',
  artist: 'Arjit Singh',
  url: 'Vishal/arjit/Tujhe_Kitna_Chahne_Lage.mp3',
  cover: 'Vishal/arjit/Tujhe_Kitna_Chahne_Lage.jpg'
},
{ 
  name: 'Chahun_Main_Ya_Naa',
  artist: 'Arjit Singh',
  url: 'Vishal/arjit/Chahun_Main_Ya_Naa.mp3',
  cover: 'Vishal/arjit/Chahun_Main_Ya_Naa.jpg'
},
{ 
  name: 'Mahi Bolna',
  artist: 'Arjit Singh',
  url: 'Vishal/arjit/Bolna.mp3',
  cover: 'Vishal/arjit/Bolna.jpg'
},
{ 
  name: 'Janam Janam',
  artist: 'Arjit Singh',
  url: 'Vishal/arjit/Janam_Janam.mp3',
  cover: 'Vishal/arjit/Janam_Janam.jpg'
},
{ 
  name: 'Kabhi Jo Baadal Barse',
  artist: 'Arjit Singh',
  url: 'Vishal/arjit/Kabhi_Jo_Baadal_Barse.mp3',
  cover: 'Vishal/arjit/Kabhi_Jo_Baadal_Barse.jpg'
},
{ 
  name: 'Main Phir Bhi Tumko Chahunga',
  artist: 'Arjit Singh',
  url: 'Vishal/arjit/Main_Phir_Bhi_Tumko_Chahunga.mp3',
  cover: 'Vishal/arjit/Main_Phir_Bhi_Tumko_Chahunga.jpg'
},
{ 
  name: 'Main Rang Sharbaton Ka',
  artist: 'Arjit Singh',
  url: 'Vishal/arjit/Main_Rang_Sharbaton_Ka.mp3',
  cover: 'Vishal/arjit/Main_Rang_Sharbaton_Ka.jpg'
},
{ 
  name: 'Nashe Si Chadh Gayi',
  artist: 'Arjit Singh',
  url: 'Vishal/arjit/Nashe_Si_Chadh_Gayi.mp3',
  cover: 'Vishal/arjit/Nashe_Si_Chadh_Gayi.jpg'
},
{ 
  name: 'Milne Hai Mujhse Aayi',
  artist: 'Arjit Singh',
  url: 'Vishal/arjit/Milne_Hai_Mujhse_Aayi.mp3',
  cover: 'Vishal/arjit/Milne_Hai_Mujhse _Aayi.jpg'
},

{ 
  name: 'Pachtaoge',
  artist: 'Arjit Singh',
  url: 'Vishal/arjit/Pachtaoge.mp3',
  cover: 'Vishal/arjit/Pachtaoge.jpg'
},
{ 
  name: 'Roke Na Ruke Naina',
  artist: 'Arjit Singh',
  url: 'Vishal/arjit/Roke_Na_Ruke_Naina.mp3',
  cover: 'Vishal/arjit/Roke_Na_Ruke_Naina.jpg'
},
{ 
    name: 'Shayad',
    artist: 'Arjit Singh',
    url: 'Vishal/arjit/Shayad.mp3',
    cover: 'Vishal/arjit/Shayad.jpg'
  },

{ 
  name: 'Tose Naina',
  artist: 'Arjit Singh',
  url: 'Vishal/arjit/Tose_Naina.mp3',
  cover: 'Vishal/arjit/Tose_Naina.jpg'
},
{ 
  name: 'GIMA Awards',
  artist: 'Arjit Singh',
  url: 'Vishal/arjit/GIMA_Awards.mp3',
 cover: 'Vishal/arjit/GIMA_Awards.jpg'
},


]
});

console.log(ap.audio);
let audiofiles=[
  'Vishal/arjit/Bekhayali.mp3','Vishal/arjit/Dil_Hi_Toh_Hai.mp3','Vishal/arjit/Sanam_Re.mp3',
  'Vishal/arjit/Khairiyat.mp3', 'Vishal/arjit/Phir_Le_Aya_Dil.mp3','Vishal/arjit/Pal.mp3',
  'Vishal/arjit/Sooraj_Dooba_Hai_Aaj.mp3','Vishal/arjit/Sukoon_Mila.mp3', 'Vishal/arjit/Tera_Hoke_Rahoon.mp3',
  'Vishal/arjit/Tu_Hi_Hai_Aashiqui.mp3', 'Vishal/arjit/Tum Hi Ho.mp3','Vishal/arjit/Tum_Saath_Ho.mp3',
  'Vishal/arjit/Darkhaast.mp3', 'Vishal/arjit/Laal_Ishq.mp3', 'Vishal/arjit/Ilahi.mp3','Vishal/arjit/Ik_Vaari_ya.mp3',
  'Vishal/arjit/Hawayein.mp3', 'Vishal/arjit/Mast_Magan.mp3', 'Vishal/arjit/Meet.mp3',
  'Vishal/arjit/Tu_Mila_Toh_Haina.mp3','Vishal/arjit/Tujhe_Kitna_Chahne_Lage.mp3','Vishal/arjit/chahun_Main_Ya_Naa.mp3',
  'Vishal/arjit/Bolna.mp3', 'Vishal/arjit/Janam_Janam.mp3','Vishal/arjit/Kabhi_Jo_Baadal_Barse.mp3',
  'Vishal/arjit/Main_Phir_Bhi_Tumko_Chahunga.mp3','Vishal/arjit/Main_Rang_Sharbaton_Ka.mp3',
  'Vishal/arjit/Nashe_Si_Chadh_Gayi.mp3', 'Vishal/arjit/Milne_Hai_Mujhse _Aayi.mp3','Vishal/arjit/Pachtaoge.mp3',
  'Vishal/arjit/Roke_Na_Ruke_Naina.mp3','Vishal/arjit/Tose_Naina.mp3', 'Vishal/arjit/GIMA_Awards.mp3'

  


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
function changeTheme() {
  let body = document.body;
  if (body.classList == "normal") {
    body.classList = "dark";
    let songName = document.querySelectorAll(".col-md-3 .songNameContainer h4");
    Array.from(songName).forEach((element) => {
      element.style.color = "yellow";
    })
    let artists = document.querySelectorAll("b");
    Array.from(artists).forEach((element) => {
      element.style.color = "lightgreen";
    })

  } else {
    body.classList = "normal";
    let songName = document.querySelectorAll(".col-md-3 .songNameContainer h4");
    Array.from(songName).forEach((element) => {
      element.style.color = "blue";
    })
    let artists = document.querySelectorAll("b");
    Array.from(artists).forEach((element) => {
      element.style.color = "green";
    })
  }
}
function changeIcon(element) {
  let icon = element.childNodes[0];
  if (icon.classList == "fa fa-heart-o") {
    
    icon.classList = "fa fa-heart";
  }
  else {
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
});


