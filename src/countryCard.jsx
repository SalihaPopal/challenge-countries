import React from 'react'

function countryCard(props) {
  if (selectedCountry) {
    const countryData = data.find((c) => c.alpha3Code === selectedCountry.alpha3Code);

    return (
      <div className='cart-container'> 
      {selectedCountry ? (
      <div className='country-details'>
        <button onClick={() => setSelectedCountry(null)}>Go Back</button>
        <h2>{countryData.name}</h2>
        <p><span>Population:</span> {countryData.population}</p>
        <p><span>Region:</span> {countryData.region}</p>
        <p><span>Capital:</span> {countryData.capital}</p>
        <p><span>AltSpellings:</span> {countryData.altSpellings}</p>
        <p><span>Alpha2Code:</span> {countryData.alpha2Code}</p>
        <p><span>CallingCodes:</span> {countryData.callingCodes}</p>
        <p><span>Subregion:</span> {countryData.subregion}</p>
        <p><span>Demonym:</span> {countryData.demonym}</p>
        <p><span>Area:</span> {countryData.area}</p>
        <p><span>Timezones:</span> {countryData.timezones}</p>
        <p><span>Borders:</span> {countryData.borders}</p>
        <p><span>NativeName:</span> {countryData.nativeName}</p>
        <p><span>NumericCode:</span> {countryData.numericCode}</p>
        <p><span>Currencies:</span> {countryData.currencies}</p>
        <p><span>Languages:</span> {countryData.languages}</p>
      </div>
    ):(
  <>
}

export default countryCard






































// import React, { useState } from 'react';
// import data from "./countriesAll";

// const CountriesData = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCountry, setSelectedCountry] = useState(null);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleCountryClick = (country) => {
//     setSelectedCountry(country);
//   };

//   const handleBack = () => {
//     setSelectedCountry(null);
//   };

//   const filteredCountries = data.filter((country) => (
//     country.name.toLowerCase().includes(searchTerm.toLowerCase())
//   ));

//   const renderCountryDetails = () => {
//     if (selectedCountry) {
//       const countryData = data.find((c) => c.alpha3Code === selectedCountry.alpha3Code);

//       return (
//         <div className='country'>
//           <span onClick={handleBack}>Back</span>
//           <h2>{countryData.name}</h2>
//           <p><span>Population:</span> {countryData.population}</p>
//           <p><span>Region:</span> {countryData.region}</p>
//           <p><span>Capital:</span> {countryData.capital}</p>
//           <p><span>AltSpellings:</span> {countryData.altSpellings}</p>
//           <p><span>Alpha2Code:</span> {countryData.alpha2Code}</p>
//           <p><span>CallingCodes:</span> {countryData.callingCodes}</p>
//           <p><span>Subregion:</span> {countryData.subregion}</p>
//           <p><span>Demonym:</span> {countryData.demonym}</p>
//           <p><span>Area:</span> {countryData.area}</p>
//           <p><span>Timezones:</span> {countryData.timezones}</p>
//           <p><span>Borders:</span> {countryData.borders}</p>
//           <p><span>NativeName:</span> {countryData.nativeName}</p>
//           <p><span>NumericCode:</span> {countryData.numericCode}</p>
//           <p><span>Currencies:</span> {countryData.currencies}</p>
//           <p><span>Languages:</span> {countryData.languages}</p>
//         </div>
//       );
//     }
//   };

//   return (
//     <div>
//       <div className='header'>
//         <h1>Where in the world</h1>
//         <div className='i-mode'>
//           <i className='fa fa-moon-o'></i>
//           <span className='dark-mode'>Dark Mode</span>
//         </div>
//       </div>
//       <div className='cart-container'>
//         <input className='input'
//           type="search"
//           placeholder='Search for a country...'
//           onChange={handleSearch}
//           value={searchTerm}
//         />
//         {renderCountryDetails()}
//         {!selectedCountry && filteredCountries.map((country) => (
//           <div key={country.alpha3Code} className='country-card' onClick={() => handleCountryClick(country)}>
//             <img
//               src={`https://flagcdn.com/${country.alpha2Code.toLowerCase()}.svg`}
//               alt={`${country.name} Flag`}
//               className="country-flag"
//             />
//             <h2>{country.name}</h2>
//             <p><span>Population:</span> {country.population}</p>
//             <p><span>Region:</span> {country.region}</p>
//             <p><span>Capital:</span> {country.capital}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CountriesData;

