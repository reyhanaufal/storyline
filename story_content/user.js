window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  // Cek apakah audio sudah ada
var audio = document.getElementById('bgm_source');

if (audio === null) {
    // Buat elemen audio baru
    audio = document.createElement('audio');
    audio.id = 'bgm_source';
    audio.src = 'story_content/external_files/music.mp3';
    audio.preload = "auto";
    audio.loop = true;
    audio.volume = 0.5; // Atur volume (0.0 sampai 1.0)
    document.body.appendChild(audio);

    // Langsung mainkan (aman karena dipicu klik user)
    audio.play();
}
}

window.Script2 = function()
{
  var player = GetPlayer();
var status = player.GetVar("isMuted");
var audio = document.getElementById('bgm_source');

if (audio) {
    if (status == true) {
        audio.pause();
    } else {
        audio.play();
    }
}
}

window.Script3 = function()
{
  var player = GetPlayer();
var status = player.GetVar("isMuted");
var audio = document.getElementById('bgm_source');

if (audio) {
    if (status == true) {
        audio.pause();
    } else {
        audio.play();
    }
}
}

window.Script4 = function()
{
  var player = GetPlayer();
var status = player.GetVar("isMuted");
var audio = document.getElementById('bgm_source');

if (audio) {
    if (status == true) {
        audio.pause();
    } else {
        audio.play();
    }
}
}

window.Script5 = function()
{
  var player = GetPlayer();
var status = player.GetVar("isMuted");
var audio = document.getElementById('bgm_source');

if (audio) {
    if (status == true) {
        audio.pause();
    } else {
        audio.play();
    }
}
}

window.Script6 = function()
{
  var player = GetPlayer();
var status = player.GetVar("isMuted");
var audio = document.getElementById('bgm_source');

if (audio) {
    if (status == true) {
        audio.pause();
    } else {
        audio.play();
    }
}
}

window.Script7 = function()
{
  var player = GetPlayer();
var status = player.GetVar("isMuted");
var audio = document.getElementById('bgm_source');

if (audio) {
    if (status == true) {
        audio.pause();
    } else {
        audio.play();
    }
}
}

window.Script8 = function()
{
  var player = GetPlayer();
var status = player.GetVar("isMuted");
var audio = document.getElementById('bgm_source');

if (audio) {
    if (status == true) {
        audio.pause();
    } else {
        audio.play();
    }
}
}

window.Script9 = function()
{
  var player = GetPlayer();
var status = player.GetVar("isMuted");
var audio = document.getElementById('bgm_source');

if (audio) {
    if (status == true) {
        audio.pause();
    } else {
        audio.play();
    }
}
}

window.Script10 = function()
{
  var player = GetPlayer();
var status = player.GetVar("isMuted");
var audio = document.getElementById('bgm_source');

if (audio) {
    if (status == true) {
        audio.pause();
    } else {
        audio.play();
    }
}
}

window.Script11 = function()
{
  var player = GetPlayer();
var status = player.GetVar("isMuted");
var audio = document.getElementById('bgm_source');

if (audio) {
    if (status == true) {
        audio.pause();
    } else {
        audio.play();
    }
}
}

window.Script12 = function()
{
  var player = GetPlayer();
var status = player.GetVar("isMuted");
var audio = document.getElementById('bgm_source');

if (audio) {
    if (status == true) {
        audio.pause();
    } else {
        audio.play();
    }
}
}

window.Script13 = function()
{
  var player = GetPlayer();
var status = player.GetVar("isMuted");
var audio = document.getElementById('bgm_source');

if (audio) {
    if (status == true) {
        audio.pause();
    } else {
        audio.play();
    }
}
}

window.Script14 = function()
{
  var player = GetPlayer();
var status = player.GetVar("isMuted");
var audio = document.getElementById('bgm_source');

if (audio) {
    if (status == true) {
        audio.pause();
    } else {
        audio.play();
    }
}
}

window.Script15 = function()
{
  var player = GetPlayer();
var status = player.GetVar("isMuted");
var audio = document.getElementById('bgm_source');

if (audio) {
    if (status == true) {
        audio.pause();
    } else {
        audio.play();
    }
}
}

window.Script16 = function()
{
  var player = GetPlayer();
var status = player.GetVar("isMuted");
var audio = document.getElementById('bgm_source');

if (audio) {
    if (status == true) {
        audio.pause();
    } else {
        audio.play();
    }
}
}

window.Script17 = function()
{
  var player = GetPlayer();
var status = player.GetVar("isMuted");
var audio = document.getElementById('bgm_source');

if (audio) {
    if (status == true) {
        audio.pause();
    } else {
        audio.play();
    }
}
}

window.Script18 = function()
{
  var player = GetPlayer();
var status = player.GetVar("isMuted");
var audio = document.getElementById('bgm_source');

if (audio) {
    if (status == true) {
        audio.pause();
    } else {
        audio.play();
    }
}
}

window.Script19 = function()
{
  var player = GetPlayer();
var status = player.GetVar("isMuted");
var audio = document.getElementById('bgm_source');

if (audio) {
    if (status == true) {
        audio.pause();
    } else {
        audio.play();
    }
}
}

};
