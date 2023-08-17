import React from 'react'
import notess from './components/notess'
import Notes from './components/Notes'

export default function MapPrac() {
  return (
    <>
   { notess.map((note)=>{
    return(
      <Notes
      title={note.title}
      content={note.content}
      />
   ) })}
    </>
  )
}
