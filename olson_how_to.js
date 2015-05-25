//Program intended for use with Eric Olson's CS290_400 How To Assignment
//Requires access to Mousetrap Library 'mousetrap.min.js'

Mousetrap.bind('a', function() {
	var ans;
	if (ans = document.getElementById('answer')){
		ans.className = 'show';
	}
});

Mousetrap.bind('h', function() {
	var ans;
	if (ans = document.getElementById('answer')){
		ans.className = 'hidden';
	}
});

Mousetrap.bind(['alt+p', 'p r e v'], function() {
	var go;
	if (go = document.getElementById('prev')){
		go.submit();
	}
});

Mousetrap.bind(['alt+n', 'n e x t'], function() {
	var go;
	if (go = document.getElementById('next')){
		go.submit();
	}
});