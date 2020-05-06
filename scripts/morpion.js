$(document).ready(function() {
  $.fn.morpion = function() {
    //define variables
    let player = 1;
    let grid = $('#grid');
    let currentPlayer = $('#currentPlayer');
    showNextPlayer(currentPlayer, player);

    //Get all the cells
    let firstCell = $('#grid .row:first-child .cell:first-child');
    let secondCell = $('#grid .row:first-child .cell:nth-child(2)');
    let thirdCell = $('#grid .row:first-child .cell:last-child');
    let fourthCell = $('#grid .row:nth-child(2) .cell:first-child');
    let fifthCell = $('#grid .row:nth-child(2) .cell:nth-child(2)');
    let sixthCell = $('#grid .row:nth-child(2) .cell:last-child');
    let seventhCell = $('#grid .row:nth-child(3) .cell:first-child');
    let eigthCell = $('#grid .row:nth-child(3) .cell:nth-child(2)');
    let lastCell = $('#grid .row:nth-child(3) .cell:last-child');

    //Replace the player number at each turn
    function showNextPlayer(currentPlayer, player) {
      currentPlayer.replaceWith('Joueur ' + player);
    }

    //here we check if cell is checked
    function getChecked(param) {
      if (param.html() == 'X' || param.html() == 'O') {
        return 1;
      } else {
        return 0;
      }
    }

    //Player turn
    function playerTurn(player) {
      if (player == 1) {
        return 'cross';
      } else {
        return 'circle';
      }
    }

    //Get sign
    function sign(player) {
      if (player == 1) {
        return 'X';
      } else {
        return '0';
      }
    }

    //Set next player to check
    function nextPlayer(player) {
      if (player == 1) {
        return (player = 2);
      } else {
        return (player = 1);
      }
    }

    //Check if the round is won
    function checkWin(turn) {
      let win = 0;
      if (
        firstCell.hasClass(turn) &&
        secondCell.hasClass(turn) &&
        thirdCell.hasClass(turn)
      ) {
        win = 1;
      } else if (
        firstCell.hasClass(turn) &&
        fourthCell.hasClass(turn) &&
        seventhCell.hasClass(turn)
      ) {
        win = 1;
      } else if (
        firstCell.hasClass(turn) &&
        fifthCell.hasClass(turn) &&
        lastCell.hasClass(turn)
      ) {
        win = 1;
      } else if (
        fourthCell.hasClass(turn) &&
        fifthCell.hasClass(turn) &&
        sixthCell.hasClass(turn)
      ) {
        win = 1;
      } else if (
        seventhCell.hasClass(turn) &&
        eigthCell.hasClass(turn) &&
        lastCell.hasClass(turn)
      ) {
        win = 1;
      } else if (
        secondCell.hasClass(turn) &&
        fifthCell.hasClass(turn) &&
        eigthCell.hasClass(turn)
      ) {
        win = 1;
      } else if (
        thirdCell.hasClass(turn) &&
        sixthCell.hasClass(turn) &&
        lastCell.hasClass(turn)
      ) {
        win = 1;
      } else if (
        thirdCell.hasClass(turn) &&
        fifthCell.hasClass(turn) &&
        seventhCell.hasClass(turn)
      ) {
        win = 1;
      }
      return win;
    }

    //And here we go

    $('.cell').click(function() {
      let state = getChecked($(this));
      if (!state) {
        let turn = playerTurn(player);
        $(this).addClass(turn);
        if (checkWin(turn)) {
          alert('The winner is player ' + player);
        } else {
          $(this).html(sign(player));
          player = nextPlayer(player);
          console.log(player);
          showNextPlayer(currentPlayer, player);
        }
      } else {
        alert('Click another cell');
      }
    });

    //Play again
    $('#replay').click(function() {
      location.reload(true);
    });
  };
  $('#grid').morpion();
});
