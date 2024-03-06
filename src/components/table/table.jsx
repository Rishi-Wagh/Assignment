import './table.style.css';
import React from 'react'
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';

const tableData = [
    {'Event Name': 'Filled Name ' , 'Event Start': '12 Jan , 2024' , 'Event End': '14 Jan , 2024' , 'Client Name': 'Muhammed Asad' , 'Contact Info': '0123456789' , 'Venue': 'Delhi'},
    {'Event Name': 'Filled Name ' , 'Event Start': '12 Jan , 2024' , 'Event End': '14 Jan , 2024' , 'Client Name': 'Muhammed Asad' , 'Contact Info': '0123456789' , 'Venue': 'Delhi'},
    {'Event Name': 'Filled Name ' , 'Event Start': '12 Jan , 2024' , 'Event End': '14 Jan , 2024' , 'Client Name': 'Muhammed Asad' , 'Contact Info': '0123456789' , 'Venue': 'Delhi'},
    {'Event Name': 'Filled Name ' , 'Event Start': '12 Jan , 2024' , 'Event End': '14 Jan , 2024' , 'Client Name': 'Muhammed Asad' , 'Contact Info': '0123456789' , 'Venue': 'Delhi'},
    {'Event Name': 'Filled Name ' , 'Event Start': '12 Jan , 2024' , 'Event End': '14 Jan , 2024' , 'Client Name': 'Muhammed Asad' , 'Contact Info': '0123456789' , 'Venue': 'Delhi'},
    {'Event Name': 'Filled Name ' , 'Event Start': '12 Jan , 2024' , 'Event End': '14 Jan , 2024' , 'Client Name': 'Muhammed Asad' , 'Contact Info': '0123456789' , 'Venue': 'Delhi'},
    {'Event Name': 'Filled Name ' , 'Event Start': '12 Jan , 2024' , 'Event End': '14 Jan , 2024' , 'Client Name': 'Muhammed Asad' , 'Contact Info': '0123456789' , 'Venue': 'Delhi'},
    {'Event Name': 'Filled Name ' , 'Event Start': '12 Jan , 2024' , 'Event End': '14 Jan , 2024' , 'Client Name': 'Muhammed Asad' , 'Contact Info': '0123456789' , 'Venue': 'Delhi'},
    {'Event Name': 'Filled Name ' , 'Event Start': '12 Jan , 2024' , 'Event End': '14 Jan , 2024' , 'Client Name': 'Muhammed Asad' , 'Contact Info': '0123456789' , 'Venue': 'Delhi'},
    {'Event Name': 'Filled Name ' , 'Event Start': '12 Jan , 2024' , 'Event End': '14 Jan , 2024' , 'Client Name': 'Muhammed Asad' , 'Contact Info': '0123456789' , 'Venue': 'Delhi'},
    {'Event Name': 'Filled Name ' , 'Event Start': '12 Jan , 2024' , 'Event End': '14 Jan , 2024' , 'Client Name': 'Muhammed Asad' , 'Contact Info': '0123456789' , 'Venue': 'Delhi'},
    {'Event Name': 'Filled Name ' , 'Event Start': '12 Jan , 2024' , 'Event End': '14 Jan , 2024' , 'Client Name': 'Muhammed Asad' , 'Contact Info': '0123456789' , 'Venue': 'Delhi'},
    {'Event Name': 'Filled Name ' , 'Event Start': '12 Jan , 2024' , 'Event End': '14 Jan , 2024' , 'Client Name': 'Muhammed Asad' , 'Contact Info': '0123456789' , 'Venue': 'Delhi'},
    {'Event Name': 'Filled Name ' , 'Event Start': '12 Jan , 2024' , 'Event End': '14 Jan , 2024' , 'Client Name': 'Muhammed Asad' , 'Contact Info': '0123456789' , 'Venue': 'Delhi'},
    {'Event Name': 'Filled Name ' , 'Event Start': '12 Jan , 2024' , 'Event End': '14 Jan , 2024' , 'Client Name': 'Muhammed Asad' , 'Contact Info': '0123456789' , 'Venue': 'Delhi'},
    {'Event Name': 'Filled Name ' , 'Event Start': '12 Jan , 2024' , 'Event End': '14 Jan , 2024' , 'Client Name': 'Muhammed Asad' , 'Contact Info': '0123456789' , 'Venue': 'Delhi'},
    {'Event Name': 'Filled Name ' , 'Event Start': '12 Jan , 2024' , 'Event End': '14 Jan , 2024' , 'Client Name': 'Muhammed Asad' , 'Contact Info': '0123456789' , 'Venue': 'Delhi'},
]

const config = [
    {lable: 'Event Name'}, {lable: 'Event Start'} , {lable: 'Event End'} ,{lable: 'Client Name'} , {lable: 'Contact Info'} , {lable: 'Venue'}
]
const table = () => {

    const headers = config.map((col , i) => {
        return(
            <div>{col.lable}</div>
        )
    })

    const rowData = tableData.map((data , i)=>{
        return(
            <div className='data-row'>
                <div>{data['Event Name']}</div>
                <div>{data['Event Start']}</div>
                <div>{data['Event End']}</div>
                <div>{data['Client Name']}</div>
                <div>{data['Contact Info']}</div>
                <div>{data['Venue']}</div>
            </div>
        )
    })

  return (
    <div>
        <div className="header">
           {headers}
        </div>
       <div className='data-list'>
           {rowData}
        </div>
        <div className="t-scroll">
        </div>
        <div className="pagenation">
            <WestIcon />
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <EastIcon />
        </div>
    </div>
  )

}

export default table


