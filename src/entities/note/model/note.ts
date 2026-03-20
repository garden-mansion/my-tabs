import { v4 } from "uuid";

// ожидается что количество полей будет увеличиваться
// пока что ограничимся тем, что нота включает в себя номер лада и струны

interface NoteConstructorParams {
  fret: number;
  string_: number;
}

export class Note {
  id: string;
  fret: number;
  string_: number;

  constructor({ fret, string_ }: NoteConstructorParams) {
    this.id = v4();
    this.fret = fret;
    this.string_ = string_;
  }

  toString(): string {
    return `${this.fret}.${this.string_}`;
  }

  private static mapNoteToString(note: Note): string {
    return note.toString();
  }

  private static mapNotesToString(notes: Note[]): string[] {
    return notes.map((note) => Note.mapNoteToString(note));
  }

  static getNotesString(notes: Note[]) {
    return Note.mapNotesToString(notes).join(" ");
  }
}
