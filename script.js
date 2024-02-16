'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// ///////////////////////////////////////

// // const getCountryData = function (data, className = '') {
// //   const request = new XMLHttpRequest();
// //   request.open('GET', `https://restcountries.com/v3.1/name/${data}`);
// //   request.send();

// //   request.addEventListener('load', function () {
// //     const [data] = JSON.parse(this.responseText);
// //     console.log(data);

// //     const name = data.name.common;
// //     const flag = data.flags.svg;
// //     const region = data.region;
// //     const language = Object.values(data.languages)[0];
// //     const currency = Object.values(data.currencies)[0].name;
// //     const symbol = Object.values(data.currencies)[0].symbol;

// //     const html = `
// //     <article class="country ${className}">
// //     <img class="country__img" src="${flag}" alt=${data.flags.alt}/>
// //     <div class="country__data">
// //       <h3 class="country__name">${name}</h3>
// //       <h4 class="country__region">${region}</h4>
// //       <p class="country__row"><span>👫</span>${(
// //         +data.population / 1000000
// //       ).toFixed(1)} people</p>
// //       <p class="country__row"><span>🗣️</span>${language}</p>
// //       <p class="country__row"><span>💰</span>${currency} ${symbol}</p>
// //     </div>
// //   </article>
// // `;

// //     countriesContainer.insertAdjacentHTML('beforeend', html);
// //     countriesContainer.style.opacity = 1;
// //   });
// // };

// const renderCountry = function (data) {
//   // const name = data.name.common;
//   const className = data.country;
//   const name = data.city;
//   // const flag = data.flags.svg;
//   const region = data.region;
//   // const language = Object.values(data.languages)[0];
//   // const currency = Object.values(data.currencies)[0].name;
//   // const symbol = Object.values(data.currencies)[0].symbol;

//   const html = `
//     <article class="country ${className}">
//     <img class="country__img" src="${flag}" alt=${data.flags.alt}/>
//     <div class="country__data">
//       <h3 class="country__name">${name}</h3>
//       <h4 class="country__region">${region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         +data.population / 1000000
//       ).toFixed(1)} people</p>
//       <p class="country__row"><span>🗣️</span>${language}</p>
//       <p class="country__row"><span>💰</span>${currency} ${symbol}</p>
//     </div>
//   </article>
// `;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

const renderCountry = function (data) {
  const className = data.country;
  const name = data.city;
  const flag = data.postcode;
  const region = data.principalSubdivision;
  const language = data.continent;
  const currency = data.countryCode;
  const symbol = data.localityInfo.administrative[2].name;

  const html = `
    <article class="country ${className}">
    <div class="country__data">
      <h3 class="country__name">${name}</h3>
      <h4 class="country__region">${region}</h4>
      <p class="country__row"><span>👫</span>${(+flag / 1000000).toFixed(
        1
      )} people</p>
      <p class="country__row"><span>🗣️</span>${language}</p>
      <p class="country__row"><span>💰</span>${currency} ${symbol}</p>
    </div>
  </article>
`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// // const getCountryAndNeighbour = function (data) {
// //   // Ajax call country 1
// //   const request = new XMLHttpRequest();
// //   request.open('GET', `https://restcountries.com/v3.1/name/${data}`);
// //   request.send();

// //   request.addEventListener('load', function () {
// //     const [data] = JSON.parse(this.responseText);
// //     console.log(data);

// //     //  render country #1
// //     renderCountry(data);

// //     // get neighbour country
// //     const neighbour = data.borders?.[0];

// //     // Ajax call #2
// //     const request2 = new XMLHttpRequest();
// //     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
// //     request2.send();

// //     request2.addEventListener('load', function () {
// //       const [data2] = JSON.parse(this.responseText);
// //       console.log(data2);
// //       renderCountry(data2, 'neighbour');
// //     });
// //   });
// // };

// // // getCountryAndNeighbour('portugal');
// // getCountryAndNeighbour('usa');
// // // getCountryData('usa');
// // // getCountryData('france');
// // // getCountryData('germany');

// // ==================================================
// // ================CONSUMING PROMISES================
// // ==================================================

// // // using function
// // const getCountryData = function (data) {
// //   fetch(`https://restcountries.com/v3.1/name/${data}`)
// //     .then(function (response) {
// //       console.log(response);
// //       return response.json();
// //     })
// //     .then(function (data) {
// //       console.log(data);
// //       renderCountry(data[0]);
// //     });
// // };

// // ==================================================
// // ================CHAINING PROMISES================
// // ==================================================

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

//     return response.json();
//   });
// };

// // // using arrow function
// const getCountryData = function (data) {
//   // country 1
//   // fetch(`https://restcountries.com/v3.1/name/${data}`)
//   //   .then(response => {
//   //     console.log(response);

//   //     if (!response.ok) {
//   //       throw new Error(`Country not found (${response.status})`);
//   //     }

//   //     return response.json();
//   //   })
//   getJSON(`https://restcountries.com/v3.1/name/${data}`, 'Country not found')
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];

