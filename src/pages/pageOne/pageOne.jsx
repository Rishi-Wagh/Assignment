import React from 'react'
import './pageOne.style.css';
import PageOneHead from '../../components/pageOne components/PageOneHead';
import PageOneBody from '../../components/pageOne components/pageOneBody';

const PageOne = () => {
  return (
    <div className='page-one'>
       <PageOneHead />
       <PageOneBody />
    </div>
  )
}

export default PageOne