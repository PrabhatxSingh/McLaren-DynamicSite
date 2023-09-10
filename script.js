function toggleMenu() {
  const menu = document.querySelector(".menu");
  const nav = document.querySelector(".nav");
  nav.classList.toggle("active");
  menu.classList.toggle("active");
}

function changeVideo(name) {
  const bgVideoList = document.querySelectorAll(".bg-video");
  const trailer = document.querySelectorAll(".trailer");
  const model = document.querySelectorAll(".model");

  bgVideoList.forEach((video) => {
    video.classList.remove("active");
    if (video.classList.contains(name)) {
      video.classList.add("active");
    }
  });

  model.forEach((model) => {
    model.classList.remove("active");
    if (model.classList.contains(name)) {
      model.classList.add("active");
    }
  });

  trailer.forEach((video) => {
    video.classList.remove("active");
    if (video.classList.contains(name)) {
      video.classList.add("active");
    }
  });
}

function togglePlay() {
  const play = document.querySelector(".play");
  const pause = document.querySelector(".pause");

  play.classList.toggle("active");
  pause.classList.toggle("active");
}

function pauseVideo() {
  const bgVideoList = document.querySelectorAll(".bg-video");
  bgVideoList.forEach((video) => {
    video.pause();
  });
  togglePlay();
}

function playVideo() {
  const bgVideoList = document.querySelectorAll(".bg-video");
  bgVideoList.forEach((video) => {
    video.play();
  });
  togglePlay();
}
