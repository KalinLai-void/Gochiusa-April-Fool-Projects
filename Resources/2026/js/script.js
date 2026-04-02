// script.js

// 1. 定義歌曲資料 (補齊了三首歌的測試資料)
const songData = {
  chino: {
    title: "全天候型いらっしゃいませ",
    artist: "チノ（Chino）",
    cover:
      "https://kalinlai-void.github.io/Gochiusa-April-Fool-Projects/gochiusa2026/gochiusa.com/af/core_sys/images/main/wallpaper/chino.jpg",
    source:
      "https://kalinlai-void.github.io/Gochiusa-April-Fool-Projects/gochiusa2026/gochiusa.com/af/core_sys/images/main/audio/chino.mp3",
  },
  rize: {
    title: "Rabbit Hole",
    artist: "レゼ（Rize）",
    cover:
      "https://kalinlai-void.github.io/Gochiusa-April-Fool-Projects/gochiusa2026/gochiusa.com/af/core_sys/images/main/wallpaper/rize.jpg",
    source:
      "https://kalinlai-void.github.io/Gochiusa-April-Fool-Projects/gochiusa2026/gochiusa.com/af/core_sys/images/main/audio/rize.mp3",
  },
  chiya: {
    title: "のんピースマイペース",
    artist: "千夜（Chiya）",
    cover:
      "https://kalinlai-void.github.io/Gochiusa-April-Fool-Projects/gochiusa2026/gochiusa.com/af/core_sys/images/main/wallpaper/chiya.jpg",
    source:
      "https://kalinlai-void.github.io/Gochiusa-April-Fool-Projects/gochiusa2026/gochiusa.com/af/core_sys/images/main/audio/chiya.mp3",
  },
  syaro: {
    title: "ポップコーンはぷにんぐ！",
    artist: "シャロ（Syaro）",
    cover:
      "https://kalinlai-void.github.io/Gochiusa-April-Fool-Projects/gochiusa2026/gochiusa.com/af/core_sys/images/main/wallpaper/syaro.jpg",
    source:
      "https://kalinlai-void.github.io/Gochiusa-April-Fool-Projects/gochiusa2026/gochiusa.com/af/core_sys/images/main/audio/syaro.mp3",
  },
  special: {
    title: "Special Song",
    artist: " ",
    cover:
      "https://kalinlai-void.github.io/Gochiusa-April-Fool-Projects/gochiusa2026/gochiusa.com/af/core_sys/images/main/wallpaper/all_sp.jpg",
    source:
      "https://kalinlai-void.github.io/Gochiusa-April-Fool-Projects/gochiusa2026/gochiusa.com/af/core_sys/images/main/audio/m3.mp3",
  },
};

// 2. 抓取 HTML 中對應的元素
const songSelector = document.getElementById("song-selector");
const songTitle = document.getElementById("song-title");
const artistName = document.getElementById("artist-name");
const albumArt = document.getElementById("album-art");
const audioPlayer = document.getElementById("audio-player");
const audioSource = document.getElementById("audio-source");

songSelector.addEventListener("change", function (e) {
  const selectedSongId = e.target.value;
  console.log("Selected ID:", selectedSongId);
  const song = songData[selectedSongId];
  console.log("Retrieved Song Data:", song);

  if (song) {
    songTitle.textContent = song.title;
    artistName.textContent = song.artist;

    albumArt.src = song.cover;
    albumArt.alt = `${song.title} Cover`;

    // 替換音樂音源
    audioSource.src = song.source;

    // 重新載入播放器讓新音源生效
    audioPlayer.load();
    audioPlayer.play();
  }
});
