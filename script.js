const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions');
const notLetters = ['CapsLock', 'Shift', 'ArrowUp', 'Enter', 'ArrowDown', 'ArrowRight', 'ArrowLeft', 'Escape', 'Backspace', 'Meta', 'Option', 'Alt' ]
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];
let typedFruit = '';


function search(str) {
	let results = [];
	if (str){
		results = fruit.filter(pieceOfFruit => pieceOfFruit.toLowerCase().includes(str));
	}
	return results;
}

function processInput(theKey){
	theKey = theKey.toLowerCase();
	let typeOfKey = notLetters.filter(notLetter => notLetter.toLowerCase() === theKey);

	if (typeOfKey.length > 0){
		if (theKey === 'backspace' && typedFruit.length > 0){
			typedFruit = typedFruit.slice(0,-1);
		}
	} else { // regular letter or number or similar usuable input
		typedFruit += theKey;
	}

	let fruitList = search(typedFruit);
	showSuggestions(fruitList, 9);

	return fruitList; // return value used in testing only

}


// as user is typing get type ahead matches
function searchHandler(e) {
	processInput(e.key);

}

function removeList(){
	while(suggestions.firstChild){
		suggestions.removeChild(suggestions.firstChild);
	}
}

function addListItem(text){
	const newLI = document.createElement('li');
	const newButton = document.createElement('button');
	newButton.setAttribute('class', 'result-button')
	newButton.innerText = text;
	newLI.append(newButton);
	suggestions.append(newLI);
}


// display type ahead matches
function showSuggestions(results, inputVal) {
	// destroy old list
	removeList();
	// make new list
	for (let item of results){
		addListItem(item);
	}


}

// when user clicks on suggestion
function useSuggestion(e) {
	e.preventDefault();
	if (e.target.tagName === 'BUTTON'){
		let inputText = document.getElementById('fruit');
		inputText.value = e.target.innerText;
		removeList();
		typedFruit = '';
	}

}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);