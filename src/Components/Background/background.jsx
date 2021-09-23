export default function Background(props) {
  return (
    <div className="container">
      <img src={props.bg} alt="background" />
      {props.children}
    </div>
  );
}
