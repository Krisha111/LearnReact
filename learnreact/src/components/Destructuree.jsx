import React from 'react'
import animals,{careAnimals} from '../animals'

export default function Destructuree() {
    const [cat,dog]=animals
    const {name,sound,fright:{food,water}}=cat
    const [animal,makeSound]=careAnimals(cat)
    console.log(animal)
    // const {name,sound}=cat
    // const {name="krisha",sound="patel"}=cat

    // this is not working
    // const {name:petName,sound:petSound}=cat
    // console.log(petSound)
    // console.log(food)
    // console.log(water)
  return (
    <>
    <h1>{sound}</h1>
     </>
  )
}
