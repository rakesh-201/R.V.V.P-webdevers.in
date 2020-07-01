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
            artist: 'Loafer',
            url: 'static/Lata_Songs/Main_tere.mp3',
            cover: 'static/Lata_Songs/Main_tere.jfif'
        },
        {
            name: 'Yeh galiyan yeh chaubara',
            artist: 'Prem Rog',
            url: 'static/Lata_Songs/Yeh_galiyaan.mp3',
            cover: 'static/Lata_Songs/Yeh_galiyaan.jfif'
        },
        {
            name: 'Pyar Kiya To Darna',
            artist: 'Mughal-E-Azam',
            url: 'static/Lata_Songs/Pyar_kiya.mp3',
            cover: 'static/Lata_Songs/Pyar_kiya.jfif'
        },
        {
            name: 'Aaj phir jeene ki',
            artist: 'Guide',
            url: 'static/Lata_Songs/Aaj_phir.mp3',
            cover: 'static/Lata_Songs/Aaj_phir.jpg'
        },
        {
            name: 'Kitna pyara wada',
            artist: 'Caravan',
            url: 'static/MdRafi_Songs/Kitna_Pyara.mp3',
            cover: 'static/MdRafi_Songs/Kitna_pyara.jpg'
        },
        {
            name: 'Rangeela re',
            artist: 'Prem Pujari',
            url: 'static/Lata_Songs/Rangeela_re.mp3',
            cover: 'static/Lata_Songs/Rangeela_re.jpg'
        },
        {
            name: 'Chhoti si umar mein',
            artist: 'Bairag',
            url: 'static/Lata_Songs/Chhoti_si.mp3',
            cover: 'static/Lata_Songs/Chhoti_si.jfif'
        },
        {
            name: 'Milo na tum to',
            artist: 'Heer Ranjha',
            url: 'static/Lata_Songs/Milo_na.mp3',
            cover: 'static/Lata_Songs/Milo_na.jfif'
        },
        {
            name: 'Itna toh yaad hai mujhe',
            artist: 'Mehboob Ki Mehandi',
            url: 'static/MdRafi_Songs/Itna_to.mp3',
            cover: 'static/MdRafi_Songs/Itna_to.jpg'
        },
        {
            name: 'Bekhudi mein sanam',
            artist: 'Haseena Man Jayegi',
            url: 'static/Lata_Songs/Bekhudi_mein.mp3',
            cover: 'static/Lata_Songs/Bekhudi_mein.jpg'
        },
        {
            name: 'Tere bina Zindagi se koi',
            artist: 'Aandhi',
            url: 'static/Kishore_songs/Tere_bina.mp3',
            cover: 'static/Kishore_songs/Tere_bina.jpg'
        },
        {
            name: 'Patta patta boota boota',
            artist: 'Ek Nazar',
            url: 'static/MdRafi_Songs/Patta_patta.mp3',
            cover: 'static/MdRafi_Songs/Patta_patta.jpg'
        },
        {
            name: 'Yuhi tum mujhse baat',
            artist: 'Sachha Zhuta',
            url: 'static/Lata_songs/Yuhi_tum.mp3',
            cover: 'static/Lata_Songs/Yuhi_tum.jfif'
        },
        {
            name: 'Dil tera deewana hai sanam',
            artist: 'Dil tera Deewana',
            url: 'static/MdRafi_Songs/Dil_tera.mp3',
            cover: 'static/MdRafi_Songs/Dil_tera.jpg'
        },
        {
            name: 'Kora kagaz tha ye man mera',
            artist: 'Aaradhna',
            url: 'static/Kishore_songs/Kora_kagaz.mp3',
            cover: 'static/Kishore_songs/Kora_kagaz.jpg'
        },
        {
            name: 'Gaata rahe mera dil',
            artist: 'Guide',
            url: 'static/Kishore_songs/Gaata_rahe.mp3',
            cover: 'static/Kishore_songs/Gaata_rahe.jpg'
        },
        {
            name: 'Gum hai kisi ke',
            artist: 'Rampur ka Lakshman',
            url: 'static/Kishore_songs/Gum_hai.mp3',
            cover: 'static/Kishore_songs/Gum_hai.jpg'
        },
        {
            name: 'Jai jai shiv shankar',
            artist: 'Aap Ki Kasam',
            url: 'static/Kishore_songs/Jai_jai.mp3',
            cover: 'static/Kishore_songs/Jai_jai.jpg'
        },
        {
            name: 'Rimjhim gire saavan',
            artist: 'Manzil',
            url: 'static/Kishore_songs/Rimjhim_gire.mp3',
            cover: 'static/Kishore_songs/Rimjhim_gire.jpg'
        },
        {
            name: 'Tum aa gaye ho',
            artist: 'Aandhi',
            url: 'static/Kishore_songs/Tum_aa.mp3',
            cover: 'static/Kishore_songs/Tum_aa.jpg'
        },
        {
            name: 'Aaja teri yaad aayi',
            artist: 'Charas',
            url: 'static/MdRafi_Songs/Aaja_teri.mp3',
            cover: 'static/MdRafi_Songs/Aaja_teri.jpg'
        },
        {
            name: 'Tere bina jiya jaye na',
            artist: 'Ghar',
            url: 'static/Lata_Songs/Tere_bina_jiya.mp3',
            cover: 'static/Lata_Songs/Tere_bina_jiya.jpg'
        },
        {
            name: 'Ajeeb dastan',
            artist: 'Dil Apna Aur Preet Parai',
            url: 'static/Lata_Songs/Ajib_dastan.mp3',
            cover: 'static/Lata_Songs/Ajib_dastan.jpeg'
        },
        {
            name: 'Tune o rangeele',
            artist: 'Kudrat',
            url: 'static/Lata_Songs/Tune_o_rangeele.mp3',
            cover: 'static/Lata_Songs/Tune_o_rangeele.jpg'
        },
        {
            name: 'Naam gum jaaeyga',
            artist: 'Kinara',
            url: 'static/Lata_Songs/Naam_gum.mp3',
            cover: 'static/Lata_Songs/Naam_gum.jpg'
        },
        {
            name: 'Sheesha ho ya dil ho',
            artist: 'Asha',
            url: 'static/Lata_Songs/Sheesha_ho.mp3',
            cover: 'static/Lata_Songs/Sheesha_ho.jpg'
        },
        {
            name: 'Sun sahiba soon',
            artist: 'Ram Teri Ganga Maili',
            url: 'static/Lata_Songs/Sun_sahiba.mp3',
            cover: 'static/Lata_Songs/Sun_sahiba.jpg'
        },
        {
            name: 'Raina beeti jaaye',
            artist: 'Amar Prem',
            url: 'static/Lata_Songs/Raina_beeti.mp3',
            cover: 'static/Lata_Songs/Raina_beeti.jpg'
        },
        {
            name: 'Rajnigandha phool tumhare',
            artist: 'Rajnigandha',
            url: 'static/Lata_Songs/Rajnigandha.mp3',
            cover: 'static/Lata_Songs/Rajnigandha.jpg'
        },
        {
            name: 'Bheegi bheegi raaton me',
            artist: 'Ajanbee',
            url: 'static/Lata_Songs/Bheegi_bheegi.mp3',
            cover: 'static/Lata_Songs/Bheegi_bheegi.jpeg'
        },
        {
            name: 'Suno kaho suna',
            artist: 'Aap Ki Kasam',
            url: 'static/Lata_Songs/Suno_kaho.mp3',
            cover: 'static/Lata_Songs/Suno_kaho.jpeg'
        },
        {
            name: 'Chup gaye saare',
            artist: 'Do raaste',
            url: 'static/Lata_Songs/Chup_gaye.mp3',
            cover: 'static/Lata_Songs/Chup_gaye.jpeg'
        },
        {
            name: 'Din sara guzara',
            artist: 'Junglee',
            url: 'static/Lata_Songs/Din_sara.mp3',
            cover: 'static/Lata_Songs/Din_sara.jpg'
        },
        {
            name: 'Ab aan milo sajna',
            artist: 'Aan milo sajna',
            url: 'static/Lata_Songs/Aan_milo.mp3',
            cover: 'static/Lata_Songs/Aan_milo.jpg'
        },
        {
            name: 'Piya tose naina lage',
            artist: 'Guide',
            url: 'static/Lata_Songs/Piya_tose.mp3',
            cover: 'static/Lata_Songs/Piya_tose.png'
        },
        {
            name: 'Aaja piya tohe',
            artist: 'Baharon Ke Sapne',
            url: 'static/Lata_Songs/Aaja_piya.mp3',
            cover: 'static/Lata_Songs/Aaja_piya.jpg'
        }

    ]
});


