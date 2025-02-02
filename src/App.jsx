import { useEffect, useState } from 'react'
import './App.css';
import HotelCard from './Components/HotelCard'
import * as React from 'react';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/data')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)
        return setData(data)
      })
  }, [])

  return (
    <>
      <nav className='nav-bar'>
        <h1>Booking.com</h1>
      </nav>
      {
        data.map((item, index) => (
          <HotelCard item={item} hotelList={data} hotelId={item.id} key={index} hotelName={item.hotelName}/>
        ))
      }
    </>
  )
}

export default App