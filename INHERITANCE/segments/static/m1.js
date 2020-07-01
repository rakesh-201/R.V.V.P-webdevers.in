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
            name: 'Bekhayali',
            artist: 'Arijit Singh',
            url: 'static/arjit/Bekhayali.mp3',
            cover: 'static/arjit/Bekhayali.jpg'
        }, {
            name: 'Dil Hi Toh Hai',
            artist: 'Arijit Singh',
            url: 'static/arjit/Dil_Hi_Toh_Hai.mp3',
            cover: 'static/arjit/Dil_Hi_Toh_Hai.jpg'
        },
        {
            name: 'Sanam Re',
            artist: 'Arijit Singh',
            url: 'static/arjit/Sanam_Re.mp3',
            cover: 'static/arjit/Sanam_Re.jpg'
        },
        {
            name: 'Khairiyat',
            artist: 'Arijit Singh',
            url: 'static/arjit/Khairiyat.mp3',
            cover: 'static/arjit/Khairiyat.jpg'
        },
        {
            name: 'Phir Le Aaya Dil',
            artist: 'Arijit Singh',
            url: 'static/arjit/Phir_Le_Aya_Dil.mp3',
            cover: 'static/arjit/Phir_Le_Aya_Dil.jpg'
        },
        {
            name: 'Pal',
            artist: 'Arijit Singh',
            url: 'static/arjit/Pal.mp3',
            cover: 'static/arjit/Pal.jpg'
        },
        {
            name: 'Sooraj Dooba Hai Aaj',
            artist: 'Arijit Singh',
            url: 'static/arjit/Sooraj_Dooba_Hai_Aaj.mp3',
            cover: 'static/arjit/Sooraj_Dooba_Hai_Aaj.jpg'
        },
        {
            name: 'Sukoon Mila',
            artist: 'Arijit Singh',
            url: 'static/arjit/Sukoon_Mila.mp3',
            cover: 'static/arjit/Sukoon_Mila.jpg'
        },
        {
            name: 'Tera Hoke Rahoon',
            artist: 'Arijit Singh',
            url: 'static/arjit/Tera_Hoke_Rahoon.mp3',
            cover: 'static/arjit/Tera_Hoke_Rahoon.jpg'
        },
        {
            name: 'Tu Hi Hai Aashiqui',
            artist: 'Arijit Singh',
            url: 'static/arjit/Tu_Hi_Hai_Aashiqui.mp3',
            cover: 'static/arjit/Tu_Hi_Hai_Aashiqui.jpg'
        },
        {
            name: 'Tum Hi Ho',
            artist: 'Arijit Singh',
            url: 'static/arjit/Tum_Hi_Ho.mp3',
            cover: 'static/arjit/Tum_Hi_Ho.jpg'
        },
        {
            name: 'Tum Saath Ho',
            artist: 'Arijit Singh',
            url: 'static/arjit/Tum_Saath_Ho.mp3',
            cover: 'static/arjit/Tum_Saath_Ho.jpg'
        },
        {
            name: 'Darkhaast',
            artist: 'Arijit Singh',
            url: 'static/arjit/Darkhaast.mp3',
            cover: 'static/arjit/Darkhaast.jpg'
        },
        {
            name: 'Laal Ishq',
            artist: 'Arijit Singh',
            url: 'static/arjit/Laal_Ishq.mp3',
            cover: 'static/arjit/Laal_Ishq.jpg'
        },
        {
            name: 'Ilahi',
            artist: 'Arijit Singh',
            url: 'static/arjit/Ilahi.mp3',
            cover: 'static/arjit/Illahi.jpg'
        },
        {
            name: 'Ik Vaari ya',
            artist: 'Arijit Singh',
            url: 'static/arjit/Ik_Vaari_ya.mp3',
            cover: 'static/arjit/Ik_Vaari_ya.jpg'
        },
        {
            name: 'Hawayein',
            artist: 'Arijit Singh',
            url: 'static/arjit/Hawayein.mp3',
            cover: 'static/arjit/Hawayein.jpg'
        },
        {
            name: 'Dhokha Dhadi',
            artist: 'Arijit Singh',
            url: 'static/arjit/Dhokha_Dhadi.mp3',
            cover: 'static/arjit/Dhokha_Dhadi.jpg'
        },
        {
            name: 'Mast Magan',
            artist: 'Arijit Singh',
            url: 'static/arjit/Mast_Magan.mp3',
            cover: 'static/arjit/Mast_Magan.jpg'
        },
        {
            name: 'Meet',
            artist: 'Arijit Singh',
            url: 'static/arjit/Meet.mp3',
            cover: 'static/arjit/Meet.jpg'
        },
        {
            name: 'Tu Mila Toh Haina',
            artist: 'Arijit Singh',
            url: 'static/arjit/Tu_Mila_Toh_Haina.mp3',
            cover: 'static/arjit/Tu_Mila_Toh_Haina.jpg'
        },
        {
            name: ' Tujhe Kitna Chahne Lage',
            artist: 'Arijit Singh',
            url: 'static/arjit/Tujhe_Kitna_Chahne_Lage.mp3',
            cover: 'static/arjit/Tujhe_Kitna_Chahne_Lage.jpg'
        },
        {
            name: 'Chahun_Main_Ya_Naa',
            artist: 'Arijit Singh',
            url: 'static/arjit/Chahun_Main_Ya_Naa.mp3',
            cover: 'static/arjit/Chahun_Main_Ya_Naa.jpg'
        },
        {
            name: 'Mahi Bolna',
            artist: 'Arijit Singh',
            url: 'static/arjit/Bolna.mp3',
            cover: 'static/arjit/Bolna.jpg'
        },
        {
            name: 'Janam Janam',
            artist: 'Arijit Singh',
            url: 'static/arjit/Janam_Janam.mp3',
            cover: 'static/arjit/Janam_Janam.jpg'
        },
        {
            name: 'Kabhi Jo Baadal Barse',
            artist: 'Arijit Singh',
            url: 'static/arjit/Kabhi_Jo_Baadal_Barse.mp3',
            cover: 'static/arjit/Kabhi_Jo_Baadal_Barse.jpg'
        },
        {
            name: 'Main Phir Bhi Tumko Chahunga',
            artist: 'Arijit Singh',
            url: 'static/arjit/Main_Phir_Bhi_Tumko_Chahunga.mp3',
            cover: 'static/arjit/Main_Phir_Bhi_Tumko_Chahunga.jpg'
        },
        {
            name: 'Main Rang Sharbaton Ka',
            artist: 'Arijit Singh',
            url: 'static/arjit/Main_Rang_Sharbaton_Ka.mp3',
            cover: 'static/arjit/Main_Rang_Sharbaton_Ka.jpg'
        },
        {
            name: 'Nashe Si Chadh Gayi',
            artist: 'Arijit Singh',
            url: 'static/arjit/Nashe_Si_Chadh_Gayi.mp3',
            cover: 'static/arjit/Nashe_Si_Chadh_Gayi.jpg'
        },
        {
            name: 'Milne Hai Mujhse Aayi',
            artist: 'Arijit Singh',
            url: 'static/arjit/Milne_Hai_Mujhse_Aayi.mp3',
            cover: 'static/arjit/Milne_Hai_Mujhse _Aayi.jpg'
        },

        {
            name: 'Pachtaoge',
            artist: 'Arijit Singh',
            url: 'static/arjit/Pachtaoge.mp3',
            cover: 'static/arjit/Pachtaoge.jpg'
        },
        {
            name: 'Roke Na Ruke Naina',
            artist: 'Arijit Singh',
            url: 'static/arjit/Roke_Na_Ruke_Naina.mp3',
            cover: 'static/arjit/Roke_Na_Ruke_Naina.jpg'
        },
        {
            name: 'Shayad',
            artist: 'Arijit Singh',
            url: 'static/arjit/Shayad.mp3',
            cover: 'static/arjit/Shayad.jpg'
        },

        {
            name: 'Tose Naina',
            artist: 'Arijit Singh',
            url: 'static/arjit/Tose_Naina.mp3',
            cover: 'static/arjit/Tose_Naina.jpg'
        },
        {
            name: 'GIMA Awards',
            artist: 'Arijit Singh',
            url: 'static/arjit/GIMA_Awards.mp3',
            cover: 'static/arjit/GIMA_Awards.jpg'
        },


    ]
});

