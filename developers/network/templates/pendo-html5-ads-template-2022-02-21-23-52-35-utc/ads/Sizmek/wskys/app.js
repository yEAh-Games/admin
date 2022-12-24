window.addEventListener('load', opening);

function opening() {
setTimeout(function() {
$('wave').classList.remove('fadeOut');
}, 400);
setTimeout(function() {
$('text1').classList.remove('fadeOut');
}, 700);
setTimeout(function() {
$('text2').classList.remove('fadeOut');
}, 1000);
setTimeout(function() {
$('icon').classList.remove('fadeOut');
}, 1300);
setTimeout(function() {
$('cta').classList.remove('fadeOut');
}, 1600);
setTimeout(function() {
$('domain').classList.remove('fadeOut');
}, 1900);
	
	
setTimeout(function() {
$('bg').classList.add('animated');
}, 0);
setTimeout(function() {
$('logo').classList.add('animated');
}, 300);
setTimeout(function() {
$('wave').classList.add('animated');
}, 400);
setTimeout(function() {
$('text1').classList.add('animated');
}, 700);
setTimeout(function() {
$('text2').classList.add('animated');
}, 1000);
setTimeout(function() {
$('icon').classList.add('animated');
}, 1300);
setTimeout(function() {
$('cta').classList.add('animated');
}, 1600);
setTimeout(function() {
$('domain').classList.add('animated');
}, 1900);
setTimeout(overlay , 0);
}


function overlay(){
/*hover button*/
$('clickbanner').addEventListener('mouseover', hoveranimation, false);
$('clickbanner').addEventListener('mouseout', hoveranimationout, false);

function hoveranimation(){
	$('overlay').classList.remove('fadeOutover');
	$('overlay').classList.add('fadeInover');
	$('expand').classList.add('bar');
	$('text-over').style.display = "block";
	}
	function hoveranimationout(){
	$('expand').classList.remove('bar');
	$('overlay').classList.remove('fadeInover');
	$('overlay').classList.add('fadeOutover');
	$('text-over').style.display = "none";
	setTimeout(ress, 0)
	}
	
	function ress(){
	$('wave').classList.add('fadeOut');
	$('text1').classList.add('fadeOut');
	$('text2').classList.add('fadeOut');
	$('icon').classList.add('fadeOut');
	$('cta').classList.add('fadeOut');
	$('domain').classList.add('fadeOut');
	setTimeout(opening, 0);
	$('clickbanner').removeEventListener('mouseout', hoveranimationout);
	$('clickbanner').removeEventListener('mouseover', hoveranimation);	
	}
	//console.log('opening');
}

/*noconflict js*/
var noconflict = function (name) {
    var fixcon;
    if (!document.getElementById(name)) {
      fixcon = document.createElement("div");
      fixcon.id = name;
      document.body.appendChild(fixcon);
    } else {
      fixcon = document.getElementById(name);
    }
};
noconflict("bg");
noconflict("logo");
noconflict("wave");
noconflict("text1");
noconflict("text2");
noconflict("icon");
noconflict("cta");
noconflict("domain");
noconflict("overlay");
noconflict("expandbg");
noconflict("expand");
noconflict("text-over");

/*minimize ElementById*/
function $(id) {
return document.getElementById(id);
}

