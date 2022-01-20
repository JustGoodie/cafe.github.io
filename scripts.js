window.onscroll = function(){
	if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
		document.getElementById("navbar").style.top = "0";
		document.getElementById("navbar").style.width = "100%";
		document.getElementById("navbar").style.left = "0";
	} else {
		document.getElementById("navbar").style.top = "35px";
		document.getElementById("navbar").style.width = "90%";
		document.getElementById("navbar").style.left = "5%";}};