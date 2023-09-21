const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const notLetters = ['CapsLock', 'Shift', 'ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft', 'Escape', 'Backspace', 'Meta', 'Option', 'Alt' ]
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];
let typedFruit = '';

function search(str) {
	let results = [];
	if (str){
		results = fruit.filter(pieceOfFruit => pieceOfFruit.toLowerCase().includes(str));
	}
	return results;
}

// as user is typing get type ahead matches
function searchHandler(e) {
	theKey = e.key.toLowerCase()
	let typeOfKey = notLetters.filter(notLetter => notLetter.toLowerCase() === theKey);

	if (typeOfKey.length > 0){
		if (theKey === 'backspace' && typedFruit.length > 0){
			typedFruit = typedFruit.slice(0,-1);
		}
	} else { // regular letter or number or similar usuable input
		typedFruit += theKey
	}

	let fruitList = search(typedFruit)
	showSuggestions()

	return fruitList; // return value used in testing only
}

// display type ahead matches
function showSuggestions(results, inputVal) {

	// TODO
}

// when user clicks on suggestion
function useSuggestion(e) {
	e.preventDefault();
	// TODO
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);