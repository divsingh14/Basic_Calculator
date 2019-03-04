var display_value = " ";

function addNumber(value) {
	document.getElementById('display').value += value;
	display_value += value;
}
	
function addSymbol(symbol) {
	document.getElementById('display').value += escape(symbol);
	display_value += symbol;
}

function evalu() {
	a=(eval(display_value));
	document.getElementById('display').value = Number(a);
}

function clear_box() {
	document.getElementById('display').value = ' ';
	display_value = " ";
}

function del_value() {
    var value = document.getElementById("display").value;
    document.getElementById("display").value = value.substr(0, value.length - 1);
    display_value = value.substr(0, value.length - 1);
}