import React, { useRef, useEffect, useState, ReactElement } from 'react';
import './Tab.css';
import { IProps } from './types';

export default function Tab(props: IProps): ReactElement {

  const [selectedTab, setSelectedTab] = useState(0);
  const { titles, content} = props;

  return (
    <div className="tab-wrapper">
      <div className='tab-content'>
        {content[selectedTab]}
      </div>
      <div className='tab-control'>
        {titles.map((t, pos) => 
          <div key={pos} className={pos === selectedTab ? 'selected tab-title' :'tab-title'} onClick={()=>setSelectedTab(pos)}>{t}</div>)
        }
      </div>
    </div>
  );
}