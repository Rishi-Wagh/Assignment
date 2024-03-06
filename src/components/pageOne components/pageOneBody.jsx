import React from 'react';
import './pageOneBody.style.css';
import GradeIcon from '@mui/icons-material/Grade';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import CircleIcon from '@mui/icons-material/Circle';

const data = [
    {Position: 'camera1(video)' , Time: '9am - 7pm' , Info: 'LP default' , quantity: '20' },
    {Position: 'camera1(video)' , Time: '9am - 7pm' , Info: 'LP default' , quantity: '20' },
    {Position: 'camera1(video)' , Time: '9am - 7pm' , Info: 'LP default' , quantity: '20' },
    {Position: 'camera1(video)' , Time: '9am - 7pm' , Info: 'LP default' , quantity: '20' },
    {Position: 'camera1(video)' , Time: '9am - 7pm' , Info: 'LP default' , quantity: '20' },
]


const dataTitle = [
 {label: 'Position'} , {label: 'Time'} , {label: 'Info'} , {label: 'Quantity'}
]

const PageOneBody = () => {

    const tabs = () =>{
        let arr = [];
        for(let i=0; i<4; i++){
            arr.push(                
               <div className='tab'>
                    <div className='tab-top'>
                    <div className="room">
                        Meeting Room 1</div>
                       <GradeIcon className='star'/>
                      <div className="position">12 Positions</div>
                    </div>
                    <div className="tab-bottom">
                      <div className="date">start:from 12 jan 2024 - Ends:15 Jan 2024</div>
                    </div>
                </div>
            )
        }
        return arr;
    }

      const displayDataTitle = dataTitle.map((data , i) =>{
         return(
            <div className='displayTitle' key={i}>{data.label}</div>
         )
      })
     
      const displayDataFields = data.map((data , i) =>{
        return(
            <div key={i} className='field'>
                <div>{data.Position}</div>
                <div>{data.Time}</div>
                <div>{data.Info}</div>
                <div >
                    {data.quantity} 
                  <select>
                    <option>Contractor 1</option>
                    <option>Contractor 1</option>
                  </select>
                </div>
            </div>
        )
      })
  return (
    <div className='pageBody-conatiner'>
        <div className="body-title">
            Assign Coordinator
        </div>
        <div className="components-container">
            <div className="left-component">
                {tabs()}    
            </div>
            <div className="right-component">
               <span>position</span> 
               <div className="comp-table">
                 <div className="comp-title">
                  {displayDataTitle}
                 </div>
                 <div className="comp-field">
                  {displayDataFields}
                 </div>
                <div className="nav-page">
                 <WestIcon />  
                 <CircleIcon className='circle'/>
                 <CircleIcon className='circle'/>
                <EastIcon />
                </div>
               </div>
            </div>
        </div>
        <div className="save-btn">
            <button>Save Edits</button>
        </div>
    </div>
  )
}

export default PageOneBody