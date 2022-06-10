import React, {FC, useEffect, useState} from 'react'
import utility from '../assets/utility.png';
import PowerMeter from '../assets/Power meter.png';
import LongConnection from '../assets/svg-icons/straight_long_connection.svg';
import ShortConnection from '../assets/svg-icons/straight_short_connection.svg';
import RightConnection from '../assets/svg-icons/right_connection.svg';
import GeneratorA from '../assets/GEN A.png';
import GeneratorB from '../assets/GEN B.png';
import breaker from '../assets/svg-icons/breaker.svg';
import {getReading} from '../utility/apiRequest';
import '../styles/Main.css';
import Buttons from '../components/Buttons';

const imageWidth: string = "80";
const connectionWidth: number = 9;
const breakerWidth: number = 25;


export const Main : FC = () => {
  const [readings, setReading] = useState("");

  return (
    <main>
      <section className='top-connection'>
        <section className="start-utility">
          <img src={utility} width={imageWidth} alt="utility" />
          <svg width="4" height="100" viewBox="0 0 2 175" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="1" x2="1" y2="185" stroke="black" stroke-width="4"/>
          </svg>
          <img src={PowerMeter} width={imageWidth} alt="power meter" />
          <svg width="3" height="90" viewBox="0 0 2 76" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="2.13928" y1="0.990518" x2="1.86075" y2="75.017" stroke="black" stroke-width="2"/>
          </svg>
        
        </section>

        <section className="middle-generator-A">
          <img src={GeneratorA} width={imageWidth} alt="utility" />
          
          <svg width="4" height="100" viewBox="0 0 2 175" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="1" x2="1" y2="185" stroke="black" stroke-width="4"/>
          </svg>

          <img src={PowerMeter} width={imageWidth} alt="power meter" />
          <svg width="3" height="90" viewBox="0 0 2 76" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="2.13928" y1="0.990518" x2="1.86075" y2="75.017" stroke="black" stroke-width="2"/>
          </svg>

        </section>

        <section className="end-generator-B">
          <img className="generatorB" src={GeneratorB} width={imageWidth} alt="utility" />
          <svg width="3" className='short_connection_right' height="59" viewBox="0 0 4 76" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="2.13928" y1="0.990518" x2="1.86075" y2="75.017" stroke="black" stroke-width="2"/>
          </svg>
          <svg className="breaker_right breaker" width="17" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle  cx="5.5" cy="12.5" r="4.5" fill="#fff"/>
            <line x1="14.4044" y1="0.674086" x2="5.40437" y2="11.2941" stroke="white"/>
          </svg>

          <img className="power_meter_right" src={PowerMeter} width={imageWidth} alt="power meter" />
          <svg width="393" height="370" viewBox="-5 120 507 251" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="342" x2="342" y2="106" stroke="black" stroke-width="2"/>
            <line x1="1" y1="106" x2="1" y2="150" stroke="black" stroke-width="2"/>
            <line y1="105" x2="341" y2="105" stroke="black" stroke-width="2"/>
          </svg>
        </section>
      </section>
      
      <section className='bottom-connection'>
      <svg width="344" height="108" viewBox="0 0 344 108" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="1.2785" y1="0.00376253" x2="0.999967" y2="74.0303" stroke="black" stroke-width="2"/>
      <line x1="342.279" y1="0.00376253" x2="342" y2="74.0303" stroke="black" stroke-width="2"/>
      <line y1="73" x2="341" y2="73" stroke="black" stroke-width="2"/>
      <line x1="163" y1="4" x2="163" y2="108" stroke="black" stroke-width="2"/>
      </svg>

        <Buttons />
      </section>
      
      
      
    </main>
  )
}