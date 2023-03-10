import React, { useContext } from 'react'
import { Context } from '../../Context/Context'

function About() {
    const {id, setId} = useContext(Context)
  return (
    <div>
      <h2>About</h2>
      <h2>{id}</h2>
    </div>
  )
}

export default About
