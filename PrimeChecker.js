

//Random revers the String as Array
function getAllPerms(s) {

	var perms = [];
	if (s.length === 1) {
		perms.push(s);
	} else {
		for (var i = 0; i < s.length; i++) {
			var sub = s.slice(0);
			sub.splice(i, 1);
			var sp = getAllPerms(sub);
			for (var o = 0; o < sp.length; o++) {
				sp[o].unshift(s[i]);
				perms.push(sp[o]);
			}
		}
	}
	return perms;
}
//Check for Prime Number
function isPrime(n) {
    if (n <= 3) { return n > 1; }
    if (n % 2 == 0 || n % 3 == 0) { return false; }
    for (var  i = 5; i * i <= n; i += 6) {
        if (n % i == 0 || n % (i + 2) == 0) { return false; }
    }
    return true;
}

function PrimeChecker(num) {
  num = num.toString().split("");
  var count = 0;var arr = [];
    
     if (num.length > 1) {
     arr = getAllPerms(num);
     for (var i = 0;i <arr.length; i++){
        var n = arr[i].join("");
        if (isPrime(n)){count ++;return 1;}
     }
    }
    else if (num.length == 1){
        if (isPrime(num)){count ++;}
    }
     
    return (count > 0) ? "1" : "0"; 
      
}
PrimeChecker(598 );    

         
