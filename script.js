function titleClick(i){
	document.querySelector('.pictured').classList.toggle('expanded');
}

// function expandSquare(squareSelector){
// 	console.log('expand');
// 	document.querySelector(squareSelector).classList.add('expanded');
// }

// function closeSquare(squareSelector){
// 	document.querySelector(squareSelector).classList.remove('expanded');
// 	return false;
// }

document.querySelector('.work-square').addEventListener('click', function(e){
	var square = document.querySelector('.work-square').classList.add('expanded');
});

document.querySelector('.contact-square').addEventListener('click', function(e){
	var square = document.querySelector('.contact-square').classList.add('expanded');
});

document.querySelector('.contact-square .close-button').addEventListener('click', function(e){
	e.stopPropagation();
	document.querySelector('.contact-square').classList.remove('expanded');
});

document.querySelector('.work-square .close-button').addEventListener('click', function(e){
	e.stopPropagation();
	document.querySelector('.work-square').classList.remove('expanded');
});