const arrayToCommaSeparatedText = (array) => (array ?
  array
    .map((item) => item)
    .join(', ')
    .toString() :
  'None');

export default arrayToCommaSeparatedText;
