import React from 'react';
import './StatusBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWifi } from '@fortawesome/free-solid-svg-icons'

function StatusBar() {

  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}`;

  return (
    <div className="status-bar">
      <div className="left-hand-column">
        <div className="network">Telia</div>
        <FontAwesomeIcon icon={faWifi} className="wifi-icon" />
        <div className="signal">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </div>
      <div className="right-hand-column">
        <div className="battery">
          <div className='battery-body'></div>
          <div className="battery-tip"></div>
        </div>
        <div className="time">{timeString}</div>
      </div>
    </div>

  );
}

export default StatusBar;

