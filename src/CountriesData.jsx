import React, {useState, useEffect} from 'react';
import data from "./countriesAll";


const CountriesData = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [selectMenu, setSelectMenu] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }

  const handleSelect = (e) => {
    setSelectMenu(e.target.value);
  }
  
  useEffect(() => {
    const filtered = data.filter((country) => {
      const isMatchingSearchTerm = country.name.toLowerCase().includes(searchTerm.toLowerCase());
      const isMatchingRegion = selectMenu === "" || country.region === selectMenu;
      return isMatchingSearchTerm && isMatchingRegion;
    });
    setFilteredList(filtered);
  }, [searchTerm, selectMenu]);

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
          value={searchTerm}
        />
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

export default CountriesData;

