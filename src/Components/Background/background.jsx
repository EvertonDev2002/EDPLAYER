export default function Background(props) {
  return (
    <div className="background">
      <img src={props.bg} alt="background" />
      {props.children}
    </div>
  );
}
