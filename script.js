var btnContainer = document.getElementById('button-container');
var btnAdder = document.getElementById('adder');
var btnRemover = document.getElementById('remover');
var btnBonanza = document.getElementById('bonanza');
var colorSelect = document.getElementById('colors');

function createBtn(parentElement, color){
	var newBtn = document.createElement('button');
	newBtn.innerText = color;
	newBtn.style.backgroundColor = color;
	newBtn.classList.add('button');
	newBtn.classList.add(color);
	newBtn.id = color;
	// console.log(newBtn);
	parentElement.appendChild(newBtn);
}

// INITIAL BUTTON ADDER
for (var i = 0; i < initColors.length; i++) {
	var btn = createBtn(btnContainer, initColors[i]);
}

// ADDING COLORS TO SELECT DROP-DOWN
for (var i = 0; i < colors.length; i++) {
	var newOption = document.createElement('option');
	newOption.innerText = colors[i];
	newOption.value = colors[i];
	colorSelect.appendChild(newOption);
}

// CHANGE BG COLOR TO SELECT VALUE
// colorSelect.addEventListener('change', function(event) {
// 	document.body.style.backgroundColor = colorSelect.value;
// });

// // CHANGE BG COLOR TO BUTTON ID
// btnContainer.addEventListener('click', function(event) {
// 	console.log('event:', event);
// 	if (document.body.style.backgroundColor === event.target.id) {
// 			document.body.style.backgroundColor = 'white'
// 		} else {
// 	document.body.style.backgroundColor = event.target.id;
// 	}
// });

// REMOVE BUTTON AND SELECT VALUE ON CLICK
btnContainer.addEventListener('click', function(event) {
	if(event.target.tagName === 'BUTTON') {
		if(document.body.style.backgroundColor === event.target.id) {
			document.body.style.backgroundColor = 'white';
		} else {
			document.body.style.backgroundColor = event.target.id;
		}
	} 
	console.log(event.target.id);
});

// ADD COLOR VALUE AS A BUTTON (AND REMOVE SELECT OPTION)
btnAdder.addEventListener('click', function(event) {
	document.body.style.backgroundColor = colorSelect.value;
	createBtn(btnContainer, colorSelect.value);
	// delete option
	document.querySelector('#colors option[value=' + colorSelect.value + ']').remove()
	console.log(event);
});

// REMOVE COLOR VALUE'S BUTTON
btnRemover.addEventListener('click', function(event) {
	// delete button
	document.getElementById(document.body.style.backgroundColor).remove();
	// create option and add to select
	var newOption = document.createElement('option');
	newOption.innerText = document.body.style.backgroundColor;
	newOption.value = document.body.style.backgroundColor;
	colorSelect.appendChild(newOption);
	console.log(document.body.style.backgroundColor);
	document.body.style.backgroundColor = 'white';
});

// ADD COLOR VALUE AS A BUTTON (AND REMOVE SELECT OPTION)
btnBonanza.addEventListener('click', function(event) {
	document.body.style.backgroundColor = 'white';
	for(var i = 0; i < colors.length; i++) {
		createBtn(btnContainer, colors[i]);
		// delete option
		document.querySelector('#colors option[value=' + colors[i] + ']').remove()
	}
	console.log(event);
});

// function listenToAll(selector, eventType, listener){
// 	var elements = document.querySelectorAll(selector);
// 	for(var i = 0; i < elements.length; i++){
// 		elements[i].addEventListener(eventType, listener);
// 	}
// }

// function applyToAll(selector, fn){
// 	var elements = document.querySelectorAll(selector);
// 	for(var i = 0; i < elements.length; i++){
// 		fn(elements[i]);
// 	}
// }

// listenToAll('#button-container > button','click', function(event){
// 	console.log('hi you guys!!');
// });

// function listenToAll2(selector, eventType, listener){
// 	applyToAll(selector, function(el){
// 		el.addEventListener(eventType, listener);
// 	});
// }

// function cageify(){
// 	applyToAll('img', function(el){
// 		el.setAttribute('src','https://i.kym-cdn.com/photos/images/newsfeed/000/230/393/5d0.gif')
// 	});
// }
// cageify();



// btnContainer.addEventListener('click', function(event){
// 	if(event.target.tagName === 'BUTTON') {
// 		if(document.body.style.backgroundColor === event.target.id) {
// 			document.body.style.backgroundColor = 'white';
// 		} else {
// 			document.body.style.backgroundColor = event.target.id;
// 		}
// 	}
// });


// for(var i = 0; i < btns.length; i++) {
// 	btns[i].addEventListener('click', function(event) {
// 		console.log('event:', event);
// 		if(document.body.style.backgroundColor === event.target.id) {
// 			document.body.style.backgroundColor = 'white';
// 		} else {
// 			document.body.style.backgroundColor = event.target.id;
// 		}
// 	});
// }

// BUTTON CLICK CHANGES BG COLOR - SPECIFIC BUTTON
// yellowBtn.addEventListener('click', function(event) {
// 	console.log('event:' event);
// 	if (event.target.style.color === 'green') {
// 		event.target.style.color = 'black';
// 	} else {
// 	event.target.style.color = 'green';
// 	}
// });

// function createBtn(parentElement, color){
// 	var newBtn = document.createElement('button');
// 	var parent = document.getElementById('parentElement');
// 	newBtn.innerText = color;
// 	newBtn.style.backgroundColor = color;
// 	newBtn.classList.add('button');
// 	newBtn.id = color;
// 	// console.log(newBtn);
// 	parent.appendChild(newBtn);
// };