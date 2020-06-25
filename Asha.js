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
      name: 'Deewana hua badal',
      artist: 'Kashmir Ki Kali',
      url: 'Asha_songs/Deewana_hua.mp3',
      cover: 'Asha_songs/Deewana_hua.jpg'
    },
    {
      name: 'Dhal gaya din',
      artist: 'Hamjoli',
      url: 'Asha_songs/Dhal_gaya.mp3',
      cover: 'Asha_songs/Dhal_gaya.jpg'
    },
    {
      name: 'Jaiye aap kaha jayenge',
      artist: 'Mere Sanam',
      url: 'Asha_songs/Jaiye_aap.mp3',
      cover: 'Asha_songs/Jaiye_aap.jpg'
    },
    {
      name: 'O saathi chal',
      artist: 'Seeta Aur Geeta',
      url: 'Asha_songs/O_saathi.mp3',
      cover: 'Asha_songs/O_saathi.jpg'
    },
    {
      name: 'Piya tu ab to aaja',
      artist: 'Caravan',
      url: 'Asha_songs/Piya_tu.mp3',
      cover: 'Asha_songs/Piya_tu.jpg'
    },
    {
      name: 'Uden jab jab zulfen teri',
      artist: 'Naya Daur',
      url: 'Asha_songs/Uden_jab.mp3',
      cover: 'Asha_songs/Uden_jab.png'
    },
    {
      name: 'Aaiye meharbaan',
      artist: 'Howrah Bridge',
      url: 'Asha_songs/Aaiye_meharbaan.mp3',
      cover: 'Asha_songs/Aaiye_meharbaan.jpg'
    },
    {
      name: 'Do lafzon ki hai',
      artist: 'The Great Gambler',
      url: 'Asha_songs/Do_lafzon.mp3',
      cover: 'Asha_songs/Do_lafzon.jpg'
    },
    {
      name: 'Ek mai aur ek tu',
      artist: 'Khel Khel Mein',
      url: 'Asha_songs/Ek_mai.mp3',
      cover: 'Asha_songs/Ek_mai.jpg'
    },
    {
      name: 'Gun guna rahe hai bhanware',
      artist: 'Aaradhna',
      url: 'Asha_songs/Gun_guna.mp3',
      cover: 'Asha_songs/Gun_guna.jpg'
    },
    {
      name: 'Jab chali thandi hawa',
      artist: 'Kati Patang',
      url: 'Asha_songs/Jab_chali.mp3',
      cover: 'Asha_songs/Jab_chali.jpg'
    },
    {
      name: 'Sara pyar tumhara',
      artist: 'Aanand Ashram',
      url: 'Asha_songs/Saara_pyar.mp3',
      cover: 'Asha_songs/Saara_pyar.jfif'
    },
    {
      name: 'Roka kai baar maine',
      artist: 'Mere Sanam',
      url: 'Asha_songs/Roka_kai.mp3',
      cover: 'Asha_songs/Roka_kai.jpg'
    },
    {
      name: 'Sar par topi laal',
      artist: 'Tumsa Nahi Dekha',
      url: 'Asha_songs/Sar_par.mp3',
      cover: 'Asha_songs/Sar_par.jpg'
    },
    {
      name: 'Raat ke hamsafar',
      artist: 'An Evening in Paris',
      url: 'Asha_songs/Raat_ke.mp3',
      cover: 'Asha_songs/Raat_ke.jpg'
    },
    {
      name: 'Chhod do aanchal',
      artist: 'Paying Guest',
      url: 'Asha_songs/Chhod_do.mp3',
      cover: 'Asha_songs/Chhod_do.jpg'
    },
    {
      name: 'Deewana mastana hua dil',
      artist: 'Bombai Ka Babu',
      url: 'Asha_songs/Deewana_mastana.mp3',
      cover: 'Asha_songs/Deewana_mastana.jpg'
    },
    {
      name: 'Ek pardesi mera dil le gaya',
      artist: 'Phagun',
      url: 'Asha_songs/Ek_pardesi.mp3',
      cover: 'Asha_songs/Ek_pardesi.jpg'
    },
    {
      name: 'Yeh mera dil',
      artist: 'Don',
      url: 'Asha_songs/Ye_mera.mp3',
      cover: 'Asha_songs/Ye_mera.jpg'
    },
    {
      name: 'Ha tu hai wahi',
      artist: 'Yeh Waada Raha',
      url: 'Kishore_songs/Ha_tu_hai.mp3',
      cover: 'Kishore_songs/Ha_tu_hai.jpeg'
    },
    {
      name: 'Lekar hu deewana dil',
      artist: 'Yaadon Ki Baarat',
      url: 'Asha_songs/Lekar_hum.mp3',
      cover: 'Asha_songs/Lekar_hum.jpeg'
    },
    {
      name: 'O haseena',
      artist: 'Teesri Manzil',
      url: 'Asha_songs/O_haseena.mp3',
      cover: 'Asha_songs/O_haseena.jpg'
    },
    {
      name: 'Ye ladka haye allah',
      artist: 'Hum kisise kum Nahin',
      url: 'Asha_songs/Ye_ladka.mp3',
      cover: 'Asha_songs/Ye_ladka.jpg'
    },
    {
      name: 'Dil cheez kya hai',
      artist: 'Umarao Jaan',
      url: 'Asha_songs/Dil_cheez.mp3',
      cover: 'Asha_songs/Dil_cheez.jpeg'
    },
    {
      name: 'Aao na gale laga lo na',
      artist: 'Mere Jeevan Saathi',
      url: 'Asha_songs/Aao_na.mp3',
      cover: 'Asha_songs/Aao_na.jpg'
    },
    {
      name: 'Pyar ka dard hai',
      artist: 'Dard',
      url: 'Asha_songs/Pyar_ka.mp3',
      cover: 'Asha_songs/Pyar_ka.jpg'
    },
    {
      name: 'In aankhon ki masti ke',
      artist: 'Umarao jaan',
      url: 'Asha_songs/In_aankhon.mp3',
      cover: 'Asha_songs/In_aankhon.png'
    },
    {
      name: 'Jab chhaye mera jadu',
      artist: 'Lootmaar',
      url: 'Asha_songs/Jab_chhaye.mp3',
      cover: 'Asha_songs/Jab_chhaye.jpg'
    },
    {
      name: 'Mang ke saath tumhara',
      artist: 'Asha Bhosle',
      url: 'Asha_songs/Maang_ke.mp3',
      cover: 'Asha_songs/Maang_ke.jpg'
    }
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
