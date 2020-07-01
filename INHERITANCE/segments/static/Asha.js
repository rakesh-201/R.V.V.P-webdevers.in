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
            name: 'Deewana hua badal',
            artist: 'Kashmir Ki Kali',
            url: 'static/Asha_songs/Deewana_hua.mp3',
            cover: 'static/Asha_songs/Deewana_hua.jpg'
        },
        {
            name: 'Dhal gaya din',
            artist: 'Hamjoli',
            url: 'static/Asha_songs/Dhal_gaya.mp3',
            cover: 'static/Asha_songs/Dhal_gaya.jpg'
        },
        {
            name: 'Jaiye aap kaha jayenge',
            artist: 'Mere Sanam',
            url: 'static/Asha_songs/Jaiye_aap.mp3',
            cover: 'static/Asha_songs/Jaiye_aap.jpg'
        },
        {
            name: 'O saathi chal',
            artist: 'Seeta Aur Geeta',
            url: 'static/Asha_songs/O_saathi.mp3',
            cover: 'static/Asha_songs/O_saathi.jpg'
        },
        {
            name: 'Piya tu ab to aaja',
            artist: 'Caravan',
            url: 'static/Asha_songs/Piya_tu.mp3',
            cover: 'static/Asha_songs/Piya_tu.jpg'
        },
        {
            name: 'Uden jab jab zulfen teri',
            artist: 'Naya Daur',
            url: 'static/Asha_songs/Uden_jab.mp3',
            cover: 'static/Asha_songs/Uden_jab.png'
        },
        {
            name: 'Aaiye meharbaan',
            artist: 'Howrah Bridge',
            url: 'static/Asha_songs/Aaiye_meharbaan.mp3',
            cover: 'static/Asha_songs/Aaiye_meharbaan.jpg'
        },
        {
            name: 'Do lafzon ki hai',
            artist: 'The Great Gambler',
            url: 'static/Asha_songs/Do_lafzon.mp3',
            cover: 'static/Asha_songs/Do_lafzon.jpg'
        },
        {
            name: 'Ek mai aur ek tu',
            artist: 'Khel Khel Mein',
            url: 'static/Asha_songs/Ek_mai.mp3',
            cover: 'static/Asha_songs/Ek_mai.jpg'
        },
        {
            name: 'Gun guna rahe hai bhanware',
            artist: 'Aaradhna',
            url: 'static/Asha_songs/Gun_guna.mp3',
            cover: 'static/Asha_songs/Gun_guna.jpg'
        },
        {
            name: 'Jab chali thandi hawa',
            artist: 'Kati Patang',
            url: 'static/Asha_songs/Jab_chali.mp3',
            cover: 'static/Asha_songs/Jab_chali.jpg'
        },
        {
            name: 'Sara pyar tumhara',
            artist: 'Aanand Ashram',
            url: 'static/Asha_songs/Saara_pyar.mp3',
            cover: 'static/Asha_songs/Saara_pyar.jfif'
        },
        {
            name: 'Roka kai baar maine',
            artist: 'Mere Sanam',
            url: 'static/Asha_songs/Roka_kai.mp3',
            cover: 'static/Asha_songs/Roka_kai.jpg'
        },
        {
            name: 'Sar par topi laal',
            artist: 'Tumsa Nahi Dekha',
            url: 'static/Asha_songs/Sar_par.mp3',
            cover: 'static/Asha_songs/Sar_par.jpg'
        },
        {
            name: 'Raat ke hamsafar',
            artist: 'An Evening in Paris',
            url: 'static/Asha_songs/Raat_ke.mp3',
            cover: 'static/Asha_songs/Raat_ke.jpg'
        },
        {
            name: 'Chhod do aanchal',
            artist: 'Paying Guest',
            url: 'static/Asha_songs/Chhod_do.mp3',
            cover: 'static/Asha_songs/Chhod_do.jpg'
        },
        {
            name: 'Deewana mastana hua dil',
            artist: 'Bombai Ka Babu',
            url: 'static/Asha_songs/Deewana_mastana.mp3',
            cover: 'static/Asha_songs/Deewana_mastana.jpg'
        },
        {
            name: 'Ek pardesi mera dil le gaya',
            artist: 'Phagun',
            url: 'static/Asha_songs/Ek_pardesi.mp3',
            cover: 'static/Asha_songs/Ek_pardesi.jpg'
        },
        {
            name: 'Yeh mera dil',
            artist: 'Don',
            url: 'static/Asha_songs/Ye_mera.mp3',
            cover: 'static/Asha_songs/Ye_mera.jpg'
        },
        {
            name: 'Ha tu hai wahi',
            artist: 'Yeh Waada Raha',
            url: 'static/Kishore_songs/Ha_tu_hai.mp3',
            cover: 'static/Kishore_songs/Ha_tu_hai.jpeg'
        },
        {
            name: 'Lekar hu deewana dil',
            artist: 'Yaadon Ki Baarat',
            url: 'static/Asha_songs/Lekar_hum.mp3',
            cover: 'static/Asha_songs/Lekar_hum.jpeg'
        },
        {
            name: 'O haseena',
            artist: 'Teesri Manzil',
            url: 'static/Asha_songs/O_haseena.mp3',
            cover: 'static/Asha_songs/O_haseena.jpg'
        },
        {
            name: 'Ye ladka haye allah',
            artist: 'Hum kisise kum Nahin',
            url: 'static/Asha_songs/Ye_ladka.mp3',
            cover: 'static/Asha_songs/Ye_ladka.jpg'
        },
        {
            name: 'Dil cheez kya hai',
            artist: 'Umarao Jaan',
            url: 'static/Asha_songs/Dil_cheez.mp3',
            cover: 'static/Asha_songs/Dil_cheez.jpeg'
        },
        {
            name: 'Aao na gale laga lo na',
            artist: 'Mere Jeevan Saathi',
            url: 'static/Asha_songs/Aao_na.mp3',
            cover: 'static/Asha_songs/Aao_na.jpg'
        },
        {
            name: 'Pyar ka dard hai',
            artist: 'Dard',
            url: 'static/Asha_songs/Pyar_ka.mp3',
            cover: 'static/Asha_songs/Pyar_ka.jpg'
        },
        {
            name: 'In aankhon ki masti ke',
            artist: 'Umarao jaan',
            url: 'static/Asha_songs/In_aankhon.mp3',
            cover: 'static/Asha_songs/In_aankhon.png'
        },
        {
            name: 'Jab chhaye mera jadu',
            artist: 'Lootmaar',
            url: 'static/Asha_songs/Jab_chhaye.mp3',
            cover: 'static/Asha_songs/Jab_chhaye.jpg'
        },
        {
            name: 'Mang ke saath tumhara',
            artist: 'Asha Bhosle',
            url: 'static/Asha_songs/Maang_ke.mp3',
            cover: 'static/Asha_songs/Maang_ke.jpg'
        },
        {
            name: 'Dil abhi bhara nahi',
            artist: 'Hum Dono',
            url: 'static/MdRafi_Songs/Dil_abhi.mp3',
            cover: 'static/MdRafi_Songs/Dil_abhi.png'
        },
        {
            name: 'Chura Liya Hai Tumne',
            artist: 'Yaadon ki Baarat',
            url: 'static/MdRafi_Songs/Chura_liya.mp3',
            cover: 'static/MdRafi_Songs/Chura_liya.jpg'
        },
        {
            name: 'O mere sona re',
            artist: 'Teesri Manzil',
            url: 'static/MdRafi_Songs/O_mere_sona.mp3',
            cover: 'static/MdRafi_Songs/O_mere_sona.jpg'
        },
        {
            name: 'Isharon isharon mein',
            artist: 'Kashmir Ki Kali',
            url: 'static/MdRafi_Songs/Isharon_isharon.mp3',
            cover: 'static/MdRafi_Songs/Isharon_isharon.jpg'
        }
    ]
});



