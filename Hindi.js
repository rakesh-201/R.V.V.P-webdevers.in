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
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AADrRYLH0hZ7glQzBkx3Lohya/Hindi_songs/Aankh_Mare.mp3?dl=0',
            cover: 'https://ucde3bea14cf69c00937a1997fa4.previews.dropboxusercontent.com/p/thumb/AA2JnfpQjaO8951CaNgmV4NuoBWdgPB81DILv5cvTyRn3_BDd8-Z0sYR60mJS1bH4ijovdMfUpHiVVF-3_DC2FYuzqUljZf6wLSuri3_EGv1LgxJsf_98rB6BWvNkH5h1p9uY6YByFlAT5L_JAErw6TQ4H6ibB69Kt4ZoGjhfxWKk81-mWXTNF_p9lbCzmDIa82rEKfRHhqixGsthCUMNRKCn6d4YmXKHxBnH0dEku_Zws40qzisyerov3fZgQ5ynzlR-RpMUdFWbO5yYsJ8Y4Mf8BUyjv9WPws7DYtAg_SuGJ2OBCH3SUCyDQhSaJd86jNnQrIbrfyWPtMytxUfK2gDwd-_V960nFcSaNgkaX-6rg/p.jpeg?fv_content=true&size_mode=5'
        },
        {
            name: 'Ae Dil Hai Mushkil',
            artist: 'Arjit Singh',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AADCPiKHfxaFxzw54AxvFjn0a/Hindi_songs/Ae_Dil_Hai_Mushkil.mp3?dl=0',
            cover: 'https://uc0806d8a5cb3e32d7ff4f694e0a.previews.dropboxusercontent.com/p/thumb/AA19p3IybvX9sQNtc7-o1cZpwOi_isNSIV_GXfh6TMVBEJdBte1KHGzjcHFUi7d9wGTrSUvki_RuxpwugUWl9dQ_ZladD58AwFTc7QwB2MD9WrxS-PRqyRV59gqdQaLAl_rX7f_iAuDuf4Oxh8W2xjdnv-KKMzQMVi9-hfLHJc74yUyx-_kZdKEB4J47UkyJasfRa1G3SRmD9oFsv9o9Su2lGJs535miqpjsLnHwqCOWygwH1z6IOqEkUs04slZIsU3qhNVCxFTPijPkrdsnqdipFtemKytHpABzK_oOrNUVxDGw3Sgb1cIwr9XLGC6jBzDSN8NHpy_cpmd4rllo4Y8mS_pSftR1ZLQrmfXxSNWqcA/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'All Black',
            artist: 'Raftaar, Sukh-E',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AABYFZyRYC18kA5T0htgjw4Qa/Hindi_songs/All_Black.mp3?dl=0',
            cover: 'https://ucda7bdfdaabf54402914425f238.previews.dropboxusercontent.com/p/thumb/AA1Vf0VDKQ8InlcTtfkvpfd9Eo7RhGFwwHNIbdIeWFSWPHBPPLYi47jqNnFVBciOw9vo6xmxKze9kbkJzTdwt55ImYuYDc9W5sMHX9oCYrQYFq2F7-VEMPPWrYqNqicEa94eoCsvjzVegWYy9CO365qOaG_uF73GTOWrY0anHYuCTGEO1-kGVMeP3aFJbRGGpL4BxWtp-v43-4ei1YED_3Fap6pKYlxz9TkiitcOuUAYMfYvHQRuZW-VKV8CcvtGV2YyEzuLGlS2pxtR_fA1Em3mdgNUHPzhzdh1Y9U0Zzh-Z1nocXLklLST7onggfozl01yEb-XDr_103R20rfMV2dJ-nEVi0ueUgDXFfhK1Vi8WQ/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Ankhiyon Se Goli Maare',
            artist: 'Jaspender Narula, Sonu Nigam',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AADr5G7_IYxktVKd6cxYXOAva/Hindi_songs/Ankhiyon_Se_Goli_Maare.mp3?dl=0',
            cover: 'https://uc09bc0114bd6f57fb37f6dae1a1.previews.dropboxusercontent.com/p/thumb/AA3qmnRzADnpm8DpXIvM95LZ-DPVVofZRiW7XHy0ym2thBhmTOpH5wkwujIn9Di6-ZrZH3JtdBCEtq95JwCS4eqC1pNJR4hGAN9LU82ZIPl9aRnsZhh0vI1u7L4zeH9r3QX3nGj7AFeMfqxSnLFbLoFd3SdtmP_XsyBk8JaDVxtI5YSqmS5yUzN4GOELteaDZYcnS6kiBp0EVCj_4yugHIF0mG3HeqxXQtuGL_HvVVM2BBJekwPasYZa_Pjo43Lqu1t0fuv5gG54aLOWR1tj0qgisKbjqiK5OQDjbmNKAAQX0Wa25ycIZWWrti4yB42IzTUKDAH5et7itDsw9mTA-8_jmQ8kT08lF4H-6DzAq6nrpA/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Apna Time Aayega',
            artist: 'Ranveer Singh',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AADDyoacqiFQKH_LFXU8-_Cra/Hindi_songs/Apna_Time_Aayega.mp3?dl=0',
            cover: 'https://uc550fa8049d1885919c68c1f15d.previews.dropboxusercontent.com/p/thumb/AA1EDz9ua24xTpG6XG_J_Bf9_5Ynmoxvruv12gu-npc02yiRBhEQU-xJsb2htQRcxxrsHaX2E7BlbKpHlGnB0rh1lMHKW0DePiClfQMFRA0_vLGPII0btXoG7omjfgwuNMd0YcymV71M-8QWpWPmYcLgU7HxK83p-V6lVA74yao9PnM1UrujWPyUWV2Bolw-vGCjUH_xlAGO1K5EjMDCwFwCCI38oiMZH8P34IDAKHvuP5xTDljcdU-IjZZzGwZDbTdz8zWobahRYk2CrvCxuLXnsCAmOvxK6gFAit0gmVsv_9Xg83H8uRRAIn03afbF8LMKFHZfmowu2FTXu0M4DKHp9LUdZUvhsGuFGSfG1BAfiA/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Ban Ja Rani',
            artist: 'Guru Randhawa, Shraddha Vajpayee',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAC-sjzXZLgnySVE_2sjH_5Aa/Hindi_songs/Ban_Ja_Rani.mp3?dl=0',
            cover: 'https://ucb8a0087e97f01467c05dd19b55.previews.dropboxusercontent.com/p/thumb/AA2mBFU3BuJisA1zS7yRXmelVo76jhot3HK9tbGWOo50ycip9AfvH90VQdNurfyhmpahdE_IfK1rBCDko-XqYzWF5j23FVt34xCCSth5ftq8WfzswAsVUdqc-VZ-RC-q7nwCahhoJjr8mxQ_8bxxJ-yLDEGYtS4oa1Lgaq8bo4ysOFcZsPZb7fxXXd1sQNues_Xdxij0jR0I_lpJGvv0UHj-8Xf4Ni-dqOCz6VYZ_ZLjz-fO2bIkBY9S6kguWJRMYX4uBDwJVNsrKecZO_CjUFo1iXpZm7plmwgJ7BP92fH0z2w7LyitJVDYEuPKf41O-RFpNnBlmPD_4kEpCNMquTeCV4kVODwz-ulOu9Mqp-QOtA/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Bekhayali',
            artist: 'Arigit Singh',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AADsKK2lCg7_myCW6v-6vPiqa/Hindi_songs/Bekhayali.mp3?dl=0',
            cover: 'https://uc9a2b3479af18d0044b33550426.previews.dropboxusercontent.com/p/thumb/AA1rr8EUDca4lgFFSljnkD9I6c15LPDy1qCCH_B6aFaVbtbDQSXPWYxTKW-mUtFZUhLN72lv6zDPmlitpPgnHkf-fWK9J6AWnnlkBRoBkydg-tOMYYpZ0dJ2kGXUMcYLfGpGtTXYxR1mHovTnFJGrPxXKS2vpOeE9T5UDwggqGEEP4yfaRDacNkenwLzGT-uLCkdRjfaXOBVdU2AsghZx1kqBAWlqZYUKnASFaI0qfizb43mtmMbR6DS_JizlvUckTo5dTWu-ZDs-USKH2TcraWuE3ThJHUGjENchKtEUi90U9LiUnEybKLhYrBGe72MN3vGEAq63Ol1Hg-39xpQDLZ9id4-7KIgK2EwHzSpF9OVJA/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Bekhudi',
            artist: 'Aditi Sharma and Darshan Raval',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AACItVP8kDhOJGisiBQdr-RPa/Hindi_songs/Bekhudi.mp3?dl=0',
            cover: 'https://uc3975bc6a2e534dcfbae105d5f1.previews.dropboxusercontent.com/p/thumb/AA39xXr7wBJHg-WkkAYca0y_oHfM6Ei1C_Q7esv38yDuGErSwhX59XKbBAm0ABLb_nrB2qj1uFKu4086C-XdWmHUD8QAtPYxc3Fhbb1Kh43pRrPI5XY-GEt5HGUpQoXaLCfvFkKf9OJJZuTKY-ox62JKDs2PyhsKRhT9A2Gi3VcevjmiR2TOizImvDISHwdR0Qk-fdgLgsjqla8-URmdgWADni-aIOh6NBwVl0VCeWrZvCaATjqrCDlT4IAdy3wx-FZdBIVTwhaBBF1dYWDX-f-10tmowDIFoYldd0uLZkoYg9yl9qWQpz1mAeIHGpvqJyJaSvcjH3QaYwCKM4Xq177FjZheKIFA_d50iyaCnQXP5g/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Bheegi Bheegi',
            artist: 'Neha Kakkar and Tony Kakkar',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AACJaCqYiTcC8BG1BHWoEU5ra/Hindi_songs/Bheegi_Bheegi.mp3?dl=0',
            cover: 'https://ucca8d88ee1ebb16ea63cf3af306.previews.dropboxusercontent.com/p/thumb/AA0Yos1GYssBLu8RORrGnki0htUK_KBWSj3Ovg6tLEFAPr1tke7gHg2lmcQgwdrSPR5odYM87qgQA5n5ZxfNFF3xBmrN5yKIKf2ujmmI-oMjauY6Q8Ui3NMIKIVhkBVbLY7XkPxS1FKhnjgedn-2O9mCedXqwSGmyw5pqRD4xFGFS0Kt9B9FQYzPMtBecAOopMbg_64jOPQv_UW0dxnPRoOi-yy7xH_jIEcWgQJT1ZF8MUWMIOWcEqLhPckxbdQKnWRLj4_nWtKy3M9lrp6WXelG62Mg57KQ43D7p6Boy9kN-O6Qrl-YVQW9otViK4M3BECtjqMbBXOgZFvUZ3J1iQXVCqEysuXnOKKyPO5gymwb7w/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Bom Diggy Diggy',
            artist: 'Jasmine Walia and Zack Knight',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AACXANngPwwu47dSKgmt5Ec6a/Hindi_songs/Bom_Diggy_Diggy.mp3?dl=0',
            cover: 'https://uc35fc64a5e8b6b1d7b141e17a68.previews.dropboxusercontent.com/p/thumb/AA0_NbpMH3a0ZZ4ApAnSLPlarjzbjEDmeq-6mpj6QpJH3Wi3kRHeu287QSQswRTB87SFONE5w6wdCrmZ2jtPJv9IKUvB4UbsvtqOOvaf2SyhZYHdBrZyQ4S1dbBmI2RHH2W1gBKdqduwX00KNQaYJWSTJj390UCwEQgFWQjD08p-57wwR3dgxXM807sMwenvTGK1SVIvpxp1tJch5juHFPDDTIEPFxHqZVqgOScUhfdYPogqB3d0-zrzrKaA6nrMFhLiXpbdjmuNfi4WSwwPnPNV3AQT6ZFECiTWA6MSEzHNrdKjWFS7O_l8t-hUoSWL8wY7rGF_Et43dQ2WDQoz_-KFWjm5IvRSQuwF4oW53sQgyg/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Breathless',
            artist: 'Shankar Mahadevan',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AACMzvmoIDAxjWp_fvPIOPaYa/Hindi_songs/Breathless.mp3?dl=0',
            cover: 'https://uce5c0c47f6afa6fc75dfc3bb4b7.previews.dropboxusercontent.com/p/thumb/AA1iXtB8vuS5nohHkSL4OCYrJrCoMY6kDthpROhkXxvwOnKqbu-EHPesnpKUGui5WBSuZ2lYwRQp4mk7psndyRT-ju0AGX0nSwnvxXDpMgqyYmBnK9eW22860o_pn80SgngNgPpM-vGddTx4qWiBS__IXsLOjNU-1rHaJjfuqYzcIGwQTOchkwQpTdTkc-G5LwDiW6kKPjKxXuUK3uv0C_QNfF2UrjG0ozquWGZdRVVd7qnjaeiJzylrtfARY5rVMaCcsrVmUGAsHMD3Pn59CEhl_Fjik6J4Tp_CV8uxiPWlsbS6LwNzASHRZ4HuRIu_ZwjDtPeW37jLpWSU3kyE670nqZ6hOCTde7vbaQ35iKC8Cg/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Chal Bombay',
            artist: 'Divine',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AADUrtoC6vpZoxRIvLof4T_Ga/Hindi_songs/Chal_Bombay.mp3?dl=0',
            cover: 'https://uc3707d2292a94443a7ceb008d17.previews.dropboxusercontent.com/p/thumb/AA1OovTrhWLCxljrbqVJidohYMzALQm5BCUgNggEOUzVjWP4Ko50-gQOXBEpeU0YzbRs8GLZfsGdNkUcgvPD6Wl1tQpf-aytgS3NbZYhy-sIyRZJVkwwaVvgAt-cg57e9LdufQy4aYrp_HDksOD_u2befGJEkG1Gh_9v9oihDFOrrhb2BkERAWMED49f5eghQWJDmv8qzUCcWz18-avQ7NHxifs4goi3rxOWNQqdw3kVucqe5sgnkozsqkiqMTMRV4wSFvhmrbZ1S-7aSkJPoQ6FB_WVfPcRzlwVha3FcE3myzUcNUhr_ePEHvC_DM0U9ZO6UoGdJxNbUWTBAdUftJok81VdOMmK08G_QiXH2dOt7g/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Cheez Badi',
            artist: 'Neha Kakkar',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AACAIhZh47jOGuhH1RQH1uOYa/Hindi_songs/Cheez_Badi.mp3?dl=0',
            cover: 'https://uc4cb857e53988aa3e62d6cf3a06.previews.dropboxusercontent.com/p/thumb/AA1BRODZ3NK2TscD4TEj61m58vwXng9sWjnh54q73BJQOVd9X2Rldr0XKkERFDFQY41fmzrkqs4523G4RfcrIzsf88YnotCmhYBemD4Jxp8_kZIuwNagv7nrxj0_-CQGrvMiXqJnj6h8WA4445gMQO7KlyoeQVRk1XfIhytaTXsyXhcyhM_BhDL6DONOMIbz6tBoVI_Frt-ZeoKIDNR0HOyfhsH3gIZgOVJ7N3vXWQjhlUxKXyKeODp7_YJCU4cP0Vxncbf_icZE5hZUNWliXYbglTSe3Lx6dMTB-xGVt-eJjHOfIFWHoASQRaA2Ajhe3caUdqRgF7Smr2ljKBT5-I-YzaVHnvmsCkumKUgt_mbGHg/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Coca Cola',
            artist: 'Tony Kakkar',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAATFw3h8A7ADclic89XDEl5a/Hindi_songs/Coca_Cola.mp3?dl=0',
            cover: 'https://uc7142b8e558aa33f4ab06bed8b9.previews.dropboxusercontent.com/p/thumb/AA0X62UEFIFBJNepSMJCzjZX1hbMCaRBjaAQPGCaCnLYU0D9ce18gRJBRiS6V90PuUbkD9xXsrWkD9810vaeyzXE0GLB_0s96CFtzcV_h-OvAiheQEuy59uNxu4aj8MbnG2RSJ12WsPe9zeHC5zBLI3qUVq741uJByUVtx2Em2n_Y5KLTDfG4ZNaPdQorEsLgDC6DlpjWhqryk6xYB99zLTDB4Hjxa32Gyi91-GMvHb7Ed7TyVH037cOioDSleIX9D39y5smazHkspv_VLxSeYelRqbNqUWbTYDX2ZdicEZ3Swfrq5xvKiT105TBVw5cpHOujpbx0PQKszjLCT0mgIZIATN8WWOKsjiPCyw5ZGXncA/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Daddy Mummy',
            artist: 'Devi Sri Prasad and M.M.Manasi',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AACCuSJQtEZPRI-O-xzxtmMaa/Hindi_songs/Daddy_Mummy.mp3?dl=0',
            cover: 'https://ucc9ef5882d37cba1adebd3d2021.previews.dropboxusercontent.com/p/thumb/AA3JiueOVWkQHE42S-gatHLgB1x4TGKTGQPCtijojblnnNy8sSLzA1cajw2rjyKMKmMwh9k5JMr2x230kjzkjrjEdzCthYa4mVmeBCwtI6P0PT5gTl6lx3PN1TrqNjBM1JiRNeh8XL2baYW9-_fM9IOEWzoirVGGzn3SSx76SJ2Jkuut4Dcl1ybAzs3d7QgI_8TVLEf7IqTwsyeYB_QwhrKITKTDtQ_FLeQd2EFTrbyQ_6kWbKYSNMN_qnkZzunbWmd_ZTq16hq6GYOvDlgy1x2JnL8buJrOxTpstP1SDNi6Rf7rFFhAh5seqO8mp56VKT8ZNlKXjJIAY1rmdklhPQ8NJCRtEh5QhzrtMixQiAPd6g/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Das Bahane 2.0',
            artist: 'Vishal-Shekhar',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAAWLEy0b02oLI4hthDp-gKRa/Hindi_songs/Das_Bahane_2.0.mp3?dl=0',
            cover: 'https://ucce8dd0acaaf9ef367ae48de4a7.previews.dropboxusercontent.com/p/thumb/AA3SmTSEKMOQGoGqYWUt1qgVCVO-kFEfqTxu_sJFgF_PigsANcfkWFKFciQaz9zZ96eEynS24NeheIBCdrjtk0PquN-M32m8Fl5coS_IUip94dUwND8swKdEcdBC7yiYOaYvAhoQ26ZnZZJXotP4S8JqAyJSb7PSTA9SA2AH3ikTVZNue_8rjI5Lj-CkoL7UwAl0cuwq6ufLzjFRKScvkKdwAprfTpeiXwRwhtQrCW2noxsQ2t4vWFDeCEiYZ37qYRFZHZJxT4SicMfQXHY1ixQBiBm0Rerncf2gTdvJ_T8GwHJkTmyxqrSE_CLp4B8UwisHoZcH6RnUceQj8qivygzFw8siBBDZ_s3ZZRN2bRKJRw/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Deewani Mastani',
            artist: 'Shreya Ghoshal',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AACGj7WaXTGgcU0pXYPuezNta/Hindi_songs/Deewani_Mastani.mp3?dl=0',
            cover: 'https://uc39b70ac8df737bb48bb4f3be4c.previews.dropboxusercontent.com/p/thumb/AA3nVLlQe4E_TMYF6Tz3gVB7kgzktLE9nug4W4iMfSHI-Rg4Zwvz8sKgp3GwjXGk__wNJV7R01vhaXEXX13QpiZ4ItDO7pF0En_Ffu218dVZn09s-VPTYzXTnNF0nOxmWYMOZxk6_vzzPhqaGqiuthAJYrx2kmSHzWJ5DPdXotJrMCPI5eqtt9Zp2dPSZ8mAPKlJKV7GAy_Kz_XisKYF6wKGV9V1-pmkEdHqIBOQ3O_z2SLYHItuXvhAzZRh493oI_OrRiVjBzpef_9eSyx3y6wdj9SnrdTkn5t01kjAPXuJiA-VRr7bmEEJ1Tjhlf9ChtTiIMOfot4crM_2QXPUICTnagpkfpe-u6WBz1nPE3IkeA/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Dilbar',
            artist: 'Dhvani Bhanushali, Ikka Singh and Neha Kakkar',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AACXqX_jZp5W5eeHfgfe2ifia/Hindi_songs/Dilbar.mp3?dl=0',
            cover: 'https://uc8f38550d76db748bf87076200e.previews.dropboxusercontent.com/p/thumb/AA0j932w1ZAiXFpO0OFfUHg962nMVvBaHzaDVTZsSF5WJR__15xPdYKm_sERVMED1CYFXcWFdZCbGHMJLkdigupDEevp0Qn-MPtZTdFPVeyfA_QLPZwpPc42DD5Kct0926mr5C1o0EKz_MoVXe-zkXj0tDDj01bcUPBsZb6etmlHIlhqpiqXOQTKAUiaND3OhGTV8LUOdHroXssBpbQVHINxPXjCctHnonlCe7ymQ7PSdK-4ahtMJe1ZpsT9G2xP_FBlV6f7RHgTpcUgRf9i2XzVftDtE8qb5v8f-SZDg345LvQXhUA0ULykyfrssVvGKI9LjpPEduTYdcG2xh-CuDZeqVJRFqghU09P-gMejiz-Hg/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Dil abhi bhara nhi',
            artist: 'Jaspinder Narula and Shankar Mahadevan',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AACrHdyGMRHOmsoTWALUgCuga/Hindi_songs/Dil_abhi_bhara_nhi.mp3?dl=0',
            cover: 'https://uc78e91e5badcf5022034422df86.previews.dropboxusercontent.com/p/thumb/AA3ffPojtS-Bzger4rk5c6RDBHAaiZWe3gzbNlsWojC_Kqm-CRh7QagYu2sf6zpdGfqEwawfanqTh5Ynv7YCyXT4yqX2vfzP90Dg_lnTTTiO7laOqq5kfQnAC2BnnGaUm1y5y01RdnFz1tKBcinVvvemVMa9L9Bwo05It8aU_2fd7XyayEgyR9atLIQVzdkViaQm0plh1WEtjUBmMtCdsu6a2JuCE6d6Qq1ks5OBsd1GDsakMnb4Qrw9lJhJDoL3Ya34YrCmRd2fgaVmGm-lqtlWKMqhSxUxDNwHf9qjXbsPg4W1C9NWV1W_UlJnNbWG5zx5-6GYcB3jM1O7s-_t1Dy9cX0VtbvYts_GlHm0gy8Atg/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Dil Hi Toh Hai',
            artist: 'Antara Mitra and Arijit Singh',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AADnxwO9k8JRCF1QgY7eDRvSa/Hindi_songs/Dil_Hi_Toh_Hai.mp3?dl=0',
            cover: 'https://uca2c70cfab37e7784061aa7bea9.previews.dropboxusercontent.com/p/thumb/AA0jAulm1n_DYhG4Kj_x2DMAMOWU1sxqSxwHMbGBiCHLILQOmG_kz6W_wQk3B4AAUCgOxAs5VWYn4O10-Gx2VJalgi29yE1PZ44xP9-Av-85G3qWpyp6Sp1TUxYTeee7i7rkz43Mssw0ysccb3ENkd7PB9uSbwQnJorR0gxLfPG2p4OWpAXwrjG_cyHmGUX6getU6s1naPG9S8YU30ig8DhcM6BAJco1uPyO6ZpOCGylNrCgj8HVd4Nq3M9_YbGRB3QnKMXtAVJKzgnIp6gHKgCs-fqygZIJ6J_bWmIJGWxuHc5Aev_7XOAHZaC_ZH5lpT_qBDolVq5yHyKj6MmGVC2ePTQdclaJZ8n8lDpe-9J-TQ/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'FIRSE MACHAYENGE',
            artist: 'EMIWAY BANTAI',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AABeKdSeY4Ak5HytNgeX34UOa/Hindi_songs/FIRSE_MACHAYENGE.mp3?dl=0',
            cover: 'https://ucacb23fd20402840515de968b49.previews.dropboxusercontent.com/p/thumb/AA2SRrXceWx-1HXb4ae5_3xXus92dueJou2suH8CZ2nPA2w8tVZl9WR9LVSalWrZUap3twjnv6jbl0-QX-z4E9X3ah3Pz0w75fP-cfhFAifwA0zxZQ1U2bmdoMjPgrjxiLNNjT4qMYqgzJ5O8hPbMuqZSAXDAbiEvcAtD19HkK_FJ2rU7oD_ujoSe9UWeB6Yotf74zL-b5slwgRfyXHvVNmOT4FYBlG7fzsqxSWLsoCRuNw4ZJePXXgRVWG5E7O1hB2KEcbf8jL-5Ac9DFuXuPk6IMaZ3s_V8_YaXKsOQ1fBJHv91HoAqa2zJGLdFY3WK0PcQi9skHyVt9nY4SHzGDoQM2OtXTDXd57UC-ud3QHwoQ/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Gali Gali.jpg',
            artist: 'Neha Kakkar',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AABys045ERM7hqNBadt3bdlSa/Hindi_songs/Gali_Gali.mp3?dl=0',
            cover: 'https://uc506c9ccc9f565728dd2589cb3e.previews.dropboxusercontent.com/p/thumb/AA3jjhe6ZRPyH8-4l6jqd1RRwOR4arTXpUYr8pIDUN1IWL0oeEgsssqcS4ahmiQQiRnZzGShuozUkFZ4mcUCZa1ZV0KuASJNBQV0C5FTE9DrHPVBGjLNNe2WP-Ct2x_CAUg5PxZlJuGbvBkmDZYUkJZDXCVD8E-99yTDR_J0LAHT7fC4LxbdkftKF6iFKKL-7PasoLIgeTeQ9xHLkf9KYCgCSQ7SX0RkAsgS_rt5w-Er_5ZcZaYB0LoRT-GAvi6_b0yiUUTjqrOm2stCKlEp0GL6BzAUBZFujwp3k8IBXc3GL69O-Yvp8KiYMAVRCbMsH2875MZhhBe7xxY5CNonVhe8jVVS9GiZ6n_ZSAuG3SuyFg/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Garmi Song',
            artist: 'Badshah and Neah Kakkar',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AADzrTBflRMz8-TYC722T2dfa/Hindi_songs/Garmi_Song.mp3?dl=0',
            cover: 'https://uc7aee6dd1018e7373d9a32b803d.previews.dropboxusercontent.com/p/thumb/AA0OTwKAEe7ZV_R_MgKiYWfxrWVyrysYVGfKMCGW65XICJG7TyfzTrwJPAxV5XsQ9riYmzxwCz96CyzkaKSJMBPo5GVP6lB_OCh0GO1y759jV0p5TNLfz7dgz4BgNUbhNOZjey82GzBO-qi0YKl35Cv9fDDUUKuzBgZI4OIxF54Oo-oYrEKgXLMqhZIJe3EsMNzoj7nD00N_g7oK-VHsYejQmhzTz45da53hxacoCE-MWDNpXFFgVcPhXOfHc6dICyOzBthGbtZmqobdH40Tr9ectovnzDk8jebC-B2UVUEH_k2gpYgQbxVR2KYBBhOYz13R-KDiUF4zKPXT7zGfij-Ga7VzAEOsm5j69o70pMKCAQ/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Ghammand Kar',
            artist: 'Parampara Thakur and Sachet Tandon',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAAhBNLiZksvzy15_lu96mUta/Hindi_songs/Ghammand_Kar.mp3?dl=0',
            cover: 'https://uc2a3a18c4eaaebb53c3e48cd246.previews.dropboxusercontent.com/p/thumb/AA28d9O6EznLiR2i_vSnzeMUE06qea9UsTKBmUcXsOwy0aWZlMgtQAtF1WuONJcpZ7VaLtsBZ1LWQkcRlbvne88cs3pD_aB9H9OL8vVOXqYNYmiMBzdvfTmjck34hk_Htbm2AU1jSeGd57-z8dCMlfEMDnwO0FkHlt4PziZ9560JV7RRtcFEYGm7huQGeGRKicUletIywGmfVpvX8P_xmijwgxMtOjEWAADVBDZb4bR2dyHvpTwZGROXnjnUCjUw9FpYuGHq6z1pvTprv_4fjuRv1BeW8_kznzOEI5wPVY_5bZQszP8hatgT-n22R-5dmYHAZxncZQBIzI4EojamH-9Eh3ptdFyhCN-ysq9ZLRAq4g/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Ghunghroo',
            artist: 'Arijit Singh',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AABkUHfKVC8XLtdXzoXrWXfka/Hindi_songs/Ghunghroo.mp3?dl=0',
            cover: 'https://ucdacbc1e9c9b4044b1b7abb99fc.previews.dropboxusercontent.com/p/thumb/AA3aUFevQZdeL6sw2usGyDZvczo38blOYIi1eHXv11BfgA_zHPNITnUnFbR4RlGXizZ6KhFoG8WHbDgJh6xMAN8YW_gX0PoeNGb0HRvqQZCaB4zEhO7Yi1n9XQAdhoMjWqARRi_ut-oqEXD-ewecwRk7hTuPCFz0iBEyo_MfuZpRQhkXrRHUWDA6RCypjpUBCklsP0Yj9AlSQnpx9We806_vk5sXZ8l8yJFHtQRBSKYtS_uQWSWaweyaxUHI2L1x0yV-fv0Pc4MutMWVIjDFrrwROKTGR8e-o064n1gdssZGsmrcTdBDW4NDr9Z4YYkdc1EPlOo8PsxPWQvyCRKhzMoOlwel4OAY88UnmNh0bnMtNQ/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'High Rated',
            artist: 'Gururandhawa',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAAcy_aVKqVcmBheSDGuQucIa/Hindi_songs/High_Rated.mp3?dl=0',
            cover: 'https://uc4a1d95690895e05ec5dfdbea84.previews.dropboxusercontent.com/p/thumb/AA2tuRrbX0uLG36FCLauOfGu7EGn_3w60HnbxEqCsgEkBnnSAUuuF-O6cDPMzMd3Cl_E_NuxAUEbsa-nHbs48AfKu6RsvxKDpcLZdYhrVfkCQWLzV4tNwswfSml6_hdBqq6ufoXJvOFX9i2w09lbCXJUubuejBM7ixvVG2E-HFT3SJA9aK71kpt98C04L7Eds6tUCo-M51_HBHr8uIzr6_Ba34ibN2xzVRNkUIZeeNSITPw9K3M3w1e3g6yK3WsgmvgFw8HErttLREogLe7y6PIRjkW-c9CRwZDTb9i-ml80vunvUDKt8sO7Jzlu9qD0JW_ATyqCZv-xDlSt2HeWzn5s01NDl79sl3xW12Z5n7FQow/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Ik Mulakat',
            artist: 'Altamash Faridi, Palak Muchhal and Meet Bros',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AACoI6-KGj9C7aCPe-lyMmo0a/Hindi_songs/Ik_Mulakat.mp3?dl=0',
            cover: 'https://ucc636406ae9ec989bdf3ead4bc8.previews.dropboxusercontent.com/p/thumb/AA1LhhGZhTRLQdkZDISK34G5-O8TrWOTtab_qeJnaIby2JUElk_YXh1FANxi5OW44oXU5daLIcu-TQuMETZcL2qpVBnhAGYdmpLUTrJgEr87jOCecLT_hOua6nE4Zq1Ls8P0LM8l2rhXeZf9s2a2IyBamJnhqOUNdITLDvSurP38XJdcMm5R50Ov6DiGT4klT4JWXEWowaHehQGut_3QigwyLbDpGtWBpzGuvQYO4YHUU-6vjSNwnRTTOana4Iunb-0Zs-KiB7q7VUISWu6TmE1we13G0Jn_XgVq0CKHS9ZnikAp4ajLfBwt62luEFx5DnTilLdEgJ5SbDyOSaoHxkw3LR5mDh1cXZql2ZF5pWe-pw/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Illegal Weapon 2.0',
            artist: 'Garry Sandhu and Jasmine Sandias',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAAS7P3zU78vltjEdVIcia5Ca/Hindi_songs/Illegal_Weapon_2.0.mp3?dl=0',
            cover: 'https://uc726815565aaf62b64c0ce31738.previews.dropboxusercontent.com/p/thumb/AA18guR6UhfxjKnvG8e7vn-8IxVSTjpu7sMVYNJccBzXm5TL41XppHzuhsPRQaTzyJp08nqZnDDUJdbZkvVL1qeVV4SJIRxU_d2j9QGYJCyF5cU3cLzXOIrySSLBB1ne8g0eFK2ITFkY0Qj0fvyqz8-P3KeOfv6Opibb6D6eAxc2a-AWwqz9IMdj2WuNpX7kZVhjqulWRszpt2qsBCczbUDy9X2jshhR5FP-3rahPCZI7R6cB4ZEHU0EcccpgVJIqNbsC_JBWbBRSuqfzF-7z_INVIohFASCKZbXKf8YYBtkbGUgz6GVP8T9h13O8S2AUNj1keaieY5756g8_SaEuuN9sUnunnZMjiygwpQt4NQBpQ/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Ishare Tere',
            artist: 'Gururandhawa and Dhvani Bhanushali',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AADOoOa2AZGT7uJBKiV6_Ymma/Hindi_songs/Ishare_Tere.mp3?dl=0',
            cover: 'https://ucaa8447f8712df6ea66d80bfb92.previews.dropboxusercontent.com/p/thumb/AA2oJvrdwFa0r9S7jNBLV02WVppIb6rPmohdIM70oe-W-sYNv3i9dYKlb0V-ZibhKTPWt292ms5flU98h3Pw7pFlae8FcST8gjwCo1khc1jdJN0rkCjzLjLH-E6HM6B1_fFmmdXU6j8DRH2exPv0v1soDa2jicBebMY3Hws25MHnAA2kFvakLsbAK72nIgzWwupOgToaMm30HN9Ks505C2SNiDjhzOg_2FRXM83gcy1RLf2lPyVMjCBytzMCQzip0TFO0aWhz1xdmfxxGbmttf9NW0gvXj8bNpKDK3hmx2TEglyf9pkVabMG8IngYqWyACMscGtij8zTjnLAQyhRsoCykwjG82cSIQpRMNMqc-8Szw/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Jo Bheji Thi Duaa',
            artist: 'Arijit Singh',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AADceTGBEtyTYgYg1_OuB02Ja/Hindi_songs/Jo_Bheji_Thi_Duaa.mp3?dl=0',
            cover: 'https://uccb27cb04b5d44310a120563452.previews.dropboxusercontent.com/p/thumb/AA2LF9YXGjSEXO669XqMrD9g4fj6-wpMzkopTqWMl3lg4pDfUcjjoihmIVyaewyAGlR4m_vOaebjr2IkDcQV2UtWjRdLcNvdbNKpDA72W_ZGvPcVTxrU7y8fyqp9GbeEx9NMm0e1JfWoZzIZCPBOwoza-IbKDZxQ_0bVrDiDu64_JjlmA0vCoT2DmuKMh8dYTBYKdFvU3_uLaFy1uCQSRViXK_u_AEuNHL1v9xtPHKawtgrNPX-Q6NcvW7y11OZbvM1mmi4hgRGbhSA-i2BWOcoTHWD3d7JBBEDRLu_hNcHYWqNwqRFLFfFcAeOFmIQLkYeiWC-9e_jRzH8eWJNGuDoYcX_wjw0aa5D6eEA0ichaEw/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Kabhi Jo Badal Barse',
            artist: 'Arijit Singh',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAA4n3wjBxClZdkydwQg0drHa/Hindi_songs/Kabhi%20Jo%20Badal%20Barse.mp3?dl=0',
            cover: 'https://uc050206b40a13aee6252c787762.previews.dropboxusercontent.com/p/thumb/AA1bzR7mY2fplEWMp2QkQBjoZCOIFxoHuH_QxiD37B8KqRdGF75in6WDABjg4svfqsTMgpMwwNJanPxoC-5ixZyT90u6UXs8VG0bN1L6j91WzBDATNBufTNNsUuU8g_XhAcWCk712u_UpzU5FgeqVwqiGdDAU8TM2rG94_LkfYJbcsWjbUrM5pkMUtFPc3XTZ75z8FPKDXM7jo2AV3sc3WKoLBH6_Tf_bn1ckPydUQdUVa4mGwR19c2rYQM7LSx0twFKYpp1xQsMji8z8YeQlU0clA69zO5ZPYHFFHaBnWOPXKSHmCEM6I2LO-cp3qSgkkJCSXfnTih858J_C5TBHDM38hI6NRX6XRWKQOUkon_Shg/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Kamariya',
            artist: 'Aastha Gill, Divya Kumar and Sachin Sanghvi',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AABb4hqLi6iMFr0bXggJmGfka/Hindi_songs/Kamariya.mp3?dl=0',
            cover: 'https://ucfc59d3ec715d436ffa4e28e0f7.previews.dropboxusercontent.com/p/thumb/AA3CUhDhY2BX3mm4kWRPWhKuhxOhT_D1bKegbhj8IHuLlQCFa5_i1OnE0RkP-R__PbqYD9d9pOO-46xHcHvFqytF7kM5WUEstSE2DAGgJm1_RHrSgShjYolBne0WGtyQFoowEMIUZK4awM-pIPiMcSWjNRTrQaCaoVn5_Uis8EzOKaDw1A_S9dKeE9o9KXdCEiOdX7cM-ZlBzzm9egthrZ-i618mPiUKCr46a5bv9k_HIC-WewIa-ir2V3lrLRKSC-iT6JDQxRfatk3xfuPzU5tkY6hGVPFak-M6PK3DBwj0Xl8Fm1FD3I4_fTOWD8VMm69nuQEaQQsS5kIrlAIWWQtE71eaHpFnFS835PTiI_xDRQ/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Vaaste',
            artist: 'Dhvani Bhanushali',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AACk07ji39TiiD-7zzEUqW5va/Hindi_songs/Vaaste.mp3?dl=0',
            cover: 'https://ucff1f42265da4abf8ec82d2d33a.previews.dropboxusercontent.com/p/thumb/AA3izuSl4g8lRYilhUFK_QVjP02920s2XtVvL3YJwH-XUFHX25No1aevZEf5WT6QNGBDBUro7YlmDrKxLdTwk7Xf-fo0WY_Z68vSXhrMoyHd4aWGiHPY1Ai18YeeyyF2QLsu0abwq1nrkvHTgdCi88GQ14ydE4FZV2MXAchX4LU-glymEXR_cYaF8EMAFUihtExR551JKzqyf2QwWyBV2oIKoj9rkSBcyXcfwxJENwdBwwX3LNvOAG_sxMv9YayBxe9KPTHhrvTFzNkUu1MSX-g8Diq3auYFyDaOTNc19_w4gDEcnLl98D5PBusPmfnBPhqPDVyTWYp1sUV2tDLK4foyC_I4K4h7PKMZwGI89RbBBw/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Ishq tera',
            artist: 'Guru Randhawa',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAA2ujb0IjGYXYWB2GLo9AH4a/Hindi_songs/Ishq_tera.mp3?dl=0',
            cover: 'https://ucf3829a7ab9bb0c2c30620f4d40.previews.dropboxusercontent.com/p/thumb/AA0YzQ7-CSyxXvV6gDt6IjWW14LYtVnUaUDKVTHPWH4hZiWtMLyOhkieLTD6Z8zFkViRrp0Q14740mZC5JiK2E-El0RyKyb2LHcDNkDVcwjrpb2XZfbMEKFjqtFWaALSymnbasvKaNrf-whYjXnlPWN990ybEu3daxB7--nnVH9yK5s-xSWUUS46ZTAOMs744XSX869oRT7D5oslKajdtnE6r3DCcIXFCDcEu_DdeFCTNoQF16KFeAbXWfzC1YtCXA8XJjuQJKZOd4pcgpcIBqOI5C7ktkK8VLIAPmPqwGGkIt9hzwbFtRnUJFiaquFBvc-sVWuOPH-zssbr0pVVbIYUvIr77BrwWfohaF17NLO1jA/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Leja Re',
            artist: 'Dhvani Bhanushali',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAAgJmWe7ZvsStEZT_ikfVbwa/Hindi_songs/Leja_Re.mp3?dl=0',
            cover: 'https://uc601494ba5d4c58101c5be4d6fb.previews.dropboxusercontent.com/p/thumb/AA23MnoQoTsuEvWtK3sNlhUloqoCTEGU3snIDrslg3vytodEv6doLlGaGPMLBKlrrKkU_ODta--xeY71eioG2A-hFYBeoie0PdJECPfLVYW60_tgcj-0CPKW9NV2hxmKdT6_QUPSmAWjE8wxcNCVreflHmN5rFmHi42CZ55pKPNkJJj-Kbh8X5eoE0dFDkMFi1IB703KEvo4SKRJid3igTePw97gBGrk8uYWSzUusudLq_JwV8vYtW9-sZKIgu4riw39h2FjRjJTOYMDJJAWpAJkp5r6tuU4jcUGl-U62dGZVHCLRctg0_-LvLlIE9wUGHF4FMa4Vsjc9jIKHMqhQIdbYCvsTSloo0jHg78HJMtjcQ/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Naina',
            artist: '',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAAiWIQioBOHmipnS2p5knGpa/Hindi_songs/Naina.mp3?dl=0',
            cover: 'https://uc2d039c359004be8571b4a98260.previews.dropboxusercontent.com/p/thumb/AA1Zsi9lHJvt57J8VTeh57aJwosLl5ymmylVq1i8NvhMnJoBynBhY4oYys4ErOFCqEgD_LSOZExG3pqjfg0SjIbW5KQYoxIqkACS0UeTjE8MioSnjW9FLn1SzAj-v6BIpg8Ii5GNH-lk-iPd8npcFi0-_0HtZAy2hhy4TDEQn0BuZOKoXjMs8w0PyrXF1h-C-GNSd-Dl9hedTxG1W9tQGFznKVC7N0RbH77Qe8Xf1Wq1Nncz6h5209AGufpug7UdtACO1Ga3AeDrMYiYQ0CFE9_nzejhP6GgBFN-CjtMDwLh9jMLuzir4XiDoBsGNTgL3vA2OpOa3nQz-6rSKyAfYIdoVwDb7Y3LZEpCcCQHgwfZuA/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Tera Ban Jaaunga',
            artist: 'Akhil Sachdeva and Tulsi',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAAfnzzmYAsgtAFJBveuXKPWa/Hindi_songs/Tera_Ban_Jaaunga.mp3?dl=0',
            cover: 'https://uce67fdaa51d658d7f08d7456309.previews.dropboxusercontent.com/p/thumb/AA0JykYHt2t5c8Inp9zkRi10DXlQyhR7x8NX7FyJ4hcPrTm0Luf9V3XDQXNP9IheZTXV2FwkhEL6gkrTBIBoLjEyQSOl8uSqF1uB_9-v5tFT3ktdqIlPleAvY3ovBRtb3GFhrsBN3NcJ0NBuOXPqIawf49QtXM0EtfeK1VczN7g_UuOh3X0z0i6ZhqVSAN3KQ-tArixQePx3wsWr00zOQSBFXmeV-k53ZRGZS_0TEZkYNhgJgX3Ig_G7Yp14YkGsoEHzkDyrgknH8bp7nkSVJEOhe5cQOnOP-7hoEMOmafHtqh5HrbqLm1F-zCrOrNQjZVwtTAH5JbHR9Jum2nc-PpSFUiPhmQxZAeh_ida6D9zCtA/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Kabira',
            artist: 'Rekha Bhardwaj and Tochi Raina',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAAwbJssrd1gusdM9mH1y27ga/Hindi_songs/Kabira.mp3?dl=0',
            cover: 'https://ucf595a067d3608908bd33635957.previews.dropboxusercontent.com/p/thumb/AA0IpJBQBo_0hBCIkNy4Iou5YYczu466BTLmoptcMaml8J10EG_Q109_2Ez_1NBKZN4184iSufocUu6-TWWFsDht4WCm87AAP4irZvb-B3Ih9OKD7PLuiX_Ls7xPOyMypVNkxX9NsUiYRsgHwIZhq67ywUKuSpzuzrK9tG-xQDoV5dsBwnak2CJ3RBCrPFYzrgJVceATo8N-EzJVOCOlaruKcNJepsMa7P_v1_QspOOtFlcMkDpE_r865559EXfmsFpp5ufonCcrSVvgV84nZCX2xAR1aQLozg3ZSUlPDo_A3QHneP2Yw3KcTtwIxf8EJ9-5zl_9bkLZCvTpZletkSYBv19VnFFD7MphaI9qkN2FhA/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Teri Mitti',
            artist: 'B Praak',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAA8k7BWrZcebEkrmQZq6o9da/Hindi_songs/Teri_Mitti.mp3?dl=0',
            cover: 'https://uc4cd7c57db86fa03b5419ef407b.previews.dropboxusercontent.com/p/thumb/AA1K6RPpbSZvrV0MEggFLgpC-RRLupzUb1sGgXxFvcisnf4JKUyXKerak-81zZYQCSUon3gd7Fv6QKF0MMsNQ7XMLVKbqQ9-6Vi0JR1Z5iA5TBoG_800HEG_bhBKkZCDywoAVA3NpbN0wC4A2dFP6I7j3uT68QnLhiiufmGeqBBvxVDsciMYVrSLS2TqKkW2gh6ASK4XOThlxZP6ElDNso-YJwYCzbQWBLaGwxa9K11_uV5GFMhEbjXOJMz3wpSJt8k9LO4M8LTGwWsKFNr3DuIU3hE-PcE0ldklwQywxLdvcM3O-KVQOahXGELz1QoVhLSbP4oN-7ukpT4S_58DHRygCmISlc7Iat0m34_K5S4rEA/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Ve Maahi',
            artist: 'Arijit Singh and Asees Kaur',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAABZGj4k0ZbcEZJIWQzCjw5a/Hindi_songs/Ve_Maahi.mp3?dl=0',
            cover: 'https://ucdf80ebde87405775e6a813b479.previews.dropboxusercontent.com/p/thumb/AA2y3CmYtIdhw12c2w6VI4e8KSyms-_XyJdEffdihpvLSMzGoNyad7CxF5_tdoSV1HzZ6qzH_9vI7FDZhWxW5Ej0MHr80X6n2OtsjD21XLVmUwMFV2-vcjpulINYIkMaEgrtaCH7Gh8orQ_ZjLamEZyU_7AApXgh31WQ-pVBtMn4Qsm9irzSTsQr7HT5RMF6e5zy-GbpxDe9Qd1xyc9VibxclZT7P8zfgbiz1WFMHAZ3HZ32u_K3VL08bp_mkplt3U7zmhXAkx72GYjKzpa0jjiLHGOuBYZB29GZGAAIG5Z-0PJcavywkLN0VQufa6D82hXvmz1MDEFn-MK6nQXP_78ZVFedONiHM_H-9n2CjCfMCA/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Zara Zara Behekta Hai',
            artist: 'Bombay Jayashri',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAAP19cuT5x-mMgNVeHKrINPa/Hindi_songs/Zara_Zara_Behekta_Hai.mp3?dl=0',
            cover: 'https://uce658735e1501325ffcaa1b3b31.previews.dropboxusercontent.com/p/thumb/AA3MD9qGFVp3uyy09_aJaE7Ckxcmqw3mAEqhD8y9LnRo6FbYIXKDlvub-21UHwD2dbEEfTNJPpgbTAhaVcUCBwdj7jkgy8HIvEw31X0mUiQOE0xk353VHRW-899WcS4H3j8DSTxqTxvXo5h_BWsVMDCuJiy60wcOs9A_uiQqBm-timsL0keFT85C5_JCFNNvDLWSCoNKO0ZLOA1kQhEC2lzi5WRoR7GCsrvwOYmT-VQEdpQMNrFnKXw4bP-e35flIGPsVRinVx-V_3LZyXglDbK5Wz6KBGjDhsR7HWt3m3dr0qOdwPRcCNX61d9Arl6lfiiEzreD_p33YhGVZP-CujxI6J5wOOL0NlD8Xq3xEK5dww/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Tera Fitoor',
            artist: 'Arijit Singh',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AADKoTVEV0inhAc1tPT8L82Ha/Hindi_songs/Tera_Fitoor.mp3?dl=0',
            cover: 'https://uc072febc86810bb0e7d65c71a63.previews.dropboxusercontent.com/p/thumb/AA2STONQzx0FPeOpC8fp6MEtlXSD3csb_tdIpOWFxJQX0oU_4Nan5K5xEIpzvLHHQaN0AZ4SmutO76Sda9Trj3nhNrt1s0rsNptsvGPb4thIGphnqbuUekwFHpoKfoWSZwOahscMw5Ise_Faxo1s5BwITaUiWOHqy5qrz1ACiNUmo0L1J52OwbzwyFjW_URNQlAWCggvPecdnU-0np-3GJR9zaRJogQ2SjyjRhMPLtiHKxQSLuIM2MJXTguFdWQ1LbjG0rgle8Mw6ULEOLamJNtuYdIGODJUVTLODTcFo9pjnK-JVTXXv-HqvXM4xGG4mV0uld2aYtlshJbXrdXsDfwLx_S7ylFkeBDC0BEkE2LRBQ/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Tera Baa Aaya',
            artist: 'Farhad Bhiwandiwala',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAAny2rnUCp3kD1jHOW83z4pa/Hindi_songs/Tera_Baap_Aaya.mp3?dl=0',
            cover: 'https://uc4df37753f3e5e85a4667e604d4.previews.dropboxusercontent.com/p/thumb/AA3OpVKgz1MzXkxb52ukJycfrqc3EHLsWJ4N24T-Btrg_1yETq9Ya1rMMQ48AoDaMXlf-iAvqrd3McrkgAB5KrquzuwwuKojBKOpiL8dupipOPYj6qxQon41yShdNYr11rBcVdoZh1lxCZJky8GqPz8OSX7QPNdHobEdiTkVFW55oZ3DTIb04q2yxsYnBJQRiEhaEwl13zafurmVeS10_tNS-9W-zhc9JAy-ZDbdTQd_ZQOvWSVvLmfltG63m6yZfH-kMDS9B0dQqdJbFcVjtwgfnmT-EBvAPBcgCjtkXG8nrEwbCI8qC6ckqrkQfFx3Vo_kQEWDeOVhfh23MkgKt20wks3dF9H3rIaIJ1zazTp2BA/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Shankara Re Shankara',
            artist: 'Mehul Vyas',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AABsBWTkfYSlvAPxjyiKqTrDa/Hindi_songs/Shankara_Re_Shankara.mp3?dl=0',
            cover: 'https://ucbb889cc20836cdc24a3f0314ba.previews.dropboxusercontent.com/p/thumb/AA1zmHuxw0igVxop9abw7s3-PEaQKHGrkAJmQQxkllTR6bj5Arg816BCjp2E3i7sy3mLyTMmUwSMlek8BLMi_Gpt1ULDOsmhp9S7nah20W7HdfBA-S9vW1wOlkIaIqBjI6ePOuWwuCzvxrJe748lXAGQ8u0UfQWj2ViL0mHfP6y74uDYQGGxclvySrQQDm8UVBAU0SQIOXvdOZQ5p67YJvYbpMQhatvT6vG5dnRXTrOVuG16yZ9oIDvJAJR3oHl4i3ChHbsS6T62KpVvEf2JTOk32tbuJWSYYRtNYvcHhSQF4wYyqBnIXX0l6aEvgOgZUAj9AQFyp2e5EzhyOoUXF_TCyEBmJEPg83mExaKJn_sJ8Q/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Baala',
            artist: 'Sohail Sen and Vishal Dadlani',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AACv04ta6pQNFEP2QQMdUqfVa/Hindi_songs/Baala.mp3?dl=0',
            cover: 'https://ucd639df795310d54959c0db06f9.previews.dropboxusercontent.com/p/thumb/AA29qQ3SHd4lNiYtxChni9CSfrlqGxd7ukYKVFR1qkPySFhtxQew824LaOAj7e1N1k8ZaorSRLOF8tSVXfc1_iDsHmPzkUHMBtNwK3__sgkm0Du8JjyI2OjGkfJaVw6alUBS9lPx9rf8Ff1fjdzjV1uP9kTG6DaIiY_6ch3DbQR2LH8oXV84U7sf5FLLluunZqq3p3gubvy6ga0tw2ZMOU_qeIvr7bfaSOI5k_v_EsLLLGJxzO0H2Lyd3MuY4gPgQJLg7HJk_NScMvsMM5b2aOyDzWA7WogoMQHG2LjBhSpdangj6M9na1w8sBpG6M17798ZIT-tbN5F3HtO8pyy6UuSr1J-6SGaQmDgD8tdDrLp_A/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'O SAKI SAKI',
            artist: 'Neha Kakkar and Tulsi Kumar',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AACyuZGTdCTE8Fwt6_1zIdaXa/Hindi_songs/O_SAKI_SAKI.mp3?dl=0',
            cover: 'https://ucc8d253244756c4935d50019061.previews.dropboxusercontent.com/p/thumb/AA3isRCnq3H5_BVDtxk3Vv3It9fEHqp--iYtFHJ_1ccn1SJbUDSb8WeXdyZUyOsii7Ttmo4SIn9nsLld5HluILqhX8mLPEzA5zzcgzd3FTXfgAA9lt0JoRqiFT2268NHQep5sRtCwhAY6Xdir7m6d9oXnZQgpdB_9tdhFp1tC2ZmkVTu7mZKJon1ovm4BVvsazv14J-s2yxTbmgjjYyrTEzDC894lU9nBS5k0wx3-cVss9GeorHCtTQEBRZzWUS4i2oe5W4zN3DnMROmB3N_SZRVSlPBddqjWGRyDCQrtxgnUvAueP9lHSInHImB5oS2ubCjlcowFvLlMgoiW4qfVrZwtErQp3J4BheWJvJTHjReog/p.jpeg?size=178x178&size_mode=1'
        }
    ]
});

