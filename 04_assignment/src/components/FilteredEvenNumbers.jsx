import React from 'react'

function FilteredEvenNumbers() {
  const numbers = [10, 23, 42, 17, 88, 95, 64, 31, 52, 77];
  const filteredEvenNums = numbers.filter(num => (
    num % 2 !== 0
  ))

  return (
    <div>
  <h2>Odd Numbers</h2>
<ul>
{filteredEvenNums.map((odd,index) => (

<li key={index}>I am an odd number: {odd}</li>

))}
</ul>

    </div>
  )
}

export default FilteredEvenNumbers