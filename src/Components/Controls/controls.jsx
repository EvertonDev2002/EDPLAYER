import React, { useState } from "react";
export default function Controls(props) {
  const [play, setPlay] = useState(false);
  const [iconPlay, setIconPlay] = useState("fas fa-play");
  const [iconVolume, setIconVolume] = useState("fas fa-volume-up");

  function Play_Pause() {
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
  return (
    <div className="Sound">
      <div className="title">
        <p>{props.title}</p>
      </div>
      <div className="Controls">
        <span className="icon fas fa-step-backward" onClick={props.back}></span>
        <span className={`p icon ${iconPlay}`} onClick={Play_Pause}></span>
        <span className="icon fas fa-step-forward" onClick={props.next}></span>
        <span className={`spanInput icon ${iconVolume}`}>
          <input
            min="0"
            max="1"
            step="0.1"
            type="range"
            id="input"
            defaultValue="1"
            onChange={Volume}
          />
        </span>
        <span className="icon fas fa-list-ul" onClick={props.hide_show}></span>
        <audio
          preload="auto"
          id="play"
          src={props.music}
          type="audio/mpeg"
        ></audio>
      </div>
    </div>
  );
}
