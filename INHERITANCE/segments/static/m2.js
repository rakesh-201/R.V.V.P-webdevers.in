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
            url: 'static/atif/Jeene_Laga_Hoon.mp3',
            cover: 'static/atif/Jeene_Laga_Hoon.jpg'
        }, {
            name: 'Maula',
            artist: 'Atif Aslam',
            url: 'static/atif/Maula.mp3',
            cover: 'static/atif/Maula.jpg'
        },
        {
            name: 'Pehli Nazar Mein',
            artist: 'Atif Aslam',
            url: 'static/atif/Pehli_Nazar_Mein.mp3',
            cover: 'static/atif/Pehli_Nazar_Mein.jpg'
        },
        {
            name: 'Piya O Re Piya',
            artist: 'Atif Aslam',
            url: 'static/atif/Piya_O_Re_Piya.mp3',
            cover: 'static/atif/Piya_O_Re_Piya.jpg'
        },
        {
            name: 'Pehli Dafa',
            artist: 'Atif Aslam',
            url: 'static/atif/Pehli_Dafa.mp3',
            cover: 'static/atif/Pehli_Dafa.jpg'

        },
        {
            name: 'Tere Bin',
            artist: 'Atif Aslam',
            url: 'static/atif/Tere_Bin.mp3',
            cover: 'static/atif/Tere_Bin.jpg'
        },
        {
            name: 'Tere Sang Yaara',
            artist: 'Atif Aslam',
            url: 'static/atif/Tere_Sang_Yaara.mp3',
            cover: 'static/atif/Tere_Sang_Yaara.jpg'
        },
        {
            name: 'Woh Lamhe Woh Baatein',
            artist: 'Atif Aslam',
            url: 'static/atif/Woh_Lamhe_Woh_Baatein.mp3',
            cover: 'static/atif/Woh_Lamhe_Woh_Baatein.jpg'
        },
        {
            name: 'Baarish',
            artist: 'Atif Aslam',
            url: 'static/atif/Baarish.mp3',
            cover: 'static/atif/Baarish.jpg'
        },
        {
            name: 'Gulabi Aankhein',
            artist: 'Atif Aslam',
            url: 'static/atif/Gulabi_Aankhein.mp3',
            cover: 'static/atif/Gulabi_Aankhein.jpg'
        },

        {
            name: 'Sukoon Mila',
            artist: 'Atif Aslam',
            url: 'static/atif/Sukoon_Mila.mp3',
            cover: 'static/atif/Sukoon_Mila.jpg'
        },

        {
            name: 'Tera Hone Laga Hoon',
            artist: 'Atif Aslam',
            url: 'static/atif/Tera_Hone_Laga_Hoon.mp3',
            cover: 'static/atif/Tera_Hone_Laga_Hoon.jpg'
        },
        {
            name: 'Tu Mohabbat Hai',
            artist: 'Atif Aslam',
            url: 'static/atif/Tu_Mohabbat_Hai.mp3',
            cover: 'static/atif/Tu_Mohabbat_Hai.jpg'
        },
        {
            name: 'Main Rang Sharbaton Ka.',
            artist: 'Atif Aslam',
            url: 'static/atif/Main_Rang_Sharbaton_Ka.mp3',
            cover: 'static/atif/Main_Rang_Sharbaton_Ka.jpg'
        },
        {
            name: 'O Saathi',
            artist: 'Atif Aslam',
            url: 'static/atif/O_Saathi.mp3',
            cover: 'static/atif/O_Saathi.jpg'
        },
        {
            name: 'Jeena Jeena',
            artist: 'Atif Aslam',
            url: 'static/atif/Jeena_Jeena.mp3',
            cover: 'static/atif/Jeena_Jeena.jpg'
        },
        {
            name: 'Atif Aslam Mashup',
            artist: 'Atif Aslam',
            url: 'static/atif/Atif_Aslam_Mashup.mp3',
            cover: 'static/atif/Atif_Aslam_Mashup.jpg'
        },
        {
            name: 'Paniyon sa',
            artist: 'Atif Aslam',
            url: 'static/atif/Paniyon_Sa.mp3',
            cover: 'static/atif/Paniyon_Sa.jpg'
        },
        {
            name: 'Tu Jaane Na',
            artist: 'Atif Aslam',
            url: 'static/atif/Tu_Jaane_Na.mp3',
            cover: 'static/atif/Tu_Jaane_Na.jpg'
        },
        {
            name: 'Tere_Liye',
            artist: 'Atif Aslam',
            url: 'static/atif/Tere_Liye.mp3',
            cover: 'static/atif/Tere_Liye.jpg'
        },



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