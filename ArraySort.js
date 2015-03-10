
function ArraySort(s) {

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

 ArraySort([1,2,3])