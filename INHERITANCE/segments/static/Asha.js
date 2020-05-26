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
      name: 'Deewana hua badal',
      artist: 'Asha Bhosale, Mohammad Rafi',
      url: 'Asha songs/Deewana hua.mp3',
      cover: 'Asha songs/Deewana hua.jpg'
    },
    {
      name: 'Dhal gaya din',
      artist: 'Asha Bhosale, Mohammad Rafi',
      url: 'Asha songs/Dhal gay.mp3',
      cover: 'Asha songs/Dhal gaya.jpg'
    },
    {
      name: 'Jaiye aap kaha jayenge',
      artist: 'Asha Bhosale',
      url: 'Asha songs/Jaiye aap.mp3',
      cover: 'Asha songs/Jaiye aap.jpg'
    },
    {
      name: 'O saathi chal',
      artist: 'Asha Bhosale, Kishore Kumar',
      url: 'Asha songs/O saathi.mp3',
      cover: 'Asha songs/O saathi.jpg'
    },
    {
      name: 'Piya tu ab to aaja',
      artist: 'Asha Bhosale',
      url: 'Asha songs/Piya tu.mp3',
      cover: 'Asha songs/Piya tu.jpg'
    },
    {
      name: 'Uden jab jab zulfen teri',
      artist: 'Asha Bhosale, Mohammad Rafi',
      url: 'Asha songs/Uden jab.mp3',
      cover: 'Asha songs/Uden jab.jpg'
    },
    {
      name: 'Aaiye meharbaan',
      artist: 'Asha Bhosale',
      url: 'Asha songs/Aaiye meharbaan.mp3',
      cover: 'Asha songs/Aaiye meharbaan.jpg'
    },
    {
      name: 'Do lafzon ki hai',
      artist: 'Asha Bhosale',
      url: 'Asha songs/Do lafzon.mp3',
      cover: 'Asha songs/Do lafzon.jpg'
    },
    {
      name: 'Ek mai aur ek tu',
      artist: 'Asha Bhosale, Kishore Kumar',
      url: 'Asha songs/Ek mai.mp3',
      cover: 'Asha songs/Ek mai.jpg'
    },
    {
      name: 'Gun guna rahe hai bhanware',
      artist: 'Asha Bhosale, Mohammad Rafi',
      url: 'Asha songs/Gun guna.mp3',
      cover: 'Asha songs/Gun guna.jpg'
    },
    {
      name: 'Jab chali thandi hawa',
      artist: 'Asha Bhosale',
      url: 'Asha songs/Jab chali.mp3',
      cover: 'Asha songs/Jab chali.jpg'
    },
    {
      name: 'Sara pyar tumhara',
      artist: 'Asha Bhosale, Kishore Kumar',
      url: 'Asha songs/Saara pyar.mp3',
      cover: 'Asha songs/Saara pyar.jfif'
    },
    {
      name: 'Roka kai baar maine',
      artist: 'Asha Bhosale, Mohammad Rafi',
      url: 'Asha songs/Roka kai.mp3',
      cover: 'Asha songs/Roka kai.jpg'
    },
    {
      name: 'Sar par topi laal',
      artist: 'Asha Bhosale,Mohammad Rafi',
      url: 'Asha songs/Sar par.mp3',
      cover: 'Asha songs/Sar par.jpg'
    },
    {
      name: 'Raat ke hamsafar',
      artist: 'Asha Bhosale, Mohammad Rafi',
      url: 'Asha songs/Raat ke.mp3',
      cover: 'Asha songs/Raat ke.jpg'
    },
    {
      name: 'Chhod do aanchal',
      artist: 'Asha Bhosale, Kishore Kumar',
      url: 'Asha songs/Chhod do.mp3',
      cover: 'Asha songs/Chhod do.jpg'
    },
    {
      name: 'Deewana mastana hua dil',
      artist: 'Asha Bhosale, Mohammad Rafi',
      url: 'Asha songs/Deewana mastana.mp3',
      cover: 'Asha songs/Deewana mastana.jpg'
    },
    {
      name: 'Ek pardesi mera dil le gaya',
      artist: 'Asha Bhosale, Mohammad Rafi',
      url: 'Asha songs/Ek pardesi.mp3',
      cover: 'Asha songs/Ek pardesi.jpg'
    },
    {
      name: 'Yeh mera dil',
      artist: 'Asha Bhosale',
      url: 'Asha songs/Ye mera.mp3',
      cover: 'Asha songs/Ye mera.jpg'
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