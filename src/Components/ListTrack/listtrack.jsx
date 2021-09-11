export default function ListTrack(props) {
  return (
    <div className="list">
      <p className="legend">Lista</p>
      {props.children}
    </div>
  );
}
