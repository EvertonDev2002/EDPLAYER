import { Tracks } from "./Audio/files.jsx";
import { useEffect, useState } from "react";
import Track from "./Components/Track/track.jsx";
import Search from "./Components/Search/search.jsx";
import Controls from "./Components/Controls/controls.jsx";
import Playlist from "./Components/Playlist/playlist.jsx";
import ListTrack from "./Components/ListTrack/listtrack.jsx";
import Albumcover from "./Components/Albumcover/albumcover.jsx";
import Background from "./Components/Background/background.jsx";
import {
  audio,
  playlist,
  ModelDuration,
  ChangeIconPlay,
  Interval,
} from "./audio.jsx";

export default function App() {
  const [datas, setDatas] = useState([]);
  const [search, setSearch] = useState(1);

  const UpSearch = () => {
    setSearch(parseInt(sessionStorage.getItem("search")));
  };

  const next = () => {
    audio.Next();
    UpSearch();
  };
  const prev = () => {
    audio.Prev();
    UpSearch();
  };
  const selectTrack = (ev) => {
    playlist.SelectTrack(ev);
    UpSearch();
  };

  const search_ = () => {
    playlist.Search();
    UpSearch();
  };

  useEffect(() => {
    for (let i = 0; i < Tracks.length; i++) {
      if (Tracks[i].id === search) {
        setDatas(Tracks[i]);
        document.title = `EdPlayer|${Tracks[i].title}`;
      }
    }
    const audio = document.querySelector("#play");
    Interval(ChangeDuration);
    function ChangeDuration() {
      if (audio.duration === audio.currentTime) {
        if (parseInt(sessionStorage.getItem("search")) === Tracks.length) {
          ChangeIconPlay("remove");
          Interval("clear");
        } else {
          sessionStorage.setItem(
            "search",
            parseInt(sessionStorage.getItem("search")) + 1
          );
          setSearch(parseInt(sessionStorage.getItem("search")));
          audio.autoplay = true;
          audio.load();
          clearInterval(Interval);
        }
      }
    }
  }, [search]);

  return (
    <>
      <Background bg={datas.albumcover}>
        <Albumcover photo={datas.albumcover} />
        <Playlist>
          <Search search={search_} />
          <ListTrack>
            {Tracks?.map((list) => (
              <Track
                key={list.id}
                id={list.id}
                photo={list.albumcover}
                title={list.title}
                duration={ModelDuration(list.time)}
                select={selectTrack}
              />
            ))}
          </ListTrack>
        </Playlist>
      </Background>
      <Controls
        volume={audio.Volume}
        play={audio.PlayPause}
        next={next}
        prev={prev}
        title={datas.title}
        music={datas.sound}
        hide_show={playlist.HidePlaylist}
      />
    </>
  );
}
