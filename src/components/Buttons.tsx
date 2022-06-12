import React from 'react'
import '../styles/Button.css';

const Buttons = () => {
  return (
    <section className='buttons'>
      <p>LEAD OR LAG</p>
      <button className="option-btn lead">LEAD</button>
      <button className="option-btn manual-auto">MANUAL</button>
      <p>MODE</p>
    </section>
  )
}

export default Buttons;