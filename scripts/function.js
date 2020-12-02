/* NAVIGATION */

// change mobile menu X state
function mobileBarFunction(x) { x.classList.toggle("change"); var y = document.getElementById('menu'); if (y.style.display === 'block') { y.style.display = 'none'; x.classList.remove("visible"); } else { y.style.display = "block"; x.classList.add("visible"); } }

// show & hide mobile menu
function navSelector() {
	var y = document.getElementById("menu");
	var x = document.getElementById("menutoggle");
	if (x.classList.contains("visible")) {
		if (y.style.display === "block") { y.style.display = "none"; x.classList.toggle("change"); }
		else { y.style.display = "block"; x.classList.toggle("change"); } } }

/*
// add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth', block: 'start' });
	});
});
*/

// make clicked link active
let menuSection = document.querySelectorAll('menu li');
menuSection.forEach(v=> { v.onclick = (()=> { menuSection.forEach(j=> j.classList.remove('active')); v.classList.add('active'); }); });

/*
// scrollspy
window.onscroll = (()=> {
	let mainSection = document.querySelectorAll('wrapper section');
	mainSection.forEach((v,i)=> {
		let rect = v.getBoundingClientRect().y;
		if (rect < window.innerHeight-200) {
			menuSection.forEach(v=> v.classList.remove('active'));
			menuSection[i].classList.add('active');
		}
	});
});

// add smooth scrolling to all links (jquery)
var $root = $('html, body, wrapper, section');
$('menu a').on('click', function(event) {
	if (this.hash !== "") {
		event.preventDefault();
		var hash = this.hash;
		$root.stop().animate({ scrollTop: $(hash).offset().top-60 + $(root).scrollTop() - $(root).offset().top }, 'slow');
	}
});
*/

$('.menuTags')
	// Remove links that don't actually link to anything
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function(event) {
		// On-page links
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname){
			// Figure out element to scroll to
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			// Does a scroll target exist?
			if (target.length) {
				// Only prevent default if animation is actually gonna happen
				event.preventDefault();
				$('wrapper').stop().animate({ scrollTop: target.offset().top + $('wrapper').scrollTop() - $('wrapper').offset().top }, 1000, function() {});
			}
		}
	});



/* CONTACT FORM */

function scheduleCheck() {
    if (document.getElementById('scheduleYes').checked) {
        document.getElementById('ifSchedule').style.display = 'block';
		document.getElementById('datecheck').setAttribute("required", "");
		document.getElementById('timecheck').setAttribute("required", ""); }
    else {
		document.getElementById('ifSchedule').style.display = 'none';
		document.getElementById('datecheck').removeAttribute("required");
		document.getElementById('timecheck').removeAttribute("required"); }
	document.getElementById('scheduleReset').onclick = function() {
        document.getElementById('ifSchedule').style.display = 'block';
		document.getElementById('datecheck').setAttribute("required", "");
		document.getElementById('timecheck').setAttribute("required", "");
		document.getElementById('questionnaire').style.display = 'none';
		document.getElementById('ifEntity').style.display = 'none'; } }

function newClient() {
	if (document.getElementById("questionnaire").style.display === "block") { document.getElementById("questionnaire").style.display = "none" }
	else { document.getElementById("questionnaire").style.display = "block" } }

function entityCheck() {
    if (document.getElementById('entityOther').checked) {
        document.getElementById('ifEntity').style.display = 'inline-block'; }
    else {
		document.getElementById('ifEntity').style.display = 'none'; } }

function typeCheck() {
    if (document.getElementById('typeOther').checked) {
        document.getElementById('ifType').style.display = 'inline-block'; }
    else {
		document.getElementById('ifType').style.display = 'none'; } }

function actionCheck() {
    if (document.getElementById('actionOther').checked) {
        document.getElementById('ifAction').style.display = 'inline-block'; }
    else {
		document.getElementById('ifAction').style.display = 'none'; } }

function toneCheck() {
    if (document.getElementById('toneOther').checked) {
        document.getElementById('ifTone').style.display = 'inline-block'; }
    else {
		document.getElementById('ifTone').style.display = 'none'; } }

function customCheck() {
    if (document.getElementById('customYes').checked) {
        document.getElementById('ifCustom').style.display = 'block'; }
    else {
		document.getElementById('ifCustom').style.display = 'none'; } }

function audioCheck() {
    if (document.getElementById('audioYes').checked) {
        document.getElementById('audioProvider').style.display = 'block'; }
    else {
		document.getElementById('audioProvider').style.display = 'none'; } }

