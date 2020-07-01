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
            name: 'A Savita Aga Savita',
            artist: '',
            url: 'static/Marathi_songs/A_Savita_Aga_Savita.mp3',
            cover: 'static/Marathi_songs/A_Savita_Aga_Savita.jpg'
        },
        {
            name: 'Aai Tujha deul.jpg',
            artist: '',
            url: 'static/Marathi_songs/Aai_Tujha_deul.mp3',
            cover: 'static/Marathi_songs/Aai_Tujha_deul.jpg'
        },
        {
            name: 'Aamdar Zalya Sarkha Vatatay',
            artist: '',
            url: 'static/Marathi_songs/Aamdar_Zalya_Sarkha_Vatatay.mp3',
            cover: 'static/Marathi_songs/Aamdar_Zalya_Sarkha_Vatatay.jpg'
        },
        {
            name: 'Aaple Saheb Thackrey',
            artist: '',
            url: 'static/Marathi_songs/Aaple_Saheb_Thackrey.mp3',
            cover: 'static/Marathi_songs/Aaple_Saheb_Thackrey.jpg'
        },
        {
            name: 'Aatach Baya Ka Baavarla',
            artist: '',
            url: 'static/Marathi_songs/Aatach_Baya_Ka_Baavarla.mp3',
            cover: 'static/Marathi_songs/Aatach_Baya_Ka_Baavarla.jpg'
        },
        {
            name: 'Aho Mami Tumchi Mulagi Lay Sundar',
            artist: '',
            url: 'static/Marathi_songs/Aho_Mami_Tumchi_Mulagi_Lay_Sundar.mp3',
            cover: 'static/Marathi_songs/Aho_Mami_Tumchi_Mulagi_Lay_Sundar.jpg'
        },
        {
            name: 'Apsara Aali',
            artist: 'Sonalee Kulkarni and Ajay-Atul',
            url: 'static/Marathi_songs/Apsara_Aali.mp3',
            cover: 'static/Marathi_songs/Apsara_Aali.jpg'
        },
        {
            name: 'Bablya Ekas Kesavar Fuge',
            artist: '',
            url: 'static/Marathi_songs/Bablya_Ekas_Kesavar_Fuge.mp3',
            cover: 'static/Marathi_songs/Bablya_Ekas_Kesavar_Fuge.jpg'
        },
        {
            name: 'Bhau - Shambu',
            artist: 'Shambu',
            url: 'static/Marathi_songs/Bhau-Shambu.mp3',
            cover: 'static/Marathi_songs/Bhau-Shambu.jpg'
        },
        {
            name: 'Fandry Song',
            artist: 'Ajay-Atul',
            url: 'static/Marathi_songs/Fandry_Song.mp3',
            cover: 'static/Marathi_songs/Fandry_Song.jpg'
        },
        {
            name: 'Gondhal',
            artist: 'Ajay-Atul',
            url: 'static/Marathi_songs/Gondhal.mp3',
            cover: 'static/Marathi_songs/Gondhal.jpg'
        },
        {
            name: 'Govyachya Kinaryav',
            artist: '',
            url: 'static/Marathi_songs/Govyachya_Kinaryav.mp3',
            cover: 'static/Marathi_songs/Govyachya_Kinaryav.jpg'
        },
        {
            name: 'Gulabachi Kali',
            artist: '',
            url: 'static/Marathi_songs/Gulabachi_Kali.mp3',
            cover: 'static/Marathi_songs/Gulabachi_Kali.jpg'
        },
        {
            name: 'Hi Poli Saajuk',
            artist: 'Reshma Sonawane',
            url: 'static/Marathi_songs/Hi_Poli_Saajuk.mp3',
            cover: 'static/Marathi_songs/Hi_Poli_Saajuk.jpg'
        },
        {
            name: 'Halad Lagali',
            artist: '',
            url: 'static/Marathi_songs/Halad_Lagali.mp3',
            cover: 'static/Marathi_songs/Halad_Lagali.jpg'
        },
        {
            name: 'Ishkkachi Nauka',
            artist: '',
            url: 'static/Marathi_songs/Ishkkachi_Nauka.mp3',
            cover: 'static/Marathi_songs/Ishkkachi_Nauka.jpg'
        },
        {
            name: 'Ka Kalena',
            artist: '',
            url: 'static/Marathi_songs/Ka_Kalena.mp3',
            cover: 'static/Marathi_songs/Ka_Kalena.jpg'
        },
        {
            name: 'Khel Mandala',
            artist: '',
            url: 'static/Marathi_songs/Khel_Mandala.mp3',
            cover: 'static/Marathi_songs/Khel_Mandala.jpg'
        },
        {
            name: 'Koliwada Jhingla',
            artist: '',
            url: 'static/Marathi_songs/Koliwada_Jhingla.mp3',
            cover: 'static/Marathi_songs/Koliwada_Jhingla.jpg'
        },
        {
            name: 'Kombadi Palali',
            artist: '',
            url: 'static/Marathi_songs/Kombadi_Palali.mp3',
            cover: 'static/Marathi_songs/Kombadi_Palali.jpg'
        },
        {
            name: 'Mala Ved Lagale',
            artist: '',
            url: 'static/Marathi_songs/Mala_Ved_Lagale.mp3',
            cover: 'static/Marathi_songs/Mala_Ved_Lagale.jpg'
        },
        {
            name: 'O kaka',
            artist: '',
            url: 'static/Marathi_songs/O_kaka.mp3',
            cover: 'static/Marathi_songs/O_kaka.jpg'
        },
        {
            name: 'O Raje',
            artist: '',
            url: 'static/Marathi_songs/O_Raje.mp3',
            cover: 'static/Marathi_songs/O_Raje.jpg'
        },
        {
            name: 'Pune RAP',
            artist: '',
            url: 'static/Marathi_songs/Pune_RAP.mp3',
            cover: 'static/Marathi_songs/Pune_RAP.jpg'
        },
        {
            name: 'Saavar Re Mana',
            artist: '',
            url: 'static/Marathi_songs/Saavar_Re_Mana.mp3',
            cover: 'static/Marathi_songs/Saavar_Re_Mana.jpg'
        },
        {
            name: 'Sairat Zala Ji',
            artist: 'Ajay-Atul',
            url: 'static/Marathi_songs/Sairat_Zala_Ji.mp3',
            cover: 'static/Marathi_songs/Sairat_Zala_Ji.jpg'
        },
        {
            name: 'Shantabai',
            artist: '',
            url: 'static/Marathi_songs/Shantabia.mp3',
            cover: 'static/Marathi_songs/Shantabia.jpg'
        },
        {
            name: 'Shitti Vajali',
            artist: '',
            url: 'static/Marathi_songs/Shitti_Vajali.mp3',
            cover: 'static/Marathi_songs/Shitti_Vajali.jpg'
        },
        {
            name: 'TAN TAN BHAN BHAN',
            artist: 'Shambu',
            url: 'static/Marathi_songs/TAN_TAN_BHAN_BHAN.mp3',
            cover: 'static/Marathi_songs/TAN_TAN_BHAN_BHAN.jpg'
        },
        {
            name: 'Tola Tola',
            artist: 'Bela Shende and Amitraj',
            url: 'static/Marathi_songs/Tola_Tola.mp3',
            cover: 'static/Marathi_songs/Tola_Tola.jpg'
        },
        {
            name: 'Tu Chal Re Mana',
            artist: 'Virat M and Mahesh M',
            url: 'static/Marathi_songs/Tu_Chal_Re_Mana.mp3',
            cover: 'static/Marathi_songs/Tu_Chal_Re_Mana.jpg'
        },
        {
            name: 'Wajle Ki Bara',
            artist: 'Amrita Khanvelkar and Ajay-Atul',
            url: 'static/Marathi_songs/Wajle_Ki_Bara.mp3',
            cover: 'static/Marathi_songs/Wajle_Ki_Bara.jpg'
        },
        {
            name: 'Yad Lagla',
            artist: 'Ajay-Atul',
            url: 'static/Marathi_songs/Yad_Lagla.mp3',
            cover: 'static/Marathi_songs/Yad_Lagla.jpg'
        },
        {
            name: 'Zingat',
            artist: 'Ajay-Atul',
            url: 'static/Marathi_songs/Zingat.mp3',
            cover: 'static/Marathi_songs/Zingat.jpg'
        },
        {
            name: 'Khulach Zalo Ga',
            artist: 'Aishwarya Malgave',
            url: 'static/Marathi_songs/Khulach_Zalo_Ga.mp3',
            cover: 'static/Marathi_songs/Khulach_Zalo_Ga.jpg'
        },
        {
            name: 'Zindagi Zindagi',
            artist: 'Sachin Dev Burman',
            url: 'static/Marathi_songs/Zindagi_Zindagi.mp3',
            cover: 'static/Marathi_songs/Zindagi_Zindagi.jpg'
        },
        {
            name: 'Jiv Rangala',
            artist: 'Ajay-Atul',
            url: 'static/Marathi_songs/Jiv_Rangala.mp3',
            cover: 'static/Marathi_songs/Jiv_Rangala.jpg'
        },
        {
            name: 'Man UdhanVaryache',
            artist: 'Shankar Mahadevan',
            url: 'static/Marathi_songs/Man_Udhan_Varyache.mp3',
            cover: 'static/Marathi_songs/Man_Udhan_Varyache.jpg'
        },
        {
            name: 'Tu Hi Re Maza Mitva',
            artist: 'Shankar Mahadevan',
            url: 'static/Marathi_songs/Tu_Hi_Re_Maza_Mitva.mp3',
            cover: 'static/Marathi_songs/Tu_Hi_Re_Maza_Mitva.jpg'
        },
        {
            name: 'Hrudayat Vaje Something',
            artist: '',
            url: 'static/Marathi_songs/Hrudayat_Vaje_Something.mp3',
            cover: 'static/Marathi_songs/Hrudayat_Vaje_Something.jpg'
        },
        {
            name: 'Rakhumai Rakhumai',
            artist: '',
            url: 'static/Marathi_songs/Rakhumai_Rakhumai.mp3',
            cover: 'static/Marathi_songs/Rakhumai_Rakhumai.jpg'
        },
        {
            name: 'Sur Niragas Ho',
            artist: '',
            url: 'static/Marathi_songs/Sur_Niragas_Ho.mp3',
            cover: 'static/Marathi_songs/Sur_Niragas_Ho.jpg'
        },
        {
            name: 'Saath De Tu Mala',
            artist: '',
            url: 'static/Marathi_songs/Saath_De_Tu_Mala.mp3',
            cover: 'static/Marathi_songs/Saath_De_Tu_Mala.jpg'
        },
        {
            name: 'Kitida Navyane Tula Athvave',
            artist: '',
            url: 'static/Marathi_songs/Kitida_Navyane_Tula_Athvave.mp3',
            cover: 'static/Marathi_songs/Kitida_Navyane_Tula_Athvave.jpg'
        },
        {
            name: 'Deva Thujha Gabharyala',
            artist: '',
            url: 'static/Marathi_songs/Deva_Thujha_Gabharyala.mp3',
            cover: 'static/Marathi_songs/Deva_Thujha_Gabharyala.jpg'
        },
        {
            name: 'Bulati Hai Magar Jane Ka Nahi',
            artist: '',
            url: 'static/Marathi_songs/Bulati_Hai_Magar_Jane_Ka_Nahi.mp3',
            cover: 'static/Marathi_songs/Bulati_Hai_Magar_Jane_Ka_Nahi.jpg'
        }
    ]
});


