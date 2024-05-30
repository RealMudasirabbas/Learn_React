import React from 'react'

function DefaultProps({name,age=18}) {
  return (
    <div>
<p>Name: {name}</p>
<p>Age:{age}</p>

    </div>
  )
}

export default DefaultProps