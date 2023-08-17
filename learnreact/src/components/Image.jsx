import React from 'react'

export default function Image(props) {
  return (
    <div>
        <img alt="beyonce" className="img-classs" src={props.image}/>
    </div>
  )
}
