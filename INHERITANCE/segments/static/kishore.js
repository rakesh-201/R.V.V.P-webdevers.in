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
      name: 'Pal pal dil ke paas',
      artist: 'Kishore Kumar',
      url: 'Kishore_songs/Pal_pal.mp3',
      cover: 'Kishore_songs/Pal_pal.jpg'
    },
    {
      name: 'Yeh shaam mastani',
      artist: 'Kishore Kumar',
      url: 'Kishore_songs/Yeh_shaam.mp3',
      cover: 'Kishore_songs/Yeh_shaam.jpg'
    },
    {
      name: 'O mere dil ke chain',
      artist: 'Kishore Kumar',
      url: 'Kishore_songs/O_mere.mp3',
      cover: 'Kishore_songs/O_mere.jpg'
    },
    {
      name: 'Tere bina Zindagi se koi',
      artist: 'Kishore Kumar,Lata Mangeshkar',
      url: 'Kishore_songs/Tere_bina.mp3',
      cover: 'Kishore_songs/Tere_bina.jpg'
    },
    {
      name: 'Raat kali ek khwab me',
      artist: 'Kishore Kumar',
      url: 'Kishore_songs/Raat_kali.mp3',
      cover: 'Kishore_songs/Raat_kali.jpg'
    },
    {
      name: 'O meri soni meri tamanna',
      artist: 'Kishore Kumar,Asha Bhosale',
      url: 'Kishore_songs/Meri_soni.mp3',
      cover: 'Kishore_songs/Meri_soni.png'
    }, 
    {
      name: 'Neele neele ambar par',
      artist: 'Kishore Kumar',
      url: 'Kishore_songs/Neele_neele.mp3',
      cover: 'Kishore_songs/Neele_neele.jpg'
    },
    {
      name: 'Kehdu tumhe ya chup rahu',
      artist: 'Kishore Kumar, Asha Bhosle',
      url: 'Kishore_songs/Kehdu_tumhe.mp3',
      cover: 'Kishore_songs/Kehdu_tumhe.jpg'
    },
    {
      name: 'Khaike paan banaras wala',
      artist:'Kishore Kumar',
      url:'Kishore_songs/Khaike_paan.mp3',
      cover: 'Kishore_songs/Khaike_paan.jpg'
    },
    {
      name: 'Kora kagaz tha ye man mera',
      artist: 'Kishore Kumar, Lata Mangeshkar',
      url: 'Kishore_songs/Kora_kagaz.mp3',
      cover: 'Kishore_songs/Kora_kagaz.jpg'
    },
    {
      name: 'Mere mehboob quyamat hogi',
      artist: 'Kishore Kumar',
      url: 'Kishore_songs/Mere_mehboob.mp3',
      cover: 'Kishore_songs/Mere_mehboob.jpg'
    },   
    {
      name: 'Mere sapno ki rani',
      artist: 'Kishore Kumar',
      url: 'Kishore_songs/Mere_sapno.mp3',
      cover: 'Kishore songs/Mere sapno.jpg'
    },  
    {
      name: 'O saathi chal',
      artist: 'Kishore Kumar, Asha Bhosale',
      url: 'Kishore_songs/O_saathi.mp3',
      cover: 'Kishore_songs/O_saathi.jpg'
    },
    {
      name: 'Chhod do aanchal',
      artist: 'Kishore Kumar, Asha Bhosale',
      url: 'Kishore_songs/Chhod_do.mp3',
      cover: 'Kishore_songs/Chhod_do.jpg'
    },
    {
      name: 'Dil kya kare',
      artist: 'Kishore Kumar',
      url: 'Kishore_songs/Dil_kya_kare.mp3',
      cover: 'Kishore_songs/Dil_kya_kare.jpg'
    },
    {
      name: 'Gaata rahe mera dil',
      artist: 'Kishore Kumar, Lata Mangeshkar',
      url: 'Kishore_songs/Gaata_rahe.mp3',
      cover: 'Kishore_songs/Gaata_rahe.jpg'
    },
    {
      name: 'Gham ka fasana',
      artist: 'Kishore Kumar',
      url: 'Kishore_songs/Gham_ka.mp3',
      cover: 'Kishore_songs/Gham_ka.jpg'
    },
    {
      name: 'Gum hai kisi ke',
      artist: 'Kishore Kumar, Lata Mangeshkar',
      url: 'Kishore_songs/Gum_hai.mp3',
      cover: 'Kishore_songs/Gum_hai.jpg'
    },
    {
      name: 'Jai jai shiv shankar',
      artist: 'Kishore Kumar, Lata Mangeshkar',
      url: 'Kishore_songs/Jai_jai.mp3',
      cover: 'Kishore_songs/Jai_jai.jpg'
    },
    {
      name: 'Rimjhim gire saavan',
      artist: 'Kishore Kumar, Lata Mangeshkar',
      url: 'Kishore_songs/Rimjhim_gire.mp3',
      cover: 'Kishore_songs/Rimjhim_gire.jpg'
    },
    {
      name: 'Sara zamana haseeno ka deewana',
      artist: 'Kishore Kumar',
      url: 'Kishore_songs/Sara_zamana.mp3',
      cover: 'Kishore_songs/Sara_zamana.jpg'
    },
    {
      name: 'Tum aa gaye ho',
      artist: 'Kishore Kumar, Lata mageshkar',
      url: 'Kishore_songs/Tum_aa.mp3',
      cover: 'Kishore_songs/Tum_aa.jpg'
    },   
    {
      name: 'Wada tera wada',
      artist: 'Kishore Kumar',
      url: 'Kishore_songs/Wada_tera.mp3',
      cover: 'Kishore_songs/Wada_tera.jpg'
    },
    {
      name: 'Ek mai aur ek tu',
      artist: 'Asha Bhosale, Kishore Kumar',
      url: 'Asha_songs/Ek_mai.mp3',
      cover: 'Asha_songs/Ek_mai.jpg'
    },
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