console.log(ap.audio);
let audiofiles = [
    'Asha_songs/Deewana_hua.mp3',
    'Asha_songs/Dhal_gaya.mp3', 'Asha_songs/Jaiye_aap.mp3', 'Asha_songs/O_saathi.mp3', 'Asha_songs/Piya_tu.mp3',
    'Asha_songs/Uden_jab.mp3', 'Asha_songs/Aaiye_meharbaan.mp3', 'Asha_songs/Do_lafzon.mp3',
    'Asha_songs/Ek_mai.mp3', 'Asha_songs/Gun_guna.mp3', 'Asha_songs/Jab_chali.mp3',
    'Asha_songs/Saara_pyar.mp3', 'Asha_songs/Roka_kai.mp3',
    'Asha_songs/Sar_par.mp3', 'Asha_songs/Raat_ke.mp3', 'Asha_songs/Chhod_do.mp3',
    'Asha_songs/Deewana_mastana.mp3', 'Asha_songs/Ek_pardesi.mp3', 'Asha_songs/Ye_mera.mp3',
    'Kishore_songs/Ha_tu_hai.mp3', 'Asha_songs/Lekar_hum.mp3', 'Asha_songs/O_haseena.mp3',
    'Asha_songs/Ye_ladka.mp3', 'Asha_songs/Dil_cheez.mp3', 'Asha_songs/Aao_na.mp3', 'Asha_songs/Pyar_ka.mp3',
    'Asha_songs/In_aankhon.mp3', 'Asha_songs/Jab_chhaye.mp3', 'Asha_songs/Maang_ke.mp3', 'MdRafi_Songs/Dil_abhi.mp3',
    'MdRafi_Songs/Chura_liya.mp3', 'MdRafi_Songs/O_mere_sona.mp3', 'MdRafi_Songs/Isharon_isharon.mp3'
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