const string = document.getElementById("message").value;
let offset = parseInt(document.getElementById("offset").value);

function validarOffset(offset){
    console.log("validando: " + offset);
	
		if (offset === 0 || offset < 0){
			alert("Se aplicará offset por defaut de 33");
			offset = 33;
			console.log("Offset x default: " + offset);
			//window.cipher.encode(33,string);
			//window.cipher.decode(33, string);
			return offset;
		} else {
			alert("Se ha aplicado tu offset ;)")
			console.log("offset dinámico xD");
			//return position;
			return window.cipher.createCipherWithOffset(offset);
		}
  }

/*function paintMsn(msnOutput){
	let container = document.getElementById("codeMsn");
	container.innerHTML = msnOutput;
}
*/
validarOffset(offset);

let btnEncode = document.getElementById("btnEncode");
btnEncode.addEventListener("click", function(){
	//console.log("btnEncode");
	let result = cipher.encode(offset,string);
	let container = document.getElementById("codeMsn");
	let showMessage = document.getElementById("showMessage")
	showMessage.innerHTML = "Mensaje cifrado";
	container.innerHTML = result;
});

let btnDecode = document.getElementById("btnDecode");
btnDecode.addEventListener("click", function(){
	//console.log("btnDecode");
	let container = document.getElementById("codeMsn");
	let result = cipher.decode(offset,string);
	let showMessage = document.getElementById("showMessage")
	showMessage.innerHTML = "Mensaje descifrado";
	container.innerHTML = result;
});