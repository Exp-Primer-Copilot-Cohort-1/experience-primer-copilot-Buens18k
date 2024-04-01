// Apprentissage complete auto Copilot

// This function calculates the number of days between two dates.
function calculateDayBetweenDates(begin, dates) {
  const beginDate = new Date(begin); // Convert the begin date string to a Date object.
  const endDate = new Date(dates); // Convert the end date string to a Date object.
  const difference = endDate - beginDate; // Calculate the difference in milliseconds between the two dates.
  const days = difference / (1000 * 60 * 60 * 24); // Convert the difference to days.
  return days; // Return the number of days.
}

calculateDayBetweenDates('2021-01-01', '2021-01-10')
console.log('Nombre de jours entre les dates :',calculateDayBetweenDates('1986-07-29', '2024-04-01')) // 9


// find all images without alternate
// and give them a red border
function processImages() {
  const images = document.querySelectorAll('img');
  images.forEach((image) => {
    if (!image.alt) {
      image.style.border = '5px solid red';
    }
  });
}