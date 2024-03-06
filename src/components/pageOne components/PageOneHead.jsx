import React from 'react'
import './pageOneHead.style.css';

const PageOneHead = () => {
  return (
    <div className='h-container'>
     <div className="heading">
        Event Name (venue details)
     </div>
     <div className="header-nav">
        <div>Event Details</div>
        <div>Assign Cordinator/Coordinator</div>
        <div>Session Managment</div>
        <div>Generate SOW</div>
     </div>

     <div className="header-fields">

        <div className="header-field-selector">
            <label>Assign Coordinator</label>
            <select name="" id="">
            <option value="Coordinator 1">Search Coordinator</option>
            <option value="Coordinator 2">Coordinator 2</option>
            <option value="Coordinator 3">Coordinator 3</option>
            <option value="Coordinator 4">Coordinator 4</option>
            </select>
            <span style={{color: 'pink'}}>Add new coordinator</span>
        </div>

        <div className="header-field-misc">
            <span>Event Name (Venue Here)</span>
            <div className='field-1'>
                <span>Start 12-12-2024</span>
                <span>Start 15-12-2024</span>
            </div>
            <div className="field-2">
                Venue Address: Some Location 12, Name Here, City, State.
            </div>
        </div>
     </div>

    </div>
  )
}

export default PageOneHead