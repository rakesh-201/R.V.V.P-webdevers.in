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
        }
    ]
});