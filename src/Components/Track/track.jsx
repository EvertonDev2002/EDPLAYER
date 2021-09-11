export default function Track(props) {
  return (
    <div
      id={`e${props.id}`}
      className="track"
      onClick={() => props.select(props.id)}
    >
      <p>{props.title}</p>
      <p>{props.duration}</p>
    </div>
  );
}
