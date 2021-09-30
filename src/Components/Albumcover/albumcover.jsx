export default function Albumcover(props) {
  return (
    <div
      className="albumcover"
      style={{ backgroundImage: `url(${props.photo})` }}
    ></div>
  );
}