console.log(ap.audio);
let audiofiles = [
    'arjit/Bekhayali.mp3', 'arjit/Dil_Hi_Toh_Hai.mp3', 'arjit/Sanam_Re.mp3',
    'arjit/Khairiyat.mp3', 'arjit/Phir_Le_Aya_Dil.mp3', 'arjit/Pal.mp3',
    'arjit/Sooraj_Dooba_Hai_Aaj.mp3', 'arjit/Sukoon_Mila.mp3', 'arjit/Tera_Hoke_Rahoon.mp3',
    'arjit/Tu_Hi_Hai_Aashiqui.mp3', 'arjit/Tum Hi Ho.mp3', 'arjit/Tum_Saath_Ho.mp3',
    'arjit/Darkhaast.mp3', 'arjit/Laal_Ishq.mp3', 'arjit/Ilahi.mp3', 'arjit/Ik_Vaari_ya.mp3',
    'arjit/Hawayein.mp3', 'arjit/Mast_Magan.mp3', 'arjit/Meet.mp3',
    'arjit/Tu_Mila_Toh_Haina.mp3', 'arjit/Tujhe_Kitna_Chahne_Lage.mp3', 'arjit/chahun_Main_Ya_Naa.mp3',
    'arjit/Bolna.mp3', 'arjit/Janam_Janam.mp3', 'arjit/Kabhi_Jo_Baadal_Barse.mp3',
    'arjit/Main_Phir_Bhi_Tumko_Chahunga.mp3', 'arjit/Main_Rang_Sharbaton_Ka.mp3',
    'arjit/Nashe_Si_Chadh_Gayi.mp3', 'arjit/Milne_Hai_Mujhse _Aayi.mp3', 'arjit/Pachtaoge.mp3',
    'arjit/Roke_Na_Ruke_Naina.mp3', 'arjit/Tose_Naina.mp3', 'arjit/GIMA_Awards.mp3'
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
console.log(myFavprop);
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
        console.log(e)
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
});