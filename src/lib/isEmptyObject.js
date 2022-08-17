/* eslint-disable no-restricted-syntax */
function isEmptyObject(obj) {
  let name;
  for (name in obj) {
    if (obj.hasOwnProperty(name)) {
      return false;
    }
  }
  return true;
}

export default isEmptyObject;
