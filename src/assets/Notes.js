import {NoteDefinition} from "@/assets/note/Note";

export const notes = [
].sort((a, b) => a.title < b.title)
    .map((note, idx) => note.idWith(idx));

export const getNote = (id) => {
    return notes[id]
}