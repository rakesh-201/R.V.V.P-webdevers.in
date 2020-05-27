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
            name: 'Aankh Mare',
            artist: 'Kumar Sanu, Mika Singh, Neha Kakkar',
            url: 'Hindi songs/Aankh Mare.mp3',
            cover: 'Hindi songs/Aankh Mare.jpg'
        }, {
            name: 'Ae Dil Hai Mushkil',
            artist: 'Arjit Singh',
            url: 'Hindi songs/Ae_Dil_Hai_Mushkil.mp3',
            cover: 'Hindi songs/Ae_Dil_Hai_Mushkil.jpg'
        },
        {
            name: 'All Black',
            artist: 'Raftaar, Sukh-E',
            url: 'Hindi songs/All_Black.mp3',
            cover: 'Hindi songs/All_Black.jpg'
        },
        {
            name: 'Ankhiyon Se Goli Maare',
            artist: 'Jaspender Narula, Sonu Nigam',
            url: 'Hindi songs/Ankhiyon_Se_Goli_Maare.mp3',
            cover: 'Hindi songs/Ankhiyon_Se_Goli_Maare.jpg'
        },
        {
            name: 'Apna Time Aayega',
            artist: 'Ranveer Singh',
            url: 'Hindi songs/Apna_Time_Aayega.mp3',
            cover: 'Hindi songs/Apna_Time_Aayega.jpg'
        },
        {
            name: 'Ban Ja Rani',
            artist: 'Guru Randhawa, Shraddha Vajpayee',
            url: 'Hindi songs/Ban_Ja_Rani.mp3',
            cover: 'Hindi songs/Ban_Ja_Rani.jpg'
        },
        {
            name: 'Bekhayali',
            artist: 'Arigit Singh',
            url: 'Hindi songs/Bekhayali.mp3',
            cover: 'Hindi songs/Bekhayali.jpg'
        },
        {
            name: 'Bekhudi',
            artist: 'Aditi Sharma and Darshan Raval',
            url: 'Hindi songs/Bekhudi.mp3',
            cover: 'Hindi songs/Bekhudi.jpg'
        },
        {
            name: 'Bheegi Bheegi',
            artist: 'Neha Kakkar and Tony Kakkar',
            url: 'Hindi songs/Bheegi_Bheegi.mp3',
            cover: 'Hindi songs/Bheegi_Bheegi.jpg'
        },
        {
            name: 'Bom Diggy Diggy',
            artist: 'Jasmine Walia and Zack Knight',
            url: 'Hindi songs/Bom_Diggy_Diggy.mp3',
            cover: 'Hindi songs/Bom_Diggy_Diggy.jpg'
        },
        {
            name: 'Breathless',
            artist: 'Shankar Mahadevan',
            url: 'Hindi songs/Breathless.mp3',
            cover: 'Hindi songs/Breathless.jpg'
        },
        {
            name: 'Chal Bombay',
            artist: 'Divine',
            url: 'Hindi songs/Chal_Bombay.mp3',
            cover: 'Hindi songs/Chal_Bombay.jpg'
        },
        {
            name: 'Cheez Badi',
            artist: 'Neha Kakkar',
            url: 'Hindi songs/Cheez_Badi.mp3',
            cover: 'Hindi songs/Cheez_Badi.jpg'
        },
        {
            name: 'Coca Cola',
            artist: 'Tony Kakkar',
            url: 'Hindi songs/Coca_Cola.mp3',
            cover: 'Hindi songs/Coca_Cola.jpg'
        },
        {
            name: 'Daddy Mummy',
            artist: 'Devi Sri Prasad and M.M.Manasi',
            url: 'Hindi songs/Daddy_Mummy.mp3',
            cover: 'Hindi songs/Daddy_Mummy.jpg'
        },
        {
            name: 'Das Bahane 2.0',
            artist: 'Vishal-Shekhar',
            url: 'Hindi songs/Das_Bahane 2.0.mp3',
            cover: 'Hindi songs/Das_Bahane 2.0.jpg'
        },
        {
            name: 'Deewani Mastani',
            artist: 'Shreya Ghoshal',
            url: 'Hindi songs/Deewani_Mastani.mp3',
            cover: 'Hindi songs/Deewani_Mastani.jpg'
        },
        {
            name: 'Dilbar',
            artist: 'Dhvani Bhanushali, Ikka Singh and Neha Kakkar',
            url: 'Hindi songs/Dilbar.mp3',
            cover: 'Hindi songs/Dilbar.jpg'
        },
        {
            name: 'Dil abhi bhara nhi',
            artist: 'Jaspinder Narula and Shankar Mahadevan',
            url: 'Hindi songs/Dil_abhi_bhara_nhi.mp3',
            cover: 'Hindi songs/Dil_abhi_bhara_nhi.jpg'
        },
        {
            name: 'Dil Hi Toh Hai',
            artist: 'Antara Mitra and Arijit Singh',
            url: 'Hindi songs/Dil_Hi_Toh_Hai.mp3',
            cover: 'Hindi songs/Dil_Hi_Toh_Hai.jpg'
        },
        {
            name: 'FIRSE MACHAYENGE',
            artist: 'EMIWAY BANTAI',
            url: 'Hindi songs/FIRSE MACHAYENGE.mp3',
            cover: 'Hindi songs/FIRSE MACHAYENGE.jpg'
        },
        {
            name: 'Gali Gali.jpg',
            artist: 'Neha Kakkar',
            url: 'Hindi songs/Gali_Gali.mp3',
            cover: 'Hindi songs/Gali_Gali.jpg'
        },
        {
            name: 'Garmi Song',
            artist: 'Badshah and Neah Kakkar',
            url: 'Hindi songs/Garmi_Song.mp3',
            cover: 'Hindi songs/Garmi_Song.jpg'
        },
        {
            name: 'Ghammand Kar',
            artist: 'Parampara Thakur and Sachet Tandon',
            url: 'Hindi songs/Ghammand_Kar.mp3',
            cover: 'Hindi songs/Ghammand_Kar.jpg'
        },
        {
            name: 'Ghunghroo',
            artist: 'Arijit Singh',
            url: 'Hindi songs/Ghunghroo.mp3',
            cover: 'Hindi songs/Ghunghroo.jpg'
        },
        {
            name: 'High Rated',
            artist: 'Gururandhawa',
            url: 'Hindi songs/High_Rated.mp3',
            cover: 'Hindi songs/High_Rated.jpg'
        },
        {
            name: 'Ik Mulakat',
            artist: 'Altamash Faridi, Palak Muchhal and Meet Bros',
            url: 'Hindi songs/Ik_Mulakat.mp3',
            cover: 'Hindi songs/Ik_Mulakat.jpg'
        },
        {
            name: 'Illegal Weapon 2.0',
            artist: 'Garry Sandhu and Jasmine Sandias',
            url: 'Hindi songs/Illegal_Weapon_2.0.mp3',
            cover: 'Hindi songs/Illegal_Weapon_2.0.jpg'
        },
        {
            name: 'Ishare Tere',
            artist: 'Gururandhawa and Dhvani Bhanushali',
            url: 'Hindi songs/Ishare_Tere.mp3',
            cover: 'Hindi songs/Ishare_Tere.jpg'
        },
        {
            name: 'Jo Bheji Thi Duaa',
            artist: 'Arijit Singh',
            url: 'Hindi songs/Jo_Bheji_Thi_Duaa.mp3',
            cover: 'Hindi songs/Jo_Bheji_Thi_Duaa.jpg'
        },
        {
            name: 'Kabhi Jo Badal Barse',
            artist: 'Arijit Singh',
            url: 'Hindi songs/Kabhi_Jo_Badal_Barse.mp3',
            cover: 'Hindi songs/Kabhi_Jo_Badal_Barse.jpg'
        },
        {
            name: 'Kamariya',
            artist: 'Aastha Gill, Divya Kumar and Sachin Sanghvi',
            url: 'Hindi songs/Kamariya.mp3',
            cover: 'Hindi songs/Kamariya.jpg'
        }
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