console.log(ap.audio);
let audiofiles = [
    'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AADrRYLH0hZ7glQzBkx3Lohya/Hindi_songs/Aankh_Mare.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AADCPiKHfxaFxzw54AxvFjn0a/Hindi_songs/Ae_Dil_Hai_Mushkil.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AABYFZyRYC18kA5T0htgjw4Qa/Hindi_songs/All_Black.mp3?dl=0',
    'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AADr5G7_IYxktVKd6cxYXOAva/Hindi_songs/Ankhiyon_Se_Goli_Maare.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AADDyoacqiFQKH_LFXU8-_Cra/Hindi_songs/Apna_Time_Aayega.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAC-sjzXZLgnySVE_2sjH_5Aa/Hindi_songs/Ban_Ja_Rani.mp3?dl=0',
    'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AADsKK2lCg7_myCW6v-6vPiqa/Hindi_songs/Bekhayali.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AACItVP8kDhOJGisiBQdr-RPa/Hindi_songs/Bekhudi.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AACJaCqYiTcC8BG1BHWoEU5ra/Hindi_songs/Bheegi_Bheegi.mp3?dl=0',
    'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AACXANngPwwu47dSKgmt5Ec6a/Hindi_songs/Bom_Diggy_Diggy.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AACMzvmoIDAxjWp_fvPIOPaYa/Hindi_songs/Breathless.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AADUrtoC6vpZoxRIvLof4T_Ga/Hindi_songs/Chal_Bombay.mp3?dl=0',
    'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AACAIhZh47jOGuhH1RQH1uOYa/Hindi_songs/Cheez_Badi.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAATFw3h8A7ADclic89XDEl5a/Hindi_songs/Coca_Cola.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AACCuSJQtEZPRI-O-xzxtmMaa/Hindi_songs/Daddy_Mummy.mp3?dl=0',
    'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAAWLEy0b02oLI4hthDp-gKRa/Hindi_songs/Das_Bahane_2.0.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AACGj7WaXTGgcU0pXYPuezNta/Hindi_songs/Deewani_Mastani.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AACXqX_jZp5W5eeHfgfe2ifia/Hindi_songs/Dilbar.mp3?dl=0',
    'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AACrHdyGMRHOmsoTWALUgCuga/Hindi_songs/Dil_abhi_bhara_nhi.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AADnxwO9k8JRCF1QgY7eDRvSa/Hindi_songs/Dil_Hi_Toh_Hai.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AABeKdSeY4Ak5HytNgeX34UOa/Hindi_songs/FIRSE_MACHAYENGE.mp3?dl=0',
    'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AABys045ERM7hqNBadt3bdlSa/Hindi_songs/Gali_Gali.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AADzrTBflRMz8-TYC722T2dfa/Hindi_songs/Garmi_Song.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAAhBNLiZksvzy15_lu96mUta/Hindi_songs/Ghammand_Kar.mp3?dl=0',
    'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AABkUHfKVC8XLtdXzoXrWXfka/Hindi_songs/Ghunghroo.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAAcy_aVKqVcmBheSDGuQucIa/Hindi_songs/High_Rated.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AACoI6-KGj9C7aCPe-lyMmo0a/Hindi_songs/Ik_Mulakat.mp3?dl=0',
    'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAAS7P3zU78vltjEdVIcia5Ca/Hindi_songs/Illegal_Weapon_2.0.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AADOoOa2AZGT7uJBKiV6_Ymma/Hindi_songs/Ishare_Tere.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AADceTGBEtyTYgYg1_OuB02Ja/Hindi_songs/Jo_Bheji_Thi_Duaa.mp3?dl=0',
    'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAA4n3wjBxClZdkydwQg0drHa/Hindi_songs/Kabhi%20Jo%20Badal%20Barse.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AABb4hqLi6iMFr0bXggJmGfka/Hindi_songs/Kamariya.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AACk07ji39TiiD-7zzEUqW5va/Hindi_songs/Vaaste.mp3?dl=0',
    'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAA2ujb0IjGYXYWB2GLo9AH4a/Hindi_songs/Ishq_tera.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAAgJmWe7ZvsStEZT_ikfVbwa/Hindi_songs/Leja_Re.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAAiWIQioBOHmipnS2p5knGpa/Hindi_songs/Naina.mp3?dl=0',
    'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAAfnzzmYAsgtAFJBveuXKPWa/Hindi_songs/Tera_Ban_Jaaunga.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAAwbJssrd1gusdM9mH1y27ga/Hindi_songs/Kabira.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAA8k7BWrZcebEkrmQZq6o9da/Hindi_songs/Teri_Mitti.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAABZGj4k0ZbcEZJIWQzCjw5a/Hindi_songs/Ve_Maahi.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAAP19cuT5x-mMgNVeHKrINPa/Hindi_songs/Zara_Zara_Behekta_Hai.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AADKoTVEV0inhAc1tPT8L82Ha/Hindi_songs/Tera_Fitoor.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAAny2rnUCp3kD1jHOW83z4pa/Hindi_songs/Tera_Baap_Aaya.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AABsBWTkfYSlvAPxjyiKqTrDa/Hindi_songs/Shankara_Re_Shankara.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AACv04ta6pQNFEP2QQMdUqfVa/Hindi_songs/Baala.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AACyuZGTdCTE8Fwt6_1zIdaXa/Hindi_songs/O_SAKI_SAKI.mp3?dl=0'
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
