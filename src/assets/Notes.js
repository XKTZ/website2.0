import {NoteDefinition} from "@/assets/note/Note";
import {AIGeneral} from "@/assets/note/ai-general/AIGeneral";

export const notes = [
    AIGeneral
].sort((a, b) => a.title < b.title)
    .map((note, idx) => note.idWith(idx));

export const getNote = (id) => {
    return notes[id]
}