import React, { useState } from 'react'

import { Wheel } from './components/Wheel'
import { AppContainer } from './styles'

const App = () => {
  const [mustSpin, setMustSpin] = useState(false)
  return (
    <AppContainer>
      <Wheel mustStartSpinning={mustSpin} />
      <button onClick={() => setMustSpin(true)}>ASD</button>
    </AppContainer>
  )
}

export default App
