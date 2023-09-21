const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions');
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];


function search(str) {
	let results = [];
	if (str){
		str = str.toLowerCase();
		results = fruit.filter(pieceOfFruit => pieceOfFruit.toLowerCase().includes(str));
	}
	return results;
}

// as user is typing get type ahead matches
function searchHandler(e) {
	showSuggestions(search(e.target.value));
	// originally used e.key and processed keystrokes only rather than value in the field
	// now the need to deal with special keystrokes is gone.
}

function removeList(){
	while(suggestions.firstChild){
		suggestions.removeChild(suggestions.firstChild);
	}
}

function addListItem(text){
	const newLI = document.createElement('li');
	newLI.setAttribute('class', 'result-li');
	newLI.innerText = text;
	suggestions.append(newLI);
}


// display type ahead matches
function showSuggestions(results) { // what was input val?
	removeList();
	// make new list
	for (let item of results){
		addListItem(item);
	}
}

// when user clicks on suggestion
function useSuggestion(e) {
	input.value = e.target.innerText;
	removeList();
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);