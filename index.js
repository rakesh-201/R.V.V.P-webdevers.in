class Songs{
  constructor(source,song,muted,vol,songCounter){
    this.song=song;
    this.vol=vol;
    this.muted=muted;
    this.song.type='audio/mpeg';
    this.song.src=source;
    this.songCounter=songCounter;
    console.log(song);
    this.song.addEventListener('timeupdate',()=> {
      let curtime = parseInt(song.currentTime,10);
      document.getElementsByClassName('seek')[this.songCounter].max = song.duration;
      document.getElementsByClassName('seek')[this.songCounter].value = curtime;
    })
    
  }
  skip(time) {
    if (time == 'back') {
      this.song.currentTime = (this.song.currentTime - 5);
    } else if (time == 'fwd') {
      this.song.currentTime = (this.song.currentTime + 5);
    }
 }
 playpause() {
   if (!this.song.paused) {
    this.song.pause();
    console.log(this.song.pause())
   } else {
    this.song.play();
    console.log(this.song.play())
   }
 }
 stop() {
   this.song.pause();
   this.song.currentTime = 0;
   console.log(document.getElementsByClassName('seek')[this.songCounter])
   document.getElementsByClassName('seek')[this.songCounter].value = 0;
 }
 setPos(pos) {
   this.song.currentTime = pos;
 }
 mute() {
   if (this.muted) {
    this.song.volume =this.vol;
    this.muted = false;
    document.getElementsByClassName('mute')[this.songCounter].innerHTML = '<i class="fa fa-volume-up"></i>';
   } else {
    this.song.volume = 0;
    this.muted = true;
    document.getElementsByClassName('mute')[this.songCounter].innerHTML = '<i class="fa fa-volume-off"></i>';
   }
 }
 setVolume(volume) {
   this.song.volume = volume;
   this.vol = volume;
 }
};
let songCounter=0;
let muted=false;
let songList=['Dil tera deewana hai sanam.mp3','Dil abhi bhara nhi.mp3']  //
let noOfSongs = songList.length;
let vol=1;
let mySongs=[];
while(songCounter < noOfSongs){
  mySongs[songCounter]=new Songs(songList[songCounter],new Audio(),muted,vol,songCounter);
  songCounter++;
}
