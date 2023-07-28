import { useMemo } from 'react'
import { Timeline } from 'components'
import { Note } from 'types'

export type NotesProps = {
  notes: Note[]
}

export const Notes = ({ notes }: NotesProps) => {
  const timelines = useMemo(() => {
    return notes.map(note => ({
      time: note.datetime,
      title: note.note_text
    }));
  }, [ notes ])

  return (
    <div className="p-3">
      <Timeline items={timelines} />
    </div>
  )
}
