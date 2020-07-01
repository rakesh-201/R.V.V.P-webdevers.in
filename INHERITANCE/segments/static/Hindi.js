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
            name: 'Aankh Mare',
            artist: 'Kumar Sanu, Mika Singh, Neha Kakkar',
            url: 'static/Hindi_songs/Aankh_Mare.mp3',
            cover: 'static/Hindi_songs/Aankh_Mare.jpg'
        },
        {
            name: 'Ae Dil Hai Mushkil',
            artist: 'Arjit Singh',
            url: 'static/Hindi_songs/Ae_Dil_Hai_Mushkil.mp3',
            cover: 'static/Hindi_songs/Ae_Dil_Hai_Mushkil.jpg'
        },
        {
            name: 'All Black',
            artist: 'Raftaar, Sukh-E',
            url: 'static/Hindi_songs/All_Black.mp3',
            cover: 'static/Hindi_songs/All_Black.jpg'
        },
        {
            name: 'Ankhiyon Se Goli Maare',
            artist: 'Jaspender Narula, Sonu Nigam',
            url: 'static/Hindi_songs/Ankhiyon_Se_Goli_Maare.mp3',
            cover: 'static/Hindi_songs/Ankhiyon_Se_Goli_Maare.jpg'
        },
        {
            name: 'Apna Time Aayega',
            artist: 'Ranveer Singh',
            url: 'static/Hindi_songs/Apna_Time_Aayega.mp3',
            cover: 'static/Hindi_songs/Apna_Time_Aayega.jpg'
        },
        {
            name: 'Ban Ja Rani',
            artist: 'Guru Randhawa, Shraddha Vajpayee',
            url: 'static/Hindi_songs/Ban_Ja_Rani.mp3',
            cover: 'static/Hindi_songs/Ban_Ja_Rani.jpg'
        },
        {
            name: 'Bekhayali',
            artist: 'Arigit Singh',
            url: 'static/Hindi_songs/Bekhayali.mp3',
            cover: 'static/Hindi_songs/Bekhayali.jpg'
        },
        {
            name: 'Bekhudi',
            artist: 'Aditi Sharma and Darshan Raval',
            url: 'static/Hindi_songs/Bekhudi.mp3',
            cover: 'static/Hindi_songs/Bekhudi.jpg'
        },
        {
            name: 'Bheegi Bheegi',
            artist: 'Neha Kakkar and Tony Kakkar',
            url: 'static/Hindi_songs/Bheegi_Bheegi.mp3',
            cover: 'static/Hindi_songs/Bheegi_Bheegi.jpg'
        },
        {
            name: 'Bom Diggy Diggy',
            artist: 'Jasmine Walia and Zack Knight',
            url: 'static/Hindi_songs/Bom_Diggy_Diggy.mp3',
            cover: 'static/Hindi_songs/Bom_Diggy_Diggy.jpg'
        },
        {
            name: 'Breathless',
            artist: 'Shankar Mahadevan',
            url: 'static/Hindi_songs/Breathless.mp3',
            cover: 'static/Hindi_songs/Breathless.jpg'
        },
        {
            name: 'Chal Bombay',
            artist: 'Divine',
            url: 'static/Hindi_songs/Chal_Bombay.mp3',
            cover: 'static/Hindi_songs/Chal_Bombay.jpg'
        },
        {
            name: 'Cheez Badi',
            artist: 'Neha Kakkar',
            url: 'static/Hindi_songs/Cheez_Badi.mp3',
            cover: 'static/Hindi_songs/Cheez_Badi.jpg'
        },
        {
            name: 'Coca Cola',
            artist: 'Tony Kakkar',
            url: 'static/Hindi_songs/Coca_Cola.mp3',
            cover: 'static/Hindi_songs/Coca_Cola.jpg'
        },
        {
            name: 'Daddy Mummy',
            artist: 'Devi Sri Prasad and M.M.Manasi',
            url: 'static/Hindi_songs/Daddy_Mummy.mp3',
            cover: 'static/Hindi_songs/Daddy_Mummy.jpg'
        },
        {
            name: 'Das Bahane 2.0',
            artist: 'Vishal-Shekhar',
            url: 'static/Hindi_songs/Das_Bahane 2.0.mp3',
            cover: 'static/Hindi_songs/Das_Bahane 2.0.jpg'
        },
        {
            name: 'Deewani Mastani',
            artist: 'Shreya Ghoshal',
            url: 'static/Hindi_songs/Deewani_Mastani.mp3',
            cover: 'static/Hindi_songs/Deewani_Mastani.jpg'
        },
        {
            name: 'Dilbar',
            artist: 'Dhvani Bhanushali, Ikka Singh and Neha Kakkar',
            url: 'static/Hindi_songs/Dilbar.mp3',
            cover: 'static/Hindi_songs/Dilbar.jpg'
        },
        {
            name: 'Dil abhi bhara nhi',
            artist: 'Jaspinder Narula and Shankar Mahadevan',
            url: 'static/Hindi_songs/Dil_abhi_bhara_nhi.mp3',
            cover: 'static/Hindi_songs/Dil_abhi_bhara_nhi.jpg'
        },
        {
            name: 'Dil Hi Toh Hai',
            artist: 'Antara Mitra and Arijit Singh',
            url: 'static/Hindi_songs/Dil_Hi_Toh_Hai.mp3',
            cover: 'static/Hindi_songs/Dil_Hi_Toh_Hai.jpg'
        },
        {
            name: 'FIRSE MACHAYENGE',
            artist: 'EMIWAY BANTAI',
            url: 'static/Hindi_songs/FIRSE MACHAYENGE.mp3',
            cover: 'static/Hindi_songs/FIRSE MACHAYENGE.jpg'
        },
        {
            name: 'Gali Gali.jpg',
            artist: 'Neha Kakkar',
            url: 'static/Hindi_songs/Gali_Gali.mp3',
            cover: 'static/Hindi_songs/Gali_Gali.jpg'
        },
        {
            name: 'Garmi Song',
            artist: 'Badshah and Neah Kakkar',
            url: 'static/Hindi_songs/Garmi_Song.mp3',
            cover: 'static/Hindi_songs/Garmi_Song.jpg'
        },
        {
            name: 'Ghammand Kar',
            artist: 'Parampara Thakur and Sachet Tandon',
            url: 'static/Hindi_songs/Ghammand_Kar.mp3',
            cover: 'static/Hindi_songs/Ghammand_Kar.jpg'
        },
        {
            name: 'Ghunghroo',
            artist: 'Arijit Singh',
            url: 'static/Hindi_songs/Ghunghroo.mp3',
            cover: 'static/Hindi_songs/Ghunghroo.jpg'
        },
        {
            name: 'High Rated',
            artist: 'Gururandhawa',
            url: 'static/Hindi_songs/High_Rated.mp3',
            cover: 'static/Hindi_songs/High_Rated.jpg'
        },
        {
            name: 'Ik Mulakat',
            artist: 'Altamash Faridi, Palak Muchhal and Meet Bros',
            url: 'static/Hindi_songs/Ik_Mulakat.mp3',
            cover: 'static/Hindi_songs/Ik_Mulakat.jpg'
        },
        {
            name: 'Illegal Weapon 2.0',
            artist: 'Garry Sandhu and Jasmine Sandias',
            url: 'static/Hindi_songs/Illegal_Weapon_2.0.mp3',
            cover: 'static/Hindi_songs/Illegal_Weapon_2.0.jpg'
        },
        {
            name: 'Ishare Tere',
            artist: 'Gururandhawa and Dhvani Bhanushali',
            url: 'static/Hindi_songs/Ishare_Tere.mp3',
            cover: 'static/Hindi_songs/Ishare_Tere.jpg'
        },
        {
            name: 'Jo Bheji Thi Duaa',
            artist: 'Arijit Singh',
            url: 'static/Hindi_songs/Jo_Bheji_Thi_Duaa.mp3',
            cover: 'static/Hindi_songs/Jo_Bheji_Thi_Duaa.jpg'
        },
        {
            name: 'Kabhi Jo Badal Barse',
            artist: 'Arijit Singh',
            url: 'static/Hindi_songs/Kabhi_Jo_Badal_Barse.mp3',
            cover: 'static/Hindi_songs/Kabhi_Jo_Badal_Barse.jpg'
        },
        {
            name: 'Kamariya',
            artist: 'Aastha Gill, Divya Kumar and Sachin Sanghvi',
            url: 'static/Hindi_songs/Kamariya.mp3',
            cover: 'static/Hindi_songs/Kamariya.jpg'
        },
        {
            name: 'Vaaste',
            artist: 'Dhvani Bhanushali',
            url: 'static/Hindi_songs/Vaaste.mp3',
            cover: 'static/Hindi_songs/Vaaste.jpg'
        },
        {
            name: 'Ishq tera',
            artist: 'Guru Randhawa',
            url: 'static/Hindi_songs/Ishq_tera.mp3',
            cover: 'static/Hindi_songs/Ishq_tera.jpg'
        },
        {
            name: 'Leja Re',
            artist: 'Dhvani Bhanushali',
            url: 'static/Hindi_songs/Leja_Re.mp3',
            cover: 'static/Hindi_songs/Leja_Re.jpg'
        },
        {
            name: 'Naina',
            artist: '',
            url: 'static/Hindi_songs/Naina.mp3',
            cover: 'static/Hindi_songs/Naina.jpg'
        },
        {
            name: 'Tera Ban Jaaunga',
            artist: 'Akhil Sachdeva and Tulsi',
            url: 'static/Hindi_songs/Tera_Ban_Jaaunga.mp3',
            cover: 'static/Hindi_songs/Tera_Ban_Jaaunga.jpg'
        },
        {
            name: 'Kabira',
            artist: 'Rekha Bhardwaj and Tochi Raina',
            url: 'static/Hindi_songs/Kabira.mp3',
            cover: 'static/Hindi_songs/Kabira.jpg'
        },
        {
            name: 'Teri Mitti',
            artist: 'B Praak',
            url: 'static/Hindi_songs/Teri_Mitti.mp3',
            cover: 'static/Hindi_songs/Teri_Mitti.jpg'
        },
        {
            name: 'Ve Maahi',
            artist: 'Arijit Singh and Asees Kaur',
            url: 'static/Hindi_songs/Ve_Maahi.mp3',
            cover: 'static/Hindi_songs/Ve_Maahi.jpg'
        },
        {
            name: 'Zara Zara Behekta Hai',
            artist: 'Bombay Jayashri',
            url: 'static/Hindi_songs/Zara_Zara_Behekta_Hai.mp3',
            cover: 'static/Hindi_songs/Zara_Zara_Behekta_Hai.jpg'
        },
        {
            name: 'Tera Fitoor',
            artist: 'Arijit Singh',
            url: 'static/Hindi_songs/Tera_Fitoor.mp3',
            cover: 'static/Hindi_songs/Tera_Fitoor.jpg'
        },
        {
            name: 'Tera Baa Aaya',
            artist: 'Farhad Bhiwandiwala',
            url: 'static/Hindi_songs/Tera_Baa_Aaya.mp3',
            cover: 'static/Hindi_songs/Tera_Baa_Aaya.jpg'
        },
        {
            name: 'Shankara Re Shankara',
            artist: 'Mehul Vyas',
            url: 'static/Hindi_songs/Shankara_Re_Shankara.mp3',
            cover: 'static/Hindi_songs/Shankara_Re_Shankara.jpg'
        },
        {
            name: 'Baala',
            artist: 'Sohail Sen and Vishal Dadlani',
            url: 'static/Hindi_songs/Baala.mp3',
            cover: 'static/Hindi_songs/Baala.jpg'
        },
        {
            name: 'O SAKI SAKI',
            artist: 'Neha Kakkar and Tulsi Kumar',
            url: 'static/Hindi_songs/O_SAKI_SAKI.mp3',
            cover: 'static/Hindi_songs/O_SAKI_SAKI.jpg'
        }
    ]
});

