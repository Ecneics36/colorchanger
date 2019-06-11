console.log('hi');

var yellowBtn = document.getElementById('yellow');
var btns = document.querySelectorAll('button');
var btnContainer = document.getElementById('button-container');
var btnAdder = document.getElementById('adder');
var btnRemover = document.getElementById('remover');
var colorSelect = document.getElementById('colors');

function createBtn(parentElement, color){
	var newBtn = document.createElement('button');
	var parent = document.getElementById(parentElement.id);
	newBtn.innerText = color;
	newBtn.style.backgroundColor = color;
	newBtn.classList.add('button');
	newBtn.classList.add(color);
	newBtn.id = color;
	// console.log(newBtn);
	parent.appendChild(newBtn);
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
	// newOption.setAttribute('value', colors[i]);
	colorSelect.appendChild(newOption);
}

// CHANGE BG COLOR TO SELECT VALUE
colorSelect.addEventListener('change', function(event) {
	document.body.style.backgroundColor = colorSelect.value;
});

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
			// delete option
			document.querySelector('#colors > option[value=' + event.target.id + ']').remove();
			// delete button
			event.target.remove();
		} else {
			document.body.style.backgroundColor = event.target.id;
		}
	} 
	console.log(event.target.id);
});

// ADD COLOR VALUE AS A BUTTON
btnAdder.addEventListener('click', function(event) {
	if('#button-container > #colors' === colorSelect.value){
		document.body.style.backgroundColor = colorSelect.value;
	} else {
	createBtn(btnContainer, colorSelect.value);
	}
	console.log(event);
});

// REMOVE COLOR VALUE'S BUTTON
btnRemover.addEventListener('click', function(event) {
	if(event.target.tagName === 'BUTTON') {
		if(document.body.style.backgroundColor === colorSelect.value) {
			document.body.style.backgroundColor = 'white';
			// delete button
			document.querySelector('button[id=' + colorSelect.value + ']').remove();
			// delete option
			document.querySelector('#colors > option[value=' + colorSelect.value + ']').remove();
		} else {
			document.body.style.backgroundColor = colorSelect;
		}
	}
	console.log(colorSelect.value);
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