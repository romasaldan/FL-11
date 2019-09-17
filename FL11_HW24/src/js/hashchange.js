function hashChange() {
  document.getElementById('main-page').style.display = 'none';
  document.getElementById('game-process').style.display = 'none';
  document.getElementById('result').style.display = 'none';

  if (window.location.hash === '#' || window.location.hash === '') {
    document.querySelector('#main-page').style.display = 'block';
  } else {
    document.querySelector(location.hash).style.display = 'block';
  }
}

export default hashChange;
