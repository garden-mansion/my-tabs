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

  private static NOTE_PATTERN = /^\d+(\.\d+)?$/;
  private static noteRegex = new RegExp(this.NOTE_PATTERN);

  constructor({ fret, string_ }: NoteConstructorParams) {
    this.id = v4();
    this.fret = fret;
    this.string_ = string_;
  }

  toString(): string {
    return `${this.fret}.${this.string_}`;
  }

  private static mapNotesToString(notes: Note[]): string[] {
    return notes.map((note) => note.toString());
  }

  static getNotesString(notes: Note[]) {
    return Note.mapNotesToString(notes).join(" ");
  }

  static isValidStringNote(value: string) {
    return Note.noteRegex.test(value);
  }
}
