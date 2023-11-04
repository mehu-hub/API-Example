function loadCountry() {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountry(data))
}

const displayCountry = countries => {
    const countryContainer = document.getElementById('all-countrys');


    countries.forEach(country => {
        console.log(country)
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
         <h1>Name: ${country.name.common}</h1> 
         <p>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</p>
        `; 
        countryContainer.appendChild(countryDiv);
    })

}

loadCountry()