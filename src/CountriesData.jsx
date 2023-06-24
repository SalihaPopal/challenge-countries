import React from 'react';
import data from "./countriesAll";


const CountriesData = () => {
  return (
    <div>
      <div className='header'>
      <h1>Where in the world</h1>
      <div className='i-mode'>
      <i className='fa fa-moon-o'></i>
      <span className='dark-mode'>Dark Mode</span>
      </div>
      </div>
      <div className='cart-container'>
        
      {data.map((country, index) =>(
        <div key={index} className='country-card'> 
          <img
            src={`https://flagcdn.com/${country.alpha2Code.toLowerCase()}.svg`}
            alt={`${country.name} Flag`}
            className="country-flag"
          />
        <h2>{country.name}</h2>
        <p><span>Population:</span> {country.population}</p>
        <p><span>Region:</span> {country.region}</p>
        <p><span>Capital:</span> {country.capital}</p>
        </div> 
      ))}
    </div>
    </div>
 
  )
}

export default CountriesData
