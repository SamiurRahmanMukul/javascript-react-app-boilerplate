function truncateString(str, max, sep) {
  // Default to 10 characters
  max = max || 10;

  const len = str.length;
  if (len > max) {
    // Default to ellipsis
    sep = sep || '...';

    const sepLen = sep.length;

    // If separator is larger than character limit,
    // well then we don't want to just show the separator,
    // so just show right hand side of the string.
    if (sepLen > max) {
      return str.substr(len - max);
    }

    // Half the difference between max and string length.
    // Multiply negative because small minus big.
    // Must account for length of separator too.
    const n = -0.5 * (max - len - sepLen);

    // This gives us the centerline.
    const center = len / 2;

    const front = str.substr(0, center - n);
    const back = str.substr(len - center + n); // without second arg, will automatically go to end of line.

    return front + sep + back;
  }

  return str;
}

export default truncateString;
