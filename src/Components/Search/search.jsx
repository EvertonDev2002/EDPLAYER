export default function Search(props) {
  return (
    <div className="input">
      <input
        type="text"
        onChange={() => props.search()}
        id="search"
        placeholder="Procurar"
      />
    </div>
  );
}
