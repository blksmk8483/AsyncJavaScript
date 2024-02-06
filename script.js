'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const getCountryData = function (data, className = '') {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${data}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const name = data.name.common;
    const flag = data.flags.svg;
    const region = data.region;
    const language = Object.values(data.languages)[0];
    const currency = Object.values(data.currencies)[0].name;
    const symbol = Object.values(data.currencies)[0].symbol;

    const html = `    
    <article class="country ${className}">
    <img class="country__img" src="${flag}" alt=${data.flags.alt}/>
    <div class="country__data">
      <h3 class="country__name">${name}</h3>
      <h4 class="country__region">${region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${language}</p>
      <p class="country__row"><span>💰</span>${currency} ${symbol}</p>
    </div>
  </article>
`;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('portugal');
getCountryData('usa');
getCountryData('france');
getCountryData('germany');