//       if (!neighbour) throw new Error('No neighbour found!');

//       // country 2
//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })

//     .then(data => {
//       [data] = data;
//       renderCountry(data, 'neighbour');
//     })
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// // getCountryData('portugal');

// // ==================================================
// // ===========HANDLIKNG REJECTED PROMISES============
// // ==================================================
// btn.addEventListener('click', function () {
//   getCountryData('usa');
// });

// // getCountryData('australia');

// // ==================================================
// // ===================CHALLENGE #1===================
// // ==================================================
// // Coding Challenge #1
// // In this challenge you will build a function 'whereAmI' which renders a country only based on GPS coordinates. For that, you will use a second API to geocode coordinates. So in this challenge, you’ll use an API on your own for the first time 😁
// // Your tasks:
// // PART 1
// // 1. Create a function 'whereAmI' which takes as inputs a latitude value ('lat') and a longitude value ('lng') (these are GPS coordinates, examples are in test data below).
// // 2. Do “reversegeocoding” of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api. The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do not use the 'getJSON' function we created, that is cheating 😉
// // 3. Once you have the data,take a look at it in the console to see all the attributes that you received about the provided location. Then, using this data, log a message like this to the console: “You are in Berlin, Germany”
// // 4. Chain a .catch method to the end of the promise chain and log errors to the console
// // 5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does not reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message
// // PART 2
// // 6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
// // 7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

// // Test data:
// // - Coordinates 1: 52.508, 13.381 (Latitude, Longitude) § Coordinates 2: 19.037, 72.873
// // - Coordinates 3: -33.933, 18.474
// // GOOD LUCK 😀

// // =============================================================================

// // const cityAndCountryName = function (data) {
// //   const city = data.city;
// //   const country = data.countryName;
// //   console.log(`You are in ${city}, ${country}.`);
// // };

// // const whereAmI = function (lat, lng) {
// //   fetch(
// //     `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
// //   )
// //     .then(response => {
// //       if (!response.ok)
// //         throw new Error(`There was a problem: ${response.status}`);
// //       return response.json();
// //     })
// //     .then(data => cityAndCountryName(data))
// //     .catch(err => console.error(`Oh no! ${err.message}`));
// // };
// // whereAmI(52.508, 13.381);
// // whereAmI(19.037, 72.873);
// // whereAmI(-33.933, 18.474);

// // ==================================================
// // ============THE EVENT LOOP IN PRACTICE============
// // ==================================================

// // ??? What order do they run in?

// // console.log('Test start'); // 1
// // setTimeout(() => console.log('0 sec timer'), 0); // 4
// // Promise.resolve('Resolved promise 1').then(res => console.log(res)); // 3
// // console.log('Test end'); // 2

// // 1 - top level code, outside of the calback will run first
// // 2 - this is the second line that is outside of the callback so its 2nd
// // 3 - the promise has priority because of the microtask queque (the microtask has to resolve before the other callback (the timer))
// // 4 - then finally the timer runs

// // ==================================================
// // ============BUILDING A SIMPLE PROMISE=============
// // ==================================================

// // const lotteryPromise = new Promise(function (resolve, reject) {
// //   console.log('The lottery draw is happening ⏳');
// //   setTimeout(function () {
// //     if (Math.random() >= 0.5) {
// //       resolve('You WIN!!!! 🥇');
// //     } else {
// //       reject(new Error('You lost your money! 😥'));
// //     }
// //   }, 3000);
// // });

// // lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// // // Promisifying setTimeout
// // const wait = function (seconds) {
// //   return new Promise(function (resolve) {
// //     setTimeout(resolve, seconds * 1000);
// //   });
// // };

// // wait(2)
// //   .then(() => {
// //     console.log('I waited for 2 seconds');
// //     return wait(1);
// //   })
// //   .then(() => console.log('I waited for 1 second'));

// // Promise.resolve('abc').then(x => console.log(x));
// // Promise.reject(new Error('PROBLEM:')).catch(x => console.log(x));

// // ==================================================
// // ========PROMISIFYING THE GEOLOCATION API==========
// // ==================================================

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => res(position),
//     //   err => rej(err)
//     // );

//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition().then(pos => console.log(pos));

// const cityAndCountryName = function (data) {
//   const city = data.city;
//   const country = data.countryName;
//   console.log(`You are in ${city}, ${country}.`);
// };

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;

//       return fetch(
//         `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
//       );
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`There was a problem: ${response.status}`);
//       return response.json();
//     })
//     .then(data => cityAndCountryName(data))
//     .catch(err => console.error(`Oh no! ${err.message}`));
// };

// btn.addEventListener('click', whereAmI);

// // ==================================================
// // ===================CHALLENGE #2===================
// // ==================================================
// Your tasks:
// Tasks are not super-descriptive this time, so that you can figure out some stuff by yourself. Pretend you're working on your own 😉
// PART 1
// 1. Create a function 'createImage' which receives 'imgPath' as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path
// 2. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image (listen for the'error' event), reject the promise
// 3. If this part is too tricky for you, just watch the first part of the solution
// PART 2
// 4. Consume the promise using .then and also add an error handler
// 5. After the image has loaded, pause execution for 2 seconds using the 'wait'
// function we created earlier
// 6. After the 2 seconds have passed, hide the current image (set display CSS
// property to 'none'), and load a second image (Hint: Use the image element returned by the 'createImage' promise to hide the current image. You will need a global variable for that 😉)
// 7. After the second image has loaded, pause execution for 2 seconds again
// 8. After the 2 seconds have passed, hide the current image
// Test data: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to “Fast 3G” in the dev tools Network tab, otherwise images load too fast
// GOOD LUCK 😀

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const imgContainer = document.querySelector('.images');

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load', function () {
//       imgContainer.append(img);
//       resolve(img);
//     });

//     img.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };

// // My terrible but custom error display
// const ohNoError = function () {
//   const theButton = document.querySelector('.btn-country');
//   const newElement = document.createElement('h2');
//   const newContent = document.createTextNode(
//     'I am so so sorry... your image path is not correct. 😢'
//   );

//   newElement.setAttribute(
//     'style',
//     'color: blue; background-color: yellow; margin: 12px; padding: 12px; font-size: 84px; text-align: center'
//   );

//   newElement.appendChild(newContent);
//   document.body.append(newElement);
//   theButton.style.display = 'none';
// };

// let currentImg;
// // createImage().then(img => (img = 'img/img-1.jpg'));
// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-3.jpd');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 3 loaded');
//     return wait(2);
//   })
//   .then(() => (currentImg.style.display = 'none'))
//   .catch(err => console.error(err, ohNoError()));
// // .catch(err => ohNoError());

