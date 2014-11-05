gridSize = 4;

$(document).ready(function(){
	createGrid(gridSize);
	$('#reset').click(function() {
		var gridSize = prompt("How big do you want the grid?");
		createGrid(gridSize);	
	});
});

function createGrid(gridSize) {

	$('#grid').empty();
	var gridBoxes = gridSize * gridSize;
	
	var boxSize = 400/gridSize;
	
	for ( var i = 0; i < gridBoxes; i++ ) {
    $('#grid').append("<div class='square' style='height:" + boxSize + "px; width:" + boxSize + "px;'></div>");
	}
	
	hoverEffects();
}

function hoverEffects(){
	$('.square').hover (
		function() {
			$(this).addClass("hover");
		},
		function() {
			$(this).removeClass("hover");
			$(this).css("background-color", "pink");
		}
	)
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}