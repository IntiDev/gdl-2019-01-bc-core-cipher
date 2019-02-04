let string = document.getElementById("message");
let offset = document.getElementById("offset");

function validateOffset(offset) {
	offset = parseInt(offset);
	if (offset <= 0) {
		alert("Se aplicará offset por default de 33 \n Recuerda que el offset debe ser un número positivo ;)");
		return 33;
	} else {
		alert("Se ha aplicado tu offset ;)");
		return offset;
	}
}

function printMsn(msnOutput, msnAction) {
	let container = document.getElementById("codeMsn");
	let showMessage = document.getElementById("showMessage");
	showMessage.innerHTML = msnAction;
	container.innerHTML = msnOutput;
}

function clearInputs() {
	string.value = "";
	offset.value = 0;
}

let btnEncode = document.getElementById("btnEncode");
btnEncode.addEventListener("click", () => {
	offset.value = validateOffset(offset.value);
	let result = cipher.createCipherWithOffset(offset.value).encode(string.value.toUpperCase());
	printMsn(result,"Mensaje cifrado");
	clearInputs();
});

let btnDecode = document.getElementById("btnDecode");
btnDecode.addEventListener("click", () => {
	offset.value = validateOffset(offset.value);
	let result = cipher.createCipherWithOffset(offset.value).decode(string.value.toUpperCase());
	printMsn(result, "Mensaje descifrado");
	clearInputs();
});