function showingCheck() {
    if (document.getElementById('showingOther').checked) {
        document.getElementById('ifShowing').style.display = 'inline-block'; }
    else {
		document.getElementById('ifShowing').style.display = 'none'; } }



/* VIDEO CLIPS (portfolio page) */
function loadreel() { document.getElementById("iclip").contentWindow.location.replace('https://player.vimeo.com/video/51395401');
	var textboxA = document.getElementById('containerA'); textboxB = document.createElement("div"); textboxB.setAttribute("id", "containerB"); var text = document.createElement("div"); text.innerHTML = document.getElementById("clip_reel").innerHTML; textboxA.appendChild(textboxB); textboxB.appendChild(text); }
function loadreelMotion() { document.getElementById("iclip").contentWindow.location.replace('https://player.vimeo.com/video/221680172'); }
function loadreelAuteur() { document.getElementById("iclip").contentWindow.location.replace('https://player.vimeo.com/video/222615801'); }
function loadreelEdit() { document.getElementById("iclip").contentWindow.location.replace('https://player.vimeo.com/video/223073667'); }
function loadvprodreel() { document.getElementById("iclip").contentWindow.location.replace('https://player.vimeo.com/video/206470572'); }
function loadpoverview() { document.getElementById("iclip").contentWindow.location.replace('https://player.vimeo.com/video/276642241'); }
function loadpsafety() { document.getElementById("iclip").contentWindow.location.replace('https://player.vimeo.com/video/???'); }
function loadpqaqc() { document.getElementById("iclip").contentWindow.location.replace('https://player.vimeo.com/video/276648903'); }
function loadchapman() { document.getElementById("iclip").contentWindow.location.replace('https://player.vimeo.com/video/268707281'); }
function loadskupien() { document.getElementById("iclip").contentWindow.location.replace('https://player.vimeo.com/video/277179076'); }
function loaddtrouble() { document.getElementById("iclip").contentWindow.location.replace('https://player.vimeo.com/video/187179788');
	var textboxA = document.getElementById('containerA'); textboxB = document.createElement("div"); textboxB.setAttribute("id", "containerB"); var text = document.createElement("div"); text.innerHTML = document.getElementById("clip_dtrouble").innerHTML; textboxA.appendChild(textboxB); textboxB.appendChild(text); }
function loadmj() { document.getElementById("iclip").contentWindow.location.replace('https://player.vimeo.com/video/215070721');
	var textboxA = document.getElementById('containerA'); textboxB = document.createElement("div"); textboxB.setAttribute("id", "containerB"); var text = document.createElement("div"); text.innerHTML = document.getElementById("clip_mj").innerHTML; textboxA.appendChild(textboxB); textboxB.appendChild(text); }
function loadgwaiting() { document.getElementById("iclip").contentWindow.location.replace('https://www.youtube.com/embed/hSUwv8-UAcw?wmode=opaque&rel=0');
	var textboxA = document.getElementById('containerA'); textboxB = document.createElement("div"); textboxB.setAttribute("id", "containerB"); var text = document.createElement("div"); text.innerHTML = document.getElementById("clip_genero").innerHTML; textboxA.appendChild(textboxB); textboxB.appendChild(text); }
function loadgbrain() { document.getElementById("iclip").contentWindow.location.replace('https://www.youtube.com/embed/QY2bCC5ZVns?wmode=opaque&rel=0');
	var textboxA = document.getElementById('containerA'); textboxB = document.createElement("div"); textboxB.setAttribute("id", "containerB"); var text = document.createElement("div"); text.innerHTML = document.getElementById("clip_genero").innerHTML; textboxA.appendChild(textboxB); textboxB.appendChild(text); }
function loadgburn() { document.getElementById("iclip").contentWindow.location.replace('https://www.youtube.com/embed/Nmss7kPK6PQ?wmode=opaque&rel=0');
	var textboxA = document.getElementById('containerA'); textboxB = document.createElement("div"); textboxB.setAttribute("id", "containerB"); var text = document.createElement("div"); text.innerHTML = document.getElementById("clip_genero").innerHTML; textboxA.appendChild(textboxB); textboxB.appendChild(text); }
function loadghwolf() { document.getElementById("iclip").contentWindow.location.replace('https://www.youtube.com/embed/LYQALzFdirM?wmode=opaque&rel=0');
	var textboxA = document.getElementById('containerA'); textboxB = document.createElement("div"); textboxB.setAttribute("id", "containerB"); var text = document.createElement("div"); text.innerHTML = document.getElementById("clip_genero").innerHTML; textboxA.appendChild(textboxB); textboxB.appendChild(text); }
