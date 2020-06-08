$(".album-poster").on("click", function() {
    var dataSwitchId = $(this).attr("data-switch");
    //console.log(dataSwitchId);

    ap.list.switch(dataSwitchId);

    ap.play();
    $("#aplayer").addClass("showPlayer");
});





const ap = new APlayer({
    container: document.getElementById('aplayer'),
    listFolded: true,
    audio: [{
            name: 'Deewana hua badal',
            artist: 'Asha Bhosale, Mohammad Rafi',
            url: 'static/static/Asha_songs/Deewana_hua.mp3',
            cover: 'static/static/Asha_songs/Deewana_hua.jpg'
        },
        {
            name: 'Dhal gaya din',
            artist: 'Asha Bhosale, Mohammad Rafi',
            url: 'static/static/Asha_songs/Dhal_gay.mp3',
            cover: 'static/static/Asha_songs/Dhal_gaya.jpg'
        },
        {
            name: 'Jaiye aap kaha jayenge',
            artist: 'Asha Bhosale',
            url: 'static/static/Asha_songs/Jaiye_aap.mp3',
            cover: 'static/static/Asha_songs/Jaiye_aap.jpg'
        },
        {
            name: 'O saathi chal',
            artist: 'Asha Bhosale, Kishore Kumar',
            url: 'static/static/Asha_songs/O_saathi.mp3',
            cover: 'static/static/Asha_songs/O_saathi.jpg'
        },
        {
            name: 'Piya tu ab to aaja',
            artist: 'Asha Bhosale',
            url: 'static/static/Asha_songs/Piya_tu.mp3',
            cover: 'static/static/Asha_songs/Piya_tu.jpg'
        },
        {
            name: 'Uden jab jab zulfen teri',
            artist: 'Asha Bhosale, Mohammad Rafi',
            url: 'static/static/Asha_songs/Uden_jab.mp3',
            cover: 'static/static/Asha_songs/Uden_jab.jpg'
        },
        {
            name: 'Aaiye meharbaan',
            artist: 'Asha Bhosale',
            url: 'static/static/Asha_songs/Aaiye_meharbaan.mp3',
            cover: 'static/static/Asha_songs/Aaiye_meharbaan.jpg'
        },
        {
            name: 'Do lafzon ki hai',
            artist: 'Asha Bhosale',
            url: 'static/static/Asha_songs/Do_lafzon.mp3',
            cover: 'static/static/Asha_songs/Do_lafzon.jpg'
        },
        {
            name: 'Ek mai aur ek tu',
            artist: 'Asha Bhosale, Kishore Kumar',
            url: 'static/static/Asha_songs/Ek_mai.mp3',
            cover: 'static/static/Asha_songs/Ek_mai.jpg'
        },
        {
            name: 'Gun guna rahe hai bhanware',
            artist: 'Asha Bhosale, Mohammad Rafi',
            url: 'static/static/Asha_songs/Gun_guna.mp3',
            cover: 'static/static/Asha_songs/Gun_guna.jpg'
        },
        {
            name: 'Jab chali thandi hawa',
            artist: 'Asha Bhosale',
            url: 'static/static/Asha_songs/Jab_chali.mp3',
            cover: 'static/static/Asha_songs/Jab_chali.jpg'
        },
        {
            name: 'Sara pyar tumhara',
            artist: 'Asha Bhosale, Kishore Kumar',
            url: 'static/static/Asha_songs/Saara_pyar.mp3',
            cover: 'static/static/Asha_songs/Saara_pyar.jfif'
        },
        {
            name: 'Roka kai baar maine',
            artist: 'Asha Bhosale, Mohammad Rafi',
            url: 'static/static/Asha_songs/Roka_kai.mp3',
            cover: 'static/static/Asha_songs/Roka_kai.jpg'
        },
        {
            name: 'Sar par topi laal',
            artist: 'Asha Bhosale,Mohammad Rafi',
            url: 'static/static/Asha_songs/Sar_par.mp3',
            cover: 'static/static/Asha_songs/Sar_par.jpg'
        },
        {
            name: 'Raat ke hamsafar',
            artist: 'Asha Bhosale, Mohammad Rafi',
            url: 'static/static/Asha_songs/Raat_ke.mp3',
            cover: 'static/static/Asha_songs/Raat_ke.jpg'
        },
        {
            name: 'Chhod do aanchal',
            artist: 'Asha Bhosale, Kishore Kumar',
            url: 'static/Asha_songs/Chhod_do.mp3',
            cover: 'static/Asha_songs/Chhod_do.jpg'
        },
        {
            name: 'Deewana mastana hua dil',
            artist: 'Asha Bhosale, Mohammad Rafi',
            url: 'static/Asha_songs/Deewana_mastana.mp3',
            cover: 'static/Asha_songs/Deewana_mastana.jpg'
        },
        {
            name: 'Ek pardesi mera dil le gaya',
            artist: 'Asha Bhosale, Mohammad Rafi',
            url: 'static/Asha_songs/Ek_pardesi.mp3',
            cover: 'static/Asha_songs/Ek_pardesi.jpg'
        },
        {
            name: 'Yeh mera dil',
            artist: 'Asha Bhosale',
            url: 'static/Asha_songs/Ye_mera.mp3',
            cover: 'static/Asha_songs/Ye_mera.jpg'
        }
    ]
});

let search = document.getElementById("searchTxt");
search.addEventListener("input", function() {
    let inputVal = search.value;
    console.log("input event fired!", inputVal);
    let songCards = document.getElementsByClassName("songCard");
    Array.from(songCards).forEach(function(element) {
        let songTxt = element.getElementsByTagName("h4")[0].innerText;
        if (songTxt.includes(inputVal)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    })

})