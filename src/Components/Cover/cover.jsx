export default function Cover(props) {
  return (
    <div className="Cover">
      <img id="img" src={props.photo} alt="Capa de Albúm" />
    </div>
  );
}