console.log(ap.audio);
let audiofiles = [
    'Lata_Songs/Main_tere.mp3', 'Lata_Songs/Yeh_galiyaan.mp3', 'Lata_Songs/Pyar_kiya.mp3',
    'Lata_Songs/Aaj_phir.mp3', 'MdRafi_Songs/Kitna_Pyara.mp3', 'Lata_Songs/Rangeela_re.mp3',
    'Lata_Songs/Chhoti_si.mp3', 'Lata_Songs/Milo_na.mp3', 'MdRafi_Songs/Itna_to.mp3',
    'Lata_Songs/Bekhudi_mein.mp3', 'Kishore_songs/Tere_bina.mp3', 'MdRafi_Songs/Patta_patta.mp3',
    'Lata_songs/Yuhi_tum.mp3', 'MdRafi_Songs/Dil_tera.mp3', 'Kishore_songs/Kora_kagaz.mp3',
    'Kishore_songs/Gaata_rahe.mp3', 'Kishore_songs/Gum_hai.mp3', 'Kishore_songs/Jai_jai.mp3',
    'Kishore_songs/Rimjhim_gire.mp3', 'Kishore_songs/Tum_aa.mp3', 'MdRafi_Songs/Aaja_teri.mp3',
    'Lata_Songs/Tere_bina_jiya.mp3', 'Lata_Songs/Ajib_dastan.mp3', 'Lata_Songs/Tune_o_rangeele.mp3',
    'Lata_Songs/Naam_gum.mp3', 'Lata_Songs/Sheesha_ho.mp3', 'Lata_Songs/Sun_sahiba.mp3',
    'Lata_Songs/Raina_beeti.mp3', 'Lata_Songs/Rajnigandha.mp3', 'Lata_Songs/Bheegi_bheegi.mp3',
    'Lata_Songs/Suno_kaho.mp3', 'Lata_Songs/Chup_gaye.mp3', 'Lata_Songs/Din_sara.mp3',
    'Lata_Songs/Aan_milo.mp3', 'Lata_Songs/Piya_tose.mp3', 'Lata_Songs/Aaja_piya.mp3',
];








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