function loadgmiracle() { document.getElementById("iclip").contentWindow.location.replace('https://www.youtube.com/embed/h-omoAqSZB4?wmode=opaque&rel=0');
	var textboxA = document.getElementById('containerA'); textboxB = document.createElement("div"); textboxB.setAttribute("id", "containerB"); var text = document.createElement("div"); text.innerHTML = document.getElementById("clip_genero").innerHTML; textboxA.appendChild(textboxB); textboxB.appendChild(text); }
function loadgshelter() { document.getElementById("iclip").contentWindow.location.replace('https://www.youtube.com/embed/okOxyDmrhOI?wmode=opaque&rel=0');
	var textboxA = document.getElementById('containerA'); textboxB = document.createElement("div"); textboxB.setAttribute("id", "containerB"); var text = document.createElement("div"); text.innerHTML = document.getElementById("clip_genero").innerHTML; textboxA.appendChild(textboxB); textboxB.appendChild(text); }
function loaddinta() { document.getElementById("iclip").contentWindow.location.replace('https://player.vimeo.com/video/210501724/d222b22040');
	var textboxA = document.getElementById('containerA'); textboxB = document.createElement("div"); textboxB.setAttribute("id", "containerB"); var text = document.createElement("div"); text.innerHTML = document.getElementById("clip_dinta").innerHTML; textboxA.appendChild(textboxB); textboxB.appendChild(text); }
function loadgilda() { document.getElementById("iclip").contentWindow.location.replace('https://player.vimeo.com/video/164183476');
	var textboxA = document.getElementById('containerA'); textboxB = document.createElement("div"); textboxB.setAttribute("id", "containerB"); var text = document.createElement("div"); text.innerHTML = document.getElementById("clip_gilda").innerHTML; textboxA.appendChild(textboxB); textboxB.appendChild(text); }
function loadbasics() { document.getElementById("iclip").contentWindow.location.replace('https://player.vimeo.com/video/164434875');
	var textboxA = document.getElementById('containerA'); textboxB = document.createElement("div"); textboxB.setAttribute("id", "containerB"); var text = document.createElement("div"); text.innerHTML = document.getElementById("clip_basics").innerHTML; textboxA.appendChild(textboxB); textboxB.appendChild(text); }
function loadeod() { document.getElementById("iclip").contentWindow.location.replace('https://www.youtube.com/embed/Wv4brqTcLnk?wmode=opaque&rel=0');
	var textboxA = document.getElementById('containerA'); textboxB = document.createElement("div"); textboxB.setAttribute("id", "containerB"); var text = document.createElement("div"); text.innerHTML = document.getElementById("clip_eod").innerHTML; textboxA.appendChild(textboxB); textboxB.appendChild(text); }
function loadeow() { document.getElementById("iclip").contentWindow.location.replace('https://www.youtube.com/embed/rMg4RzfzGN8?wmode=opaque&rel=0');
	var textboxA = document.getElementById('containerA'); textboxB = document.createElement("div"); textboxB.setAttribute("id", "containerB"); var text = document.createElement("div"); text.innerHTML = document.getElementById("clip_eow").innerHTML; textboxA.appendChild(textboxB); textboxB.appendChild(text); }
function loadeom() { document.getElementById("iclip").contentWindow.location.replace('https://www.youtube.com/embed/OGD-p6QPoTM?wmode=opaque&rel=0');
	var textboxA = document.getElementById('containerA'); textboxB = document.createElement("div"); textboxB.setAttribute("id", "containerB"); var text = document.createElement("div"); text.innerHTML = document.getElementById("clip_eom").innerHTML; textboxA.appendChild(textboxB); textboxB.appendChild(text); }
function loadjj() { document.getElementById("iclip").contentWindow.location.replace('https://www.youtube.com/embed/e25oSBewoGo?wmode=opaque&rel=0');
	var textboxA = document.getElementById('containerA'); textboxB = document.createElement("div"); textboxB.setAttribute("id", "containerB"); var text = document.createElement("div"); text.innerHTML = document.getElementById("clip_jj").innerHTML; textboxA.appendChild(textboxB); textboxB.appendChild(text); }
function loadbees() { document.getElementById("iclip").contentWindow.location.replace('https://player.vimeo.com/video/165157487');
	var textboxA = document.getElementById('containerA'); textboxB = document.createElement("div"); textboxB.setAttribute("id", "containerB"); var text = document.createElement("div"); text.innerHTML = document.getElementById("clip_bees").innerHTML; textboxA.appendChild(textboxB); textboxB.appendChild(text); }
