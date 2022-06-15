import React, {FC, useState} from 'react'
import '../styles/Button.css';
import { notification } from 'antd';


const Buttons : FC = () => {
  const [mode, setMode] = useState(false);
  const [lead, setLead] = useState(false);

  const openModeNotification = () => {
    setMode(!mode);
    notification.open({
      message: 'MODE',
      description:
        `The button MODE has changed to ${!mode ? 'MANUAL': 'AUTO'}`,
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };

  const openLeadNotification = () => {
    setLead(!lead);
    notification.open({
      message: 'LEAD OR LAG',
      description:
        `The button LEAD OR LAG has changed to ${!lead ? 'LEAD': 'LAG'}`,
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };
 
  return (
    <section className='buttons'>
      <p>LEAD OR LAG</p>
      
      <button onClick={openLeadNotification}
       className={"option-btn lead" + (lead ? 'blue-btn-lead': 'red-btn-lead')}
       >{lead ? 'LEAD' : 'LAG'}</button>
      
      <button onClick={openModeNotification}
       className={"option-btn manual-auto " + (mode ? 'blue-btn-mode' : 'red-btn-mode')}
       >{mode ? 'AUTO' : 'MANUAL'}</button>
      <p>MODE</p>
    </section>
  )
}
export default Buttons;