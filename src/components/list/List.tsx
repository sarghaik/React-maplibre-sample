import React, { useRef, useEffect, useState, ReactElement } from 'react';
import './List.css';
import { IProps } from './types';

const NAVIGATE = 'Navigate';
const COMPLETE = 'Complete';

export default function List({data, deliveredSeq, setDeliveredSeq}: IProps): ReactElement {

  return (
    <div className="list-wrapper">
      <div className='list-content'>
        {data.map((item, pos) => (
          <div key={pos}>
            <div className='row'>
              <div className='left'>
                <div className='row-item seq-num'>{item.sequence_number}</div>
                <div className='row-item'>{item.street}</div>
              </div>
              <div className='row-item'>{item.eta}</div>
            </div>
            <div className='row small-cap'>
              <div className='left'>
                <div className='row-item'>{item.zip}</div>
                <div className='row-item'>{item.city}</div>
              </div>
              <div className='row-item'>{item.time_window}</div>
            </div>
            {item.sequence_number === (deliveredSeq + 1) && <div className='left bg-gray'>
              <div className='row-item button' onClick={() => 
                window.open(`https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=${item.lat},${item.lng}`, '_blank')}>
                {NAVIGATE}
              </div>
              <div className='row-item button' onClick={() => setDeliveredSeq(item.sequence_number)}>
                {COMPLETE}
              </div>
            </div>}
          </div>))}
      </div>
    </div>
  );
}