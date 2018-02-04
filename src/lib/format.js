
function dateToString(dateObject) {

  const year = dateObject.getFullYear().toString();
  const month = (dateObject.getMonth()+1).toString().padStart(2, '0');
  const day = dateObject.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`
}

export { dateToString }
