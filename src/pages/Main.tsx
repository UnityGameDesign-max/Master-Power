import React, {FC, useEffect, useState} from 'react'
import utility from '../assets/utility.png';
import PowerMeter from '../assets/Power meter.png';
import GeneratorA from '../assets/GEN A.png';
import GeneratorB from '../assets/GEN B.png';
import {REQUEST_API_URL} from '../utility/apiRequest';
import '../styles/Main.css';
import {motion} from 'framer-motion';
import Buttons from '../components/Buttons';
import { lineVariant } from '../utility/animationVariants';
import { Readings } from '../components/Readings';

const imageWidth: string = "120";
const STROKE_RED: string = '#EA1313';
const STROKE_GREEN: string = '#56A824';

type colorStroke = {
  stroke: string;
  stroke1: string;
  stroke3: string;
  stroke4: string;
}

export const Main = ({stroke, stroke1, stroke3, stroke4}:colorStroke) => {
  const [isRotatedLine_1, setIsRotatedLine_1] = useState(true);
  const [isRotatedLine_2, setIsRotatedLine_2] = useState(true);
  const [isRotatedLine_3, setIsRotatedLine_3] = useState(true);
  const [isRotatedLine_4, setIsRotatedLine_4] = useState(true);
  const [reading, setReading] = useState<{[Value: string]: any}>({});

  const getReadingAPI = () => {
    fetch(REQUEST_API_URL)
      .then((response) => response.json())
      .then((data) => setReading(data));
  }

  const getMeterReading =() =>{
    if(!isRotatedLine_1 || !isRotatedLine_3 || (!isRotatedLine_2 && !isRotatedLine_4)){
      return JSON.stringify(
        reading[Object.keys(reading)[Object.keys(reading).length - 1]]
      );
    }else{
      return "0";
    }
  }

  useEffect(()=>{
    getReadingAPI();
  },[])

  if(isRotatedLine_1){
    stroke = STROKE_RED;
  }else{
    stroke = STROKE_GREEN;
  }
  if(isRotatedLine_3){
    stroke1 = STROKE_RED
  }else{
    stroke1 = STROKE_GREEN;
  }
  if(isRotatedLine_2){
    stroke3 = STROKE_RED;
  }else{
    stroke3 = STROKE_GREEN;
  }
  if(isRotatedLine_4 && isRotatedLine_2){
    stroke3 = STROKE_RED;
    stroke4 = STROKE_RED;
  
  }if(!isRotatedLine_4 && isRotatedLine_2){
    stroke3 = STROKE_RED;
    stroke4 = STROKE_RED;
  }
  if(!isRotatedLine_4 && !isRotatedLine_2){
    stroke3 = STROKE_GREEN;
    stroke4 = STROKE_GREEN;
  }if(!isRotatedLine_2 && isRotatedLine_4){
    stroke3 = STROKE_GREEN;
    stroke4 = STROKE_RED;
  }

  const rotateBreaker1 = () :void => {
    setIsRotatedLine_1(isRotatedLine_1 => !isRotatedLine_1);
  }
  const rotateBreaker2 = () :void => {
    setIsRotatedLine_2(isRotatedLine_2 => !isRotatedLine_2);
  }
  const rotateBreaker3 = () : void=> {
    setIsRotatedLine_3(isRotatedLine_3 => !isRotatedLine_3);
  }
  const rotateBreaker4 = () :void => {
    setIsRotatedLine_4(isRotatedLine_4 => !isRotatedLine_4);
  }

  return (
    <main>
      <Buttons />
        <svg className='power-svg' width="70%" height="645"  viewBox="0 -35 964 912"  fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="15" y1="500.999" x2="15.0154" y2="546.999" stroke='#56A824' stroke-width="4"/>
          <line x1="362" y1="501" x2="362.015" y2="951" stroke='#56A824' stroke-width="4"/>
          <line x1="362" y1="1.99993" x2="362.015" y2="428" stroke={stroke1} stroke-width="4"/>
          <line className="utility-reference" x1="15" y1="-7.22267e-05" x2="15.0154" y2="426" stroke={stroke} style={{position: "relative"}} stroke-width="4"/>
          <line x1="745" y1="380" x2="947" y2="380" stroke={stroke3} stroke-width="4"/>
          <line x1="745" y1="500.959" x2="746.015" y2="550.959" stroke='#56A824' stroke-width="4"/>
          <image className='utility-image' href={utility} width={imageWidth} x='-45' y='-35' />
          <image className='generator-A' href={GeneratorA} width={imageWidth} x='305' y='-35' />
          <image className='PowerMeter' href={PowerMeter} width={imageWidth} x='305' y='230' />
          <image className='PowerMeter' href={PowerMeter} width={imageWidth} x='305' y='640' />
          <image className='PowerMeter' href={PowerMeter} width={imageWidth} x='-40' y='230' />
          <line className="generator-referenceB" x1="949" y1="1.99973" x2="949.015" style={{position: "relative"}} y2="114" stroke={stroke4} stroke-width="4"/>
          <line x1="747" y1="381.999" x2="747.015" y2="427.999" stroke={stroke3} stroke-width="4"/>
          <line x1="949" y1="188" x2="949.015" y2="382" stroke={stroke3} stroke-width="4"/>
          <line x1="745" y1="549" x2="13" y2="549" stroke='#56A824' stroke-width="4"/>
          <line x1="370.483" y1="417.342" x2="351.483" y2="438.342" stroke="white" stroke-width="4"/>
          <line x1="372.518" y1="438.341" x2="353.517" y2="417.342" stroke="white" stroke-width="4"/>
          <line x1="23.4831" y1="418.342" x2="4.48307" y2="439.342" stroke="white" stroke-width="4"/>
          <line x1="25.5178" y1="439.341" x2="6.51696" y2="418.342" stroke="white" stroke-width="4"/>
          <line x1="754.483" y1="418.342" x2="735.483" y2="439.342" stroke="white" stroke-width="4"/>
          <line x1="756.518" y1="439.341" x2="737.517" y2="418.342" stroke="white" stroke-width="4"/>
          <image className='PowerMeter' href={PowerMeter} width={imageWidth} x='890' y='230' />
          <image className='generator-B' href={GeneratorB} width={imageWidth} x='890' y='-35' />
          <line x1="957.483" y1="107.342" x2="938.483" y2="128.342" stroke="white" stroke-width="4"/>
          <line x1="959.518" y1="128.341" x2="940.517" y2="107.342" stroke="white" stroke-width="4"/>
          <path d="M362.5 972L348.211 948.75H376.789L362.5 972Z" fill="#56A824"/>
          <motion.line
            className="line-breaker"
            variants={lineVariant} style={{ originY: 1 }}
            animate={isRotatedLine_1 ? "visible" : "hidden"}  onClick={rotateBreaker1}
            x1="15" y1="475" x2="15" y2="431" stroke="white" stroke-width="9"
          />
          <motion.line
           className="line-breaker"
           variants={lineVariant} 
           style={{ originY: 1 }} 
           animate={isRotatedLine_2 ? "visible" : "hidden"} onClick={rotateBreaker2}
           x1="745" y1="475" x2="745" y2="431" stroke="white" stroke-width="9"
          />
          <circle className='line-breaker'onClick={rotateBreaker2}  cx="746" cy="486" r="15" fill="#D9D9D9"/>
          <motion.line
            className="line-breaker"
            variants={lineVariant} 
            style={{originY: 1}}  
            animate={isRotatedLine_3 ? "visible" : "hidden"} onClick={rotateBreaker3}
            x1="361" y1="475" x2="361" y2="431"
            stroke="white" stroke-width="9"
          />
          <circle onClick={rotateBreaker3} className='line-breaker' cx="362" cy="485" r="15" fill="#D9D9D9"/>
          <circle onClick={rotateBreaker1} className='line-breaker' cx="15" cy="486" r="15" fill="#D9D9D9"/>
          <motion.line 
            className="line-breaker" 
            onClick={rotateBreaker4}
            variants={lineVariant} 
            style={{ originY: 1 }} 
            animate={isRotatedLine_4 ? "visible" : "hidden"}
            x1="949" y1="163" x2="949" y2="119" 
            stroke="white" stroke-width="9"
          />
          <circle onClick={rotateBreaker4} className='line-breaker' cx="949" cy="173" r="15" fill="#D9D9D9"/>
          <path d="M66.8537 502.114H69.2401L70.6534 503.946L71.6619 505.139L74.0838 508.25H71.527L69.8793 506.162L69.1761 505.168L66.8537 502.114ZM74.4318 499.727C74.4318 501.295 74.1383 502.637 73.5511 503.754C72.9688 504.867 72.1733 505.719 71.1648 506.311C70.161 506.903 69.0223 507.199 67.7486 507.199C66.4749 507.199 65.3338 506.903 64.3253 506.311C63.3215 505.714 62.526 504.86 61.9389 503.747C61.3565 502.63 61.0653 501.29 61.0653 499.727C61.0653 498.16 61.3565 496.82 61.9389 495.707C62.526 494.59 63.3215 493.735 64.3253 493.143C65.3338 492.552 66.4749 492.256 67.7486 492.256C69.0223 492.256 70.161 492.552 71.1648 493.143C72.1733 493.735 72.9688 494.59 73.5511 495.707C74.1383 496.82 74.4318 498.16 74.4318 499.727ZM71.7827 499.727C71.7827 498.624 71.6098 497.694 71.2642 496.936C70.9233 496.174 70.4498 495.598 69.8438 495.21C69.2377 494.817 68.5393 494.621 67.7486 494.621C66.9579 494.621 66.2595 494.817 65.6534 495.21C65.0473 495.598 64.5715 496.174 64.2259 496.936C63.8849 497.694 63.7145 498.624 63.7145 499.727C63.7145 500.83 63.8849 501.763 64.2259 502.526C64.5715 503.283 65.0473 503.858 65.6534 504.251C66.2595 504.64 66.9579 504.834 67.7486 504.834C68.5393 504.834 69.2377 504.64 69.8438 504.251C70.4498 503.858 70.9233 503.283 71.2642 502.526C71.6098 501.763 71.7827 500.83 71.7827 499.727ZM87.6776 492.455V507H85.0426V495.018H84.9574L81.5554 497.192V494.777L85.1705 492.455H87.6776Z" fill="white"/>
          <path d="M455.854 502.114H458.24L459.653 503.946L460.662 505.139L463.084 508.25H460.527L458.879 506.162L458.176 505.168L455.854 502.114ZM463.432 499.727C463.432 501.295 463.138 502.637 462.551 503.754C461.969 504.867 461.173 505.719 460.165 506.311C459.161 506.903 458.022 507.199 456.749 507.199C455.475 507.199 454.334 506.903 453.325 506.311C452.321 505.714 451.526 504.86 450.939 503.747C450.357 502.63 450.065 501.29 450.065 499.727C450.065 498.16 450.357 496.82 450.939 495.707C451.526 494.59 452.321 493.735 453.325 493.143C454.334 492.552 455.475 492.256 456.749 492.256C458.022 492.256 459.161 492.552 460.165 493.143C461.173 493.735 461.969 494.59 462.551 495.707C463.138 496.82 463.432 498.16 463.432 499.727ZM460.783 499.727C460.783 498.624 460.61 497.694 460.264 496.936C459.923 496.174 459.45 495.598 458.844 495.21C458.238 494.817 457.539 494.621 456.749 494.621C455.958 494.621 455.259 494.817 454.653 495.21C454.047 495.598 453.571 496.174 453.226 496.936C452.885 497.694 452.714 498.624 452.714 499.727C452.714 500.83 452.885 501.763 453.226 502.526C453.571 503.283 454.047 503.858 454.653 504.251C455.259 504.64 455.958 504.834 456.749 504.834C457.539 504.834 458.238 504.64 458.844 504.251C459.45 503.858 459.923 503.283 460.264 502.526C460.61 501.763 460.783 500.83 460.783 499.727ZM470.761 507V505.097L475.811 500.146C476.294 499.659 476.696 499.225 477.018 498.847C477.34 498.468 477.582 498.101 477.743 497.746C477.904 497.391 477.984 497.012 477.984 496.609C477.984 496.15 477.88 495.757 477.672 495.43C477.464 495.099 477.177 494.843 476.812 494.663C476.448 494.483 476.034 494.393 475.57 494.393C475.091 494.393 474.672 494.493 474.312 494.692C473.953 494.886 473.673 495.163 473.474 495.523C473.28 495.883 473.183 496.311 473.183 496.808H470.676C470.676 495.885 470.887 495.082 471.308 494.401C471.73 493.719 472.31 493.191 473.048 492.817C473.792 492.443 474.644 492.256 475.605 492.256C476.58 492.256 477.438 492.438 478.176 492.803C478.915 493.167 479.488 493.667 479.895 494.301C480.307 494.936 480.513 495.66 480.513 496.474C480.513 497.019 480.409 497.554 480.2 498.08C479.992 498.605 479.625 499.187 479.099 499.827C478.579 500.466 477.847 501.24 476.905 502.149L474.398 504.699V504.798H480.733V507H470.761Z" fill="white"/>
          <path d="M844.854 502.114H847.24L848.653 503.946L849.662 505.139L852.084 508.25H849.527L847.879 506.162L847.176 505.168L844.854 502.114ZM852.432 499.727C852.432 501.295 852.138 502.637 851.551 503.754C850.969 504.867 850.173 505.719 849.165 506.311C848.161 506.903 847.022 507.199 845.749 507.199C844.475 507.199 843.334 506.903 842.325 506.311C841.321 505.714 840.526 504.86 839.939 503.747C839.357 502.63 839.065 501.29 839.065 499.727C839.065 498.16 839.357 496.82 839.939 495.707C840.526 494.59 841.321 493.735 842.325 493.143C843.334 492.552 844.475 492.256 845.749 492.256C847.022 492.256 848.161 492.552 849.165 493.143C850.173 493.735 850.969 494.59 851.551 495.707C852.138 496.82 852.432 498.16 852.432 499.727ZM849.783 499.727C849.783 498.624 849.61 497.694 849.264 496.936C848.923 496.174 848.45 495.598 847.844 495.21C847.238 494.817 846.539 494.621 845.749 494.621C844.958 494.621 844.259 494.817 843.653 495.21C843.047 495.598 842.571 496.174 842.226 496.936C841.885 497.694 841.714 498.624 841.714 499.727C841.714 500.83 841.885 501.763 842.226 502.526C842.571 503.283 843.047 503.858 843.653 504.251C844.259 504.64 844.958 504.834 845.749 504.834C846.539 504.834 847.238 504.64 847.844 504.251C848.45 503.858 848.923 503.283 849.264 502.526C849.61 501.763 849.783 500.83 849.783 499.727ZM864.982 507.199C863.959 507.199 863.05 507.024 862.254 506.673C861.464 506.323 860.839 505.835 860.379 505.21C859.92 504.585 859.676 503.863 859.648 503.044H862.318C862.342 503.437 862.472 503.78 862.709 504.074C862.946 504.363 863.26 504.588 863.653 504.749C864.046 504.91 864.487 504.99 864.974 504.99C865.495 504.99 865.957 504.9 866.359 504.72C866.762 504.536 867.077 504.28 867.304 503.953C867.531 503.626 867.643 503.25 867.638 502.824C867.643 502.384 867.529 501.995 867.297 501.659C867.065 501.323 866.729 501.06 866.288 500.871C865.853 500.681 865.327 500.587 864.712 500.587H863.426V498.555H864.712C865.218 498.555 865.661 498.468 866.04 498.293C866.423 498.117 866.724 497.871 866.942 497.554C867.16 497.232 867.266 496.86 867.261 496.439C867.266 496.027 867.174 495.67 866.984 495.366C866.8 495.059 866.537 494.82 866.196 494.649C865.86 494.479 865.464 494.393 865.01 494.393C864.565 494.393 864.153 494.474 863.774 494.635C863.395 494.796 863.09 495.026 862.858 495.324C862.626 495.617 862.503 495.968 862.489 496.375H859.953C859.972 495.561 860.206 494.846 860.656 494.23C861.111 493.61 861.717 493.127 862.474 492.781C863.232 492.431 864.082 492.256 865.024 492.256C865.995 492.256 866.838 492.438 867.553 492.803C868.272 493.162 868.829 493.648 869.222 494.259C869.615 494.869 869.811 495.544 869.811 496.283C869.816 497.102 869.574 497.788 869.087 498.342C868.604 498.896 867.969 499.259 867.183 499.429V499.543C868.206 499.685 868.99 500.063 869.534 500.679C870.083 501.29 870.356 502.05 870.351 502.959C870.351 503.773 870.119 504.502 869.655 505.146C869.196 505.786 868.561 506.287 867.751 506.652C866.946 507.017 866.023 507.199 864.982 507.199Z" fill="white"/>
        </svg>
       
        <Readings value={reading ?  getMeterReading() : ''}/>
    </main>
  )
}