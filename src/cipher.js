window.cipher = {
  encode: function (offset, string) {
		console.log("encode: " + offset);
		
		//string = string.toUpperCase();
		let msnEncode = "";
    console.log(string);
    
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
		//string = string.toUpperCase();
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
    //console.log("Offset: " + offset);
    //console.log("string: " + window.document);
		let newObject = {
			offset: offset,
      //string: window.document.getElementById("message").value.toUpperCase(),
      //string: window.document.all[7].value,
			//encode: window.cipher.encode(offset, string),
			//decode: window.cipher.decode(offset, string)
			encode: function (string) {
				console.log("encode 2: " + newObject.offset);
				offset = newObject.offset;
				//string = string.toUpperCase();
				let msnEncode = "";
				//console.log(string);
				
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
			decode: function (string) {
				console.log("decode 2: " + newObject.offset);
				//string = string.toUpperCase();
				offset = newObject.offset;
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
			}
		};

		return newObject;
	}
};

//window.document.all[7].value