import API from "../Service/api.jsx";
import { useEffect, useState } from "react";
import Cover from "../Components/Cover/cover.jsx";
import Track from "../Components/Track/track.jsx";
import Search from "../Components/Search/search.jsx";
import Controls from "../Components/Controls/controls.jsx";
import Playlist from "../Components/Playlist/playlist.jsx";
import ListTrack from "../Components/ListTrack/listtrack.jsx";
import Background from "../Components/Background/background.jsx";

export default function App() {
  const [data, setData] = useState("");
  const [search, setSearch] = useState(0);
  const [hideShow, setHideShow] = useState("");
  const [total, setTotal] = useState(0);
  const [playlist, setPlaylist] = useState([]);

  function HidePlaylist() {
    if (localStorage.getItem("list") === "hide") {
      localStorage.removeItem("list");
      setHideShow("");
    } else {
      localStorage.setItem("list", "hide");
      setHideShow(localStorage.getItem("list"));
    }
  }

  function Next() {
    const audio = document.querySelector("#play");
    const p = document.querySelector(".p");
    if (search <= total) {
      const tsearch = search + 1;
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
  
  function Back() {
    const audio = document.querySelector("#play");

    if (search >= 0) {
      setSearch(search - 1);
      audio.autoplay = true;
      audio.load();
    }
  }

  function SelectTrack(v) {
    const p = document.querySelector(".p");
    const audio = document.querySelector("#play");
    const track = document.querySelector(`#e${v}`).id;
    if (track === `e${v}` && v === 0) {
      setSearch(0);
      audio.autoplay = true;
      audio.load();
      p.classList.remove("fa-play");
      p.classList.add("fa-pause");
    } else if (track === `e${v}`) {
      setSearch(v - 1);
      audio.autoplay = true;
      audio.load();
      p.classList.remove("fa-play");
      p.classList.add("fa-pause");
    }
  }

  function SearchEd() {
    const p = document.querySelector(".p");
    const audio = document.querySelector("#play");
    const search = document.querySelector("#search").value;
    // eslint-disable-next-line
    playlist.map((list) => {
      if (list.title === search) {
        setSearch(list.id - 1);
        audio.autoplay = true;
        audio.load();
        p.classList.remove("fa-play");
        p.classList.add("fa-pause");
      }
    });
  }

  useEffect(() => {
    API.get(
      `/api?pageNumber=${search}&pageSize=1&sortBy=id&sortDirection=ASC`
    ).then((response) => {
      setData(response.data.content[0]);
      setTotal(response.data.totalPages);
    });
  }, [search]);

  useEffect(() => {
    API.get(`/api?pageSize=20`).then((response) => {
      setPlaylist(response.data.content);
    });
  }, [search]);

  return (
    <>
      <Background>
        <Cover photo={data.albumcover} />
        <Playlist class={hideShow}>
          <Search search={SearchEd} />
          <ListTrack>
            {playlist?.map((list) => (
              <Track
                key={list.id}
                id={list.id}
                title={list.title}
                duration={list.time}
                select={SelectTrack}
              />
            ))}
          </ListTrack>
        </Playlist>
      </Background>
      <Controls
        next={Next}
        back={Back}
        title={data.title}
        music={data.sound}
        hide_show={HidePlaylist}
      />
    </>
  );
}
