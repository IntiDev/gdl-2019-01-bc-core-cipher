window.cipher = {
  encode: function (offset, string) {
		console.log("encode: " + offset);
		
		string = string.toUpperCase();
		let msnEncode = "";

		for(let i = 0; i < string.length; i ++){
      let numChar = ((string.charCodeAt(i) - 65 + offset) % 26) + 65;
      
			if(string[i] == " "){
				msnEncode += string[i];
			} else {
				msnEncode += String.fromCharCode(numChar);
			}

		}
		return msnEncode;
	},
  decode: function (offset,string) {
		console.log("decode: " + offset);
		string = string.toUpperCase();
		let msnDecode = "";

		for(let i = 0; i<string.length; i++){
			let numChar = ((string.charCodeAt(i) + 65 - offset) % 26) + 65;
			if(string[i] == " "){
				msnDecode += string[i];
			} else {
				msnDecode += String.fromCharCode(numChar);
			}
		}
		return msnDecode;
	},
	createCipherWithOffset: function (offset) {
		console.log("Offset: " + offset);
		let newObject = {
			encode: window.cipher.encode(offset, string),
			decode: window.cipher.decode(offset, string)
		}

		return newObject;
	}
};
