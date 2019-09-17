import style from '../scss/style.scss';
import checkClass from './general.js';
import getComputerBet from './computer.js';
import hashChange from './hashChange.js';

function onloadPage() {
  location.hash = '#';
}

addEventListener('load', onloadPage);
window.addEventListener('hashchange', hashChange);

function setImage(node, name) {
  if (name === 'rock') {
    node.setAttribute('src', 'images/rock.jpg');
  } else if (name === 'paper') {
    node.setAttribute('src', 'images/paper.jpg');
  } else {
    node.setAttribute('src', 'images/scissors.jpg');
  }
}

function game(event) {
  if (checkClass(event.target, 'bet-image')) {
    var computerBet = getComputerBet();
    var playerBet = event.target.alt;
    var arrOfChoosen = document.querySelectorAll('.choosen-bets__result>img');
    var scorePoint = document.querySelectorAll('.score>span');

    if (+scorePoint[0].innerHTML > 2 || +scorePoint[1].innerHTML > 2) {
      return;
    }

    setImage(arrOfChoosen[0], playerBet);
    setImage(arrOfChoosen[1], computerBet);

    if (computerBet === playerBet) {
      return;
    } else {
      if (
        (playerBet === 'rock' && computerBet === 'scissors') ||
        (playerBet === 'paper' && computerBet === 'rock') ||
        (playerBet === 'scissors' && computerBet === 'paper')
      ) {
        scorePoint[0].innerHTML = +scorePoint[0].innerHTML + 1;

        if (scorePoint[0].innerHTML === '3') {
          setTimeout(function() {
            location.hash = '#result';
            document.querySelectorAll('.result-header')[0].innerHTML =
              'Congratulation! You win!';
            document.querySelectorAll('.result-score')[0].innerHTML =
              'Score is ' +
              scorePoint[0].innerHTML +
              ':' +
              scorePoint[1].innerHTML;
            var imParent = document.querySelectorAll('.result-image')[0];
            imParent.innerHTML = '';
            var img = document.createElement('img');
            imParent.appendChild(img);
            img.setAttribute('src', 'images/winner.png');
            img.setAttribute('class', 'result-image__image');
            scorePoint[0].innerHTML = 0;
            scorePoint[1].innerHTML = 0;
          }, 1000);
        }

        return 1;
      } else {
        scorePoint[1].innerHTML = +scorePoint[1].innerHTML + 1;

        if (scorePoint[1].innerHTML === '3') {
          setTimeout(function() {
            location.hash = '#result';
            document.querySelectorAll('.result-header')[0].innerHTML =
              'Unfortunately you lose!';
            document.querySelectorAll('.result-score')[0].innerHTML =
              'Score is ' +
              scorePoint[0].innerHTML +
              ':' +
              scorePoint[1].innerHTML;
            var imParent = document.querySelectorAll('.result-image')[0];
            imParent.innerHTML = '';
            var img = document.createElement('img');
            imParent.appendChild(img);
            img.setAttribute('src', 'images/loser.png');
            img.setAttribute('class', 'result-image__image');
            scorePoint[0].innerHTML = 0;
            scorePoint[1].innerHTML = 0;
          }, 1000);
        }
      }
    }
  }
}

document.addEventListener('click', game);
