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
            name: 'A Savita Aga Savita',
            artist: '',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AADiHtixEwq1Gtr3kVn90GcHa/Marathi_songs/A_Savita_Aga_Savita.mp3',
            cover: 'https://previews.dropbox.com/p/thumb/AA15Fo2SfWio7u3-3u5RDZqxoob6IGCg2OUgrMkUyNty4S891k_T0_Iiv58nm8GbgeloZt8U33r4aHZBXfmR0sZUaxlRqx0I1ns-FSQypCQHlleA2jfJtF0kJHuQAxbeCJlBr_eGrg_EYX_e2Zv6QP1pPwpdKxWtdD5EmfcSvgiDKHjUKzEYXiPu8ebGYwgarPJR_nAgPXjnvbS4bClvKZ6-cS-iJ9CByHdJjbi5Iu3X6WC8q4qjFx7UUUgtVBVrNW5oiPoZ445MygRqq04ZcsShk-l35sB-p3YlSrW56r-FcjvnIitk0SnF9LuAagv_7IRlPLjTZ9CBurkJnoyEpvaYjA8Vb5FfOtATu3_hsesacA/p.jpeg?size=1280x960&size_mode=3'
        },
        {
            name: 'Aai Tujha deul.jpg',
            artist: '',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAB4xj3L3_7VcOkDwP9qJhyEa/Marathi_songs/Aai_Tujha_deul.mp3?dl=0',
            cover: 'https://uc8ba7857680fc3ebcbd4ffbf806.previews.dropboxusercontent.com/p/thumb/AA3uVc4F8WkUL86rfIXX5BYNNgsj7ArcfHAksq_KHBOXQEfzgupq6NPAsMAlwfd2Suvw96TzrqfL9McLOEg7cCHJcCF85YStf5PrIFYtQaMbzFxXbPd4rckDKOP-XggvYHBCGp3AEH3ENupSj1zug6H0sJE6dpk0aodUcmAJLoKuLnG9hoJlCTqf1RRZPhB6uVsO8fLps4WkcURdsUsO6yL2wAzPShMXyOg0A4teRclRBTUdr9LE8yuyV_0RXKgxRr0ocy5J15XH6jBQCRhzv21EERsw9_eO7W4D3IPPzO7wf8-KpPWiJE48Lf71IbaM2t6rTZtPSDEuN4Th7LZHomQcB837cXfryrxRfQu6dYbGHg/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Aamdar Zalya Sarkha Vatatay',
            artist: '',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAD4CtMygeJouhSr7cC1Z5q0a/Marathi_songs/Aamdar_Zalya_Sarkha_Vatatay.mp3?dl=0',
            cover: 'https://ucdd5a80b65c960849a2de907c70.previews.dropboxusercontent.com/p/thumb/AA2bf04bklTYtW4ICdZYPBenZ8hWTnCp_gl-N8jIFN5YvXEnajosAmtGUPXYdS14G0E3iwqMe0LkOtFwTNs8KXc5UD9O2LXgAEW6Q7nREL5vR5h-8GYO-KRPnvApZo_nIbtWHl9dkWyfrZeDkcQwwO9enkUL72qkDx3fHCWb-eHYpL4M0LN79vpCjGOOuQ26QbplkXCU9elJNDblmIbTljlPhpe_H0MGu7NvRoi6wYqYZ2yO9UhhqtmoaPPn6no4-rgELmZ3FOUWUU9hZdtLTh0EI7Fc5R-eFAEcIz15SrJ5Ez3IJBaBLogSFxM_rpgfZB7ews7Ih0dWZKloH-pDJgkVxI7yaWnGms8zAFfQa_duHg/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Aaple Saheb Thackrey',
            artist: '',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAC-tMt4EhaXxEOtsRpA09p1a/Marathi_songs/Aaple_Saheb_Thackrey.mp3?dl=0',
            cover: 'https://uc5a0792fe38d09665297359ae42.previews.dropboxusercontent.com/p/thumb/AA0SnF_3uxlzAvStlN9oUCAHpSdM8YIYlV1P2HBrX9pIUI-u189et9_6JTFbxwlf8lToRKcUXNzEnp-Wdf_kK5olzb_VMMZfM-B5BtwSX5Hs2Z5AIH0NbsTWK8TzbvHKETDywbD-vyWoEvVwMWz74sSJXZt6WNztzX9JlZwmTUoBOlj-9K-MLfL9R7DuBFoT8cMnvNh-1U8-XW3d_AwUCgXtVeWzYCY5M9D8pn-ShqEgC-jiMLXaNZ1wQK9EdewXigaIXzwgxUJ6YoljeiRX3Qrx0kAmmFxUac-R2izogGmflqgm30yjsHUA_G1Mxv2TfmEPmF4zs2Un0csV46CWv7tvQd4lN5CSRgZwwhgTdTFjaw/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Aatach Baya Ka Baavarla',
            artist: '',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AACxsUxVXsc782EZ5AH680W8a/Marathi_songs/Aatach_Baya_Ka_Baavarla.mp3?dl=0',
            cover: 'https://ucf40da0677e7c7ebd09f10d11b3.previews.dropboxusercontent.com/p/thumb/AA0i1eMpsNG62-DLEhhMRYnsT4Kghe1dH3LxlQCeoZ_5L-xSdaSKKiIqRsNZrdtDIsKqQIUx4IVCuE-lDxqXkw-2j0GddvpRmI2m8McYZBob9lZ1ZmuHTm0NyJhdV_seruReOa_FAouXiF4E0wEvdLuEYadUVWdEVBi9tJ662P9V7Ot2oQzqiLJl6Uq6x077aDUOoAo6kjAHPyCmc0HqmgEmC8HYpd7AHIYVBqc2sjd16ePbZeI4yiV74z1V3ubUj-P-4frpd-VB8rmEvlrfsywXM6PVCiYqXp88_pW_5xHbiTHZNiNs3fThkLYmrzgwloFL9gga3DhHh4y8dO47w6xnOqImzchVwJTSYeFzP8DfAQ/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Aho Mami Tumchi Mulagi Lay Sundar',
            artist: '',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAConi-meDoErWt3LsNWnS1ba/Marathi_songs/Aho_Mami_Tumchi_Mulagi_Lay_Sundar.mp3?dl=0',
            cover: 'https://ucfab31e8a8e69f4cd527bf5a687.previews.dropboxusercontent.com/p/thumb/AA1oE8n4-rHENQ5teqpr6tA6msjK9bpVCblx41X2IfqAcvzk1rZmVqdwWuAhKR8MYBeSVVWUM3xZtVuC4FCKWlmzcfeCG2dQQ7ApZcuAATu-5ehYyG7ZSBwjzUbTkMGCbUDoZfsQM4_b9CXyFsnWY04b79p4s9czwtyW7slFiwSXkzObZOFV1y-z_nvoWQSy7N96jGCwZ52uvLqmruzl7I29fpL85QeEurvF9JA-vnR8sNzMDDr6jO039L3XXlJ0PKzWMuibhFtN0DQL7cZidmlX-QwL2yHXXowGe1tuyVp-5LOrVL6hN0z2uE3HamPNUC7YqNfh9nVQrmwIGzyRMjLzuGltz_GkNIShxD0di1ouHw/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Apsara Aali',
            artist: 'Sonalee Kulkarni and Ajay-Atul',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAB7c5ryH41y2VAS88PU52IHa/Marathi_songs/Apsara_Aali.mp3?dl=0',
            cover: 'https://uc55670880abbda278f9644254ca.previews.dropboxusercontent.com/p/thumb/AA1f3DvPBQpVg1HjUOqQjRMhOFJNHmCiWK26X8ZczpPjB-IyowljhExVS-7ODboABDRmtf1HkJbN2LKmXHiZamOS87g0ysnJ4zdthxZDck7MHl2ynu2wyTHXROKwAnJL0b9bnhryAf_u7uvlljfgldcZvC8eaPns-ptLuPgu94-phpu8p4ECZUETINo0zQuwG0LC82hkRHUVMsHbW-MVESjlp62icBd3bi7pwU_AJ_ZJO2jxJCZ5MJRJd6GGX1LED0KAYYuY8erxQ_HvP2t4Kjr7QyDrRjjYT8UkdK7j6gt6Io_w2e6Ntr7qvXyh0ka2QFxgGO63KH5ZIncZRxysdVtPtI6lLRKrHE6VSqAtZCiJFg/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Bablya Ekas Kesavar Fuge',
            artist: '',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AABrwexfzBATHzv3tWWC7tt3a/Marathi_songs/Bablya_Ekas_Kesavar_Fuge.mp3?dl=0',
            cover: 'https://uccc075841a9a975e15adc5e1d05.previews.dropboxusercontent.com/p/thumb/AA1AfmGJUZQXSpecp9QJX_oAOW4AzBWxXXkN5cFzKev9ZUTjr2AA4ITOoCyb5qy7iyZ7KRK2Seq065EGV22zmnY1aNce80169BzwkOk5jbu4MZU3mwSGylJvVYYQBri-A25meliP7K0iGXbwlIkkV2dsS6Ac3Lk7szbX-kDbpfBEc6KPFibpWw5FnMVAyaqRbQ5XhJb7gwvqCGTcUtAYv-Tmt6G7Pqyvc0oLp3LY8IN7kx2JSTD-NJvtYXjxdZAuMKUA8kdgtLvtLP_xyvYhFdb28AxtifCv1yHO3x1PiES5F_RtIuvn8cCCj6Ai0NcVG7MMdak2d7N4J1PmfcHnQUrATCWb5gGWuAHvYOx1N0mCqg/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Bhau - Shambu',
            artist: 'Shambu',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AABgcJUB84FAhOYptbSwaDxwa/Marathi_songs/Bhau-Shambu.mp3?dl=0',
            cover: 'https://ucb89894e24526e72b705885ed86.previews.dropboxusercontent.com/p/thumb/AA0LEV7eJZUyIkolozDYQSVZ58700MG6HRSsrKKM9EQfVsy7yPkSrBqOAJ0LKh0wu_hnU6TO_JJCp9jvhSGO5P0X-K4wLyaupPci9-8-mDUN_7YKYb5i5dEhG4fofmk3nRv47u_Nvt3FGEydddSWUEBi8RM5j9l0KCmk8tIn5punTjDE5feMO9aj7sbnKrVmAnAD_QrYL69FbgnrI3nLS_HWRir7o6dw46QJ9ha2L0h-53ewQDHKtLi0TsPGE1O8jdQ9no54h0xb6rT9fvXzzyAQwQGt6oC6NWpX190TSOhunRa-4egStgW0DPIPfDtlyg2iZ1pmuZZvG1p_ObMydZTWG9plNcsRxuJhBoQwWEf3rA/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Fandry Song',
            artist: 'Ajay-Atul',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AACcaP2t3p0LA9S03HRukVaOa/Marathi_songs/Fandry_Song.mp3?dl=0',
            cover: 'https://uce0ba6fd950a0ad8c26f4fde871.previews.dropboxusercontent.com/p/thumb/AA3l4qLYQgTaHU74DFhaLWe41L9EDmvt0PCvBu8-M0YB5Di-CEmGLqBC2xADMqDeA5Sl1AW9MrUZ3xzLdJ6mOV8B39qVO9LzARxS9kKXBPC7KpFLal4zwyZQ36TTT-sWxDfFSQBhl3YqNplxthtFAYHwBVtE4QNIA5IW_BwLfGhFNe3-QQCg0FdMFdQECq6CmNC2D9GasbOydjE_cxA7q15WzcjAaSOJTeYrZH3G0mKM_MAQUCHEogTE_9ExqkYsR_jpTLoTYflhzBCekLR78CcfvP9HW0gXrM_I27O-y9_LsgJWs7jgm2YaVXT7moCui13THESCRX_vXNgdraZXQpXlbiWnffSn3nPabJohD8Wkeg/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Gondhal',
            artist: 'Ajay-Atul',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAC1ynGFAHCm6An1naEhDQ4Fa/Marathi_songs/Gondhal.mp3?dl=0',
            cover: 'https://uca96eea416595dff412ee1fd94c.previews.dropboxusercontent.com/p/thumb/AA1LxR2N_OslQ2_m7MT7lOMsg2L8Hkg1NPlFs2y76IIkIixHEZRtXsmf1Xaf770aDSzEVlrLd-pVXr5e07jJDtEwlyEbeGuD-noZkD2EhO_r9A89C6kqbPMp9iPegqtEwZKnp3Aaojh029r5azwJ-4rr-prDCiRzirk3UtpoOwQPpN9ypzoMCflWAzaqubXkDsTcVU5qRtBPgE9leIfk1vOzYKHD3mK5cEjUt-8YXnkX6y8Uc_-cZkVW86vjCIQbHuW3Y8f8QTc6a3xlQdFO7yqpcq0Y59z33sqY7iUshQzstiBKt7AWWpEGLVD17h3uCXJB2-RbhpM626sJiO3yuiQGg3oXNfJAm0DN_uxQd_ajFw/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Govyachya Kinaryav',
            artist: '',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AABCfQuqf2cazvA9egtQOglta/Marathi_songs/Govyachya_Kinaryav.mp3?dl=0',
            cover: 'https://uc46cfc27aa94198b57c0f6942d2.previews.dropboxusercontent.com/p/thumb/AA10c4Dsvnle8qldho1DKP2bLeNJwGXjPtvXR2BxyyXQEcIdDomBGAfW3CtEGNPlSk_CibN55OQIG7vLBTyWkZBmy50AkuV7sARgAlPLfitjjSu1rn5kniaxXUXa7tcNVZ-VQ7PGgBqTaxgkFosiSqEgzNEVrZmnm0lqP8Wj9bohOtjq_U2dog25xYIxVaL_jSbec3FTlcXvhXLLjmgJEE0f9LCK6iRPy61154oTN2dGmZKicniJS-EPzFR_GccYBDfQHE2gowErpGaJsT6i_p1KywRPwsxN7Z6OXFJQYUp-JKJnWUHgQ4f3j-iTiJO2WHb7WDlwKU5cnkeOruzv7w8meBwAD2DN7rHNov6MfCiD1Q/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Gulabachi Kali',
            artist: '',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAC7CELP0HX9a4Gk5XhwRJu4a/Marathi_songs/Gulabachi_Kali.mp3?dl=0',
            cover: 'https://uc1814bab1beffd42082b3114585.previews.dropboxusercontent.com/p/thumb/AA0Anlx8Aq2RxoyMG85clHBqNsnoRUeyPLnr6Jcvsfj0Fg6YMgmugzch4U0ykoB4Hl7iOySPn_CVUsX4qElX3XVAWi5aB6J0YW-0SrP-_bD7hkiQBwx8MOn9FZibgKXKSEfBRuFTo6YAwJGwjHvOpF1ZRIOTaPhg4RJ46bAqwvqfC_O6PwMqDuRMmdx8UqDRkPTbBqrhFk0AyMx0oQ_5oxs9hoMjarG-mjV9R-BvVN-BkyamFcNv_QBnvb2l8Rk7GHt1IJfodi9i_4f5ZEmGbBh0THVPptXf7T-q3r24q2ooNVvCMpzkdCfqPC2bf1ZgAq9RHkA-LEAbKvjaMyFi1XLkVDH5e8TRe14VKa0xX_8ZZw/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Hi Poli Saajuk',
            artist: 'Reshma Sonawane',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAClVH3Pv73tp6so60LngEiaa/Marathi_songs/Hi_Poli_Saajuk.mp3?dl=0',
            cover: 'https://uc7e2db21b212050db1588636530.previews.dropboxusercontent.com/p/thumb/AA28YIyyCfCsBtyO0LBbs7oDLYbaVrXBe0b9Uw4vMPdAmpASrzqcZDOzzihDf-URwvNEpBRleJX3zAUQLGxzvynbBSdUhv5_Eh9aVPL2poKPH3zHyOUFwi87IC_iBl6KmyT_Jd3bvNfApCiMy0KtJES0ZV8WqTUniAYpKjjmMmfjuWv3tbGcWFetBDXH2vNm14KSDXvUPD3ZnnqCbeyvjaK_rkpdHlA50ja3spPE9QkGIy5aEc_eJkV_1HLX1WJGnAWRtQdPoUoBBOgsUQsb8VXZKcfIBUkZxIobcUYWGYZHlKIMQ7NVIynbKEabvC0IllCLCNP02HZPCaCJ2OLYVJqWuGyTY1vXAQv9r-CgFlCnJg/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Halad Lagali',
            artist: '',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAC7VbZgTZVo4moHOpOMlCX9a/Marathi_songs/Halad_Lagali.mp3?dl=0',
            cover: 'https://uc32648d5f3f0fd6dead8ffdfd56.previews.dropboxusercontent.com/p/thumb/AA0215-bf1RThbCfsOUSraSc8Gc07mRJElqtxLkyNTKhTRRwas4p-NLgZj_y09v0uRzp_YCy4iWVbRz2cKjeUz7DwiKqe7jO1unnumK0kKwiEUeM7EyzP6WENWDY3sTdoZPkb24aCvnLlJHOTR1QKeSXnwEm316DVyhvAjcWC_3UgOn5D4rsOT4N2y3y8I_HGXywlv7aaOS7prun8aU61X4BAgIoT_bR5P-yFE3YNvMvbprX2XNGVTDe02pEWIIKUac0djJrBC5aeCX4KNc-52AaqjG7xRUGCAasjpGNi3R3vOgw-fuUE_X06MfHQIx-wTCK5oKvo_GnEH19sSSFR4XGEfVQiV9b8EPjDRWhXttiJA/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Ishkkachi Nauka',
            artist: '',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAAVoWG3NloQQE-peUATxfaka/Marathi_songs/Ishkkachi_Nauka.mp3?dl=0',
            cover: 'https://uc21bfb96530bb8744641d767c37.previews.dropboxusercontent.com/p/thumb/AA3MU1sUAijb2Qf7W6pM_0lb0FEwSDbR_XwVDYA4wvrqc2UZAKNpj_ZD5qrc3JGN3D3Je0jJxuvGC1OtnFG0p1EVr6PV8BFiU5hTuNkSJgmb0Y6zD8VUSqvdXdNfY5zKWOvIGvqqFEaSGusLKA0Fb1U1gs18sJfUZT3ACuKBp0ud9xD0e3Osvpyogiw1Thxj-FztK8RIW84XQdW9-7xJC2u9vWDPqBV8YaD4S1rxFsRlUJ-msgWynWwJ0TzQYq1fi-N8-jc0u05PkL7GJ29MCMpWZ-KcLYGDQFWfkWOz7i9CwWoOLRvxF22RZfneJjv6K-KzEgAem0bd75_Ib61cgyvBiKKvAFiu_8FM0a7kfSR2kQ/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Ka Kalena',
            artist: '',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAC8H7EoTXcmZejNrTSSb6_pa/Marathi_songs/Ka_Kalena.mp3?dl=0',
            cover: 'https://uce0b5f9b06d8f8164ebf376b9dc.previews.dropboxusercontent.com/p/thumb/AA1Su2P2xDG-5j4VCts8lv319sKOQWAd8kM9bGOD1Y_aW2sRGiUB9_MYIN3F7tBGLeK01k4bcyL1b4tZk_b89siJn5ZuKl0RfbfL4iCJo76PqOHbqA9LOIH6r-ZiLzs5r9rHcea1oScVHH53wVGA_lNS4jxjm-r_HxsAo-BHr7i8kGm8qWcuWdUngw4x0jRFOwRgEzR2E0DM6HiQnjS0B9trX7mO5S-TbLALH7m4XjMsFy6Mh8dfAkHeWMVG-oz_BU7lf8NCDfzU3t2elZq-QSACrCd1qTJfvzQgW2TkZm8wvYK7-FWXDLdEpW0dODL5_SzwHqDwo6AxfJl8NT0gXjAxrh5FGgyh9aCqn1MbROvkbw/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Khel Mandala',
            artist: '',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AADihOm_JkDVeh_kwTYew263a/Marathi_songs/Khel_Mandala.mp3?dl=0',
            cover: 'https://ucca24ba749efbe79a8666b034a6.previews.dropboxusercontent.com/p/thumb/AA32V5ssONu40ySNSOcAEji2GTvTk0tdUMYP5xCeMktbWiKaxfs2y0OzGjDIKehT8yNKhwOoWJhG_U7_d7TZ1g_7xlRglRaVQ3qmXm-k1XyEl-uwtOjKYpbgrSvhmfzc--C4kqYCjHAjUWu3hZKIszQMf6Dqa_DDjQQ4XeJGOUjI87IlUukMGiQDfCLjXJvqEUbWSzDqOJu_HJxWqDTlJ2q6VVuXM2f0jDyfuYDc1XEfemtnyyNE335-avNXED9z4E1k9RoAgsXgJ5lHSAvlRSwBH_GYfAuxoXKFXmz2id-8hQWkmpy5J3mIciXnViGcp0vpEx4DUV3EMFEPJyiT06FzNBs_eihfCm3D6os0pOWG3A/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Koliwada Jhingla',
            artist: '',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAAIdF4HMiEBxxHK5Ka2iGpRa/Marathi_songs/Koliwada_Jhingla.mp3?dl=0',
            cover: 'https://ucc9f26e993b9074e343b7647808.previews.dropboxusercontent.com/p/thumb/AA1dEz02_5mFBmwA0MEFUYMx1Y94WzaNC5RT_zfPnhvBbLp9BJsbms03WFDi_JpmMYwB78qPo7aNE8gveXhT43V9qh5n1woKacY_sYfdUyzYyfSC2AuVhjflYvdEkH8aVJXJstLN5msL7zk_feZle0u9Tf9Rb2ZJ0U-xBrQp_0-oDsLicXaWMPVRNGnb2x2w6pUEZfJYtt1AJWGQuLzWPrx7Ms0ONXdzEcs4VPY1_nUiFv5IoZspPs597w1LsQuJNoIlj1XouPVZktZ-rZDLPCQOwyf4LCRv3m4urmBUXJfE56ua0HQi-TK4SwAYCm20de3aDUMhcwa4GnqtATosTR8U9R8vf8cCRQQFenGPARZq2Q/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Kombadi Palali',
            artist: '',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAAG3Ghw5rI2fqf76onsyplxa/Marathi_songs/Kombadi_Palali.mp3?dl=0',
            cover: 'https://uce6f540c67d637616b2c8e233ed.previews.dropboxusercontent.com/p/thumb/AA3qB6iW_csjy2NUUEvGtOZj_MkJZyN1w8hfTJSFkagIFOMhGkKXCktXaJTQ4tTBmXaWRTqI_mVH2p3m-ayPxeBwSAlxn8WxZ7Sdc3V-0sd2LnsHWtnf4T9hY15FosvquTeQ2UM6v3bFUng-YfWSOs0wIBCuPeXrLL2a3mbIM3v_-fzsd8B9b_EDXz6GQeQHlIbZFXaDMqqZlKgjUJVe7yL6KjSNfAGjpPXrKKfM0sSg3GDOpnbz_zIl3ErS76rdb-bXL0ql9sexupmK268eTq1hKnNHBHSg4cKjdIRpdxbE8LolpJMWdFwKEtoWFbUIls5677r5OL3bOlFNLrBppDojNulKYLCj_SPCwVlfg0sN6Q/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Mala Ved Lagale',
            artist: '',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AABoqeKTOWgtd-TDwex6lbc0a/Marathi_songs/Mala_Ved_Lagale.mp3?dl=0',
            cover: 'https://uc9e791a6b4f7b0fe29749a7ef8b.previews.dropboxusercontent.com/p/thumb/AA18v1TP0DI5so9qWezvKAA1ooLommwl49ZqzrzoC5chBLT7p7ErHnD5ql6hR6uacfvTPoQbVBaV6PU17PWXWoxbLJXsUSq8s7Qc-UEEKnNMcUvXUPViBfIYZbBFaNI6GQoSji8fgKWCk6AkXP8YkR9c1243m2k8mKiRhcxq9YHNzDwgR0h3pl_AMrCrqz_ycSkvNEM_Jw7K-QKSl536M4KqKodwRvIB8J-cKXZ-gaUzuuBefUbHPdvn2bHaXe5hJLH-AHLpBQhOJCpFxHZ8164GH5AMU9Wd58GOm6DAnajCA6OMenBz0IYqKi5hHz-jttyxN0TUYUSNe_mmQDvLHEIEsUm6plu1KIjmbak7yDviqQ/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'O kaka',
            artist: '',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AABDsyPyiYduf2nszuNCxRqda/Marathi_songs/O_kaka.mp3?dl=0',
            cover: 'https://uc1b9453149002fd881862240d60.previews.dropboxusercontent.com/p/thumb/AA3xVR9OEgNqqpBDxeI4ObN1UFGGYlnr0hClOvHAR1WUPNpXT_7N4ELiANArRnKPMQWNxw6B5oOUdyRfBve-X1tHbNrAyNhs9sZWi4r8kb8GuiwkWAYEXCLj3EEAt8-eKiFPh3zEt6Mff5fXsh16GhHOYUsjg6jNVeD5AZme_VV8x7PGDTHbjFeAkruG820K4A6V67Oq6u2WsRCdfNb04Td1LPV9nN53TpZ0pUR2E4LLUgW9NgW2W6Fh3tQxWmvHhD15_QKCwVReFf921OOLaLJbEhi9GAy51h1AGx-7EzibB9Meuvb5EyckCRN1LBBIlztbprji-cLqog4vaKSwG4bQ000lP8ahmaZnPX3SRN0eSA/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'O Raje',
            artist: '',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AACOTXNijFe1o59eZhb47jH3a/Marathi_songs/O_Raje.mp3?dl=0',
            cover: 'https://ucf26ec6fd721fb29f4455934b2a.previews.dropboxusercontent.com/p/thumb/AA1ONcAIJrbRSF3BA7x7B1OysjNk7Pp56jABWkTy5qeWhF8yMwHudUBIP3OKrxYNuiicLosm-0LUsrNSin_M8Z5q07uA9dq92mvriqku5EUCso0lIpGSmR8np-PlRNY5GM6YsUg5y8HPfTXnm1Y9tFnA4hqUfKezyNARY2sZcvRinTHO7ffWIKsOSSj-uQVJvxWaGf5tsWGMrK9ggx-fqVSitPHRDYv_MBiiFVr5o1ubgTXJQpw2MYn5hZDEuBOZgOVu-tAXy7L6OJeSDzH-k_tKg91ScllnMozWMJwRneJNqkggDD1KAv9ZwgkKww7szLScBkMIbO26fNUqsNrSAxvMjgfagtef2Seko_uHMsXt5w/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Pune RAP',
            artist: '',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AACa5zm5BKEYg_9-DJNtXIN2a/Marathi_songs/Pune_RAP.mp3?dl=0',
            cover: 'https://uc876ed2143ebddf2db0887c149d.previews.dropboxusercontent.com/p/thumb/AA0Jrqx9_xJEKWF2UBSyx63KB4TpgSfpZGuOqSC0MOhnzA_EaINAPHO6ddPOK1K-jTEaImdc9ZjeELXBA2Li5qksLJMs_Dw6b0l5nL21CR3cD4zZjqA3h0oGnKFNvmQt6FtKi4fT-MJT8iQ3cPEbCFg82Rg6-_X7qN8X4mFXq60i7vhdhJ2ziXwuD1KEfJ_wCer1FRjfp8JOiEYo9JwfuZ0ZF02yvpBaz8KZjyjBS1Zva2QZEQwDgVbgx4m8PPLGvTFygrw4aT9OkdCTvWHGmWxt7cfo03swI2NnfM7-neo7ddq7s9GqlPFcHeL0YRtXaMOyUXIbsPsufzg8Xo6Wn_DPEJm19HoOC5fvLvORcDUR_A/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Saavar Re Mana',
            artist: '',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAAbquRQwrQbWXCxbvOsOMJFa/Marathi_songs/Saavar_Re_Mana.mp3?dl=0',
            cover: 'https://uc410370fa556058fcb509f10cb7.previews.dropboxusercontent.com/p/thumb/AA1hOL_D2JN71gPz4OujfheMogwwn-jrUx1hrmLNmZLgVvkYwWznORWtnAlG1P8lX4mALQ3d4z_mGDleIwK3gvLbrGDtMuqG0a4dRx_fuQ0y1e5SNZp7FZt0tYFfPvRyLt5lZS1Y3RqMoUl3agIPyC63ePjZDoKEcFRTF9bvJO_nBjhEsJLU3cUHXTnOm8lrDpC8sTO-GoyYyPq9As8AJRWCHJbhcGpzi4LP-2ZTvBVKJdeqJSu3y5ExCUgaC7uMLuDxxr6mRyjtpSoaSXFA_uqqKmnVSQsOqigwqwKhjHihgA_Nz-B5adyKzfxEgfOo_NFi_Blmqs2FV6hjLR6GCcC2I19AlzQErFfcl48TCUGunw/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Sairat Zala Ji',
            artist: 'Ajay-Atul',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAAWFb8NOAVMNyqlbqLI-SN_a/Marathi_songs/Sairat_Zala_Ji.mp3?dl=0',
            cover: 'https://ucce9725cf9b600fceceea3061ae.previews.dropboxusercontent.com/p/thumb/AA2OnXBi2BrodgquU3oecXd-Z-N0g-n_3J5VT3B_2y44wMZUBdUJrX4tMSN0-WqWC2KQ9C54tIx0di2oE8WeDLItajaBFpYC1a5Q-5ZZqCyRWhgJfbs0UCoX0ACkYBwOFWwbwtrMSQf6_AxlcEeLnWOQ0AxirUsVROY4wMXRKydgNPSznNwrBpukAQX3Skog8NprwxEpZVIbZdFzRg1ZNeZeakx0Vs0qfta9CvdYZMMeuQPsDvqcMN_QjUwowOswkbDaAM8ghlVi7zON25r_Px2vToP2jqgVwpiimQ9z9BVszC4XKrYBva-IMMoIY4tRnMwI8gGbCTufxC6pz2hUNyjvNDssPbUZkfmZZCEpBLyuXw/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Shantabai',
            artist: '',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AACj0lTNZeB5mzPt0DGffdtfa/Marathi_songs/Shantabia.mp3?dl=0',
            cover: 'https://uc47f9f765f645f0e1abe63b0e06.previews.dropboxusercontent.com/p/thumb/AA3g8pSvunHWNRFlh5hqkSIGccu2JUn7GU9asHq5DHE0FpRVB6lolYKIyZC2-JdSi7IzhNJGSfNEsnzezSp6OFJ4ayzkBryjW2DUIzhIPFzHwowoa1nfuwUOwxRkI4390t6uUFo-HMWJjM5BQ76py14d4i2HJJHKI0nKn4fY4ambthAjE5Y6qDjB5x0ihLC4JTTl-PpctcFvsSEOajbZjaOTvW_Ibw-vThE6WvJlvvLOUfdUK71mfixso1uCIYdXnhB3EMX7oNwSojMt5ycC3mqQT1KS8CNlQdmnLgV8P8KO9XehljSOwLkdT2OU49yVcHS-AmeGVAQBeMxdZzhgJl96i7UFO6aLPYOrBhX6qWGeCw/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Shitti Vajali',
            artist: '',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AADqi3eRanW0uydCviNtzST7a/Marathi_songs/Shitti_Vajali.mp3?dl=0',
            cover: 'https://uc1a79de4ee00e142de8bae242c7.previews.dropboxusercontent.com/p/thumb/AA1JjXPtspJZwpNk59kiiN_fhvGD2XkJxNxepBD5MpwS29t7tKGyHBSV7MHCo41wN79254eCSS09F6qVs9_ya42UiO03IOD-aXSS2SdKhyS0LA6pRgJ0lNgyAIYgZ2Q-hv2JyAeCEBKOOi8b2bBxBgPH6Cd1GGBOquO8b8TKFIX6kE3aAnUSJJzMvSmDPYQcRV3JWLBOyJFBK3HBJGvFvk5z5f8SHKNVm8n3tVpYl7pDPayEQA1gJyyjNCCq382IdnNJZVGmwn8T8WdNs1mNP7F73NivDW3rJM62TxcHgbBlX8b1TXWC4i9DS_t3Fqr6Uf3Al-bdFCTqnkX0s1_6h_Q5uvzRLfjZhBCZSg60i7mYrA/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'TAN TAN BHAN BHAN',
            artist: 'Shambu',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AABQJjBIF3rhnKfE_XZRxMiwa/Marathi_songs/TAN_TAN_BHAN_BHAN.mp3?dl=0',
            cover: 'https://uc95bf4ba8204b1434f04a0496d7.previews.dropboxusercontent.com/p/thumb/AA3iZiN_Bx172sLrzlABt9e5m7euxYkF2RrvarMx6KCojCUuidGE9cWBNFwwdX8XKl0kJQcWDZ-qbZsJhjMKsXmFhKU2hdEjr14Int3CLiIHPZYqDfdzLIrrhzrvQssdZ9cCdlxHGjmrYYSBiZ1LpF1_ellhWohjPlahnKBs4RqrYqgc-uA9kU11Y6h7AjXX1kfLQpw_hfy8y5uNFLUI4YOAcBwjnZ1fOeGqSsmF-FVCr6Alij20jzvb13MV3y9ibI_p18Mo5X9RItcrZ5ne6iiVyR07qEtIPgb3zCq3yTndUqzDrr_KX3RCQXQuhHdcZ6m-qW2ZIjEv28BqJpbQATs_dge4eO3C2GfTsIr13W17lw/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Tola Tola',
            artist: 'Bela Shende and Amitraj',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AADbl_q8w7iL2M9_2xF6DGkia/Marathi_songs/Tola_Tola.mp3?dl=0',
            cover: 'https://uc0bf383a03aaef0c1465b1c9a82.previews.dropboxusercontent.com/p/thumb/AA3sMXy0IswZUb9co-WUwjvFSeFWmpiuUDjsWrZBSN1XmcYmTRpMu8dkl8dglgjii2cnrL3xKEj8mve7Y-KTKz9-kRgvTocPpLqGI40HUlrF49XQzHZH5yIv8lJV9ZY_SrXtKirNaAHbMTd0cr9SwxoLkWfde_tPnXIuHPKtDpK-KiNOHFraWpiMZ99QpQwJTCsMdYX0HPidd85V_3-aKVUqSOgse34cCrbnGnd3fEz3Fw389YF55qKt88-CT5c6OwZzgztMWPZm5JZMjCMpHypavsJqGX-HMVNXH8pDCdq19jRUK5H_xn7n-70U-Xm-zVg7H8khCnPKsEl42d0N9MkO28Zkzzs-c3tOXfSgBcwgIA/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Tu Chal Re Mana',
            artist: 'Virat M and Mahesh M',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAAcEg8khQkvaWQvcak8vP9ca/Marathi_songs/Tu_Chal_Re_Mana.mp3?dl=0',
            cover: 'https://uc779bcf2b5b744b58c3f325bc73.previews.dropboxusercontent.com/p/thumb/AA3a18onJTFVruyTylUk882cyqRvhege1_tp2dEuKZA0Yj49yvHyk5bchKKNI0QjuPBWSnecPircrsUDlJue1qEErLuz2nM7nFYVcRi33QKLhhF-bp_kzafchRPnHeUBi2svWh4mPA0eu9qCaCB8SgQM5TNVWDYqj0eIsNJT3aBZJZEM28mpIeJGyjUOpSEvfYy7EmAcRt3yv9ufWszjXDc2RDJFSmesMMVOb1pZkHeb3vpsUv012kCNZAEHdWBh5G33nUBVGetyIbkzcjzWjnwWmZE8_vjTnTF01VcbtqsJNx1BKBh65sOlRQd2xS9NzjJ6kyhCgqpH1XLB5sER93-WlNFSZBmejgtQhFLbX79RmA/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Wajle Ki Bara',
            artist: 'Amrita Khanvelkar and Ajay-Atul',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAAn5SG2rEcJpxhLOCxGyuZMa/Marathi_songs/Wajle_Ki_Bara.mp3?dl=0',
            cover: 'https://uca361241f1c6afac249884d60af.previews.dropboxusercontent.com/p/thumb/AA3kXP1uhEWygg-xZUwSSRg9MHfufChWMcvxwzQ3jU5ERptftAHJkMaiJwTY1iFXERm1jsji_GPRHxGJoFl13cH7V9eTk3KfyJ3-OgA45SqTlE5PteINh_VmgFgw3iWm_Oh6PyR1p-EIS0QUpP5CGyFnIDS-LaPJp5KmkpMxGIGZf0WNVKdjW_bEgDWguCvIYebCLjxrQnEeqaCsgHS9r7FH3mt9tgKH5yNSJy2CeHgV47uRlEaa9vU-fcKfLPrWgBX88b-bWtt3O5pzBinidbLeCFJEwhOnk4vbA4GhJ2-v9Iq6vB0osoru_6HxXpFz2qcMQia_ODoUHv5q9bn8pgR2QBI2SOIorBoJFP2-61nVWw/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Yad Lagla',
            artist: 'Ajay-Atul',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAB94c76K5VDAFJoTImeDkRma/Marathi_songs/Yad_Lagla.mp3?dl=0',
            cover: 'https://uc64087000a33afd3ab02b16a3c3.previews.dropboxusercontent.com/p/thumb/AA0aAYF_toAxS-HcSJChyHtkjPmOfCcd39A_Sx0D_aezKw1LuwaMAWsAnJfixjhcEq4wUjZj_Kvl8B3pwmUjpfkKeDXoEc-1CRhEH4TRD2ON5FPIbHTskw4TRphjaWen74RCShVVgBdE1npO59q3Cfq5T1iyYRfJVdO1tZ8ywHyYVhNLFiSO8EE7adNjaDZ5SV0aB0_4obhZFeMvCKFC7RK_1JsouwJZuerjQEZyjiPDdVP8rMRx2ciqVWJJJ4ukeg42L5aTdM6LErkdwO1qFXEupWcvjiNN7RrxJ-ufSOIb4SGzBnyykXyHCwSsimWLFCY9r28AogSyf6Mxf3_KnJ4aZ58cH4ouFdXuwJeZypFoNQ/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Zingat',
            artist: 'Ajay-Atul',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAAUJvK0nr7yPdT7MNSBLheIa/Marathi_songs/Zingat.mp3?dl=0',
            cover: 'https://uc6f4c23700f4c09073f51cca1c6.previews.dropboxusercontent.com/p/thumb/AA2KkBADWmHPJgC9LfWjeVmjtPMQdltvZK0GgxJ3ngmVIXK29i0Uk7YDbqg4ecnBhebM3OYBIo7XGSX6TVmGeESiF_hsKFXq9tTIlKJMovH582uLjYcr0Xz_RJdhZBfebi31mEL9Hcmm21SKmq8O5RBX-D78S-nrY15dNstPlSiuz8lRjoPpOm-hU2gd8IkTW4X7cSPZVIAvobqSpkGf8uhBYlZGPA6B9TwYYEYMN9r8v1UlvtSxzfTDMug0gqroeOR-l5r3-bqyA1kvhJq_vd6cmYJr3ZnY2uu5ONeMH1WncFB9y6_jYwoDPrmKJM4SgG7_5YCIE0s_4qqK_IPiLbC7_-nw7zNLYN7jINuHYt_EDg/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Khulach Zalo Ga',
            artist: 'Aishwarya Malgave',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAD5zgsQ64_6svzCZNECF8O8a/Marathi_songs/Khulach_Zalo_Ga.mp3?dl=0',
            cover: 'https://ucd3728f234d8ecd841467b67685.previews.dropboxusercontent.com/p/thumb/AA2B_BviPV1fH1UO7ce-Ee0Yp4hzJZ0NhJa--IhQ85e6DNM-qOILZ-tnU6yoSE3qiaJxKMcwAW6ZQjeHFruOKRPB2gMmhp_xx_sWdPoH35LHyXuK4m2dUcU1BQi4dXMKWD9WT_Y9J4xGEg8WcYjUzkX89bMKHJ9i7kWnVNf3D1zqGg8cVp9ZG3825tUXBpaoMbqmbN09MwxsUOxECUlJH1MYOOTUvabQaL7ambdsfqSAt1JJgQOEao-z1Rz09vAcf2X4Z64Z9QTxJ46dUW-gX7nZ4yy__MlUldhhDX_TA28E9lk-N2dutGka6SLsL0imjdh5ktzXnkgplJVuRTTyYcL34wkfZVpgU7c0E3KYGy84bw/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Zindagi Zindagi',
            artist: 'Sachin Dev Burman',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AABkMoLh5oQiQYY31vESs-UNa/Marathi_songs/Zindagi_Zindagi.mp3?dl=0',
            cover: 'https://uc78f3d39d975014d01eb5f02fe5.previews.dropboxusercontent.com/p/thumb/AA213jn2NLuug8QRnP5KxR-wONrfYzeIsBxFvFjWcg4REcMhOW7KK33SYnax9Szj-UJlwoFSWglqt8NO-0tCL6aEvm0i9Vyc1TMlssmHD74Ljn3n8AxCNXjOlFAYc0NVhqOv8F69msxZ6nLcWQyq1jT8yD5p2blCY4MMntAN-uTmw0MC_nbwr0rbx2Oi3XPJuMMUf6QRx-EPNLu6NdiBxzidSOT3xRKF4RphnJqT8EPiTAJoN6EvHDb8BhpnUUPi-_spIIw_SDHaDEHbYTkcmGzz2MST2brVSn0MGm06l5J_kOWq4tUSh7QONc08DHA1PUVk7-FhT7yaHsmhC2v4nzqhWbf_Y3M-n0-Gixmk8xDbRg/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Jiv Rangala',
            artist: 'Ajay-Atul',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AADwYfVtthAELXdf-HL6_q1ba/Marathi_songs/Jiv_Rangala.mp3?dl=0',
            cover: 'https://uc7adab525d0c83eab30d68c5b89.previews.dropboxusercontent.com/p/thumb/AA27Hxxj7-i306kdmKy76vIj0onnChwVY9INfzau89wP7wHVkX1XFeTQHvTXuCOYCrxkti7To23ppKphax97D-LZqH0d0B3sUu5QlKA25NkD1cIlJ-cv0UvIZI7AfWP8YW4l18Sr5BCiqFAfrYvmBmbBpAmw1jOkY7BZBLcLcdH6ihcytGtf5bumIK6ducpenJHAyoKDVhR7HLTGCG-KES6s78zOtEoHRY1Lt1qV39EW_PK8vkK_XRaTTx6yL8h-ZflCJ6tNCV5TXXxIf0F4dSTNgjQHm0E3yfo4OhTH-uCA5mgwJ9B3y4zojTryjIvBHxV7fuLpdMS2ta-ogFlVgIDEAS8cVsxFFN7cuVBHi1kASg/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Man UdhanVaryache',
            artist: 'Shankar Mahadevan',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAACLR6txLClJFZRvY-UO5ZVa/Marathi_songs/Man_Udhan_Varyache.mp3?dl=0',
            cover: 'https://uc01cead07eb67f0946559655044.previews.dropboxusercontent.com/p/thumb/AA1zyNVlOv4KIbWgToi1vinYCXjqThZJNqIxOG5C8vie-WbzTfo6R2_UEfIEnIaq_W5OiarVmd8OeNZvNmQPJVArXTgy1BfYuKcptk5GcgdityN_A5FBjwvNguoogaDXzBfY6liyKiInX2LoCNmLB3DaHHkFtHAPynxXlN81k2Q_01yFr0sqytK1wC5HIsVIbb89myr0b0Q7GBTJ8rywJXYQ1UzQW3YV8rhYWjCgfSsqN5YyEp8sgGLqH0PoEYFey4JMVEW3gP3HhlaTtQ8Bl1ndLRTukhfQ3kHmLz5d3GbXM6vYuw-CSa1XM0ssQNfkOAZ_rMB0-5ACwhcpaJYH6eQlIA9kfxEYyJebtrdXG3h5Fw/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Tu Hi Re Maza Mitva',
            artist: 'Shankar Mahadevan',
            url: 'static/Marathi_songs/Tu_Hi_Re_Maza_Mitva.mp3',
            cover: 'https://uc37a9985dc9e062839eee188c07.previews.dropboxusercontent.com/p/thumb/AA16At0fVN8bzUNv1s5YtM46HPeHSaQQGtQ_qMN0BaNHL-vLku0QA2UbSuYsBo0EAXrrorUKcR9PL54t3jfRpMPmPcTP8FPSCXfjvNeLcbdv5LMJCV0BY1zgzgMZ4xXQncQJ8F-Dzqs0StQ64tbcnlSGTHMas6WQzDBm21BGOC2doLh3Vtmg_KJpaDrcaNZnVgT182VLdO4zkcvt2ab6EycFLP-8-loKZDLExy0kx34FMr6AIdW0ZFcDcSw3kcwUv3Z4YKCgvMqPFvLtRWorqW0tOl4gnroMGRfuHGeFr6u6uuI4afJr9Ufj5ErPHXqteorumFAQAvoZgVCpSd8c4osKTlXQsJ9vkMhomWX8Ai0g6Q/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Hrudayat Vaje Something',
            artist: '',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAC2Ch33NiIi_wmeudPBlxeKa/Marathi_songs/Hrudayat_Vaje_Something.mp3?dl=0',
            cover: 'https://uc00ea617b8b8631b48d055969f1.previews.dropboxusercontent.com/p/thumb/AA1b1TeCM62MkLtS8L1ZzsddTtZiiq-hD7yHPF4x0rmx19JKLrZ6_dIN42q19vKjC3K2j6WfcYyUS58s3DCYu-HYz1A9toiZnjyZ4k3KbqlTfMc_94fbYdX6QEFl9g9-b2rFrOhZ6DN0LXUzfDpqPi9IuxLH0Pz6XdeVZm-KC05kTX5rePruMjoeUxPPc9URL0TYWUe7_jGTBiwYOqYQMXw-zZD0Y4p6pHKfFSOtvb-SZp9bqlJ6J16eKeyAu-pcpzVCOwOqYOYGzh1k6P2exO2MbSqj6PSBOSS5zPrzfDJpaPA72VsIL9k14Ssa87hzWKskuZQO0EK7uJF9KimWnTBhcilCasco5AepeLvX8ymIcg/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Rakhumai Rakhumai',
            artist: '',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AADodXEpjE5WNkjY1eORGg49a/Marathi_songs/Rakhumai_Rakhumai.mp3?dl=0',
            cover: 'https://ucb8cd75fa3785045fa1a29260e0.previews.dropboxusercontent.com/p/thumb/AA3BTZ9VwZfsQET2nD1KzLv9tJfIAQeEVVQ396JEUXNt15WmjJO0MbJl2S-NP4X1tmNlrEjAMS6vbHnw_7a0L9Ln5BLP7KNbM0Pv_nhIxCUrD-lDctJP74fZWn1eZf1EKo32hkgEnzkIuOLRL5z0uUtk2beQSVnJl321_m8TIjYF-m0Zd-VG8t1u0CWOGV6mDUTlTUlRVzT-_wxjjZBfVp3n1f9l5dCrqA_-506mx1KivHffKeisox8g8cp0jTWCR7iZJD7yv18DksaG1RYb_Aw-8B6iJlbWv2OHvjrxJgW3QHa5p72YH7b7VXXyqh0OOwj0nJdtuFy6K8-ieMEhs3EB_qne7Cx913aeZQacra0I4g/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Sur Niragas Ho',
            artist: '',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AADDVnjoZfInGrePJrd-jarea/Marathi_songs/Sur_Niragas_Ho.mp3?dl=0',
            cover: 'https://uc51c58fd7133ba9cd06ec7f5b31.previews.dropboxusercontent.com/p/thumb/AA1hTQRbJZJmCK9iTkkvEbUpNU5kBiQk-xxdvgIbtzxbL4-UjjR0RLiZDXBp0Yo8QZMC-1trcln8O4Lpu_5cQmD5FKgDlhBaqISSxtU9ONQWcUPy1JYDu2pXnSXZugCjIMe84nzWwpTVzsc1WeU3xg4nBMX3xHQAvU8l90LqAXZxYXGJc-nlBnNbLlqeLrd3__5-5LVCwNv8gWgmGMgKvUMxofCo8V39q05GqNeP52aCG3KviEBaMwM35q-kU-8TNMXA-khmQqPJyw504BnRwvRqRkWugXTK2H208iXKTjafRA4J3bWR2t2UKWsZdv0P5xouZqXL3QSHZmISGvPqfBqWt8ho5N_Vpg4XP7Y5V7jqwg/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Saath De Tu Mala',
            artist: '',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AABEhCgspSI-_XBUq8VrKen7a/Marathi_songs/Saath_De_Tu_Mala.mp3?dl=0',
            cover: 'https://uca77c2868ae0581957be728c139.previews.dropboxusercontent.com/p/thumb/AA0YfD6v1AD8bZpSTuWJ5zuTDODiw84HP7zNHJAacPCJvbvpwQgfq9dfXDmF_0FXhARydcnepy3IxULPEh4y7JTU_88QVy_QJDGTQiGt_ZJDJfWCo2Sm_MH-D5cODoqv3yvJVPCigbpXD429KBWDRBv6H7X4Q0v9fNOf18yWbx9HJQTBPPhKU0dkGk_m4yOsu5hpemDv9J-p7rSHQFCDeX3dhoPvgmUDAgeQWfLsK_tH5N68xmCEuZ3-GyxxRIjZDM_xd8IrVrdYnAizp9UGofzLvj6LZkrwuV8ZZy32UDGYh0crvhqtnRfzVOECX3lpfY7F5IkGPz-QNltkCIuZK-421i-bDDLbcRjeumOFqPQf-Q/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Kitida Navyane Tula Athvave',
            artist: '',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AADJ_1dKHx5VYo28avVv6qTha/Marathi_songs/Kitida_Navyane_Tula_Athvave.mp3?dl=0',
            cover: 'https://ucb0b10c0ddbae4839bec937abf8.previews.dropboxusercontent.com/p/thumb/AA3pLw62YlDW8W9ygvyGlWYGU8IDS8MkPT9Qq_wiWBFJf_GLkwO2iE4EV7WW8mK_garg_JWMI3gWhIuU4CmaajyQ4Ojw2ep-mMdGh0z-c_7cQ8iZwCITGMQU4zJ7xathU6oDye9sZi-wNNh9zJsGEQ7jWyNgT3U4lXfQzmYXdjvD8ksEB9FRYtqAIZbPJmbsqmm4_Rtl9WEkaPKNoeohtsEVeOheYIar-YbACH92kyOkWuEkf5BDFDZ9lP8c-wmFOrmfZWbuv_X_Y_fZHLUN8W61PoNDVoB3eKXY3lD0ckC9tevt9pQcpjebM8lxaRkBsScy7ozMgAzdsy9oOWLDIAUMXZ3YlV-YvYUvm81mJjlEfw/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Deva Thujha Gabharyala',
            artist: '',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AABbCo-aO4S49Tw6R0nQ23uwa/Marathi_songs/Deva_Thujha_Gabharyala.mp3?dl=0',
            cover: 'https://uce32bdfb6b04c9ac2f5f5b5fe20.previews.dropboxusercontent.com/p/thumb/AA07sCdRAlCjhPynBhHSwN16PE5HTQvslzDSCfCchf9PSs0vvUIkOaP5UZINkp4s3OtbcMnnuqsUyySxx45P4EqiYxcTw9HlvWIghCS5x4BK_Cauysb5J3Kr24U1ghYPfri2t4yipVC4xW95EUaWdwnvGuHmWyRIMZTwSt1pSJmmbyf1vPpo4GzmKThAm1NKIb88t-5HZFL_rks-2H4WAvHJNjRcrSy7rDFOjtqcz66PyfG8PWFYJGM8yjyySWzbnWmVEWjNTObaKlx7IS3Lb5aGJGIcTL1SLGZv4oOtRtrsdyda5KnBX3mYOjm7tBolCnK3gOtmKRyv-oCS2KAFmXa5TMQETt8NBbBIYK7GYITOqw/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Bulati Hai Magar Jane Ka Nahi',
            artist: '',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AADV5fz7DxuFQGHc6hPPBs5aa/Marathi_songs/Bulati_Hai_Magar_Jane_Ka_Nahi.mp3?dl=0',
            cover: 'https://uc14fe4e19fd84aba485810a24a8.previews.dropboxusercontent.com/p/thumb/AA0Ir62liln6EBEmH2YxScLsG9Y3mY5sWKSTFTOAzwTv3TPoflKw8xSOgvjksEFoWRzJ6fgHJL9XN22K5WlffTo8UcC3H4KwQVP_j3fdKOCi62ITYpX7eTsqYiP0QTkVFWVAS0yOE9dneJTFcmnF48mTrKYcnpsEkR54tFIOvbqs2oak9UnNKH4qVWVkJr8fao9qH8LLbC9nub-iQPoqs7NzwEiOKR5KafltR7y3B-40YchTmRAcBG8ziYObFWXFplobB6PPJ-SqHMzIRvKP2U40kcRUuiL0CfrKLEU0LqBjBdC7vd8u_6x6Bm0ME_2okXmFOoFRNzsFWEF29MeeXkZZTTZ804_9QqyThqoOTrfACA/p.jpeg?size=178x178&size_mode=1'
        }
    ]
});


