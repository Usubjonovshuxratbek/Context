import React, { useContext } from 'react'
import { Context } from '../../Context/Context'

function Home() {
    const {id, setId} = useContext(Context)
  return (
    <div>
      <h2>Home</h2>
      <button onClick={()=> setId(id + 1)}>submit</button>
    </div>
  )
}

export default Home
