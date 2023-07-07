import {NoteDefinition} from "@/assets/note/Note";
import {AIGeneral} from "@/assets/note/AIGeneral";
import {ResNet} from "@/assets/note/ResNet";

export const notes = [
    AIGeneral,
    ResNet
].sort((a, b) => a.title < b.title)
    .map((note, idx) => note.idWith(idx));

export const getNote = (id) => {
    return notes[id]
}