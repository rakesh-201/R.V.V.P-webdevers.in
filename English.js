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
            name: 'Stuck with u',
            artist: 'Ariana Grande & Justin Bieber',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAARNQcM56e0Ib4EJzroFigya/English_songs/Stuck_with_u.mp3?dl=0',
            cover: 'https://uc05e0447c0dbb6820624e76d46d.previews.dropboxusercontent.com/p/thumb/AA3yDKTXM5dDHJgy4Y3vzCGKMnOMMbjDN-DviM0dZegRemALV1ROAOMlcxxEeLYE9AhTYcbZtCZmOLL1ZcYkHyILK2hmNZBaVb95hk00j-nVBJOTU8k2WKHr4woKzvgj-CC6hCTDMq7ByUcm39mA_vmMcq-9GEmVSsqw5B6ty8uUuGrwL37tmfyhhl9fMBMcHknuvl_xO5gQ_0VNimEZ0znmMzGo7S21VtY0DbXMiV2aCXeFr4xF5uHPh6STEKSnfWWy5YCGqOHH77yGEKY1HODOnTXMsz4MJIgsrAKkR6WulgIyYFcHx47FR1Zs3dwq7DQx05EmWHK6XyA6r6mXkEHwg4LEaQKoxFq_hN6R3but9Q/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Intentions',
            artist: 'Justin Bieber',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AACiOhWL0GsnDhKbnOT_22HIa/English_songs/Intentions.mp3?dl=0',
            cover: 'https://uc86342cf552559dcc2118fc7cd7.previews.dropboxusercontent.com/p/thumb/AA02CbugnajMEDQ_W4mrQyPJx7WURCIRi7wYozlC4-HulI28xuKGQ1ghRHi26OSl_k3fAQ4972Vl9R8SlMHGcj52J8tq1oL5fgFnKYYgGyiVHYndyc8IfxYJipoHgMhdmesd-dcmjk_tZoOAcIc6JU8Va6UNUtHOTEKBIek2Jh8RFvjXV2pzKEgkLpY4zL0l8W1Tz67ZNvV9LkQ6t_7iW3ysueFZ2zoNvV0XRaz248PGD_TnMPy7IyIM4ZIAuVH9eco1uGi-ZZPDhJvn-rxrI5gcHIZbSOXcodgBTQvVuQUcnjlfUclkWIjtEjTL5wuFlCoeX-BmNBXOUSCCjToKWHZDMtJNhzT6fglot2f3tkDKxA/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Blueberry Faygo ',
            artist: 'Lil_Mosey',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AADg22hyAEe2QK-jN9V0FmzLa/English_songs/Lil_Mosey.mp3?dl=0',
            cover: 'https://ucab8de12c633ec23df665519ac3.previews.dropboxusercontent.com/p/thumb/AA2x3yS3pv9VJ-P1yJxEPHPH-WhKEd2YZyQMc9WFTehfPVi7KZBPpG_y6_gWL8qRStTpc0uekhCzHseYCeP_JzZ2jO3CUMktTfK2f7pXN44e0OzTQlQLbtLeJlBZkLR4zX-qInycDtvxhx07W5lEfUu_VvO4qNnzj8Q4i8YkhrRI0hsQu-KB5tH1wqieGXhwR-uI5Y-MFCxcF75rQE27BULv8qYh1mI7gOH9czG_gReFr1G0YcFB0_RSMv0ob-vn-I19UWkTK5Jk62xiopM8YLcGPsTZcENHA9tuBQ5eB_1LR3tKHNC1PVH9m4u1j0d_jFqY3Zf9zdIlDa66bkqJc1hWEnNQDrRg1dTHc1vgEOFGDQ/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'LM3ALLEM-arabic',
            artist: 'Saad Lamjarred',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AACriB-jRymojaEcnqKrzQV1a/English_songs/LM3ALLEM-arabic.mp3?dl=0',
            cover: 'https://ucf38f70c6b50db350643fb0026c.previews.dropboxusercontent.com/p/thumb/AA1AGKN4SYYkhY5NB3AUu2RIJ8zUXPQK9ScjSco4IsvEEWbc4CUvuBJo88xQEgZCg8dtORVHB-nmwV-IZpgoMbhUw-GrOVu8GCwnJp7SbxUONJj0qN4o6iRD8OUV9mCoW5WTbRh45Pwf8T4cyYQ4YdomuHbAWl61SDr9sQAAQ-fZx0xXLjtwcJlBB96KYq7Sz0ynYJ2c8u2o1JgQx2j_d2zaLcB-5d9k7GXto3TXiJFmVRHidFLH372uLc7ZiQZu70sMIbB7lTZl38JHsL5f99NooR4bhLubp57nNJss_erzVQ-DyaEYSs4Uu2d0KUYga6yz7WBIukutAzMoRLkLNlsj3boQefZiwtoLV_DuLWx3HA/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Say So ',
            artist: 'Doja_Cat',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AADlkayc9jAmOCYe5j794UI9a/English_songs/Doja_cat.mp3?dl=0',
            cover: 'https://uc9dfe4e33ad02c26d25251d6b44.previews.dropboxusercontent.com/p/thumb/AA2hxYyXhfPro_mhcKgvI0Slc9WWDHztKvR--h80EnAxU5F9rjzGZoFmyLaY8jcwOq2llTIrEvfU3xPaMpMNlIfthaCRQ1nZQdYEroz6dqV7saI2bufc7Tfa3yTsUuR4Mww04XgYILcKWGvEQm2zjtMt8ccIqnjnyW7dxdmKTCxCK9PAvnBcjU7z1I9KOd5_-Oc3hdYefGQO0zx42yPfWHbNr_dW3DMt3bPjOK1HfnX-a8Ln6A54g6wxxXsrNbkmeHyVDY6gcAaUF0JbN9GkQtsom8J8H8vl8Wv6a9rYAi_Aq8ABzJkDATj_cdPf0o2Xv2G4oyypaQc4CH_K_MT-Tq_QyG_W__sO36lQYwUDWNqiLQ/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Travis Scott - Turks',
            artist: 'NAV&Gu_na',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAAcsuwBVlDyJ0MNv-razh7Ua/English_songs/NAV-No_Debate_feat.mp3?dl=0',
            cover: 'https://ucb9756f9f2f55630aa01bf76c01.previews.dropboxusercontent.com/p/thumb/AA1LgLPCnMKB4s4vYgPbuNAZWA7rjkB_wB_7MTxiJm6fnnDyJNSACD9NcEzoUamrbdkNMorxk2ecnPrppnyBuk6fgGPwQTLJmdcX3XsUGR-Ur6mqW1CrHyHA1Y7u9Df7wj0cn3cgrxD3Gt7VqTyyBem9S8qDaL_jiJQ19IC8XRy-YeB3oos8MVncgMJcFNUPCSb_T5XJ6fr_7yiYuFTqS-LrDk1_BW074XTcsGJ_m6O0BLMbt9-LVZiI85CIzAlkhG5OyHIYNyQN9U6Dw8TKuaraNve18XjXxUwrJ1TSDIVBEp2VN2rl2fPzlIxqe64sTXgorKXjlxahI0BpM_QHxSv9V9o6Qam5axHOdVyavDHgiQ/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'The_Box',
            artist: 'Roddy Ricch',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AABa3oYNJHyc3gTchT_Rdo_6a/English_songs/The_box.mp3?dl=0',
            cover: 'https://uca35a7d382c7bd79f411386dd9f.previews.dropboxusercontent.com/p/thumb/AA0vabKKjByWDOUGA1mFraBsme-zSi4Uo2gZHjXIFVaRkshIpZAMJmINF7oX_e_PEqj7_PrJlPhJqJbNWf0B83wynETAi7Dy6Wqqd81aMgftwlMBkbXwpL6hjhlu_ShN5W7IoM0RD3HLBxOAQqwvEcqgungY7RbeeLaJhLaMlJAR0MTP4Mb3z38vpE88UxyBVcviNSwz65zodgCiDL7OuAKZehe2zw0tXXzbvyJq8a0NIiagr2v286LwXd1XuoMpswxrfBssysnHIl3mb2MPdY0OUYl9YZLLRwRrgwHGFlL8xGmJoUBd2YNZ0HEro6b7nsoKPf4g-WW_FjiRDv-nxNIO6qczHIg9cALScRtQEewnww/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Stupid_Love',
            artist: 'Lady Gaga ',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAD9Gvw9UaMWSQBv8-jM0EkQa/English_songs/Stupid_love.mp3?dl=0',
            cover: 'https://ucc28e6a92e6d3ccb003a76780c1.previews.dropboxusercontent.com/p/thumb/AA1DvZ9OQE3ZitPRdFTlNH7b9BW94QIiNpjRhwrUh2ZeT4-BMy74OpbWTiLuuuleEb71OGjzItdmN2hHJ740Aw-7nJdqi-JWQWaZmcobA5jVm3mrEFXhgzoh_SSMAvoYJGX8OW2jJJdxRbYtbjdBClzIfwedbrjX2feB-82SrcntsCIacD4ASNZqmf15ets2Iee8ATFk_OqJq__LA_teoCYD6F5ukVtXsAZpwW8U38yNn0c6J9RH1IdwRO66wIUo4srvvbjOTkggbHFbBG7nbb2jpWtZSyu3hn5ZWaiHkfsyQ3UiPCXRJGRpimasA16Knr3gjn9oexGobcTy6uOR61kbuenzhA1k5TsQt99e6Tfirg/p.png?size=178x178&size_mode=1'
        },
        {
            name: 'Whats_Poppin',
            artist: 'Jack Harlow',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AADbIe0ovR3a_WE9Q9Sn9cFka/English_songs/Whats_poppin.mp3?dl=0',
            cover: 'https://uc5191778460e72d52b3f0e25e20.previews.dropboxusercontent.com/p/thumb/AA1WX40XEvUmMdg0FEe7WVxSOwOrM2dW4XTyk36zuHO26Sg-vXmcfFumTCLjcRW-LswSVloMdRrjl42i_CbxntScbZOoKa88bpz-UNb8YzUsRKT2UwPVVI3iJdwy90kDC4n0ZXQqHUTP_L83BPJ6JOKKLZaZBirEpcSKDSSp84_HyIOWO62559OTJlq15tNM20qj-0DrGjyU0OSDDjgnOIgrivFpIc_vKJWSW7xpfV3QnQA7-TT3GS-qi0WchuXKLrW7pD9cWIi8Rp5YGas-B3ZY6WULWfm97D88Bg-4tyhBwXwnGv-_xK-hNB9CemegrvSh1PQYHsPaYgo6Zo_OU5yRLepvMf5K8JBd2Ir-zHbX6w/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'The Weeknd - Blinding Lights',
            artist: 'Weeknd',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAD6rrbledoPx8ge50KhRx_7a/English_songs/The_Weeknd-Blinding_Lights.mp3?dl=0',
            cover: 'https://uc3c727aec1b0d47c4f8abd3931f.previews.dropboxusercontent.com/p/thumb/AA2oPrv3yD7VTt1y6GJQ2dyuBvr_z6W5vKiC5iZBQ76fIlRxFftRDO4AAJ5QDrpyj1fY5daywAJgoLiRdE_PMZDu4XVW12CtsEd2fYCbDAOAtQvLosM2eSvMT-UNnG7jFQzUEZWkYUm_N4ODrDNYaDx7c4CfIxy3_auSw_TnYkep0f-7YKRayPaLg9DZJOq8tiwy2N2SdXEetf-bNt2sH92qz-Ga-G8KGqWNzlt4aLVeZjgzC86qs27dPpQX8tQqJ1nh_sOp7hgIXe7JP9l-PpKGWTDt_A_QiKaTY4Ung6V1JDkTxhgS98BNXrnT7gPr7VA0oIkI6y8IUroDNJQgpnbWStUf-UyPdzOu_Letr7w6Fg/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Be_Kind',
            artist: 'Marshallow and Halsey',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAA5xsZ7sCj7o9gC1waX_sjga/English_songs/Be_Kind.mp3?dl=0',
            cover: 'https://ucecd1a1b5780f84874854675a79.previews.dropboxusercontent.com/p/thumb/AA0NMfa5F5fDg-Wsa4u1gC9SzLOdkcqbCgJOJPoowoofv6ZqL-wXXNsgZZtXupomC4IIeNhHXwzj7K37Zz3PZpDTos8RsttkpAttw3pAVHy8os6uUkBZaGDKprLBeMobj0pIOuQ-GVG1mesLgCjVIeYZgQcLDFesJk7dKp1pgbapoYceOXlXKyt0LhNNLeESdNzJ9HQr-f0aW6b5VZRH9hC8ZvN1Kem1dfl4FCY5DjhrrlOPxLfI3hwjZI8BQ0NAFuZ6o5XdOEy-8d5uQ7q4ZSMS6oOLrHab_ypK8tskbi5eGKN8H22mcfQs7-j0POHzfSoeY74xhS5aQLXc9zq-la-EhZUOhZ13w0XVtDS-DB5ipw/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Baby',
            artist: 'Justin Bieber',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAB0fI53aj7iIQMAUFsnpybUa/English_songs/Baby.mp3?dl=0',
            cover: 'https://ucc317495963e68ed535d57f0e7b.previews.dropboxusercontent.com/p/thumb/AA12oTYA1Hn7L_q-mck3wnbSU3myka18HVCkZxdPalYFeR8fvxSUpP8_OB13_aQt3bGi3ZCQeQy6IPVUMDXWb3P8wXWZ_x6HUhiKx2-2zlSu4AVNxSqF9qY_0JFdxy5nnBaPUL90WK6s6qK3BPehhZJGdgjgu4RzVdWlDdTcysUx8bgnKUYSrT_nVpbHEWISDFAYcfXEJiB9pwIblAyUI8aSB4fjyxL2tFDc0Y-B7glDhToOlbmeqfdzTj8lyS6on5oBmX8ExvUb4WOMUpx-Bjj8XyVaq86F_5y6Cuud1gwHN0DtkH_IZPdCtE-U69lJmUTKbsmccnLrXMq2SaTXcixiuq7nuDfkGnJG4o_2nTNvYA/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Roses Imanbek Remix ',
            artist: 'SAINt JHN ',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AABmH2s7bXFI0V-rjFWFMVaga/English_songs/Roses.mp3?dl=0',
            cover: 'https://uc88d47fb1a7061861dc53f1c25a.previews.dropboxusercontent.com/p/thumb/AA2zHG5nZMmOOuJVgMeWT_6J0YQw6J75FFAz5ExRXsiHAKBdaY2C2-uC8_qlYoIqmG9b97rcXWVcdSQkuYzk1PqS7aIPp4-9I9rtqBNWNWlmciS7rt30LfUW1-q_TtQj4KFfdMuJ-Sh5cLdOh4D5CpRLXd9g7HrksWCPNbcJYc9N9FHwCYBXCisW-MkPiabH_Hv2goxj_pUnsmNNY_uMRhM_UcbcqW1H6mlQg7Z0jJMQ2bTLd95P1zkc_x_rCuBpMyOJFUxb-RMt7-Mo56WEpy0k8_x8ewqWx32ZPw-IwDlEwYXzJYjxBjJiatGRGtsE4QVZ50ykEid4SfaeEoIpFrDUhC9Sd27o99ENqWfaqBdkIg/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Despacito',
            artist: 'Louis Founsi',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAAP9WHBV96cikBccoqhyT4sa/English_songs/Despacito.mp3?dl=0',
            cover: 'https://ucfbf1114ea3e2b2e74f5a7a0528.previews.dropboxusercontent.com/p/thumb/AA2SXVhPNd9FOk5Z4bCk6ZZsrE-lnE6ZwOUBhCLOxHvJIlN66OMY-QyHMCGR_55ztr5yF7ZxSGyZHphCp3hR4h9D90hiSP90NcCki6KDTUlwXr6nHHJXknmZ5O3tda29Zw8Ly9pQfe_PwiQcyGuhRxN3ZB6DQdKLMbUfs754S8mwXwz73tJ-0Eh0zJufUN3AWGnUxIlX1eQmLh-I2Z-4loZZn8Z6ocVb1XPhcB8MnkJfFtzL7JGpA-rDWHkeCsc874BQZAiG5shRrbFjlUd-vvjx-g9rs0wh9pjL761m3FUyHkWe2coqZq7XrbCA8s9-9jvtS8y5JqK0Ltoo8IC85f3j0Tg9uLYH-xJz4fd3A5NUYg/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Dont_Start_Now',
            artist: 'Dua Lipa',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAD9SwKirDMFpCsGslPpEEfsa/English_songs/Dont_Start_Now.mp3?dl=0',
            cover: 'https://uc972f0721f0a8c0d1d30f1c4cb5.previews.dropboxusercontent.com/p/thumb/AA02fzqhXLRcVWBGSxwtLuVebUFzPuRZhIuN8Hv01dbgygTbZxab7_6DvvySVSkH532Q4nXa23REKDEwTIGVYIe8GU71CtlYZfXhM0_mOyBJkXEvwbwrVdTyZWIAuivC8U7up40HKL3CiuM5MEvGuEKjMxRaohIx6lP6c1G7wmDbOiqxmwWbqirLuPBG0EY8xZsfJTOGz_mfGVMXUhcN4Y7nkub8z_QdAPKRB6wqtDIDYcNfqeicivbp2TC32OSrzXvuDR9Ili2SoN6U0lYK1f9eq1cBAXIY8YA4jRXtGkw3fPKZs3uniQ2pLzK9DQAWwHx_Q0UdZUzBuKiMqvHUoxmuMt0vCccjeSMGBEGUVPVDOg/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Joker_BGM_song',
            artist: 'Indila',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AABzSUMjFklY7vFKnPyrUP5Ha/English_songs/Joker_BGM_song.mp3?dl=0',
            cover: 'https://uc3020686af57e8fd189032ea4e2.previews.dropboxusercontent.com/p/thumb/AA1vFdnGNXudNKcxjC_ZJJ9oxvzFWcuJ7dhwSDtMTWAXCFbPBbjyrJb66V3Lrhh6eoYNpjrlI5ABsr5JPjqDjJmz1l2LZDQVTuk6g32OyYR31aek50JfUwMsM8xt1h2zkxa7ajEPjO4Oa8gQmcDBFDibdAFqftPZgLRf9H_L1F908kk2d521RwV_ZjGjkVPPH20bdO6nUFQZ0G3JHP2f63Yyd44M8Fmsiex5aBdUn9j2ZqBwj0hXnNYs9bBot2RGP6mwSJR3yQDiMAqfCiRa3nJLsHEQGXwYZTiSnlGOAGA4K9ssYlJA5DLP7QP7O61ZJ_Nb-ugSxtQ3LWc5WXXyBDE7Vslqk5omdEsrxV4VUlGmlQ/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Shape_Of_You',
            artist: 'Ed Sherran',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AADbgB2otHu5G5-Cg2riMKnfa/English_songs/Shape_of_You.mp3?dl=0',
            cover: 'https://uc560db1f1b3ea86af7223e0e138.previews.dropboxusercontent.com/p/thumb/AA0Q_kyu7ju-aolIEgX6UrqBi3H0s8owpG3YoUb0coi9_r2pEglsMHzrgfYdh3vjWwzG_DafFuMxjGLTnZBWDNXrG44LnPwyKy4o6ECYCLFyptHw5vfIZR2SZX0oDeFQZbSQBDaAwD-Kfbt7Dej1a3mepdzgpuR7wBORku87ZcMA6f4gCaoPxTh7rbNhp_PXfUXJMKgwRK9CGTp8wvdSTaanWWiyGMYUDLw76mp8OgNWlWSu0l4W83MM6RwwfkPJaUVNRS4dLCGeTnvfU3dN0X7_LttkLZO0c5iz8Vsli1bcNznyebkAXJ-gpLX7Lcel04UsqnDy4f10LSqx_fmatMV7zTQMW2l6ftXHtUIm6RzeuA/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Sick_and_Tired',
            artist: 'Anastacia',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAAJ2IPsIvBiE6SGtakw6_dva/English_songs/Sick_and_Tired.mp3?dl=0',
            cover: 'https://uc350a658958e2c9608202dc5612.previews.dropboxusercontent.com/p/thumb/AA0SxKVh-VfurjmZb7lo37sRSBRYMDOo1LAkS4TbrrxzbLEvLKuiNH7FwmEMmCTOAN50g_gf7VExG2couH0o250ggwoobazdyC0uWgpGFbfYPiHN0mAvfGIIkRVwmQLARTo_mMCs0W8Pzv32kH2AEtQ4xk6xZfUkB22NFA-kqaMYPW72wafGIntdzD5mIonbGwcIUuI1GEDQwFLJf_fPMyx9MkzQf1RrSaEgKS9Z774x2j1x60krvrdLZxxD7h-3DPeBWD-78A7BcQl17CCktUeEThNZYZtc6Xg8FXYxDo4nr2M4jg-aqHTrsJGOs-vGa2bWI4yn1gdbAoH9urBT1toGMKhksy9lWjtdze4ejCvHhA/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Yummy',
            artist: 'Justin Bieber',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AABQ_rM49Na54D8HV1aMytnda/English_songs/Yummy.mp3?dl=0',
            cover: 'https://uc127665115dfb93b7283eeaf242.previews.dropboxusercontent.com/p/thumb/AA1bfM1Ysm_0zpO_RwB3EJE3Xc-w_VG0uJWqKgXfBztGjb_eEDUmnAo2L4tj8Q-Ec6sYW1r15NddpvmdcMQhpSzk7dsa-fkc_hDiDjziTPDUVYxNp0FEVJa8N3s3uO53ikDMxOnmoNsUYQfePs4Krct4uUKeqyXmeMLBe1E_uTPkGpINvxmiqOYIFyOEuewS2NqIwOr-Mie651zXDdjDfd4qUZyE9N3adpNeOSdMzupO2WAk9UmlFa4g3yL3ZPNCuIKZFgAa4TaVn9LuOfgVwgxz6JLFlfAqfmJm3UMYBre8LnKQGw1WNAnb1PLP6a12UCxKg1Rdv8bKVUaMFM3_xUC9TwD6hZ6MFGmifbZW40ks9g/p.jpeg?size=178x178&size_mode=1'
        },
        {
            name: 'Animal_Trance',
            artist: 'Jules Craig',
            url: 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AABOUcS_gP4KbxK30MJjCwhXa/English_songs/Animal_Trance.mp3?dl=0',
            cover: 'https://uca7247499c537ddb6ce233cfabd.previews.dropboxusercontent.com/p/thumb/AA1QJsXZSp03UEiaH7VVN9tZT0uylTMpf8PeICbQRjfqxorK9uNM2SBg5BzM9f_n0oewrfHiA-Juf12t97D5kVk4Lvp8Cf9Zn4eq5GSp3soghbgKQ8f-aC_92Vgb1bJfevj4_aRNGY2C5HQz9J-dY5CQF2TltIjfHRglvwo8rWEz8AMhWSaspb0_rTx_e4S252p7AB476E5SBOqIIPocBgQoZZMo36QbWFtXa4wmYry8GVzLwvur0z6kGEWLm9Jv5z6uPukDC-pzLd1rbDu4ZGcGKycd8CxZQprMJiFwLa83z8_eUEzIQ0UtGRJzjX6iD3nj9agqYzK-FEU3aajiidpFmK9lDZ4fVDLX87uG8ebEyQ/p.jpeg?size=178x178&size_mode=1'
        }
    ]
});

