export default function Albumcover(props) {
  return (
    <div className="albumcover">
      <img id="img" src={props.photo} alt="Capa de Albúm" />
    </div>
  );
}
