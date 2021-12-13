import React from "react";

const Bands = props => {
  console.log(props)
  const bandList = props.bands.map((band, index) => {
    return <li key={index}>{band.name}</li>
  }) 
  
  return (  
    <ul>
      {bandList}
    </ul> 
  )
}
export default Bands