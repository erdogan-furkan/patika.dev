import React from 'react'
import './App.css'
import { Button } from 'crowui'
import 'crowui/dist/index.css'

const App = () => {
  return (
    <div className='App'>
      <Button type='dashed' onClick={() => alert('Hello!')}>
        I am coming from crowUI!
      </Button>
    </div>
  )
}

export default App