function loadrivet() { document.getElementById("iclip").contentWindow.location.replace('https://player.vimeo.com/video/166202833');
	var textboxA = document.getElementById('containerA'); textboxB = document.createElement("div"); textboxB.setAttribute("id", "containerB"); var text = document.createElement("div"); text.innerHTML = document.getElementById("clip_rivet").innerHTML; textboxA.appendChild(textboxB); textboxB.appendChild(text); }
function loadoss() { document.getElementById("iclip").contentWindow.location.replace('https://www.youtube.com/embed/tqPMuGM0C88?wmode=opaque&rel=0');
	var textboxA = document.getElementById('containerA'); textboxB = document.createElement("div"); textboxB.setAttribute("id", "containerB"); var text = document.createElement("div"); text.innerHTML = document.getElementById("clip_oss").innerHTML; textboxA.appendChild(textboxB); textboxB.appendChild(text); }
function loadaesop() { document.getElementById("iclip").contentWindow.location.replace('https://www.youtube.com/embed/cCYX1xF9EJI?wmode=opaque&rel=0');
	var textboxA = document.getElementById('containerA'); textboxB = document.createElement("div"); textboxB.setAttribute("id", "containerB"); var text = document.createElement("div"); text.innerHTML = document.getElementById("clip_aesop").innerHTML; textboxA.appendChild(textboxB); textboxB.appendChild(text); }
function loadjackbox() { document.getElementById("iclip").contentWindow.location.replace('https://player.vimeo.com/video/3565768');
	var textboxA = document.getElementById('containerA'); textboxB = document.createElement("div"); textboxB.setAttribute("id", "containerB"); var text = document.createElement("div"); text.innerHTML = document.getElementById("clip_jackbox").innerHTML; textboxA.appendChild(textboxB); textboxB.appendChild(text); }
function loadhouse() { document.getElementById("iclip").contentWindow.location.replace('https://player.vimeo.com/video/8120702');
	var textboxA = document.getElementById('containerA'); textboxB = document.createElement("div"); textboxB.setAttribute("id", "containerB"); var text = document.createElement("div"); text.innerHTML = document.getElementById("clip_house").innerHTML; textboxA.appendChild(textboxB); textboxB.appendChild(text); }
function loadstears() { document.getElementById("iclip").contentWindow.location.replace('https://player.vimeo.com/video/5978982');
	var textboxA = document.getElementById('containerA'); textboxB = document.createElement("div"); textboxB.setAttribute("id", "containerB"); var text = document.createElement("div"); text.innerHTML = document.getElementById("clip_stears").innerHTML; textboxA.appendChild(textboxB); textboxB.appendChild(text); }
function loadovg() { document.getElementById("iclip").contentWindow.location.replace('https://www.youtube.com/embed/IUuKoerKGf8?wmode=opaque&rel=0');
	var textboxA = document.getElementById('containerA'); textboxB = document.createElement("div"); textboxB.setAttribute("id", "containerB"); var text = document.createElement("div"); text.innerHTML = document.getElementById("clip_ovg").innerHTML; textboxA.appendChild(textboxB); textboxB.appendChild(text); }
function loadmylife() { document.getElementById("iclip").contentWindow.location.replace('https://player.vimeo.com/video/245253456');
	var textboxA = document.getElementById('containerA'); textboxB = document.createElement("div"); textboxB.setAttribute("id", "containerB"); var text = document.createElement("div"); text.innerHTML = document.getElementById("clip_mylife").innerHTML; textboxA.appendChild(textboxB); textboxB.appendChild(text); }
function loadfrontALZ() { document.getElementById("iclip").contentWindow.location.replace('https://player.vimeo.com/video/272599768');
	var textboxA = document.getElementById('containerA'); textboxB = document.createElement("div"); textboxB.setAttribute("id", "containerB"); var text = document.createElement("div"); text.innerHTML = document.getElementById("clip_frontALZ").innerHTML; textboxA.appendChild(textboxB); textboxB.appendChild(text); }
function loadenlisted() { document.getElementById("iclip").contentWindow.location.replace('https://player.vimeo.com/video/204599979');
	var textboxA = document.getElementById('containerA'); textboxB = document.createElement("div"); textboxB.setAttribute("id", "containerB"); var text = document.createElement("div"); text.innerHTML = document.getElementById("clip_enlisted").innerHTML; textboxA.appendChild(textboxB); textboxB.appendChild(text); }
