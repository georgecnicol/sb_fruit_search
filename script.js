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
	searchString = e.target.value
	showSuggestions(search(searchString), searchString);
	// originally used e.key and processed keystrokes only rather than value in the field
	// now the need to deal with special keystrokes is gone.
}

function removeList(){
	while(suggestions.firstChild){
		suggestions.removeChild(suggestions.firstChild);
	}
}

//make bold style letter matches
function makeInnerHTML(result, aString){
	result = result.toLowerCase().split(aString);
	let first = result.shift();
	let last = ('</b>' + result.pop());
	let inHTML = ''
	if (first === ''){
		// deal with the A in Apple
		inHTML = (first + '<b>' + aString.charAt(0).toUpperCase() + aString.slice(1));
	}else {
		inHTML = (first + '<b>' + aString);
	}
	for (let item of result){
		// </b>item<b>sString
		inHTML += ('</b>' + item + '<b>' + aString)
	};
	inHTML += last;
	return inHTML;
}

// drop down of choices below the search bar. letter matches are in bold
function addListItem(textResult, sString){
	const newLI = document.createElement('li');
	newLI.setAttribute('class', 'result-li');
	newLI.innerHTML = makeInnerHTML(textResult, sString);
	suggestions.append(newLI);
}


// display type ahead matches
function showSuggestions(results, inputVal) {
	removeList();
	// make new list
	for (let item of results){
		addListItem(item, inputVal);
	}
}

// when user clicks on suggestion
function useSuggestion(e) {
	input.value = e.target.innerText;
	removeList();
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);