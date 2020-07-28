import React from 'react';
const Header = (props) => {
  return(
    <div>
    <h1>{props.title}</h1>
    {props.subtitle && <p>{props.subtitle}</p>} {/*if we have a subtitle display it*/}
    </div>
  )
}

export default Header