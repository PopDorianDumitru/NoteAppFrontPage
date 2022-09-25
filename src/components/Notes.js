const Notes = ({ deleteUser }) => {
  const notes = [
    "Don't slip up today",
    "Take out the trash at 15pm",
    "Stop trying to pet the cat!",
  ];

  return (
    <div id="notePage">
      <div id="noteForm">
        <ul>
          {notes.map((note) => {
            return <li>{note}</li>;
          })}
        </ul>
      </div>
      <div id="noteAdd">
        <input type="text" id="noteInput"></input>
        <button>Add</button>
      </div>
    </div>
  );
};

export default Notes;
