
  $(".album-poster").on("click",function(){
    var dataSwitchId=$(this).attr("data-switch");
    //console.log(dataSwitchId);
     
    ap.list.switch(dataSwitchId);
    
    ap.play();
    $("#aplayer").addClass("showPlayer");
  });
  
  
  const ap = new APlayer({
    container: document.getElementById('aplayer'),
   listFolded:true,
    audio: [
      { 
        name: 'Jeene Laga Hoon',
        artist: 'Arjit Singh',
        url: 'Jeene_Laga_Hoon.mp3',
        cover: 'Jeene_Laga_Hoon.jpg'
    },{ 
      name: 'Maula',
      artist: 'Atif Aslam',
      url: 'Maula.mp3',
      cover: 'Maula.jpg'
  },
  { 
    name: 'Pehli Nazar Mein',
    artist:'Atif Aslam',
    url: 'Pehli_Nazar_Mein.mp3',
    cover: 'Pehli_Nazar_Mein.jpg'
  },
  { 
    name: 'Piya O Re Piya',
    artist: 'Atif Aslam',
    url: 'Piya_O_Re_Piya.mp3',
    cover: 'Piya_O_Re_Piya.jpg'
  },
  { 
    name: 'Pehli Dafa',
    artist: 'Atif Aslam',
    url: 'Pehli_Dafa.mp3',
    cover: 'Pehli_Dafa.jpg'
  },
  { 
    name: 'Tere Bin',
    artist: 'Atif Aslam',
    url: 'Tere_Bin.mp3',
    cover: 'Tere_Bin.jpg'
  },
  { 
    name: 'Tere Sang Yaara',
    artist: 'Atif Aslam',
    url: 'Tere_Sang_Yaara.mp3',
    cover: 'Tere_Sang_Yaara.jpg'
  },
  { 
    name: 'Woh Lamhe Woh Baatein',
    artist: 'Atif Aslam',
    url: 'Woh_Lamhe_Woh_Baatein.mp3',
    cover: 'Woh_Lamhe_Woh_Baatein.jpg'
  },
  { 
    name: 'Baarish',
    artist: 'Atif Aslam',
    url: 'Baarish.mp3',
    cover: 'Baarish.jpg'
  },
  { 
    name: 'Gulabi Aankhein',
    artist: 'Atif Aslam',
    url: 'Gulabi_Aankhein.mp3',
    cover: 'Gulabi_Aankhein.jpg'
  },

  { 
    name: 'Sukoon Mila',
    artist: 'Atif Aslam',
    url: 'Sukoon_Mila.mp3',
    cover: 'Sukoon_Mila.jpg'
  },

  { 
    name: 'Tera Hone Laga Hoon',
    artist: 'Atif Aslam',
    url: 'Tera_Hone_Laga_Hoon.mp3',
    cover: 'Tera_Hone_Laga_Hoon.jpg'
  },
  { 
    name: 'Tu Mohabbat Hai',
    artist: 'Atif Aslam',
    url: 'Tu_Mohabbat_Hai.mp3',
    cover: 'Tu_Mohabbat_Hai.jpg'
  }, 
  { 
    name: 'Main Rang Sharbaton Ka.',
    artist: 'Atif Aslam',
    url: 'Main_Rang_Sharbaton_Ka..mp3',
    cover: 'Main_Rang_Sharbaton_Ka..jpg'
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
  
