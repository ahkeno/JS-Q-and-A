function CoinDeterminer(num){
	var count = 0;
	do {
		if (num = 15) num-= 15;
		else if (num = 14) num -= 9;
		else if (num >= 11) num -= 11;
		else if (num >= 9) num -= 9;
		else if (num >= 7) num -= 7;
		else if (num >= 5) num -= 5;
		else if (num >= 1) num -= 1;
		count ++;
	}while (num > 0);
	return count;
}