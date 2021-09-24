import Tracks from "./api.jsx";
import { useEffect, useState } from "react";
import Track from "./Components/Track/track.jsx";
import Search from "./Components/Search/search.jsx";
import Controls from "./Components/Controls/controls.jsx";
import Playlist from "./Components/Playlist/playlist.jsx";
import ListTrack from "./Components/ListTrack/listtrack.jsx";
import Albumcover from "./Components/Albumcover/albumcover.jsx";
import Background from "./Components/Background/background.jsx";

export default function App() {
  const [datas, setDatas] = useState("");
  const [search, setSearch] = useState(1);
  const [play, setPlay] = useState(false);
  const [hideShow, setHideShow] = useState("");
  const [playlist, setPlaylist] = useState([]);
  const [iconPlay, setIconPlay] = useState("fas fa-play");
  const [iconVolume, setIconVolume] = useState("fas fa-volume-up");

  const PlayPause = () => {
    const audio = document.querySelector("#play");

    if (play) {
      audio.pause();
      setPlay(false);
      setIconPlay("fas fa-play");
    } else {
      audio.play();
      setPlay(true);
      setIconPlay("fas fa-pause");
    }
  };

  const Next = () => {
    const audio = document.querySelector("#play");
    const p = document.querySelector(".p");
    if (search <= Tracks.length) {
      const tsearch = search;
      if (tsearch === Tracks.length) {
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
  };

  const Prev = () => {
    if (search !== 1) {
      setSearch(search - 1);
    }
  };

  const Volume = () => {
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
  };

  const HidePlaylist = () => {
    if (localStorage.getItem("list") === "hide") {
      localStorage.removeItem("list");
      setHideShow("");
    } else {
      localStorage.setItem("list", "hide");
      setHideShow(localStorage.getItem("list"));
    }
  };

  const SelectTrack = (ev) => {
    const p = document.querySelector(".p");
    const audio = document.querySelector("#play");
    const track = document.querySelector(`#e${ev}`).id;
    if (track === `e${ev}` && ev === 1) {
      setSearch(1);
      audio.autoplay = true;
      audio.load();
      p.classList.remove("fa-play");
      p.classList.add("fa-pause");
    } else if (track === `e${ev}`) {
      setSearch(ev);
      audio.autoplay = true;
      audio.load();
      p.classList.remove("fa-play");
      p.classList.add("fa-pause");
    }
  };

  const Search_ = () => {
    const p = document.querySelector(".p");
    const search = document.querySelector("#search").value;
    for (let i = 0; i < Tracks.length; i++) {
      if (Tracks[i].title === search) {
        setSearch(Tracks[i].id);
        p.classList.remove("fa-play");
        p.classList.add("fa-pause");
      }
    }
  };

  const ModelDuration = (ev) => {
    const data = new Date(null);
    data.setMinutes(ev);
    const DurationInMinutes = data.toISOString().substr(11, 5);
    return DurationInMinutes;
  };

  useEffect(() => {
    for (let i = 0; i < Tracks.length; i++) {
      if (Tracks[i].id === search) {
        setDatas(Tracks[i]);
        document.title = `EdPlayer|${Tracks[i].title}`;
      }
    }
    const audio = document.querySelector("#play");
    const Interval = setInterval(ChangeDuration, 10);
    function ChangeDuration() {
      if (audio.duration === audio.currentTime) {
        if (search === Tracks.length - 1) {
          setSearch(1);
          audio.autoplay = true;
          audio.load();
          clearInterval(Interval);
        } else {
          setSearch(search + 1);
          audio.autoplay = true;
          audio.load();
          clearInterval(Interval);
        }
      }
    }
  }, [search]);

  useEffect(() => {
    setPlaylist(Tracks);
  }, [search]);
  return (
    <>
      <Background bg={datas.albumcover}>
        <Albumcover photo={datas.albumcover} />
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
      </Background>
      <Controls
        iconv={iconVolume}
        iconp={iconPlay}
        volume={Volume}
        play={PlayPause}
        next={Next}
        prev={Prev}
        title={datas.title}
        music={datas.sound}
        hide_show={HidePlaylist}
      />
    </>
  );
}
