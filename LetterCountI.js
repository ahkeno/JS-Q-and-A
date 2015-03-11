function LetterCountI(str){
	str = str.split(" ");var count = 0;
	for (var i = 0; i< str.length; i++){
		var str2 = str[i].replace(/([a-z])(?=.*\1)/ig);
		if (str2 != null){
			(str2.length > count){
				count = str2.length;
				var words = str[i];
			}
		}

	}
	return words || -1;
}