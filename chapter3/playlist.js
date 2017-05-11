window.onload = init;

function addSong(){
  // 获取歌曲名
  var song = document.getElementById("song");
  var songName = song.value;
  // 向列表中添加歌曲名
  if(songName !== ""){
    var newSong = document.createElement("li");
    newSong.innerHTML =songName;
    var list = document.getElementById("songList");
    list.appendChild(newSong);
   // 清空输入域：
    song.value="";
    song.placeholder="Song";
  }
}

function init(){
  var addSongButton = document.getElementById("addSong");
  addSongButton.onclick = addSong;
}