console.log(ap.audio);
let audiofiles = [
    'static/Hindi_songs/Aankh_Mare.mp3', 'static/Hindi_songs/Ae_Dil_Hai_Mushkil.mp3', 'static/Hindi_songs/All_Black.mp3',
    'static/Hindi_songs/Ankhiyon_Se_Goli_Maare.mp3', 'static/Hindi_songs/Apna_Time_Aayega.mp3', 'static/Hindi_songs/Ban_Ja_Rani.mp3',
    'static/Hindi_songs/Bekhayali.mp3', 'static/Hindi_songs/Bekhudi.mp3', 'static/Hindi_songs/Bheegi_Bheegi.mp3',
    'static/Hindi_songs/Bon_Diggy_Diggy.mp3', 'static/Hindi_songs/Breathless.mp3', 'static/Hindi_songs/Chal_Bombay.mp3',
    'static/Hindi_songs/Cheez_Badi.mp3', 'static/Hindi_songs/Coca_Cola.mp3', 'static/Hindi_songs/Daddy_Mummy.mp3',
    'static/Hindi_songs/Das_Bahane_2.0.mp3', 'static/Hindi_songs/Deewani_Mastani.mp3', 'static/Hindi_songs/Dilbar.mp3',
    'static/Hindi_songs/Dil_abhi_bhara_nhi.mp3', 'static/Hindi_songs/Dil_Hi_Toh_Hai.mp3', 'static/Hindi_songs/FIRSE_MACHAYENGE.mp3',
    'static/Hindi_songs/Gali_Gali.mp3', 'static/Hindi_songs/Garmi_Song.mp3', 'static/Hindi_songs/Ghammand_Kar.mp3',
    'static/Hindi_songs/Ghunghroo.mp3', 'static/Hindi_songs/High_Rated.mp3', 'static/Hindi_songs/Ik_Mulakat.mp3',
    'static/Hindi_songs/Illrgal_Weapon_2.0.mp3', 'static/Hindi_songs/Ishare_Tere.mp3', 'static/Hindi_songs/Jo_Bhji_Thi_Duaa.mp3',
    'static/Hindi_songs/Kabhi_Jo_Badal_Barse.mp3', 'static/Hindi_songs/Kamariya.mp3', 'static/Hindi_songs/Vaaste.mp3',
    'static/Hindi_songs/Ishq_tera.mp3', 'static/Hindi_songs/Leja_Re.mp3', 'static/Hindi_songs/Naina.mp3',
    'static/Hindi_songs/Tera_Ban_Jaaunga.mp3', 'static/Hindi_songs/Kabira.mp3', 'static/Hindi_songs/Teri_Mitti.mp3', 'static/Hindi_songs/Ve_Mahi.mp3', 'static/Hindi_songs/Zara_Zara_Behekta_Hai.mp3', 'static/Hindi_songs/Tera_Fitoor.mp3', 'static/Hindi_songs/Tera_Baap_Aaya.mp3', 'static/Hindi_songs/Shankara_Re_Shankara.mp3', 'static/Hindi_songs/Baala.mp3', 'static/Hindi_songs/O_SAKI_SAKI.mp3'
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