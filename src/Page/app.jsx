import API from "../Service/api.jsx";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import Cover from "../Components/Cover/cover.jsx";
import Track from "../Components/Track/track.jsx";
import Search from "../Components/Search/search.jsx";
import Controls from "../Components/Controls/controls.jsx";
import Playlist from "../Components/Playlist/playlist.jsx";
import ListTrack from "../Components/ListTrack/listtrack.jsx";
import Background from "../Components/Background/background.jsx";

export default function App() {
  const history = useHistory();
  const [data, setData] = useState("");
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState(1);
  const [play, setPlay] = useState(false);
  const [hideShow, setHideShow] = useState("");
  const [playlist, setPlaylist] = useState([]);
  const [iconPlay, setIconPlay] = useState("fas fa-play");
  const [iconVolume, setIconVolume] = useState("fas fa-volume-up");

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
      AutoPlaySound(search + 1);
      setTotal(sessionStorage.getItem("total"));
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
        AutoPlaySound(search + 1);
      }
    }
  }

  function Prev() {
    const audio = document.querySelector("#play");

    if (search !== 1) {
      setSearch(search - 1);
      audio.autoplay = true;
      audio.load();
      AutoPlaySound(search + 1);
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

  function SelectTrack(ev) {
    const p = document.querySelector(".p");
    const audio = document.querySelector("#play");
    const track = document.querySelector(`#e${ev}`).id;
    if (track === `e${ev}` && ev === 1) {
      setSearch(1);
      audio.autoplay = true;
      audio.load();
      p.classList.remove("fa-play");
      p.classList.add("fa-pause");
      AutoPlaySound(ev + 1);
    } else if (track === `e${ev}`) {
      setSearch(ev);
      audio.autoplay = true;
      audio.load();
      p.classList.remove("fa-play");
      p.classList.add("fa-pause");
      AutoPlaySound(ev + 1);
    }
  }

  function Search_() {
    const p = document.querySelector(".p");
    const audio = document.querySelector("#play");
    const search = document.querySelector("#search").value;
    // eslint-disable-next-line
    playlist.map((list) => {
      if (list.title === search) {
        setSearch(list.id);
        audio.autoplay = true;
        audio.load();
        p.classList.remove("fa-play");
        p.classList.add("fa-pause");
        AutoPlaySound(list.id + 1);
      }
    });
  }

  function AutoPlaySound(ev) {
    const audio = document.querySelector("#play");
    const Interval = setInterval(ChangeDuration, 10);

    function ChangeDuration() {
      if (audio.duration === audio.currentTime) {
        setSearch(ev);
        clearInterval(Interval);
      }
    }
  }

  function ModelDuration(ev) {
    const data = new Date(null);
    data.setMinutes(ev);
    const DurationInMinutes = data.toISOString().substr(11, 5);
    return DurationInMinutes;
  }

  function House() {
    history.push("/");
  }

  function Add() {
    history.push("/add");
  }

  useEffect(() => {
    API.get(`/${search}`).then((response) => {
      setData(response.data);
    });
  }, [search]);

  useEffect(() => {
    API.get().then((response) => {
      setPlaylist(response.data);
      sessionStorage.setItem("total", response.data.length);
    });
  }, [search]);
  return (
    <>
      <Background bg={data.albumcover}>
        <Cover photo={data.albumcover} />
      </Background>
      <Playlist class={hideShow}>
        <Search search={Search_} />
        <ListTrack>
          {playlist?.map((list) => (
            <Track
              key={list.id}
              id={list.id}
              title={list.title}
              duration={ModelDuration(list.time)}
              select={SelectTrack}
            />
          ))}
        </ListTrack>
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
