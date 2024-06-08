import React from 'react'
import SumOfTwoNumbers from './components/SumOfTwoNumbers'
import CelsiusToFahrenheit from './components/CelsiusToFahrenheit'
import AddPy from './components/AddPy'
import Card from './utils/Card'



function App() {
  return (
    <div className='flex flex-wrap'>
    <Card>
<SumOfTwoNumbers />
    </Card>
    <Card>
    <CelsiusToFahrenheit />
    </Card>
    <Card>
    <AddPy />
    </Card>
  
    
    </div>
  )
}

export default App