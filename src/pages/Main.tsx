import React, {FC} from 'react'
import utility from '../assets/utility.png';
import PowerMeter from '../assets/Power meter.png';
import LongConnection from '../assets/svg-icons/straight_long_connection.svg';
import ShortConnection from '../assets/svg-icons/straight_short_connection.svg';
import '../styles/Main.css';

const imageWidth: string = "80";


export const Main : FC = () => {
  return (
    <main>
      <section>
        <img src={utility} width={imageWidth} alt="utility" />
        <img src={LongConnection} alt="long_connection" />
        <img src={PowerMeter} width={imageWidth} alt="power meter" />
        <img src={ShortConnection} alt="short_connection" />
      </section>

      <section>
        <img src={utility} width={imageWidth} alt="utility" />
        <img src={LongConnection} alt="long_connection" />
        <img src={PowerMeter} width={imageWidth} alt="power meter" />
        <img src={ShortConnection} alt="short_connection" />
      </section>

      <section>
        <img src={utility} width={imageWidth} alt="utility" />
        <img src={LongConnection} alt="long_connection" />
        <img src={PowerMeter} width={imageWidth} alt="power meter" />
        <img src={ShortConnection} alt="short_connection" />
      </section>
      
      
    </main>
  )
}