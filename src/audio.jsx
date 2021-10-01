import { Tracks } from "./Audio/files.jsx";

sessionStorage.setItem("search", 1);
sessionStorage.setItem("Play", false);
sessionStorage.setItem("ClassPlay", "fa-play");

export const Interval = (ev) => {
  const Interval = setInterval(ev, 10);
  if (ev === "clear") {
    clearInterval(Interval);
  }
};
export const ChangeIconPlay = (ev) => {
  const p = document.querySelector(".p");

  if (ev === "remove") {
    p.classList.remove("fa-pause");
    p.classList.add("fa-play");
  } else {
    p.classList.remove("fa-play");
    p.classList.add("fa-pause");
  }
};
export const AutoPlay = () => {
  const audio = document.querySelector("#play");
  audio.autoplay = true;
  audio.load();
};
export const ModelDuration = (ev) => {
  const data = new Date(null);
  data.setMinutes(ev);
  const DurationInMinutes = data.toISOString().substr(11, 5);
  return DurationInMinutes;
};

export const audio = {
  Prev: function () {
    if (sessionStorage.getItem("search") !== 1) {
      sessionStorage.setItem(
        "search",
        parseInt(sessionStorage.getItem("search")) - 1
      );
      ChangeIconPlay();
    }
  },
  Next: function () {
    if (sessionStorage.getItem("search") <= Tracks.length) {
      const tsearch = sessionStorage.getItem("search");
      if (tsearch === Tracks.length) {
        AutoPlay();
      } else {
        sessionStorage.setItem(
          "search",
          parseInt(sessionStorage.getItem("search")) + 1
        );
        AutoPlay();
        ChangeIconPlay();
      }
    }
  },
  PlayPause: function () {
    const audio = document.querySelector("#play");
    if (sessionStorage.getItem("Play") === "false") {
      audio.pause();
      Interval("clear");
      ChangeIconPlay("remove");
      sessionStorage.setItem("Play", "true");
    } else {
      audio.play();
      sessionStorage.setItem("Play", "false");
      ChangeIconPlay();
    }
  },
  Volume: function (ev) {
    const audio = document.querySelector("#play");
    const volume = document.querySelector("#volume");
    const spanInput = document.querySelector(".spanInput");

    if (ev === "mute") {
      audio.volume = 0;
      volume.stepDown(10);
      spanInput.classList.remove("fa-volume-up", "fa-volume-down");
      spanInput.classList.add("fa-volume-mute");
    } else {
      audio.volume = volume.value;
      if (volume.value > 0.5) {
        spanInput.classList.remove("fa-volume-mute", "fa-volume-down");
        localStorage.setItem("ClassVolume", "fa-volume-up");
        spanInput.classList.add(localStorage.getItem("ClassVolume"));
      } else if ((volume.value === 0.5) | (volume.value > 0.1)) {
        spanInput.classList.remove("fa-volume-up", "fa-volume-mute");
        localStorage.setItem("ClassVolume", "fa-volume-down");
        spanInput.classList.add(localStorage.getItem("ClassVolume"));
      } else {
        spanInput.classList.remove("fa-volume-up", "fa-volume-down");
        localStorage.setItem("ClassVolume", "fa-volume-mute");
        spanInput.classList.add(localStorage.getItem("ClassVolume"));
      }
    }
  },
};

export const playlist = {
  SelectTrack: function (ev) {
    const track = document.querySelector(`#e${ev}`).id;
    if (track === `e${ev}` && ev === 1) {
      sessionStorage.setItem("search", 1);
      AutoPlay();
      ChangeIconPlay();
    } else if (track === `e${ev}`) {
      sessionStorage.setItem("search", ev);
      AutoPlay();
      ChangeIconPlay();
    }
  },
  HidePlaylist: function () {
    const playlist = document.querySelector(".playlist");
    if (localStorage.getItem("list") === "hide") {
      localStorage.removeItem("list");
      playlist.classList.remove("hide");
    } else {
      localStorage.setItem("list", "hide");
      playlist.classList.add(localStorage.getItem("list"));
    }
  },
  Search: function () {
    const search = document.querySelector("#search").value;
    for (let i = 0; i < Tracks.length; i++) {
      if (Tracks[i].title.toLowerCase() === search.toLowerCase()) {
        sessionStorage.setItem("search", parseInt(Tracks[i].id));
        AutoPlay();
        ChangeIconPlay();
      }
    }
  },
};
