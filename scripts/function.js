	/* Load Video Clip */
		function loadreel() { document.getElementById("iclip").contentWindow.location.replace('https://player.vimeo.com/video/51395401');
			var textboxA = document.getElementById('containerA'); textboxB = document.createElement("div"); textboxB.setAttribute("id", "containerB"); var text = document.createElement("div"); text.innerHTML = document.getElementById("clip_reel").innerHTML; textboxA.appendChild(textboxB); textboxB.appendChild(text); }
		function clearframe() { document.getElementById("iclip").contentWindow.location.replace('about:blank');	var elem = document.getElementById("containerB"); elem.parentNode.removeChild(elem); }
		function goback() { history.go(-1); }
	/* Main Menu (mobile) */
		function mobileBarFunction(x) { x.classList.toggle("change");
			var y = document.getElementById('MmenuHide'); if (y.style.display === 'block') { y.style.display = 'none'; } else { y.style.display = "block"; } }
	/* About Tabs */
		function openTabA(evt, tabNameA) { var iA, tabcontentA, tablinksA; tabcontentA = document.getElementsByClassName("tabcontentA");
			for (iA = 0; iA < tabcontentA.length; iA++) { tabcontentA[iA].style.display = "none"; }
			tablinksA = document.getElementsByClassName("tablinksA");
			for (iA = 0; iA < tablinksA.length; iA++) { tablinksA[iA].className = tablinksA[iA].className.replace(" active", ""); }
			document.getElementById(tabNameA).style.display = "block"; evt.currentTarget.className += " active"; }