console.log(ap.audio);
let audiofiles = [
    'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAARNQcM56e0Ib4EJzroFigya/English_songs/Stuck_with_u.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AACiOhWL0GsnDhKbnOT_22HIa/English_songs/Intentions.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AADg22hyAEe2QK-jN9V0FmzLa/English_songs/Lil_Mosey.mp3?dl=0',
    'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AACriB-jRymojaEcnqKrzQV1a/English_songs/LM3ALLEM-arabic.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AADlkayc9jAmOCYe5j794UI9a/English_songs/Doja_cat.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAAcsuwBVlDyJ0MNv-razh7Ua/English_songs/NAV-No_Debate_feat.mp3?dl=0',
    'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AABa3oYNJHyc3gTchT_Rdo_6a/English_songs/The_box.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAD9Gvw9UaMWSQBv8-jM0EkQa/English_songs/Stupid_love.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AADbIe0ovR3a_WE9Q9Sn9cFka/English_songs/Whats_poppin.mp3?dl=0',
    'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAD6rrbledoPx8ge50KhRx_7a/English_songs/The_Weeknd-Blinding_Lights.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAA5xsZ7sCj7o9gC1waX_sjga/English_songs/Be_Kind.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAB0fI53aj7iIQMAUFsnpybUa/English_songs/Baby.mp3?dl=0',
    'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AABmH2s7bXFI0V-rjFWFMVaga/English_songs/Roses.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAAP9WHBV96cikBccoqhyT4sa/English_songs/Despacito.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAD9SwKirDMFpCsGslPpEEfsa/English_songs/Dont_Start_Now.mp3?dl=0',
    'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AABzSUMjFklY7vFKnPyrUP5Ha/English_songs/Joker_BGM_song.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AADbgB2otHu5G5-Cg2riMKnfa/English_songs/Shape_of_You.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AAAJ2IPsIvBiE6SGtakw6_dva/English_songs/Sick_and_Tired.mp3?dl=0',
    'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AABQ_rM49Na54D8HV1aMytnda/English_songs/Yummy.mp3?dl=0', 'https://dl.dropbox.com/sh/hesjiw13fgp3sow/AABOUcS_gP4KbxK30MJjCwhXa/English_songs/Animal_Trance.mp3?dl=0'
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
        var icon = e.target;
        var songCard = this.parentNode.childNodes;
        var imgFile = songCard[1].childNodes[1].src;
        var songName = songCard[3].childNodes[1].innerHTML;
        var songInfo = songCard[5].childNodes[0].innerHTML;
        var dataId = $(songCard[1]).attr("data-switch");
        var audioFile = `static/${audiofiles[dataId]}`;
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
