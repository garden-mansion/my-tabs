const NOTE_PATTERN = /^\d+\.\d+$/;
const noteRegexp = new RegExp(NOTE_PATTERN);

export const isNotesTextValid = (text: string): boolean => {
  const rows: string[][] = text.split('\n').map((row) => row.split(' '));
  const rowsTrimmed: string[][] = rows.map((row) => row.filter((note) => note));

  return rowsTrimmed.every((row) => row.every((note) => noteRegexp.test(note)));
};
