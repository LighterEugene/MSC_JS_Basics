const fon = document.forms[0]
const res = document.querySelector('.total');

fon.onsubmit = function(e) {
	e.preventDefault();
    res.innerHTML = Math.sin(fon.elements.sin.value);
}