console.log(ap.audio);
let audiofiles = [
    'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AADiHtixEwq1Gtr3kVn90GcHa/Marathi_songs/A_Savita_Aga_Savita.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAB4xj3L3_7VcOkDwP9qJhyEa/Marathi_songs/Aai_Tujha_deul.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAD4CtMygeJouhSr7cC1Z5q0a/Marathi_songs/Aamdar_Zalya_Sarkha_Vatatay.mp3?dl=0',
    'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAC-tMt4EhaXxEOtsRpA09p1a/Marathi_songs/Aaple_Saheb_Thackrey.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AACxsUxVXsc782EZ5AH680W8a/Marathi_songs/Aatach_Baya_Ka_Baavarla.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAConi-meDoErWt3LsNWnS1ba/Marathi_songs/Aho_Mami_Tumchi_Mulagi_Lay_Sundar.mp3?dl=0',
    'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAB7c5ryH41y2VAS88PU52IHa/Marathi_songs/Apsara_Aali.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AABrwexfzBATHzv3tWWC7tt3a/Marathi_songs/Bablya_Ekas_Kesavar_Fuge.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AABgcJUB84FAhOYptbSwaDxwa/Marathi_songs/Bhau-Shambu.mp3?dl=0',
    'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AACcaP2t3p0LA9S03HRukVaOa/Marathi_songs/Fandry_Song.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAC1ynGFAHCm6An1naEhDQ4Fa/Marathi_songs/Gondhal.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AABCfQuqf2cazvA9egtQOglta/Marathi_songs/Govyachya_Kinaryav.mp3?dl=0',
    'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAC7CELP0HX9a4Gk5XhwRJu4a/Marathi_songs/Gulabachi_Kali.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAClVH3Pv73tp6so60LngEiaa/Marathi_songs/Hi_Poli_Saajuk.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAC7VbZgTZVo4moHOpOMlCX9a/Marathi_songs/Halad_Lagali.mp3?dl=0',
    'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAAVoWG3NloQQE-peUATxfaka/Marathi_songs/Ishkkachi_Nauka.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAC8H7EoTXcmZejNrTSSb6_pa/Marathi_songs/Ka_Kalena.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AADihOm_JkDVeh_kwTYew263a/Marathi_songs/Khel_Mandala.mp3?dl=0',
    'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAAIdF4HMiEBxxHK5Ka2iGpRa/Marathi_songs/Koliwada_Jhingla.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAAG3Ghw5rI2fqf76onsyplxa/Marathi_songs/Kombadi_Palali.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AABoqeKTOWgtd-TDwex6lbc0a/Marathi_songs/Mala_Ved_Lagale.mp3?dl=0',
    'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AABDsyPyiYduf2nszuNCxRqda/Marathi_songs/O_kaka.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AACOTXNijFe1o59eZhb47jH3a/Marathi_songs/O_Raje.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AACa5zm5BKEYg_9-DJNtXIN2a/Marathi_songs/Pune_RAP.mp3?dl=0',
    'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAAbquRQwrQbWXCxbvOsOMJFa/Marathi_songs/Saavar_Re_Mana.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAAWFb8NOAVMNyqlbqLI-SN_a/Marathi_songs/Sairat_Zala_Ji.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AACj0lTNZeB5mzPt0DGffdtfa/Marathi_songs/Shantabia.mp3?dl=0',
    'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AADqi3eRanW0uydCviNtzST7a/Marathi_songs/Shitti_Vajali.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AABQJjBIF3rhnKfE_XZRxMiwa/Marathi_songs/TAN_TAN_BHAN_BHAN.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AADbl_q8w7iL2M9_2xF6DGkia/Marathi_songs/Tola_Tola.mp3?dl=0',
    'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAAcEg8khQkvaWQvcak8vP9ca/Marathi_songs/Tu_Chal_Re_Mana.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAAn5SG2rEcJpxhLOCxGyuZMa/Marathi_songs/Wajle_Ki_Bara.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAB94c76K5VDAFJoTImeDkRma/Marathi_songs/Yad_Lagla.mp3?dl=0',
    'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAAUJvK0nr7yPdT7MNSBLheIa/Marathi_songs/Zingat.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAD5zgsQ64_6svzCZNECF8O8a/Marathi_songs/Khulach_Zalo_Ga.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AABkMoLh5oQiQYY31vESs-UNa/Marathi_songs/Zindagi_Zindagi.mp3?dl=0',
    'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AADwYfVtthAELXdf-HL6_q1ba/Marathi_songs/Jiv_Rangala.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAACLR6txLClJFZRvY-UO5ZVa/Marathi_songs/Man_Udhan_Varyache.mp3?dl=0', 'static/Marathi_songs/Tu_Hi_Re_Maza_Mitva.mp3', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAC2Ch33NiIi_wmeudPBlxeKa/Marathi_songs/Hrudayat_Vaje_Something.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AADodXEpjE5WNkjY1eORGg49a/Marathi_songs/Rakhumai_Rakhumai.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AADDVnjoZfInGrePJrd-jarea/Marathi_songs/Sur_Niragas_Ho.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AABEhCgspSI-_XBUq8VrKen7a/Marathi_songs/Saath_De_Tu_Mala.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AADJ_1dKHx5VYo28avVv6qTha/Marathi_songs/Kitida_Navyane_Tula_Athvave.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AABbCo-aO4S49Tw6R0nQ23uwa/Marathi_songs/Deva_Thujha_Gabharyala.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AADV5fz7DxuFQGHc6hPPBs5aa/Marathi_songs/Bulati_Hai_Magar_Jane_Ka_Nahi.mp3?dl=0'
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
