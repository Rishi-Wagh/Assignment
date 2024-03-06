import React from 'react'
import './leftNavbar.style.css';
import LoginIcon from '@mui/icons-material/Login';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const navElements = [
  {
    p: 'Events',
    c : ['New Requests' , 'Estimates' , 'Events' , 'Partial Requests']
  },
  {
    p: 'Positions'
  },
  {
    p: 'Contractors'
  },
  {
    p: 'Users',
    c : ['Admins' , 'Clients' , 'Coordinators']
  },
  {
    p: 'Profile'
  }
]

const LeftNavbar = () => {
   const navigate = useNavigate();
   const [selectedP , setSelectedP] = useState(null);
   const [selectedC , setSelectedC] = useState(null);

   const handleDropDown = (i)  => {
     if(selectedP == i){
      return setSelectedP(null);
     }

     return setSelectedP(i);
   }

   const handleDropDownC = (j)  => {
    if(selectedC == j){
     return setSelectedC(null) , navigate('/');
    }

    return setSelectedC(j) , navigate('/page-one');
  }

  return (
    <div className='left-nav'>
      <div className="drop-tab">
           {
            navElements.map((obj , i) => (
              <div className="drop-titles" key={i}>
                 <div 
                  className={selectedP == i ? "title-p-active" : "title-p"}
                  onClick={()=> handleDropDown(i)}>
                    <span>{obj.p}</span>
                   {obj.c && <span>{selectedP == i ? <ExpandMoreIcon /> : <ExpandLessIcon />}</span>}
                   </div>
                 {selectedP == i && <div className="title-c-box">
                   {obj.c && obj.c.map((child , j) => (
                     <div 
                      className={selectedC == j ? "title-c-active" : 'title-c'} 
                      key={j}
                      onClick={()=>handleDropDownC(j)}
                      >{child}</div>
                   ))}
                 </div>}
              </div>
            ))
           }
      </div>
      
      <div className="log-button">
          <LoginIcon />
          <span style={{marginLeft: '5px'}}> Logout</span> 
      </div>
    </div>
  )
}

export default LeftNavbar