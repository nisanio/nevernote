export interface INeverNote {
    id?: number,
    body?: string,
    updated?: Date,
    created?: Date
}

export interface NeverProps {
    note: INeverNote,
}

export type NeverNoteParams = {
    id: string;
  };