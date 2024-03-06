import React from 'react';
import './page.style.css';
import SearchIcon from '@mui/icons-material/Search';
import PageOne from '../pageOne/pageOne';
import Table from '../../components/table/table';

const Page = () => {

  const toShow = window.location.pathname;
  console.log('ren'+toShow);

  return (
    <div className='page-container'>
      <div className="page-header">
        <h3>Event Requests</h3>
          <div className="serach-bar-component">
             <div className="search-bar">
              <SearchIcon className='search-icon'/>
              <input type="text" className='input' placeholder='search here...'/>
             </div>
             <div className="search-btn">
              +
             </div>
         </div>
      </div>
      <Table />
    </div>
  )
}

export default Page