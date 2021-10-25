import React, { useEffect, useState } from 'react';
import Dropdown from './Dropdown';
import SingleCard from './Cards';
import data from './data';

function App() {
  const [selectedOption, setCount] = useState('INR');
  const [exchangeRate, setExchangeRate] = useState(-1);

  useEffect(() => {
    async function fetchData() {
      try {
        //Calling API for latest exchange rates

        const URL = "https://v6.exchangerate-api.com/v6/";   //Base URL
        const API_KEY = "724ccca2480b4a1830337177";
        const response = await fetch(`${URL}${API_KEY}/latest/USD`)
        const json = await response.json();
        setExchangeRate(json.conversion_rates?.INR || 1)

      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData()


  }, [])

  if (exchangeRate === -1)
    return null;

  return (
    <>
      <h1>Product List</h1>
      <Dropdown selectedOption={selectedOption} changeName={e => {
        setCount(e.label);
        // console.log(e)
      }} />
      {data.map(function displayItems(val) {
        return (
          <SingleCard
            title={val.title}
            img={val.img}
            price={selectedOption === 'INR' ? `${val.price} Rs` : `$ ${(val.price / exchangeRate).toFixed(2)}`}
          />
        );
      })}
    </>
  )
}

export default App;