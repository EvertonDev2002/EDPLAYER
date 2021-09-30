export default function Background(props) {
  return (
    <div className="container">
      <div
        className="background"
        style={{ backgroundImage: `url(${props.bg})` }}
      ></div>
      {props.children}
    </div>
  );
}
