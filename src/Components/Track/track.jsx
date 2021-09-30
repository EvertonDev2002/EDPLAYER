export default function Track(props) {
  return (
    <div
      id={`e${props.id}`}
      className="track"
      onClick={() => props.select(props.id)}
    >
      <div>
        <span
          className="photo"
          style={{ backgroundImage: `url(${props.photo})` }}
        ></span>
        <p>{props.title}</p>
      </div>
      <p>{props.duration}</p>
    </div>
  );
}
