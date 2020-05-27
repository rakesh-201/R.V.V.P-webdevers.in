$(".album-poster").on("click", function() {
    var dataSwitchId = $(this).attr("data-switch");
    //console.log(dataSwitchId);

    ap.list.switch(dataSwitchId);

    ap.play();
    $("#aplayer").addClass("showPlayer");
});





const ap = new APlayer({
    container: document.getElementById('aplayer'),
    listFolded: true,
    audio: [{
            name: 'Main tere ishq mein',
            artist: 'Lata Mangeshkar',
            url: 'Lata Songs/Main_tere.mp3',
            cover: 'Lata Songs/Main_tere.jfif'
        },
        {
            name: 'Yeh galiyan yeh chaubara',
            artist: 'Lata Mangeshkar',
            url: 'Lata Songs/Yeh_galiyaan.mp3',
            cover: 'Lata Songs/Yeh_galiyaan.jfif'
        },
        {
            name: 'Pyar Kiya To Darna',
            artist: 'Lata Mangeshkar',
            url: 'Lata Songs/Pyar_kiya.mp3',
            cover: 'Lata Songs/Pyar_kiya.jfif'
        },
        {
            name: 'Aaj phir jeene ki',
            artist: 'Lata Mangeshkar',
            url: 'Lata Songs/Aaj_phir.mp3',
            cover: 'Lata Songs/Aaj_phir.jpg'
        },
        {
            name: 'Kitna pyara wada',
            artist: 'Lata Mangeshkar, Mohammad Rafi',
            url: 'MdRafi_Songs/Kitna_Pyara.mp3',
            cover: 'MdRafi_Songs/Kitna_pyara.jpg'
        },
        {
            name: 'Rangeela re',
            artist: 'Lata Mangeshkar',
            url: 'Lata Songs/Rangeela_re.mp3',
            cover: 'Lata Songs/Rangeela_re.jpg'
        },
        {
            name: 'Chhoti si umar mein',
            artist: 'Lata Mangeshkar',
            url: 'Lata Songs/Chhoti_si.mp3',
            cover: 'Lata Songs/Chhoti_si.jfif'
        },
        {
            name: 'Milo na tum to',
            artist: 'Lata Mangeshkar',
            url: 'Lata Songs/Milo_na.mp3',
            cover: 'Lata Songs/Milo_na.jfif'
        },
        {
            name: 'Itna toh yaad hai mujhe',
            artist: 'Lata Mangeshkar, Mohammad Rafi',
            url: 'MdRafi_Songs/Itna_to.mp3',
            cover: 'MdRafi_Songs/Itna_to.jpg'
        },
        {
            name: 'Bekhudi mein sanam',
            artist: 'Lata Mangeshkar, Mohammad Rafi ',
            url: 'Lata Songs/Bekhudi_mein.mp3',
            cover: 'Lata Songs/Bekhudi_mein.jpg'
        },
        {
            name: 'Tere bina Zindagi se koi',
            artist: 'Lata Mangeshkar, Kishore Kumar',
            url: 'Kishore_songs/Tere_bina.mp3',
            cover: 'Kishore_songs/Tere_bina.jpg'
        },
        {
            name: 'Patta patta boota boota',
            artist: 'Lata Mangeshkar, Mohammad Rafi',
            url: 'MdRafi_Songs/Patta_patta.mp3',
            cover: 'MdRafi_Songs/Patta_patta.jpg'
        },
        {
            name: 'Yuhi tum mujhse baat',
            artist: 'Lata Mangeshkar, Mohammad Rafi',
            url: 'Lata songs/Yuhi_tum.mp3',
            cover: 'Lata songs/Yuhi_tum.jfif'
        },
        {
            name: 'Dil tera deewana hai sanam',
            artist: 'Lata Mangeshkar, Mohammad Rafi',
            url: 'MdRafi_Songs/Dil_tera.mp3',
            cover: 'MdRafi_Songs/Dil_tera.jpg'
        },
        {
            name: 'Kora kagaz tha ye man mera',
            artist: 'Lata Mangeshkar, Kishore Kumar',
            url: 'Kishore_songs/Kora_kagaz.mp3',
            cover: 'Kishore_songs/Kora_kagaz.jpg'
        },
        {
            name: 'Gaata rahe mera dil',
            artist: 'Lata Mangeshkar, Kishore Kumar',
            url: 'Kishore_songs/Gaata_rahe.mp3',
            cover: 'Kishore_songs/Gaata_rahe.jpg'
        },
        {
            name: 'Gum hai kisi ke',
            artist: 'Lata Mangeshkar, Kishore Kumar',
            url: 'Kishore_songs/Gum_hai.mp3',
            cover: 'Kishore_songs/Gum_hai.jpg'
        },
        {
            name: 'Jai jai shiv shankar',
            artist: 'Lata Mangeshkar, Kishore Kumar',
            url: 'Kishore_songs/Jai_jai.mp3',
            cover: 'Kishore_songs/Jai_jai.jpg'
        },
        {
            name: 'Rimjhim gire saavan',
            artist: 'Lata Mangeshkar, Kishore Kumar',
            url: 'Kishore_songs/Rimjhim_gire.mp3',
            cover: 'Kishore_songs/Rimjhim_gire.jpg'
        },
        {
            name: 'Tum aa gaye ho',
            artist: 'Lata mageshkar, Kishore Kumar',
            url: 'Kishore_songs/Tum_aa.mp3',
            cover: 'Kishore_songs/Tum_aa.jpg'
        }
    ]
});
let search = document.getElementById("searchTxt");
search.addEventListener("input", function() {
    let inputVal = search.value;
    console.log("input event fired!", inputVal);
    let songCards = document.getElementsByClassName("songCard");
    Array.from(songCards).forEach(function(element) {
        let songTxt = element.getElementsByTagName("h4")[0].innerText;
        if (songTxt.includes(inputVal)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    })

})