import React from 'react'
import './header.style.css';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';


const Header = () => {
  return (
    <div className='top-header'>
      <div className='info'>i</div>
      <NotificationsNoneOutlinedIcon />
      <div className='display-name'>Hi, <span></span> welcome back!</div>
      <div className='display-pic'></div>
    </div>
  )
}

export default Header