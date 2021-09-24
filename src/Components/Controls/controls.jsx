export default function Controls(props) {
  return (
    <div className="sound">
      <div className="title">
        <p>{props.title}</p>
      </div>
      <div className="controls">
        <span className="icon fas fa-step-backward" onClick={props.prev}></span>
        <span className={`p icon ${props.iconp}`} onClick={props.play}></span>
        <span className="icon fas fa-step-forward" onClick={props.next}></span>
        <span className={`spanInput icon ${props.iconv}`}>
          <input
            min="0"
            max="1"
            step="0.1"
            type="range"
            id="input"
            defaultValue="1"
            onChange={props.volume}
          />
        </span>
        {/*   <span className="icon fas fa-upload" onClick={props.add}></span> */}
        <span className="icon fas fa-home" onClick={props.house}></span>
        <span className="icon fas fa-list-ul" onClick={props.hide_show}></span>
        <audio preload="metadata" id="play" src={props.music}></audio>
      </div>
    </div>
  );
}