// ==================================================
// ===================ASYNC/AWAIT====================
// ==================================================

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = async function () {
//   try {
//     const pos = await getPosition();

//     const { latitude: lat, longitude: lng } = pos.coords;

//     const resGeo = await fetch(
//       `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
//     );
//     if (!resGeo.ok)
//       throw new Error(
//         'What the hell! something is wrong with the location data. 💩'
//       );
//     const dataGeo = await resGeo.json();

//     const res = await fetch(
//       `https://api.bigdatacloud.net/data/reverse-geocode-client?${dataGeo.country}`
//     );
//     if (!res.ok)
//       throw new Error(
//         'What the hell! something is wrong with the country data. 💩'
//       );
//     // console.log(res);
//     const data = await res.json();
//     console.log(data);
//     renderCountry(data);

//     return `You are in ${dataGeo.city}, ${dataGeo.principalSubdivision}`;
//   } catch (err) {
//     console.error(`${err} 💥`);
//     renderError(`${err.message}`);
//   }
// };

// whereAmI(52.508, 13.381);
// console.log('1: Will get location');
// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err.message}`))
//   .finally(() => console.log('3: finished getting location'));

// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(`2: ${city}`);
//   } catch (err) {
//     console.error(`2: ${err.message}`);
//   }
//   console.log('3: finished getting location');
// })();

// ==================================================
// ===================TRY/CATCH======================
// ==================================================

// try {
//   let y = 1;
//   const x = 2;
//   y = 3;
// } catch (err) {
//   alert(err.message);
// }

// ==================================================
// =========RUNNING PROMISES IN PARALLEL=============
// ==================================================

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

//     return response.json();
//   });
// };

// const get3Countries = async function (c1, c2, c3) {
//   try {
// const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
// const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
// const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);

// console.log([data1.capital, data2.capital, data3.capital]);

//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v2/name/${c1}`),
//       getJSON(`https://restcountries.com/v2/name/${c2}`),
//       getJSON(`https://restcountries.com/v2/name/${c3}`),
//     ]);

//     console.log(data.map(d => d[0].capital));
//   } catch (err) {
//     console.error(err);
//   }
// };

// get3Countries('portugal', 'canada', 'tanzania');

// ==================================================
// ===========OTHER PROMISE COMBINATORS==============
// ==================================================

// // Promise.race
// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.com/v2/name/italy`),
//     getJSON(`https://restcountries.com/v2/name/egypt`),
//     getJSON(`https://restcountries.com/v2/name/mexico`),
//   ]);
//   console.log(res[0]);
// })();

// const timeout = function (seconds) {
//   return new Promise(function (response, reject) {
//     setTimeout(function () {
//       reject(new Error('Request took to long!'));
//     }, seconds * 1000);
//   });
// };

// Promise.race([
//   getJSON(`https://restcountries.com/v2/name/mexico`),
//   timeout(0.1),
// ])
//   .then(res => console.log(res[0]))
//   .catch(err => console.error(err));

// // Promise.allSettled
// Promise.allSettled([
//   Promise.resolve('Success'),
//   Promise.reject('Error'),
//   Promise.resolve('Another success!'),
// ]).then(res => console.log(res));

// // Promise.any
// Promise.any([
//   // Promise.resolve('Success'),
//   Promise.reject('Error'),
//   Promise.resolve('Another success!'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// // ==================================================
// // ===================CHALLENGE #3===================
// // ==================================================
// Your tasks:
// PART 1
// 1. Write an async function 'loadNPause' that recreates Challenge #2, this time using async/await (only the part where the promise is consumed, reuse the 'createImage' function from before)
// 2. Compare the two versions, think about the big differences, and see which one you like more
// 3. Don't forget to test the error handler, and to set the network speed to “Fast3G” in the dev tools Network tab
// PART 2
// 1. Create an async function 'loadAll' that receives an array of imagepaths 'imgArr'
// 2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
// 3. Check out the 'imgs' array in the console! Is it like you expected?
// 4. Use a promise combinator function toa ctually get the images from the array 😉
// 5. Add the 'parallel' class to all the images (it has some CSS styles)
// Test data Part 2: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img- 3.jpg']. To test, turn off the 'loadNPause' function

// GOOD LUCK 😀

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

// My terrible but custom error display
const ohNoError = function () {
  const theButton = document.querySelector('.btn-country');
  const newElement = document.createElement('h2');
  const newContent = document.createTextNode(
    'I am so so sorry... your image path is not correct. 😢'
  );
  newElement.setAttribute(
    'style',
    'color: blue; background-color: yellow; margin: 12px; padding: 12px; font-size: 84px; text-align: center'
  );
  newElement.appendChild(newContent);
  document.body.append(newElement);
  theButton.style.display = 'none';
};

const loadNPause = async function () {
  try {
    let img = await createImage('img/img-1.jpg');
    console.log('Image 1 loaded.');
    await wait(2);
    img.style.display = 'none';

    // load image 2
    img = await createImage('img/img-2.jpg');
    console.log('Image 2 loaded.');
    await wait(2);
    img.style.display = 'none';

    // load image 3
    img = await createImage('img/immg-3.jpg');
    console.log('Image 3 loaded.');
    await wait(2);
    img.style.display = 'none';
  } catch (err) {
    console.error(`${err} 💥`, ohNoError());
  }
};

loadNPause();
