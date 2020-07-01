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
            name: 'Bezubaan Kab Se',
            artist: 'Arjit Singh',
            url: 'static/2020/Bezubaan_Kab_Se.mp3',
            cover: 'static/2020/Bezubaan_Kab_Se.jpg'
        },
        {
            name: 'Tu_Hi_Aana',
            artist: 'Arjit Singh',
            url: 'static/2020/Tum_Hi_Aana.mp3',
            cover: 'static/2020/Tum_Hi_Aana.jpg'
        },
        {
            name: 'Chashni',
            artist: 'Arjit Singh',
            url: 'static/2020/Chashni.mp3',
            cover: 'static/2020/Chashni.jpg'
        },
        {
            name: 'Hermosa',
            artist: 'Arjit Singh',
            url: 'static/2020/Hermosa.mp3',
            cover: 'static/2020/Hermosa.jpg'
        },
        {
            name: 'Chal Ghar Chalen',
            artist: 'Arjit Singh',
            url: 'static/2020/Chal_Ghar_Chalen.mp3',
            cover: 'static/2020/Chal_Ghar_Chalen.jpg'
        },
        {
            name: 'Makhna',
            artist: 'Arjit Singh',
            url: 'static/2020/Makhna.mp3',
            cover: 'static/2020/Makhna.jpg'
        },
        {
            name: 'loca',
            artist: 'Arjit Singh',
            url: 'static/2020/Loca.mp3',
            cover: 'static/2020/Loca.jpg'
        },
        {
            name: 'Lagdi Lahore Di',
            artist: 'Arjit Singh',
            url: 'static/2020/Lagdi_Lahore_Di.mp3',
            cover: 'static/2020/Lagdi_Lahore_Di.jpg'
        },
        {
            name: 'Genda Phool',
            artist: 'Arjit Singh',
            url: 'static/2020/Genda_Phool.mp3',
            cover: 'static/2020/Genda_Phool.jpg'
        },
        {
            name: 'Duo_Karo',
            artist: 'Arjit Singh',
            url: 'static/2020/Dua_Karo.mp3',
            cover: 'static/2020/Genda_Phool.jpg'
        },

        {
            name: 'Manjha',
            artist: 'static Mishra',
            url: 'static/2020/Manjha.mp3',
            cover: 'static/2020/Manjha.jpg'
        },
        {
            name: 'Masakali',
            artist: 'Sachet Tandon',
            url: 'static/2020/Masakali.mp3',
            cover: 'static/2020/MasaKali.jpg'
        },
        {
            name: 'Muqabla',

            url: 'static/2020/Muqabla.mp3',
            cover: 'static/2020/Muqabla.jpg'
        },
        {
            name: 'The Hook Up Song',

            url: 'static/2020/The_Hook_Up_Song.mp3',
            cover: 'static/2020/The_Hook_Up_Song.jpg'
        },
        {
            name: 'Freak',

            url: 'static/2020/Freak.mp3',
            cover: 'static/2020/Freak.jpg'
        },
        {
            name: 'Power',

            url: 'static/2020/Power.mp3',
            cover: 'static/2020/Power.jpg'
        },
        {
            name: 'Rain_Over_Me_Pitbull',

            url: 'static/2020/Rain_Over_Me_Pitbull.mp3',
            cover: 'static/2020/Rain_Over_Me_Pitbull.jpg'
        },
        {
            name: 'Stupid_Love',

            url: 'static/2020/Stupid_Love.mp3',
            cover: 'static/2020/Stupid_Love.jpg'
        },

        {
            name: 'Shayad',
            artist: 'Arjit Singh',
            url: 'static/arjit/Shayad.mp3',
            cover: 'static/arjit/Shayad.jpg'
        },


    ]
});

let audiofiles = [
    '2020/Bezubaan_Kab_Se.mp3', '2020/Tum_Hi_Aana.mp3', '2020/Chashni.mp3',
    '2020/Hermosa.mp3', '2020/Chal_Ghar_Chalen.mp3', '2020/Makhna.mp3',
    '2020/Loca.mp3', '2020/Genda_Phool.mp3', '2020/Manjha.mp3', '2020/Masakali.mp3',
    '2020/Muqabla.mp3', '2020/Muqabla.mp3', '2020/The_Hook_Up_Song.mp3', '2020/Freak.mp3',
    '2020/Power.mp3', '2020/Rain_Over_Me_Pitbull.mp3', '2020/Stupid_Love.mp3',
    'arjit/Shayad.mp3',
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

});


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
var myFavprop = JSON.parse(localStorage.getItem("threeProp"));
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
            audioFile: `static/${audioFile}`
        }
        var myFavprop = JSON.parse(localStorage.getItem("threeProp"));
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
            localStorage.setItem("threeProp", JSON.stringify(myFavprop));
        }
        if (icon.classList == "fa fa-heart-o") {
            for (let j = 0; j < myFavprop.length; j++) {
                if ((myFavprop[j].songName == propToAdd.songName) && (myFavprop[j].songInfo == propToAdd.songInfo)) {
                    console.log("already included");
                    myFavprop.splice(j, 1);
                }
                console.log(myFavprop);
            }
            localStorage.setItem("threeProp", JSON.stringify(myFavprop));
        }

    })
})