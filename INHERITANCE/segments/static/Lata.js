$(".album-poster").on("click", function() {
    var dataSwitchId = $(this).attr("data-switch");
    //console.log(dataSwitchId);

    ap.list.switch(dataSwitchId);

    ap.play();
    $("#aplayer").addClass("showPlayer");
});

$(function() {
    $('[data-toggle="popover"]').popover()
})

$('.popover-dismiss').popover({
    trigger: 'focus'
})




const ap = new APlayer({
    container: document.getElementById('aplayer'),
    listFolded: true,
    audio: [{
            name: 'Main tere ishq mein',
            artist: 'Lata Mangeshkar',
            url: 'Lata_Songs/Main_tere.mp3',
            cover: 'Lata_Songs/Main_tere.jfif'
        },
        {
            name: 'Yeh galiyan yeh chaubara',
            artist: 'Lata Mangeshkar',
            url: 'Lata_Songs/Yeh_galiyaan.mp3',
            cover: 'Lata_Songs/Yeh_galiyaan.jfif'
        },
        {
            name: 'Pyar Kiya To Darna',
            artist: 'Lata Mangeshkar',
            url: 'Lata_Songs/Pyar_kiya.mp3',
            cover: 'Lata_Songs/Pyar_kiya.jfif'
        },
        {
            name: 'Aaj phir jeene ki',
            artist: 'Lata Mangeshkar',
            url: 'Lata_Songs/Aaj_phir.mp3',
            cover: 'Lata_Songs/Aaj_phir.jpg'
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
            url: 'Lata_Songs/Rangeela_re.mp3',
            cover: 'Lata_Songs/Rangeela_re.jpg'
        },
        {
            name: 'Chhoti si umar mein',
            artist: 'Lata Mangeshkar',
            url: 'Lata_Songs/Chhoti_si.mp3',
            cover: 'Lata_Songs/Chhoti_si.jfif'
        },
        {
            name: 'Milo na tum to',
            artist: 'Lata Mangeshkar',
            url: 'Lata_Songs/Milo_na.mp3',
            cover: 'Lata_Songs/Milo_na.jfif'
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
            url: 'Lata_Songs/Bekhudi_mein.mp3',
            cover: 'Lata_Songs/Bekhudi_mein.jpg'
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
            url: 'Lata_songs/Yuhi_tum.mp3',
            cover: 'Lata_Songs/Yuhi_tum.jfif'
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
        },
        {
            name: 'Aaja teri yaad aayi',
            artist: 'Lata mageshkar, Mohammad Rafi',
            url: 'MdRafi_Songs/Aaja_teri.mp3',
            cover: 'MdRafi_Songs/Aaja_teri.jpg'
        },
        {
            name: 'Tere bina jiya jaye na',
            artist: 'Lata mageshkar',
            url: 'Lata_Songs/Tere_bina_jiya.mp3',
            cover: 'Lata_Songs/Tere_bina_jiya.jpg'
        },
        {
            name: 'Ajeeb dastan',
            artist: 'Lata mageshkar',
            url: 'Lata_Songs/Ajib_dastan.mp3',
            cover: 'Lata_Songs/Ajib_dastan.jpeg'
        },
        {
            name: 'Tune o rangeele',
            artist: 'Lata mageshkar',
            url: 'Lata_Songs/Tune_o_rangeele.mp3',
            cover: 'Lata_Songs/Tune_o_rangeele.jpg'
        },
        {
            name: 'Naam gum jaaeyga',
            artist: 'Lata mageshkar',
            url: 'Lata_Songs/Naam_gum.mp3',
            cover: 'Lata_Songs/Naam_gum.jpg'
        },
        {
            name: 'Sheesha ho ya dil ho',
            artist: 'Lata mageshkar',
            url: 'Lata_Songs/Sheesha_ho.mp3',
            cover: 'Lata_Songs/Sheesha_ho.jpg'
        },
        {
            name: 'Sun sahiba soon',
            artist: 'Lata mageshkar',
            url: 'Lata_Songs/Sun_sahiba.mp3',
            cover: 'Lata_Songs/Sun_sahiba.jpg'
        },
        {
            name: 'Raina beeti jaaye',
            artist: 'Lata mageshkar',
            url: 'Lata_Songs/Raina_beeti.mp3',
            cover: 'Lata_Songs/Raina_beeti.jpg'
        },
        {
            name: 'Rajnigandha phool tumhare',
            artist: 'Lata mageshkar',
            url: 'Lata_Songs/Rajnigandha.mp3',
            cover: 'Lata_Songs/Rajnigandha.jpg'
        },
        {
            name: 'Bheegi bheegi raaton me',
            artist: 'Lata mageshkar,Kishore Kumar',
            url: 'Lata_Songs/Bheegi bheegi.mp3',
            cover: 'Lata_Songs/Bheegi bheegi.jpeg'
        },
        {
            name: 'Suno kaho suna',
            artist: 'Lata mageshkar,Kishore Kumar',
            url: 'Lata_Songs/Suno_kaho.mp3',
            cover: 'Lata_Songs/Suno_kaho.jpeg'
        },
        {
            name: 'Chup gaye saare',
            artist: 'Lata mageshkar, Mohammad Rafi',
            url: 'Lata_Songs/Chup gaye.mp3',
            cover: 'Lata_Songs/Chup gaye.jpeg'
        },
        {
            name: 'Din sara guzara',
            artist: 'Lata mageshkar, Mohammad Rafi',
            url: 'Lata_Songs/Din sara.mp3',
            cover: 'Lata_Songs/Din sara.jpg'
        },
        {
            name: 'Ab aan milo sajna',
            artist: 'Lata mageshkar, Mohammad Rafi',
            url: 'Lata_Songs/Aan milo.mp3',
            cover: 'Lata_Songs/Aan milo.jpg'
        },
        {
            name: 'Piya tose naina lage',
            artist: 'Lata mageshkar',
            url: 'Lata_Songs/Piya_tose.mp3',
            cover: 'Lata_Songs/Piya_tose.png'
        },
        {
            name: 'Aaja piya tohe',
            artist: 'Lata mageshkar',
            url: 'Lata_Songs/Aaja_piya.mp3',
            cover: 'Lata_Songs/Aaja_piya.jpg'
        }

    ]
});
let search = document.getElementById("searchTxt");
search.addEventListener("input", function() {
    let inputVal = search.value;
    inputVal = inputVal.toLocaleLowerCase();
    console.log("input event fired!", inputVal);
    let songCards = document.getElementsByClassName("songCard");
    Array.from(songCards).forEach(function(element) {
        let songTxt = element.getElementsByTagName("h4")[0].innerText;
        songTxt = songTxt.toLocaleLowerCase();
        if (songTxt.includes(inputVal)) {
            element.style.display = "block";
        } else {
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
    } else {
        icon.classList = "fa fa-heart-o";
    }

}