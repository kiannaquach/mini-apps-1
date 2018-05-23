console.log('hello')

var grid = [[],[],[]]
var currentPlayer = prompt('Do you want to be X or O?')
// console.log(currentPlayer);
var scoreX = 0;
var scoreO = 0;
var pos;

// X = 1
// O = 2
	
var reload = function() {
	window.location.reload();
}

var resetBoard = function() {
	for (var i = 0; i < grid.length; i++) {
		for (var j = 0; j < grid.length; j++) {
			grid[i][j] = 0;
		}
	} 
}

var newGame = function() {
	resetBoard();
}

var displayGrid = function() {
	for (var i = 0; i < grid.length; i++) {
		for (var j = 0; j < grid.length; j++) {
			grid[i][j] = 0;
		}
	}
}

displayGrid();


var clickedBox = function(i, j) {
	var pos = grid[i][j];

	if (grid[i][j] > 0) {
		alert('Please click another box')
	} else {
		if (currentPlayer === 1) {
			var x = document.getElementById(`box-${i}-${j}`);
			x.innerHTML = 'X'
			grid[i][j] = 1;
			currentPlayer = 2;
		} else {
			var o = document.getElementById(`box-${i}-${j}`);
			o.innerHTML = 'O'			
			grid[i][j] = 2;
			currentPlayer = 1;
		}
	}
	checkRows(i);
	checkColumns(j);
	checkMajorDiagonals();
	checkMinorDiagonals();
	
	var inner = document.getElementById('player1');
	inner.innerHTML = 'Player X: ' + scoreX;

	var outer = document.getElementById('player2');
	outer.innerHTML = 'Player O: ' + scoreO;
}

var checkRows = function(rowIndex) {
	var countX = 0;
	var countO = 0;

	for (var i = 0; i < grid.length; i++) {
		var row = grid[rowIndex];
		// console.log(row)
		if (row[i] === 1) {
			countX++
		} else if (row[i] === 2) {
			countO++
		}

		if (countX === 3) {
			scoreX++
			return alert('X you won rows!')
		} else if (countO === 3) {
			scoreO++
			return alert('O you won rows!')
		} 
	}
}

var checkColumns = function(columnIndex) {
	var countX = 0;
	var countO = 0;

	for (var i = 0; i < grid.length; i++) {
		var row = grid[i];
		var element = row[columnIndex];
		// console.log(row[columnIndex]);

		if (element === 1) {
			countX++
		} else if (element === 2) {
			countO++ 
		}

		if (countX === 3) {
			scoreX++
			return alert('X won columns!')
		} else if (countO === 3) {
			scoreO++
			return alert('O won columns')
		}
	}
}

var checkMajorDiagonals = function(columnAtFirstRow) {
	var countX = 0; 
	var countO = 0; 

	for (var i = 0; i < grid.length; i++) {
		var row = grid[i];
		var val = row[i];
		// console.log(val)

		if (val === 1) {
			countX ++;
		} else if (val === 2) {
			countO ++;
		}
		// console.log(columnAtFirstRow)
		columnAtFirstRow++
	}
	if (countX === 3) {
		scoreX++
		return alert('X won MajorDiagonal');
	} else if (countO === 3) {
		scoreO++
		return alert('O won MajorDiagonal');
	} 
}

var checkMinorDiagonals = function(minorDiagonalIndex) {
	var countX = 0; 
	var countO = 0; 

	for (var i = 0; i < grid.length; i++) {
		var row = grid[i];
		var val = row[grid.length-1-i];

		if (val === 1) {
			countX ++;
		} else if (val === 2) {
			countO ++;
		}

		minorDiagonalIndex++
	}

	if (countX === 3) {
		scoreX++
		return alert('X won MinorDiagonal');
	} else if (countO === 3) {
		scoreO++
		return alert('O won MinorDiagonal');
	} 
}