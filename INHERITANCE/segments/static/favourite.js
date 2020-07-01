$(function() {
    $('[data-toggle="popover"]').popover()
})

$('.popover-dismiss').popover({
    trigger: 'focus'
})


// const ap = new APlayer({
//     container: document.getElementById('aplayer'),
//     listFolded: true,
//     audio: [
//         {
//             name: 'Dil tera deewana hai sanam',
//             artist: 'Dil tera deewana',
//             url: 'MdRafi_Songs/Dil_tera.mp3',
//             cover: 'MdRafi_Songs/Dil_tera.jpg'
//         },
//         {
//             name: 'Tumne mujhe dekha',
//             artist: 'Teesri Manzil',
//             url: 'MdRafi_Songs/Tumne_mujhe.mp3',
//             cover: 'MdRafi_Songs/Tumne_mujhe.jpg'
//         }
//     ]
// });

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

showSongs();

$(".album-poster").on("click", function() {
    var dataSwitchId = $(this).attr("data-switch");
    //console.log(dataSwitchId);

    ap.list.switch(dataSwitchId);

    ap.play();
    $("#aplayer").addClass("showPlayer");
});


let myFavprop = JSON.parse(localStorage.getItem("favProp"));
let songObjarray = [];
myFavprop.forEach((element, index) => {
    let songObj = {
        name: `${element.songName}`,
        artist: `${element.songInfo}`,
        url: `${element.audioFile}`,
        cover: `${element.imgFile}`
    }
    songObjarray.push(songObj);
})
console.log(songObjarray);

const ap = new APlayer({
    container: document.getElementById('aplayer'),
    listFolded: true,
    audio: songObjarray,
});
console.log(ap.audio);



function showSongs() {
    let Container = document.getElementsByClassName("row")[0];
    let myFavprop = JSON.parse(localStorage.getItem("favProp"));
    if (myFavprop == null) {
        myFavprop = [];
    }
    let songsContent = `<div class="col-md-12" id="singerName">
                            <h4 style="text-align: center; margin-top: 15px;">
                                <i class="fa fa-heart" style="font-size:35px;color:red"></i>
                                     Your Personalised Favorites
                                <i class="fa fa-heart" style="font-size:35px;color:red"></i>
                             </h4>
                        </div>`;
    if (myFavprop != null) {
        myFavprop.forEach((element, index) => {
            songsContent += `<div class="songCard col-md-3">
                                <a href="javascript:void();" class="album-poster" data-switch="${index}">
                                    <img src="${element.imgFile}">
                                </a>
                                <div class="songNameContainer">
                                    <h4>${element.songName}</h4>
                                </div>                   
                                <p><b>${element.songInfo}</b></p>
                                <button class="removeBtn" tabindex="0" role="button" data-toggle="popover" data-trigger="hover"
                                title="Remove From Favorites"><i
                                 class="fa fa-minus-square" style="font-size:24px;color:red"></i></button>
                            </div>`
        })
        Container.innerHTML = songsContent;
    }
}



$(function() {
    $(".removeBtn").on("click", function(e) {
        var songCard = this.parentNode.childNodes;
        var imgFile = songCard[1].childNodes[1].src;
        var songName = songCard[3].childNodes[1].innerHTML;
        var songInfo = songCard[5].childNodes[0].innerHTML;
        var propToAdd = {
            imgFile: imgFile,
            songName: songName,
            songInfo: songInfo
        }

        let myFavprop = JSON.parse(localStorage.getItem("favProp"));
        console.log(myFavprop);
        for (let j = 0; j < myFavprop.length; j++) {
            if ((myFavprop[j].songName == propToAdd.songName) && (myFavprop[j].songInfo == propToAdd.songInfo)) {
                console.log("already included");
                myFavprop.splice(j, 1);
            }
            console.log(myFavprop);
        }
        localStorage.setItem("favProp", JSON.stringify(myFavprop));
        showSongs();
        location.reload();
    })
})