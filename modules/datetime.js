/* eslint-disable import/prefer-default-export */
// import DateTime class and build actualtime variable with actual time
import { DateTime } from './luxon.js';

// select the position where class 'datetime' is located.
const datetimeclass = document.querySelector('.datetime');
// create a p type variable
const datetimep = document.createElement('p');

export const timeDateInterval = setInterval(() => {
  const dt = DateTime.now();
  const actualtime = `${dt.monthLong} ${dt.day}th ${dt.year}, ${dt.hour}:${dt.minute}:${dt.second}`;

  // create a variable containing the date html code
  const datetimehtml = `<p class="datetimetext">${actualtime}</p>`;
  // insert the datetime html code inside the 'p' variable
  datetimep.innerHTML = datetimehtml;
  // insert the html code stored in the 'p' variable into the 'datetime' section
  datetimeclass.appendChild(datetimep);
}, 1000);
