export default function Search(props) {
  return (
    <div className="search">
      <input
        type="text"
        onChange={() => props.search()}
        id="search"
        placeholder="Procurar"
      />
    </div>
  );
}
