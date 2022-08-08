import luxon from './luxon.min.js';

const navPages = () => {
  function tConvert(time) {
    // Check correct time format and split into components
    time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
    if (time.length > 1) { // If time format correct
      time = time.slice(1); // Remove full string match value
      time[5] = +time[0] < 12 ? ' am' : ' pm'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(''); // return adjusted time or original string
  }

  const timeDisplay = document.getElementById('date');
  const refreshTime = () => {
    const dateString = luxon.DateTime.now().toLocaleString({ year: 'numeric', month: 'long', day: 'numeric' });
    let timeString = luxon.DateTime.now().toString().slice(11, 19);
    timeString = tConvert(timeString);
    const formattedString = dateString.concat(', ', timeString);
    timeDisplay.textContent = formattedString;
  };
  setInterval(refreshTime, 1000);

  const list = document.querySelector('.list');
  const addNew = document.querySelector('.add-new');
  const contact = document.querySelector('.contact');
  const alist = document.getElementById('list');
  const anew = document.getElementById('add-new');
  const acontact = document.getElementById('contact');

  alist.addEventListener('click', () => {
    list.style.display = 'block';
    addNew.style.display = 'none';
    contact.style.display = 'none';
    alist.style.color = 'darkblue';
    anew.style.color = 'black';
    acontact.style.color = 'black';
  });

  anew.addEventListener('click', () => {
    list.style.display = 'none';
    addNew.style.display = 'block';
    contact.style.display = 'none';
    alist.style.color = 'black';
    anew.style.color = 'darkblue';
    acontact.style.color = 'black';
  });

  acontact.addEventListener('click', () => {
    list.style.display = 'none';
    addNew.style.display = 'none';
    contact.style.display = 'block';
    alist.style.color = 'black';
    anew.style.color = 'black';
    acontact.style.color = 'darkblue';
  });

  list.style.display = 'block';
  addNew.style.display = 'none';
  contact.style.display = 'none';
  alist.style.color = 'darkblue';
  anew.style.color = 'black';
  acontact.style.color = 'black';
};

export default navPages;