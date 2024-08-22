// import React, { useContext, useState } from 'react';
// import { AppContext } from '../context/AppContext';

// const Currency = () => {
//     const { currency } = useContext(AppContext);
//     const [newCurrency, setNewCurrency] = useState(currency);
//     const handleCurrencyChange = (event) => {
//         setNewCurrency(event.target.value);
//     }
//     return (
//         <div className='dropdown'>
//             <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                 Currency (£ Pound)
//             </button>
//             <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
//                 <li><a className="dropdown-item" href="#" value={newCurrency} onClick={handleCurrencyChange}>$ Dollar</a></li>
//                 <li><a className="dropdown-item" href="#" onClick={handleCurrencyChange}>£ Pound</a></li>
//                 <li><a className="dropdown-item" href="#" onClick={handleCurrencyChange}>€ Euro </a></li>
//                 <li><a className="dropdown-item" href="#" onClick={handleCurrencyChange}>₹ Rupee</a></li>
//             </ul>
//         {/* <span>Budget: £</span>
//         <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input> */}
//         </div>
//     );
// };
// export default Currency;

import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { currency } = useContext(AppContext);
  const [selectedCurrency, setSelectedCurrency] = useState(currency);

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  return (
    <div className='dropdown'>
      <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Currency ({selectedCurrency})
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><button className="dropdown-item" value="$ Dollar" onClick={handleCurrencyChange}>$ Dollar</button></li>
        <li><button className="dropdown-item" value="£ Pound" onClick={handleCurrencyChange}>£ Pound</button></li>
        <li><button className="anchor-like-button" value="€ Euro" onClick={handleCurrencyChange}>€ Euro</button></li>
        <li><button className="dropdown-item" value="₹ Rupee" onClick={handleCurrencyChange}>₹ Rupee</button></li>
      </ul>
    </div>
  );
};

export default Currency;


