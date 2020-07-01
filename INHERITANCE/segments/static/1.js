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
            name: 'Jeene Laga Hoon',
            artist: 'Arjit Singh',
            url: 'Vishal/atif/Jeene_Laga_Hoon.mp3',
            cover: 'Vishal/atif/Jeene_Laga_Hoon.jpg'
        }, {
            name: 'Maula',
            artist: 'Atif Aslam',
            url: 'Vishal/atif/Maula.mp3',
            cover: 'Vishal/atif/Maula.jpg'
        },
        {
            name: 'Pehli Nazar Mein',
            artist: 'Atif Aslam',
            url: 'Vishal/atif/Pehli_Nazar_Mein.mp3',
            cover: 'Vishal/atif/Pehli_Nazar_Mein.jpg'
        },
        {
            name: 'Piya O Re Piya',
            artist: 'Atif Aslam',
            url: 'Vishal/atif/Piya_O_Re_Piya.mp3',
            cover: 'Vishal/atif/Piya_O_Re_Piya.jpg'
        },
        {
            name: 'Pehli Dafa',
            artist: 'Atif Aslam',
            url: 'Vishal/atif/Pehli_Dafa.mp3',
            cover: 'Vishal/atif/Pehli_Dafa.jpg'

        },
        {
            name: 'Tere Bin',
            artist: 'Atif Aslam',
            url: 'Vishal/atif/Tere_Bin.mp3',
            cover: 'Vishal/atif/Tere_Bin.jpg'
        },
        {
            name: 'Tere Sang Yaara',
            artist: 'Atif Aslam',
            url: 'Vishal/atif/Tere_Sang_Yaara.mp3',
            cover: 'Vishal/atif/Tere_Sang_Yaara.jpg'
        },
        {
            name: 'Woh Lamhe Woh Baatein',
            artist: 'Atif Aslam',
            url: 'Vishal/atif/Woh_Lamhe_Woh_Baatein.mp3',
            cover: 'Vishal/atif/Woh_Lamhe_Woh_Baatein.jpg'
        },
        {
            name: 'Baarish',
            artist: 'Atif Aslam',
            url: 'Vishal/atif/Baarish.mp3',
            cover: 'Vishal/atif/Baarish.jpg'
        },
        {
            name: 'Gulabi Aankhein',
            artist: 'Atif Aslam',
            url: 'Vishal/atif/Gulabi_Aankhein.mp3',
            cover: 'Vishal/atif/Gulabi_Aankhein.jpg'
        },

        {
            name: 'Sukoon Mila',
            artist: 'Atif Aslam',
            url: 'Vishal/atif/Sukoon_Mila.mp3',
            cover: 'Vishal/atif/Sukoon_Mila.jpg'
        },

        {
            name: 'Tera Hone Laga Hoon',
            artist: 'Atif Aslam',
            url: 'Vishal/atif/Tera_Hone_Laga_Hoon.mp3',
            cover: 'Vishal/atif/Tera_Hone_Laga_Hoon.jpg'
        },
        {
            name: 'Tu Mohabbat Hai',
            artist: 'Atif Aslam',
            url: 'Vishal/atif/Tu_Mohabbat_Hai.mp3',
            cover: 'Vishal/atif/Tu_Mohabbat_Hai.jpg'
        },
        {
            name: 'Main Rang Sharbaton Ka.',
            artist: 'Atif Aslam',
            url: 'Vishal/atif/Main_Rang_Sharbaton_Ka.mp3',
            cover: 'Vishal/atif/Main_Rang_Sharbaton_Ka.jpg'
        },
        {
            name: 'O Saathi',
            artist: 'Atif Aslam',
            url: 'Vishal/atif/O_Saathi.mp3',
            cover: 'Vishal/atif/O_Saathi.jpg'
        },
        {
            name: 'Jeena Jeena',
            artist: 'Atif Aslam',
            url: 'Vishal/atif/Jeena_Jeena.mp3',
            cover: 'Vishal/atif/Jeena_Jeena.jpg'
        },
        {
            name: 'Atif Aslam Mashup',
            artist: 'Atif Aslam',
            url: 'Vishal/atif/Atif_Aslam_Mashup.mp3',
            cover: 'Vishal/atif/Atif_Aslam_Mashup.jpg'
        },
        {
            name: 'Paniyon sa',
            artist: 'Atif Aslam',
            url: 'Vishal/atif/Paniyon_Sa.mp3',
            cover: 'Vishal/atif/Paniyon_Sa.jpg'
        },
        {
            name: 'Tu Jaane Na',
            artist: 'Atif Aslam',
            url: 'Vishal/atif/Tu_Jaane_Na.mp3',
            cover: 'Vishal/atif/Tu_Jaane_Na.jpg'
        },
        {
            name: 'Tere_Liye',
            artist: 'Atif Aslam',
            url: 'Vishal/atif/Tere_Liye.mp3',
            cover: 'Vishal/atif/Tere_Liye.jpg'
        },



    ]
});





let audiofiles = [
    'Vishal/atif/Jeene_Laga_Hoon.mp3', 'Vishal/atif/Maula.mp3', 'Vishal/atif/Pehli_Nazar_Mein.mp3',
    'Vishal/atif/Piya_O_Re_Piya.mp3', 'Vishal/atif/Pehli_Dafa.mp3', 'Vishal/atif/Tere_Bin.mp3',
    'Vishal/atif/Tere_Sang_Yaara.mp3', 'Vishal/atif/Woh_Lamhe_Woh_Baatein.mp3', 'Vishal/atif/Baarish.mp3',
    'Vishal/atif/Gulabi_Aankhein.mp3', 'Vishal/atif/Sukoon_Mila.mp3', 'Vishal/atif/Tera_Hone_Laga_Hoon.mp3',
    'Vishal/atif/Tu_Mohabbat_Hai.mp3', 'Vishal/atif/Main_Rang_Sharbaton_Ka.mp3', 'Vishal/atif/O_Saathi.mp3',
    'Vishal/atif/Jeena_Jeena.mp3', 'Vishal/atif/Atif_Aslam_Mashup.mp3', 'Vishal/atif/Atif_Aslam_Mashup.mp3',
    'Vishal/atif/Tu_Jaane_Na.mp3', 'Vishal/atif/Tere_Liye.mp3',
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
    if (myFavprop.some(e => e.songName === songName)) {
        /*localStorage contains this song*/
        console.log(songCard[7].childNodes[0]);
        let favBtn = songCard[7].childNodes[0];
        console.log("Both are same");
        console.log(favBtn);
        favBtn.classList = "fa fa-heart";
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
});