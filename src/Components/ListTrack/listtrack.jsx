export default function ListTrack(props) {
  return (
    <div className="list">
      <p className="legend">Playlist</p>
      <div>{props.children}</div>
    </div>
  );
}
