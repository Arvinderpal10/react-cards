import React, { useState } from 'react';
import Select from 'react-select';

function Dropdown(props) {
 const { option, changeName } = props;
 const data = [
  {
   value: 1,
   label: "INR"
  },
  {
   value: 2,
   label: "USD"
  }
 ];
 //Setting default value as INR
 const [selectedOption, setSelectedOption] = useState({
  value: 1,
  label: "INR"
 });
 //Changing value on user selection
 function handleChange(e) {
  setSelectedOption(e);
 }

 return (
  <div className="dropdown-wrapper">
   <Select
    value={selectedOption}   //value selected
    options={data}           //Dropdown items from data array
    onChange={e => { handleChange(e); changeName(e) }}
   />
  </div>
 );
}

export default Dropdown;