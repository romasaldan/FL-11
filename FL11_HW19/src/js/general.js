function checkClass(nodeElement, classString) {
  var classList = nodeElement.className.split(' ');

  for (let i = 0; i < classList.length; i++) {
    if (classList[i] === classString) {
      return true;
    }
  }

  return false;
}

export default checkClass;
