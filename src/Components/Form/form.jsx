export default function Form(props) {
  return (
    <form className="form" onSubmit={props.sumit}>
      <legend>Adicionar música a playlist</legend>
      <input
        type="text"
        max="10"
        name="title"
        placeholder="Titulo"
        onChange={props.value}
      />
      <input
        type="text"
        max="10"
        name="author"
        placeholder="Artista"
        onChange={props.value}
      />
      <input
        type="url"
        name="albumcover"
        placeholder="Capa"
        onChange={props.value}
      />
      <input
        type="url"
        name="sound"
        placeholder="Música"
        onChange={props.value}
      />
      <input id="v" type="hidden" name="time" onChange={props.value} />
      <button>Salvar</button>
    </form>
  );
}
