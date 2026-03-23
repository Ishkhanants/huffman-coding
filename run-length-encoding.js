Compress = str => {
	let charMap = {};

	for(let i=0; i<str.length; i++){
		charMap[str[i]]=0;
	}

	for(let i=0; i<str.length; i++){
		if(str[i]){
			charMap[str[i]]++;
		}
	}

	let str2 = JSON.stringify(charMap).split("");

	for(let i=0; i<str2.length; i++){
		if(str2[i]=="{" || str2[i]=="}" || str2[i] == "," || str2[i]==":" || str2[i] == "\""){
			str2.splice(i, 1);
			i--;
		}
	}

	return str2.join("");
}

let string = "aaaaaaaaabbbbaccccc";
let compressedString = Compress(string);
console.log(compressedString);

//////////////////////////////////////////////////////////////////////////////////////////

Spread = str => {
	const arr = str.split(/(\d+)/);
	let response = '';
	
	function generateStr(char, count) {
		let d = [];
		d[count] = '';
		return d.join(char);
	}

	for (let i = 0; i < str.length; i += 2){
		response += generateStr(arr[i], arr[i+1]);
	}

	return(response);
}

let spreadedString = Spread(compressedString);
console.log(spreadedString);
