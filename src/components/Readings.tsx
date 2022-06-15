import React, {FC} from 'react'
import '../styles/Readings.css';

type powerMeterReadings = {
    value: any;
}
export const Readings = ({value}:powerMeterReadings) => {
  return (
    <section className="readings-value">
        <p>POWER METER READINGS: {value}</p>
    </section>
  )
}