let songCards = document.getElementsByClassName("songCard");
var myFavprop = JSON.parse(localStorage.getItem("favProp"));
// console.log(myFavprop);
Array.from(songCards).forEach((e) => {
    let songCard = e.childNodes;
    let songName = songCard[3].childNodes[1].innerHTML;
    if (myFavprop) {
        if (myFavprop.some(e => e.songName === songName)) {
            /*localStorage contains this song*/
            console.log(songCard[7].childNodes[0]);
            let favBtn = songCard[7].childNodes[0];
            console.log("Both are same");
            console.log(favBtn);
            favBtn.classList = "fa fa-heart";
        }
    }
})


$(function() {
    $(".favBtn").on("click", function(e) {
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
            audioFile: `static/${audioFile}`
        }
        var myFavprop = JSON.parse(localStorage.getItem("favProp"));
        console.log(propToAdd);
        console.log(myFavprop);
        if (icon.classList == "fa fa-heart") {

            if (myFavprop == null) {
                myFavprop = [];
            }
            console.log(myFavprop);
            if (myFavprop != null) {
                if (myFavprop.some(e => e.songName === propToAdd.songName)) {
                    console.log("already included");
                    if (propToAdd == myFavprop[j]) {
                        propToAdd = {};
                    }
                } else {
                    console.log("pushing");
                    myFavprop.push(propToAdd);
                }
            }
            localStorage.setItem("favProp", JSON.stringify(myFavprop));
        }
        if (icon.classList == "fa fa-heart-o") {
            for (let j = 0; j < myFavprop.length; j++) {
                if ((myFavprop[j].songName == propToAdd.songName) && (myFavprop[j].songInfo == propToAdd.songInfo)) {
                    console.log("already included");
                    myFavprop.splice(j, 1);
                }
                console.log(myFavprop);
            }
            localStorage.setItem("favProp", JSON.stringify(myFavprop));
        }

    })
})