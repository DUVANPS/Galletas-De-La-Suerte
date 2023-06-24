
import './App.css'

import UserCard from './components/UserCard'

import users from './data/users.json'

import { useState } from 'react'


function App() {
  const colors = ["#FDB137", "#785964", "#6D6875", "#B5838D", "#E5989B", "#7E9680", "#C73866", "#FFB4A2", "#79616F", "#EAB595" ]


  const [ index, setIndex] = useState(0)

  const changeUser = () => {
    if(index < users.length - 2 ){
    setIndex(index + 1)
  }else{
    setIndex(0)
  }

  }

  document.body.style = `background-color: ${ colors[index ]}`

  return (
    <>

    <UserCard
    data={ users[index]}

    />
    <button onClick={changeUser}><i className='bx bx-shuffle'></i>
      
    </button>
    
   
    </>
  )
}

export default App
