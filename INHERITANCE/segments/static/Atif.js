
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
        url: 'Jeene Laga Hoon.mp3',
        cover: 'Jeene Laga Hoon.jpg'
    },{ 
      name: 'Maula',
      artist: 'Atif Aslam',
      url: 'Maula.mp3',
      cover: 'Maula.jpg'
  },
  { 
    name: 'Pehli Nazar Mein',
    artist:'Atif Aslam',
    url: 'Pehli Nazar Mein.mp3',
    cover: 'Pehli Nazar Mein.jpg'
  },
  { 
    name: 'Piya O Re Piya',
    artist: 'Atif Aslam',
    url: 'Piya O Re Piya.mp3',
    cover: 'Piya O Re Piya.jpg'
  },
  { 
    name: 'Pehli Dafa',
    artist: 'Atif Aslam',
    url: 'Pehli Dafa.mp3',
    cover: 'Pehli Dafa.jpg'
  },
  { 
    name: 'Tere Bin',
    artist: 'Atif Aslam',
    url: 'Tere Bin.mp3',
    cover: 'Tere Bin.jpg'
  },
  { 
    name: 'Tere Sang Yaara',
    artist: 'Atif Aslam',
    url: 'Tere Sang Yaara.mp3',
    cover: 'Tere Sang Yaara.jpg'
  },
  { 
    name: 'Woh Lamhe Woh Baatein',
    artist: 'Atif Aslam',
    url: 'Woh Lamhe Woh Baatein.mp3',
    cover: 'Woh Lamhe Woh Baatein.jpg'
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
    url: 'Gulabi Aankhein.mp3',
    cover: 'Gulabi Aankhein.jpg'
  },

  { 
    name: 'Sukoon Mila',
    artist: 'Atif Aslam',
    url: 'Sukoon Mila.mp3',
    cover: 'Sukoon Mila.jpg'
  },

  { 
    name: 'Tera Hone Laga Hoon',
    artist: 'Atif Aslam',
    url: 'Tera Hone Laga Hoon.mp3',
    cover: 'Tera Hone Laga Hoon.jpg'
  },
  { 
    name: 'Tu Mohabbat Hai',
    artist: 'Atif Aslam',
    url: 'Tu Mohabbat Hai.mp3',
    cover: 'Tu Mohabbat Hai.jpg'
  }, 
  { 
    name: 'Main Rang Sharbaton Ka.',
    artist: 'Atif Aslam',
    url: 'Main Rang Sharbaton Ka..mp3',
    cover: 'Main Rang Sharbaton Ka..jpg'
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
  