import React from 'react'

export default function Notes(props) {
  return (
    <>
    <h1>{props.title}</h1>
    <h5>{props.content}</h5>
    </>
  )
}
