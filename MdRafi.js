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
      name: 'Tumne Kisi ki jaan ko',
      artist: 'Mohammad Rafi ',
      url: 'MdRafi Songs/Tumne kisi.mp3',
      cover: 'MdRafi Songs/Tumne kisi.jpg'
    },
    {
      name: 'Dil tera deewana hai sanam',
      artist: 'Mohammad Rafi, Lata Mangeshkar',
      url: 'MdRafi_Songs/Dil_tera.mp3',
      cover: 'MdRafi_Songs/Dil_tera.jpg'
    },
    {
      name: 'Tumne mujhe dekha',
      artist: 'Mohammad Rafi',
      url: 'MdRafi_Songs/Tumne_mujhe.mp3',
      cover: 'MdRafi_Songs/Tumne_mujhe.jpg'
    },
    {
      name: 'Dil abhi bhara nahi',
      artist: 'Mohammad Rafi, Asha Bhosale',
      url: 'MdRafi Songs/Dil_abhi.mp3',
      cover: 'MdRafi_Songs/Dil_abhi.png'
    },
    {
      name: 'Hue hai tumpe aashiq hum',
      artist: 'Mohammad Rafi',
      url: 'MdRafi_Songs/Hue_hai.mp3',
      cover: 'MdRafi_Songs/Hue_hai.jpg'
    },
    {
      name: 'Chura Liya Hai Tumne',
      artist: 'Asha Bhosale,Mohammad Rafi',
      url: 'MdRafi_Songs/Chura_liya.mp3',
      cover: 'MdRafi_Songs/Chura_liya.jpg'
    },
    {
      name: 'O mere sona re',
      artist: 'Asha Bhosale,Mohammad Rafi',
      url: 'MdRafi_Songs/O_mere_sona.mp3',
      cover: 'MdRafi_Songs/O_mere_sona.jpg'
    },
    {
      name: 'Isharon isharon mein',
      artist: 'Asha Bhosale,Mohammad Rafi',
      url: 'MdRafi_Songs/Isharon_isharon.mp3',
      cover: 'MdRafi_Songs/Isharon_isharon.jpg'
    },
    {
      name: 'Yeh jo chilman hai',
      artist: 'Mohammad Rafi',
      url: 'MdRafi_Songs/Ye_jo_chilman.mp3',
      cover: 'MdRafi_Songs/Ye_jo_chilman.jpg'
    },
    {
      name: 'Tumse o haseena',
      artist: 'Mohammad Rafi,Suman Kalynpur',
      url: 'MdRafi_Songs/Tumse_o_haseena.mp3',
      cover: 'MdRafi_Songs/Tumse_o_haseena.jpg'
    },
    {
      name: 'Zulfon ko hatale chehre se',
      artist: 'Mohammad Rafi',
      url: 'MdRafi_Songs/Zulfon_ko.mp3',
      cover: 'MdRafi_Songs/zulfon_ko.jpeg'
    },
    {
      name: 'Khuli palak mein',
      artist: 'Mohammad Rafi',
      url: 'MdRaf_Songs/Khuli_palak.mp3',
      cover: 'MdRafi_Songs/Khuli_palak.png'
    },
    {
      name: 'Dhal gaya din',
      artist: 'Mohammad Rafi,Suman Kalyanpur',
      url: 'MdRafi_Songs/Dhal_gaya.mp3',
      cover: 'MdRafi_Songs/Dhal_gaya.png'
    },
    {
      name: 'Itna toh yaad hai mujhe',
      artist: 'Mohammad Rafi,Lata Mangeshkar',
      url: 'MdRafi_Songs/Itna_to.mp3',
      cover: 'MdRafi_Songs/Itna_to.jpg'
    },
    {
      name: 'Kaun hai jo sapno me aaya',
      artist: 'Mohammad Rafi',
      url: 'MdRafi_Songs/Kaun_hai_jo.mp3',
      cover: 'MdRafi_Songs/Kaun_hai_jo.jpg'
    },
    {
      name: 'Jaanewalo jara',
      artist: 'Mohammad Rafi',
      url: 'MdRafi_Songs/Jaanewalo_jara.mp3',
      cover: 'MdRafi_Songs/Jaanewalo_jara.jpg'
    },
    {
      name: 'Badan pe sitare',
      artist: 'Mohammad Rafi',
      url: 'MdRafi_Songs/Badan_pe_sitare.mp3',
      cover: 'MdRafi_Songs/Badan_pe_sitare.jpg'
    },
    {
      name: 'Baharon phool barsaon',
      artist: 'Mohammad Rafi',
      url: 'MdRafi_Songs/Baharon_phool.mp3',
      cover: 'MdRafi_Songs/Baharon_phool.jpeg'
    },
    {
      name: 'Wo teer dil pe chala',
      artist: 'Mohammad Rafi,Asha Bhosle',
      url: 'MdRafi_Songs/Wo_teer.mp3',
      cover: 'MdRafi_Songs/Wo_teer.jpg'
    },
    {
      name: 'Kitna pyar wada',
      artist: 'Mohammad Rafi,Lata Mangeshkar',
      url: 'MdRafi_Songs/Kitna_Pyara.mp3',
      cover: 'MdRafi_Songs/Kitna_pyara.jpg'
    },
    {
      name: 'Khuda bhi aasman se',
      artist: 'Mohammad Rafi',
      url: 'MdRafi_Songs/Khuda_bhi.mp3',
      cover: 'MdRafi_Songs/Khuda_bhi.jpg'
    },
    {
      name: 'Mai zindagi ka saath',
      artist: 'Mohammad Rafi',
      url: 'MdRafi_Songs/Mai_zindagi.mp3',
      cover: 'MdRafi_Songs/Mai_zindagi.jpg'
    },
    {
      name: 'Patta patta boota boota',
      artist: 'Mohammad Rafi, Lata Mangeshkar',
      url: 'MdRafi_Songs/Patta_patta.mp3',
      cover: 'MdRafi_Songs/Patta_patta.jpg'
    },
    {
      name: 'Yeh reshmi zulfen',
      artist: 'Mohammad Rafi',
      url: 'MdRafi_Songs/Ye_reshmi.mp3',
      cover: 'MdRafi_Songs/Ye_reshmi.jpg'
    },
    {
      name: 'Deewana hua badal',
      artist: 'Mohammad Rafi, Asha Bhosle',
      url: 'Asha_songs/Deewana_hua.mp3',
      cover: 'Asha_songs/Deewana_hua.jpg'
    },
    {
      name: 'Uden jab jab zulfen teri',
      artist: 'Mohammad Rafi, Asha Bhosle',
      url: 'Asha_songs/Uden_jab.mp3',
      cover: 'Asha_songs/Uden_jab.png'
    },
    {
      name: 'Gun guna rahe hai bhanware',
      artist: 'Mohammad Rafi, Asha Bhosle',
      url: 'Asha_songs/Gun_guna.mp3',
      cover: 'Asha_songs/Gun_guna.jpg'
    },
    {
      name: 'Roka kai baar maine',
      artist: 'Mohammad Rafi, Asha Bhosle',
      url: 'Asha_songs/Roka_kai.mp3',
      cover: 'Asha_songs/Roka_kai.jpg'
    },
    {
      name: 'Sar par topi laal',
      artist: 'Asha Bhosale,Mohammad Rafi',
      url: 'Asha_songs/Sar_par.mp3',
      cover: 'Asha_songs/Sar_par.jpg'
    },
    {
      name: 'Raat ke hamsafar',
      artist: 'Mohammad Rafi, Asha Bhosle',
      url: 'Asha_songs/Raat_ke.mp3',
      cover: 'Asha_songs/Raat_ke.jpg'
    },
    {
      name: 'Bekhudi mein sanam',
      artist: 'Lata Mangeshkar, Mohammad Rafi ',
      url: 'Lata_songs/Bekhudi_mein.mp3',
      cover: 'Lata_songs/Bekhudi_mein.jpg'
    },
    {
      name: 'Yuhi tum mujhse baat',
      artist: 'Mohammad Rafi, Lata Mangeshkar',
      url: 'Lata_songs/Yuhi_tum.mp3',
      cover: 'Lata_songs/Yuhi_tum.jfif'
    },
    {
      name: 'Aaja teri yaad aayi',
      artist: 'Mohammad Rafi, Lata Mangeshkar',
      url: 'MdRafi Songs/Aaja teri.mp3',
      cover: 'MdRafi Songs/Aaja teri.jpg'
    },
    {
      name: 'Mast baharon ka mai aashiq',
      artist: 'Mohammad Rafi',
      url: 'MdRafi Songs/Mast baharon.mp3',
      cover: 'MdRafi Songs/Mast bahron.jpg'
    },
    {
      name: 'Ab aan milo sajna',
      artist: 'Lata mageshkar, Mohammad Rafi',
      url: 'Lata Songs/Aan milo.mp3',
      cover: 'Lata Songs/Aan milo.jpg'
    },
    {
      name: 'Din sara guzara',
      artist: 'Lata mageshkar, Mohammad Rafi',
      url: 'Lata Songs/Din sara.mp3',
      cover: 'Lata Songs/Din sara.jpg'
    },
    {
      name: 'Chup gaye saare',
      artist: 'Lata mageshkar, Mohammad Rafi',
      url: 'Lata Songs/Chup gaye.mp3',
      cover: 'Lata Songs/Chup gaye.jpeg'
    },
  ]
});

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

