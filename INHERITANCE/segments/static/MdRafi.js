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
      name: 'Tumne Kisi ki jaan ko',
      artist: 'Mohammad Rafi ',
      url: 'MdRafi Songs/Tumne kisi.mp3',
      cover: 'MdRafi Songs/Tumne kisi.jpg'
    },
    {
      name: 'Dil tera deewana hai sanam',
      artist: 'Mohammad Rafi, Lata Mangeshkar',
      url: 'MdRafi Songs/Dil tera.mp3',
      cover: 'MdRafi Songs/Dil tera.jpg'
    },
    {
      name: 'Tumne mujhe dekha',
      artist: 'Mohammad Rafi',
      url: 'MdRafi Songs/Tumne mujhe.mp3',
      cover: 'MdRafi Songs/Tumne mujhe.jpg'
    },
    {
      name: 'Dil abhi bhara nahi',
      artist: 'Mohammad Rafi, Asha Bhosale',
      url: 'MdRafi Songs/Dil abhi.mp3',
      cover: 'MdRafi Songs/Dil abhi.png'
    },
    {
      name: 'Hue hai tumpe aashiq hum',
      artist: 'Mohammad Rafi',
      url: 'MdRafi Songs/Hue hai.mp3',
      cover: 'MdRafi Songs/Hue hai.jpg'
    },
    {
      name: 'Chura Liya Hai Tumne',
      artist: 'Asha Bhosale,Mohammad Rafi',
      url: 'MdRafi Songs/Chura liya.mp3',
      cover: 'MdRafi Songs/Chura liya.jpg'
    },
    {
      name: 'O mere sona re',
      artist: 'Asha Bhosale,Mohammad Rafi',
      url: 'MdRafi Songs/O mere sona.mp3',
      cover: 'MdRafi Songs/O mere sona.jpg'
    },
    {
      name: 'Isharon isharon mein',
      artist: 'Asha Bhosale,Mohammad Rafi',
      url: 'MdRafi Songs/Isharon isharon.mp3',
      cover: 'MdRafi Songs/Isharon isharon.jpg'
    },
    {
      name: 'Yeh jo chilman hai',
      artist: 'Mohammad Rafi',
      url: 'MdRafi Songs/Ye jo chilman.mp3',
      cover: 'MdRafi Songs/Ye jo chilman.jpg'
    },
    {
      name: 'Tumse o haseena',
      artist: 'Mohammad Rafi,Suman Kalynpur',
      url: 'MdRafi Songs/Tumse o haseena.mp3',
      cover: 'MdRafi Songs/Tumse o haseena.jpg'
    },
    {
      name: 'Zulfon ko hatale chehre se',
      artist: 'Mohammad Rafi',
      url: 'MdRafi Songs/Zulfon ko.mp3',
      cover: 'MdRafi Songs/zulfon ko.jpeg'
    },
    {
      name: 'Khuli palak mein',
      artist: 'Mohammad Rafi',
      url: 'MdRafi Songs/Khuli palak.mp3',
      cover: 'MdRafi Songs/Khuli palak.png'
    },
    {
      name: 'Dhal gaya din',
      artist: 'Mohammad Rafi,Suman Kalyanpur',
      url: 'MdRafi Songs/Dhal gaya.mp3',
      cover: 'MdRafi Songs/Dhal gaya.png'
    },
    {
      name: 'Itna toh yaad hai mujhe',
      artist: 'Mohammad Rafi,Lata Mangeshkar',
      url: 'MdRafi Songs/Itna to.mp3',
      cover: 'MdRafi Songs/Itna to.jpg'
    },
    {
      name: 'Kaun hai jo sapno me aaya',
      artist: 'Mohammad Rafi',
      url: 'MdRafi Songs/Kaun hai jo.mp3',
      cover: 'MdRafi Songs/Kaun hai jo.jpg'
    },
    {
      name: 'Jaanewalo jara',
      artist: 'Mohammad Rafi',
      url: 'MdRafi Songs/Jaanewalo jara.mp3',
      cover: 'MdRafi Songs/Jaanewalo jara.jpg'
    },
    {
      name: 'Badan pe sitare',
      artist: 'Mohammad Rafi',
      url: 'MdRafi Songs/Badan pe sitare.mp3',
      cover: 'MdRafi Songs/Badan pe sitare.jpg'
    },
    {
      name: 'Baharon phool barsaon',
      artist: 'Mohammad Rafi',
      url: 'MdRafi Songs/Baharon phool.mp3',
      cover: 'MdRafi Songs/Baharon phool.jpeg'
    },
    {
      name: 'Wo teer dil pe chala',
      artist: 'Mohammad Rafi,Asha Bhosle',
      url: 'MdRafi Songs/Wo teer.mp3',
      cover: 'MdRafi Songs/Wo teer.jpg'
    },
    {
      name: 'Kitna pyar wada',
      artist: 'Mohammad Rafi,Lata Mangeshkar',
      url: 'MdRafi Songs/Kitna Pyara.mp3',
      cover: 'MdRafi Songs/Kitna pyara.jpg'
    },
    {
      name: 'Khuda bhi aasman se',
      artist: 'Mohammad Rafi',
      url: 'MdRafi Songs/Khuda bhi.mp3',
      cover: 'MdRafi Songs/Khuda bhi.jpg'
    },
    {
      name: 'Mai zindagi ka saath',
      artist: 'Mohammad Rafi',
      url: 'MdRafi Songs/Mai zindagi.mp3',
      cover: 'MdRafi Songs/Mai zindagi.jpg'
    },
    {
      name: 'Patta patta boota boota',
      artist: 'Mohammad Rafi, Lata Mangeshkar',
      url: 'MdRafi Songs/Patta patta.mp3',
      cover: 'MdRafi Songs/Patta patta.jpg'
    },
    {
      name: 'Yeh reshmi zulfen',
      artist: 'Mohammad Rafi',
      url: 'MdRafi Songs/Ye reshmi.mp3',
      cover: 'MdRafi Songs/Ye reshmi.jpg'
    },
    {
      name: 'Deewana hua badal',
      artist: 'Mohammad Rafi, Asha Bhosle',
      url: 'Asha songs/Deewana hua.mp3',
      cover: 'Asha songs/Deewana hua.jpg'
    },
    {
      name: 'Uden jab jab zulfen teri',
      artist: 'Mohammad Rafi, Asha Bhosle',
      url: 'Asha songs/Uden jab.mp3',
      cover: 'Asha songs/Uden jab.png'
    },
    {
      name: 'Gun guna rahe hai bhanware',
      artist: 'Mohammad Rafi, Asha Bhosle',
      url: 'Asha songs/Gun guna.mp3',
      cover: 'Asha songs/Gun guna.jpg'
    },
    {
      name: 'Roka kai baar maine',
      artist: 'Mohammad Rafi, Asha Bhosle',
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
      artist: 'Mohammad Rafi, Asha Bhosle',
      url: 'Asha songs/Raat ke.mp3',
      cover: 'Asha songs/Raat ke.jpg'
    },
    {
      name: 'Bekhudi mein sanam',
      artist: 'Lata Mangeshkar, Mohammad Rafi ',
      url: 'Lata songs/Bekhudi mein.mp3',
      cover: 'Lata songs/Bekhudi mein.jpg'
    },
    {
      name: 'Yuhi tum mujhse baat',
      artist: 'Mohammad Rafi, Lata Mangeshkar',
      url: 'Lata songs/Yuhi tum.mp3',
      cover: 'Lata songs/Yuhi tum.jfif'
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