function loadgrit() { document.getElementById("iclip").contentWindow.location.replace('https://player.vimeo.com/video/191068512');
	var textboxA = document.getElementById('containerA'); textboxB = document.createElement("div"); textboxB.setAttribute("id", "containerB"); var text = document.createElement("div"); text.innerHTML = document.getElementById("clip_grit").innerHTML; textboxA.appendChild(textboxB); textboxB.appendChild(text); }
function loadrecycling() { document.getElementById("iclip").contentWindow.location.replace('https://player.vimeo.com/video/219247435');
	var textboxA = document.getElementById('containerA'); textboxB = document.createElement("div"); textboxB.setAttribute("id", "containerB"); var text = document.createElement("div"); text.innerHTML = document.getElementById("clip_recycling").innerHTML; textboxA.appendChild(textboxB); textboxB.appendChild(text); }
function loadbaby() { document.getElementById("iclip").contentWindow.location.replace('https://player.vimeo.com/video/3687635');
	var textboxA = document.getElementById('containerA'); textboxB = document.createElement("div"); textboxB.setAttribute("id", "containerB"); var text = document.createElement("div"); text.innerHTML = document.getElementById("clip_baby").innerHTML; textboxA.appendChild(textboxB); textboxB.appendChild(text); }
function loadbeaver() { document.getElementById("iclip").contentWindow.location.replace('images/coming.html');
	var textboxA = document.getElementById('containerA'); textboxB = document.createElement("div"); textboxB.setAttribute("id", "containerB"); var text = document.createElement("div"); text.innerHTML = document.getElementById("clip_beaver").innerHTML; textboxA.appendChild(textboxB); textboxB.appendChild(text); }
function loadstick() { document.getElementById("iclip").contentWindow.location.replace('https://player.vimeo.com/video/219247476');
	var textboxA = document.getElementById('containerA'); textboxB = document.createElement("div"); textboxB.setAttribute("id", "containerB"); var text = document.createElement("div"); text.innerHTML = document.getElementById("clip_stick").innerHTML; textboxA.appendChild(textboxB); textboxB.appendChild(text); }
function loadWUAT() { document.getElementById("iclip").contentWindow.location.replace('https://player.vimeo.com/video/171816716');
	var textboxA = document.getElementById('containerA'); textboxB = document.createElement("div"); textboxB.setAttribute("id", "containerB"); var text = document.createElement("div"); text.innerHTML = document.getElementById("clip_WUAT").innerHTML; textboxA.appendChild(textboxB); textboxB.appendChild(text); }
function loadwarALS() { document.getElementById("iclip").contentWindow.location.replace('https://www.youtube.com/embed/dcjzyU9tvy8?wmode=opaque&rel=0');
	var textboxA = document.getElementById('containerA'); textboxB = document.createElement("div"); textboxB.setAttribute("id", "containerB"); var text = document.createElement("div"); text.innerHTML = document.getElementById("clip_warALS").innerHTML; textboxA.appendChild(textboxB); textboxB.appendChild(text); }
function loadhappiness() { document.getElementById("iclip").contentWindow.location.replace('https://www.youtube.com/embed/tTRmJlVvdNQ?wmode=opaque&rel=0');
	var textboxA = document.getElementById('containerA'); textboxB = document.createElement("div"); textboxB.setAttribute("id", "containerB"); var text = document.createElement("div"); text.innerHTML = document.getElementById("clip_happiness").innerHTML; textboxA.appendChild(textboxB); textboxB.appendChild(text); }
function loadreflections() { document.getElementById("iclip").contentWindow.location.replace('images/novideo.html');
	var textboxA = document.getElementById('containerA'); textboxB = document.createElement("div"); textboxB.setAttribute("id", "containerB"); var text = document.createElement("div"); text.innerHTML = document.getElementById("clip_reflections").innerHTML; textboxA.appendChild(textboxB); textboxB.appendChild(text); }
function loadboblo() { document.getElementById("iclip").contentWindow.location.replace('https://player.vimeo.com/video/219449304');
	var textboxA = document.getElementById('containerA'); textboxB = document.createElement("div"); textboxB.setAttribute("id", "containerB"); var text = document.createElement("div"); text.innerHTML = document.getElementById("clip_boblo").innerHTML; textboxA.appendChild(textboxB); textboxB.appendChild(text); }
function clearframe() { document.getElementById("iclip").contentWindow.location.replace('about:blank');	var elem = document.getElementById("containerB"); elem.parentNode.removeChild(elem); }
function goback() { history.go(-1); }