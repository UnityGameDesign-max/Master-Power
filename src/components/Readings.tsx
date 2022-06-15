import React, {FC} from 'react'
import '../styles/Readings.css';

type powerMeterReadings = {
    value: string;
}
export const Readings = ({value}:powerMeterReadings) => {
  return (
    <section className="readings-value">
        <p>value</p>
    </section>
  )
}