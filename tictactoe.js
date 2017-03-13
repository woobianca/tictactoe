#!/usr/bin/env node

var game = require('commander');

var board = [ ['_', '_', '_'], ['_', '_', '_'], ['_', '_', '_'] ];

var count = 0;
console.log(count)

var add = function (marker, row, column) {
	if (board[row][column] === '_') {
		board[row][column] = marker;
		count++
		check(board)
	} else {
		console.log('Position taken, choose another.')
	}
};

var move = function(row, column) {
	if (row < 0 || row > 2 || column < 0 || column > 2 ) {
		console.log('Please choose valid position');
	} else if (count === 0 || count % 2 === 0) {
		add('x', row, column);
	} else {
		add('o', row, column);
	}
};

var check = function(board) {
	if (count === 9) {
		board.forEach(function(row) {
			for (var col = 0; col < row.length; col++) {
				if (row.includes('x') && row.includes('o')) {
					console.log('lose columns')
				} 
				if (row[col] === 'x' && row[col] === 'o') {
					console.log('lose columns')
				}
			}
		})
	}
}


game
	.command('move <n> [<n>...]')
	.description('add marker to board')
	.action(function() {
	 console.log('move');
	});


game
  .version('0.0.1')
  .usage('interview-prep')
  .option('-m, --move <n>', 'a pair of coordinates (row and column) that indicate where marker should be placed', move )
  .parse(process.argv);

if(!game.args.length) {
    game.help();
} else {
    console.log('Keywords: ' + game.args);   
}

console.log(' move: %j', game.move);

exports.move = move;