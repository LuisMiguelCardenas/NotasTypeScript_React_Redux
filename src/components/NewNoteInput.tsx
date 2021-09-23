import React, { ChangeEvent } from "react";

interface NewNoteInputProps {
  addNote(note: string): void;
}

export const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
  const [note, setNote] = React.useState("");

  const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };

  const onAddNoteClick = () => {
    addNote(note);
    setNote("");
  };

  return (
    <div className="row">
      <input
      className="form-control col"
        onChange={updateNote}
        value={note}
        name="note"
        placeholder="Note"
      />
      <button className="btn btn-outline-success mx-5 col" onClick={onAddNoteClick}>Add note</button>
    </div>
  );
};
