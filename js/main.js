// ################## Left box: Working with Create/Append/Delete elements ###########
let firstLink = document.getElementById('first-link');

firstLink.addEventListener('click', function(e) {
	// In this case, 
	// preventDefault means to prevent the link from reloading the page
	e.preventDefault();

	// Create outer box
	let outerBox = document.createElement('div');
	// box.classList.add('outer-box');
	outerBox.className = 'outer-box';
	
	// Create inner boxes
	let innerBox1 = document.createElement('div');
	innerBox1.className = "inner-box yellow";
	innerBox1.innerHTML = `
		<b>Inner box 1</b>.
		<br>Click to delete inner box 1
	`;
	innerBox1.addEventListener('click', function(e) {
		let clickedBox = e.target;
		clickedBox.remove();
	})

	let innerBox2 = document.createElement('div');
	innerBox2.className = "inner-box sky-blue";
	innerBox2.innerHTML = `
		<b>Inner box 2</b>.<br>
		Click to delete the parent node of this box. Meaning delete the whole box :).			
	`;
	innerBox2.addEventListener('click', function(e) {
		let clickedBox = e.target;
		clickedBox.parentNode.remove();
	})


	let innerBox3 = document.createElement('div');
	innerBox3.className = "inner-box light-green";
	innerBox3.innerHTML = `
		<b>Inner box 3</b>.<br>
		Click to delete the last inner box
	`;
	innerBox3.addEventListener('click', function(e) {
		let clickedBox = e.target;
		clickedBox.parentNode.lastElementChild.remove();
	})

	let innerBox4 = document.createElement('div');
	innerBox4.className = "inner-box beige";
	innerBox4.innerHTML = `
		<b>Inner box 4</b>.<br>
		Is at the mercy of inner box 3, if clicked, inner box 4 will perish :(
	`;

	outerBox.append(innerBox1, innerBox2, innerBox3, innerBox4);
	let firstSection = document.getElementById('first-section');
	firstSection.append(outerBox);

	console.log(outerBox);
});



//################## Right box: Working with attributes ###########
let secondLink = document.getElementById('second-link');
secondLink.addEventListener('click', function(e) {
	// In this case, 
	// preventDefault means to prevent the link from reloading the page
	e.preventDefault();
	
	// A querySelector is more specific and thus safer, ex querySelector(.box ul li:firstChild)
	// But in this case getElementsByTagName('li') works well also
	let listItems = document.getElementsByTagName('li');
	// console.log(listItems);

	listItems[0].innerHTML = '<b>Link text: </b>' + e.target.innerHTML;
	listItems[1].innerHTML = '<b>Class: </b>' + e.target.className;
	listItems[2].innerHTML = '<b>Title: </b>' + e.target.title;
	listItems[3].innerHTML = '<b>Target: </b>' + e.target.target;
})

let changeLinkTextBtn = document.getElementById('change-link-text-btn');
changeLinkTextBtn.addEventListener('click', function() {
	let textField = document.getElementById('change-link-text-input');
	secondLink.innerText = textField.value;
})

let changeClassBtn = document.getElementById('change-class-btn');
changeClassBtn.addEventListener('click', function() {
	let textField = document.getElementById('change-class-input');
	secondLink.className = textField.value;
})

let changeTitleBtn = document.getElementById('change-title-btn');
changeTitleBtn.addEventListener('click', function() {
	let textField = document.getElementById('change-title-input');
	secondLink.title = textField.value;
})

let changeTargetBtn = document.getElementById('change-target-btn');
changeTargetBtn.addEventListener('click', function() {
	let textField = document.getElementById('change-target-input');
	secondLink.target = textField.value;
})