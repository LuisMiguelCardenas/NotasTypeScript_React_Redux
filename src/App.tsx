import { useSelector, useDispatch } from "react-redux";
import { addNote } from "./actions";
import { NewNoteInput } from "./components/NewNoteInput";
import { NotesState } from "./reducers/notesReducer";



function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  );
  const dispatch = useDispatch();

  const onAddNote = (note: string) => {
    dispatch(addNote(note));
  };

  return (
    <div className="container-fluid my-0 p-4 bg-dark">
      <h1 className="text-center my-5 text-light">Tareas con React Redux</h1>
      <NewNoteInput addNote={onAddNote} />
      <hr />
      <ul className="bg-light m-5">
        {notes.map((note) => {
          return <li className="text-dark" key={note}>{note}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;