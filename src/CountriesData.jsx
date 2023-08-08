import React, {useState, useEffect} from 'react';
import data from "./countriesAll";


const CountriesData = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [selectMenu, setSelectMenu] = useState("");
  const [selectedCountry, setSelectedCountry] = useState([]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }

  const handleSelect = (e) => {
    setSelectMenu(e.target.value);
  }

  useEffect(() => {
     const filtered = data.filter((country) => (
  country.name.toLowerCase().includes(searchTerm.toLowerCase())
     ));
     setFilteredList(filtered);
  }, [searchTerm])

  const handleItemClick= (country) => {
    
   setSelectedCountry(country); }
   
  return (
      <div className='App'>
      <div className='header'>
      <h1>Where in the world</h1>
      <div className='i-mode'>
      <i className='fa fa-moon-o'></i>
      <span className='dark-mode'>Dark Mode</span>
      </div>
      </div>
      <div className='header'>
      <input className='input'
          type="search"
          placeholder='Search for a country...'
          onChange={handleSearch}
          value={searchTerm}/>
      <select className='select' 
        onChange={handleSelect}
        value={selectMenu}>
        <option value="">Filter by regin</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        </select>
      
      </div>
    
      <div className='cart-container'>
      
        {selectedCountry ? (
          
        <div className='country-details'>
           
        <button onClick={() => setSelectedCountry(null)}>Go Back</button>
        <h2>{selectedCountry.name}</h2>
        <p><span>Population:</span> {selectedCountry.population}</p>
        <p><span>Region:</span> {selectedCountry.region}</p>
        <p><span>Capital:</span> {selectedCountry.capital}</p>
        <p><span>CallingCodes:</span> {selectedCountry.callingCodes}</p>
        <p><span>Area:</span> {selectedCountry.area}</p>
        <p><span>Borders:</span> {selectedCountry.borders}</p>
        <p><span>Currencies:</span> {selectedCountry.currencies}</p>
        <p><span>Languages:</span> {selectedCountry.languages}</p> 
        </div>
        ):(
          <> 
        
       {filteredList.map((country, index) =>(
        <div key={index} className='country-card' onClick={() => handleItemClick(country)} > 
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
      )) 
        } 
        </> 
      )}
    </div>

    </div>
  )
}

export default CountriesData

