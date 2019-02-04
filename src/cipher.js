window.cipher = {
	encode: (offset, string) => {
		console.log("encode: " + offset);
		let msnEncode = "";

		for (let i = 0; i < string.length; i++) {
			let numChar = ((string.charCodeAt(i) - 65 + offset) % 26) + 65;
			if (string[i] == " ") {
				msnEncode += string[i];
			} else {
				msnEncode += String.fromCharCode(numChar);
			}
		}
		return msnEncode;
	},
	decode: (offset, string) => {
		console.log("decode: " + offset);
		let msnDecode = "";

		for (let i = 0; i < string.length; i++) {
			let numChar = ((string.charCodeAt(i) + 65 - offset) % 26) + 65;
			if (string[i] == " ") {
				msnDecode += string[i];
			} else {
				msnDecode += String.fromCharCode(numChar);
			}
		}
		return msnDecode;
	},
	createCipherWithOffset: (offset) => {
		let newObject = {
			offset: parseInt(offset),
			encode: (string) => {
				console.log("encode 2: " + newObject.offset);
				offset = newObject.offset;
				let msnEncode = "";

				for (let i = 0; i < string.length; i++) {
					let numChar = ((string.charCodeAt(i) - 65 + offset) % 26) + 65;
					if (string[i] == " ") {
						msnEncode += string[i];
					} else {
						msnEncode += String.fromCharCode(numChar);
					}

				}
				return msnEncode;
			},
			decode: (string) => {
				console.log("decode 2: " + newObject.offset);
				offset = newObject.offset;
				let msnDecode = "";

				for (let i = 0; i < string.length; i++) {
					let numChar = ((string.charCodeAt(i) + 65 - offset) % 26) + 65;
					if (string[i] == " ") {
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