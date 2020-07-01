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
            name: 'Tumne Kisi ki jaan ko',
            artist: 'Rajkumar',
            url: 'static/MdRafi_Songs/Tumne_kisi.mp3',
            cover: 'static/MdRafi_Songs/Tumne_kisi.jpg'
        },
        {
            name: 'Dil tera deewana hai sanam',
            artist: 'Dil tera deewana',
            url: 'static/MdRafi_Songs/Dil_tera.mp3',
            cover: 'static/MdRafi_Songs/Dil_tera.jpg'
        },
        {
            name: 'Tumne mujhe dekha',
            artist: 'Teesri Manzil',
            url: 'static/MdRafi_Songs/Tumne_mujhe.mp3',
            cover: 'static/MdRafi_Songs/Tumne_mujhe.jpg'
        },
        {
            name: 'Dil abhi bhara nahi',
            artist: 'Hum Dono',
            url: 'static/MdRafi_Songs/Dil_abhi.mp3',
            cover: 'static/MdRafi_Songs/Dil_abhi.png'
        },
        {
            name: 'Hue hai tumpe aashiq hum',
            artist: 'Mere Sanam',
            url: 'static/MdRafi_Songs/Hue_hai.mp3',
            cover: 'static/MdRafi_Songs/Hue_hai.jpg'
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
        },
        {
            name: 'Yeh jo chilman hai',
            artist: 'Mehboob Ki Mehandi',
            url: 'static/MdRafi_Songs/Ye_jo_chilman.mp3',
            cover: 'static/MdRafi_Songs/Ye_jo_chilman.jpg'
        },
        {
            name: 'Tumse o haseena',
            artist: 'Farz',
            url: 'static/MdRafi_Songs/Tumse_o_haseena.mp3',
            cover: 'static/MdRafi_Songs/Tumse_o_haseena.jpg'
        },
        {
            name: 'Zulfon ko hatale chehre se',
            artist: 'Saavan Ki Ghata',
            url: 'static/MdRafi_Songs/Zulfon_ko.mp3',
            cover: 'static/MdRafi_Songs/zulfon_ko.jpeg'
        },
        {
            name: 'Khuli palak mein',
            artist: 'Professor',
            url: 'static/MdRafi_Songs/Khuli_palak.mp3',
            cover: 'static/MdRafi_Songs/Khuli_palak.png'
        },
        {
            name: 'Dhal gaya din',
            artist: 'Humjoli',
            url: 'static/MdRafi_Songs/Dhal_gaya.mp3',
            cover: 'static/MdRafi_Songs/Dhal_gaya.jpg'
        },
        {
            name: 'Itna toh yaad hai mujhe',
            artist: 'Mehboob Ki Mehandi',
            url: 'static/MdRafi_Songs/Itna_to.mp3',
            cover: 'static/MdRafi_Songs/Itna_to.jpg'
        },
        {
            name: 'Kaun hai jo sapno me aaya',
            artist: 'Jhuk Gaya Aasman',
            url: 'static/MdRafi_Songs/Kaun_hai_jo.mp3',
            cover: 'static/MdRafi_Songs/Kaun_hai_jo.jpg'
        },
        {
            name: 'Jaanewalo jara',
            artist: 'Dosti',
            url: 'static/MdRafi_Songs/Jaanewalo_jara.mp3',
            cover: 'static/MdRafi_Songs/Jaanewalo_jara.jpg'
        },
        {
            name: 'Badan pe sitare',
            artist: 'Prince',
            url: 'static/MdRafi_Songs/Badan_pe_sitare.mp3',
            cover: 'static/MdRafi_Songs/Badan_pe_sitare.jpg'
        },
        {
            name: 'Baharon phool barsaon',
            artist: 'Suraj',
            url: 'static/MdRafi_Songs/Baharon_phool.mp3',
            cover: 'static/MdRafi_Songs/Baharon_phool.jpeg'
        },
        {
            name: 'Wo teer dil pe chala',
            artist: 'Aarti',
            url: 'static/MdRafi_Songs/Wo_teer.mp3',
            cover: 'static/MdRafi_Songs/Wo_teer.jpg'
        },
        {
            name: 'Kitna pyar wada',
            artist: 'Caravan',
            url: 'static/MdRafi_Songs/Kitna_pyara.mp3',
            cover: 'static/MdRafi_Songs/Kitna_pyara.jpg'
        },
        {
            name: 'Khuda bhi aasman se',
            artist: 'Dharti',
            url: 'static/MdRafi_Songs/Khuda_bhi.mp3',
            cover: 'static/MdRafi_Songs/Khuda_bhi.jpg'
        },
        {
            name: 'Mai zindagi ka saath',
            artist: 'Hum Dono',
            url: 'static/MdRafi_Songs/Mai_zindagi.mp3',
            cover: 'static/MdRafi_Songs/Mai_zindagi.jpg'
        },
        {
            name: 'Patta patta boota boota',
            artist: 'Ek Nazar',
            url: 'static/MdRafi_Songs/Patta_patta.mp3',
            cover: 'static/MdRafi_Songs/Patta_patta.jpg'
        },
        {
            name: 'Yeh reshmi zulfen',
            artist: 'Do raaste',
            url: 'static/MdRafi_Songs/Ye_reshmi.mp3',
            cover: 'static/MdRafi_Songs/Ye_reshmi.jpeg'
        },
        {
            name: 'Deewana hua badal',
            artist: 'Kashmir Ki Kali',
            url: 'static/Asha_songs/Deewana_hua.mp3',
            cover: 'static/Asha_songs/Deewana_hua.jpg'
        },
        {
            name: 'Uden jab jab zulfen teri',
            artist: 'Naya Daur',
            url: 'static/Asha_songs/Uden_jab.mp3',
            cover: 'static/Asha_songs/Uden_jab.png'
        },
        {
            name: 'Gun guna rahe hai bhanware',
            artist: 'Aaradhna',
            url: 'static/Asha_songs/Gun_guna.mp3',
            cover: 'static/Asha_songs/Gun_guna.jpg'
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
            artist: 'An Evening In Paris',
            url: 'static/Asha_songs/Raat_ke.mp3',
            cover: 'static/Asha_songs/Raat_ke.jpg'
        },
        {
            name: 'Bekhudi mein sanam',
            artist: 'Haseena Man Jayegi',
            url: 'static/Lata_songs/Bekhudi_mein.mp3',
            cover: 'static/Lata_songs/Bekhudi_mein.jpg'
        },
        {
            name: 'Yuhi tum mujhse baat',
            artist: 'Sachha Zhuta',
            url: 'static/Lata_songs/Yuhi_tum.mp3',
            cover: 'static/Lata_songs/Yuhi_tum.jfif'
        },
        {
            name: 'Aaja teri yaad aayi',
            artist: 'Charas',
            url: 'static/MdRafi_Songs/Aaja_teri.mp3',
            cover: 'static/MdRafi_Songs/Aaja_teri.jpg'
        },
        {
            name: 'Mast baharon ka mai aashiq',
            artist: 'Farz',
            url: 'static/MdRafi_Songs/Mast_baharon.mp3',
            cover: 'static/MdRafi_Songs/Mast_baharon.jpg'
        },
        {
            name: 'Ab aan milo sajna',
            artist: 'Aan Milo Sajna',
            url: 'static/Lata_Songs/Aan_milo.mp3',
            cover: 'static/Lata_Songs/Aan_milo.jpg'
        },
        {
            name: 'Din sara guzara',
            artist: 'Janglee',
            url: 'static/Lata_Songs/Din_sara.mp3',
            cover: 'static/Lata_Songs/Din_sara.jpg'
        },
        {
            name: 'Chup gaye saare',
            artist: 'Do raaste',
            url: 'static/Lata_Songs/Chup_gaye.mp3',
            cover: 'static/Lata_Songs/Chup_gaye.jpeg'
        },
        {
            name: 'Mang ke saath tumhara',
            artist: 'Naya Daur',
            url: 'static/Asha_songs/Maang_ke.mp3',
            cover: 'static/Asha_songs/Maang_ke.jpg'
        }
    ]
});
console.log(ap.audio);
let audiofiles = [
    'MdRafi_Songs/Tumne_kisi.mp3', 'MdRafi_Songs/Dil_tera.mp3', 'MdRafi_Songs/Tumne_mujhe.mp3',
    'MdRafi_Songs/Dil_abhi.mp3', 'MdRafi_Songs/Hue_hai.mp3', 'MdRafi_Songs/Chura_liya.mp3',
    'MdRafi_Songs/O_mere_sona.mp3', 'MdRafi_Songs/Isharon_isharon.mp3', 'MdRafi_Songs/Ye_jo_chilman.mp3',
    'MdRafi_Songs/Tumse_o_haseena.mp3', 'MdRafi_Songs/Zulfon_ko.mp3', 'MdRafi_Songs/Khuli_palak.mp3',
    'MdRafi_Songs/Dhal_gaya.mp3', 'MdRafi_Songs/Itna_to.mp3', 'MdRafi_Songs/Kaun_hai_jo.mp3',
    'MdRafi_Songs/Jaanewalo_jara.mp3', 'MdRafi_Songs/Badan_pe_sitare.mp3', 'MdRafi_Songs/Baharon_phool.mp3',
    'MdRafi_Songs/Wo_teer.mp3', 'MdRafi_Songs/Kitna_pyara.mp3', 'MdRafi_Songs/Khuda_bhi.mp3',
    'MdRafi_Songs/Mai_zindagi.mp3', 'MdRafi_Songs/Patta_patta.mp3', 'MdRafi_Songs/Ye_reshmi.mp3',
    'Asha_songs/Deewana_hua.mp3', 'Asha_songs/Uden_jab.mp3', 'Asha_songs/Gun_guna.mp3',
    'Asha_songs/Roka_kai.mp3', 'Asha_songs/Sar_par.mp3', 'Asha_songs/Raat_ke.mp3',
    'Lata_songs/Bekhudi_mein.mp3', 'Lata_songs/Yuhi_tum.mp3', 'MdRafi_Songs/Aaja_teri.mp3',
    'MdRafi_Songs/Mast_baharon.mp3', 'Lata_Songs/Aan_milo', 'Lata_Songs/Din_sara.mp3',
    'Lata_Songs/Chup_gaye.mp3', 'Asha_songs/Maang_ke.mp3'
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
        var audioFile = `static/${audiofiles[dataId]}`;
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