console.log(ap.audio);
let audiofiles = [
    'static/Marathi_songs/A_Savita_Aga_Savita.mp3', 'static/Marathi_songs/Aai_Tujha_deul.mp3', 'static/Marathi_songs/Aamdar_Zalya_Sarkha_Vatatay.mp3',
    'static/Marathi_songs/Aaple_Saheb_Thackrey.mp3', 'static/Marathi_songs/Aatach_Baya_Ka_Baavarla.mp3', 'static/Marathi_songs/Aho_Mami_Tumchi_Mulagi_Lay_Sundar.mp3',
    'static/Marathi_songs/Apsara_Aali.mp3', 'static/Marathi_songs/Bablya_Ekas_Kesavar_Fuge.mp3', 'static/Marathi_songs/Bhau_-_Shambu.mp3',
    'static/Marathi_songs/Fandry_Song.mp3', 'static/Marathi_songs/Gondhal.mp3', 'static/Marathi_songs/Govyachya_Kinaryav.mp3',
    'static/Marathi_songs/Gulabachi_Kali.mp3', 'static/Marathi_songs/Hi_Poli_Saajuk.mp3', 'static/Marathi_songs/Halad_Lagali.mp3',
    'static/Marathi_songs/Ishkkachi_Nauka.mp3', 'static/Marathi_songs/Ka_Kalena.mp3', 'static/Marathi_songs/Khel_Mandala.mp3',
    'static/Marathi_songs/Koliwada_Jhingla.mp3', 'static/Marathi_songs/Kombadi_Palali.mp3', 'static/Marathi_songs/Mala_Ved_Lagale.mp3',
    'static/Marathi_songs/O_kaka.mp3', 'static/Marathi_songs/O_Raje.mp3', 'static/Marathi_songs/Pune_RAP.mp3',
    'static/Marathi_songs/Saavar_Re_Mana.mp3', 'static/Marathi_songs/Sairat_Zala_Ji.mp3', 'static/Marathi_songs/Shantabia.mp3',
    'static/Marathi_songs/Shitti_Vajali.mp3', 'static/Marathi_songs/TAN_TAN_BHAN_BHAN.mp3', 'static/Marathi_songs/Tola_Tola.mp3',
    'static/Marathi_songs/Tu_Chal_Re_Mana.mp3', 'static/Marathi_songs/Wajle_Ki_Bara.mp3', 'static/Marathi_songs/Yad_Lagla.mp3',
    'static/Marathi_songs/Zingat.mp3', 'static/Marathi_songs/Khulach_Zalo_Ga.mp3', 'static/Marathi_songs/Zindagi_Zindagi.mp3',
    'static/Marathi_songs/Jiv_Rangala.mp3', 'static/Marathi_songs/Man_Udhan_Varyache.mp3', 'static/Marathi_songs/Tu_Hi_Re_Maza_Mitva.mp3', 'static/Marathi_songs/Hrudayat_Vaje_Something.mp3', 'static/Marathi_songs/Rakhumai_Rakhumai.mp3', 'static/Marathi_songs/Sur_Niragas_Ho.mp3', 'static/Marathi_songs/Saath_De_Tu_Mala.mp3', 'static/Marathi_songs/Kitida_Navyane_Tula_Athvave.mp3', 'static/Marathi_songs/Deva_Thujha_Gabharyala.mp3', 'static/Marathi_songs/Bulati_Hai_Magar_Jane_Ka_Nahi.mp3'
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
    if (myFavprop != null) {

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
            audioFile: audioFile
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