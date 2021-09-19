import { useState } from "react";
import API from "../Service/api.jsx";
import { useHistory } from "react-router";
import Form from "../Components/Form/form.jsx";
import Cover from "../Components/Cover/cover.jsx";
import Controls from "../Components/Controls/controls.jsx";
import Playlist from "../Components/Playlist/playlist.jsx";
import Background from "../Components/Background/background.jsx";
const invs = {
  albumcover: "",
  author: "",
  sound: "",
  time: "",
  title: "",
};
export default function Add() {
  const history = useHistory();
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState(1);
  const [play, setPlay] = useState(false);
  const [hideShow, setHideShow] = useState("");
  const [iconPlay, setIconPlay] = useState("fas fa-play");
  const [iconVolume, setIconVolume] = useState("fas fa-volume-up");
  const [valeus, setValeus] = useState(invs);

  function PlayPause() {
    const audio = document.querySelector("#play");

    if (play) {
      audio.pause();
      setPlay(false);
      setIconPlay("fas fa-play");
    } else {
      audio.play();
      setPlay(true);
      setIconPlay("fas fa-pause");
      setTotal(sessionStorage.getItem("total"))
    }
  }
  function Next() {
    const audio = document.querySelector("#play");
    const p = document.querySelector(".p");
    if (search <= total) {
      const tsearch = search;
      if (tsearch === total) {
        audio.autoplay = true;
        audio.load();
      } else {
        setSearch(search + 1);
        audio.autoplay = true;
        audio.load();
        p.classList.remove("fa-play");
        p.classList.add("fa-pause");
      }
    }
  }

  function Prev() {
    const audio = document.querySelector("#play");

    if (search !== 1) {
      setSearch(search - 1);
      audio.autoplay = true;
      audio.load();
    }
  }

  function Volume() {
    const audio = document.querySelector("#play");
    const input = document.querySelector("#input").value;
    audio.volume = input;
    if (input > 0.5) {
      setIconVolume("fas fa-volume-up");
    } else if ((input === 0.5) | (input > 0.1)) {
      setIconVolume("fas fa-volume-down");
    } else {
      setIconVolume("fas fa-volume-mute");
    }
  }

  function HidePlaylist() {
    if (localStorage.getItem("list") === "hide") {
      localStorage.removeItem("list");
      setHideShow("");
    } else {
      localStorage.setItem("list", "hide");
      setHideShow(localStorage.getItem("list"));
    }
  }

  function House() {
    history.push("/");
  }

  function Add() {
    history.push("/add");
  }

  function Valeus(param) {
    const { name, value } = param.target;
    const audio = document.querySelector("#play");
    const inv = {
      albumcover: "",
      author: "",
      sound: "",
      time: "",
      title: "",
    };

    if (name === "title") {
      sessionStorage.setItem("title", value);
    }
    if (name === "author") {
      sessionStorage.setItem("author", value);
    }
    if (name === "albumcover") {
      sessionStorage.setItem("albumcover", value);
    }
    if (name === "sound") {
      sessionStorage.setItem("sound", value);
      setTimeout(Postpush, 1000);
    }

    function Postpush() {
      inv.title = sessionStorage.getItem("title");
      inv.albumcover = sessionStorage.getItem("albumcover");
      inv.author = sessionStorage.getItem("author");
      inv.sound = sessionStorage.getItem("sound");
      inv.time = audio.duration;
      setValeus(inv);
    }
    setData({ ...data, [name]: value });
  }

  function OnSumit(param) {
    param.preventDefault();
    API.post("/add", valeus)
      .then((response) => {
        history.push("/");
      })
      .catch((response) => {
        console.log(response);
      });
  }

  return (
    <>
      <Background bg={data.albumcover}>
        <Cover photo={data.albumcover} />
      </Background>
      <Playlist class={hideShow}>
        <Form sumit={OnSumit} value={Valeus} />
      </Playlist>
      <Controls
        iconv={iconVolume}
        iconp={iconPlay}
        volume={Volume}
        play={PlayPause}
        next={Next}
        prev={Prev}
        title={data.title}
        music={data.sound}
        hide_show={HidePlaylist}
        house={House}
        add={Add}
      />
    </>
  );
}
