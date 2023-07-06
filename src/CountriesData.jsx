import React, {useState, useEffect} from 'react';
import data from "./countriesAll";


const CountriesData = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }

  useEffect(() => {
     const filtered = data.filter((country) => (
  country.name.toLowerCase().includes(searchTerm.toLowerCase())
     ));
     setFilteredList(filtered);
  }, [searchTerm])

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
        <input className='input'
          type="search"
          placeholder='Search for a country...'
          onChange={handleSearch}
          value={searchTerm}
        />
        
      {filteredList.map((country, index) =>(
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

