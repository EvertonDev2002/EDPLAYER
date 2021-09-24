export default function ListTrack(props) {
  return (
    <div className="list">
      <p className="legend">Playlist</p>
      <div className="list-track">{props.children}</div>
    </div>
  );
}
