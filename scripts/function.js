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

// make clicked link active
let menuSection = document.querySelectorAll('menu li');
menuSection.forEach(v=> { v.onclick = (()=> { menuSection.forEach(j=> j.classList.remove('active')); v.classList.add('active'); }); });

// smooth scrolling (jquery)
$('.menuTags').not('[href="#"]').not('[href="#0"]').click(function(event) {
	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname){
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
			event.preventDefault();
			$('wrapper').stop().animate({ scrollTop: target.offset().top + $('wrapper').scrollTop() - $('wrapper').offset().top }, 'slow', function() {});
		}
	}
});

// scrollspy (jquery)
$('wrapper').bind('scroll', function() {
	var currentTop = $('wrapper').scrollTop();
	var elems = $('.scrollspy');
	elems.each(function(index){
		var elemTop 	= ($(this).offset().top + $('wrapper').scrollTop() - $('wrapper').offset().top);
		if (currentTop >= $('#intro').offset().top) { elemTop -= 1; }
		var elemBottom 	= elemTop + $(this).height();
		if (currentTop >= elemTop && currentTop <= elemBottom){
			var id 		= $(this).attr('id');
			var navElem = $('a[href="#' + id+ '"]');
			navElem.parent().addClass('active').siblings().removeClass('active');
		}
	})
});

const ps = document.querySelectorAll('p');
const observer = new ResizeObserver(entries => {
  for (let entry of entries) {
    entry.target.classList[entry.target.scrollHeight > entry.contentRect.height ? 'add' : 'remove']('truncated');
  }
});

ps.forEach(p => {
  observer.observe(p);
});

/* CONTACT FORM */

/* PHONE NUMBER FORMAT */
const isNumericInput = (event) => {
	const key = event.keyCode;
	return ((key >= 48 && key <= 57) || (key >= 96 && key <= 105)); };
const isModifierKey = (event) => {
	const key = event.keyCode;
	return (event.shiftKey === true || key === 35 || key === 36) || (key === 8 || key === 9 || key === 13 || key === 46) || (key > 36 && key < 41) || ((event.ctrlKey === true || event.metaKey === true) && (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)) };
const enforceFormat = (event) => {
	if (!isNumericInput(event) && !isModifierKey(event)) { event.preventDefault(); } };
const formatToPhone = (event) => {
	if (isModifierKey(event)) { return; }
	const target = event.target;
	const input = event.target.value.replace(/\D/g,'').substring(0,10);
	const zip = input.substring(0,3);
	const middle = input.substring(3,6);
	const last = input.substring(6,10);
	if (input.length > 6) { target.value = `(${zip}) ${middle} - ${last}`; }
	else if (input.length > 3) { target.value = `(${zip}) ${middle}`; }
	else if (input.length > 0) { target.value = `(${zip}`; } };
const inputElement = document.getElementById('phoneNumber');
inputElement.addEventListener('keydown',enforceFormat);
inputElement.addEventListener('keyup',formatToPhone);

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
		document.getElementById('ifEntity').style.display = 'none';
		document.getElementById('ifEntity').value = ''; } }

function typeCheck() {
    if (document.getElementById('typeOther').checked) {
        document.getElementById('ifType').style.display = 'inline-block'; }
    else {
		document.getElementById('ifType').style.display = 'none';
		document.getElementById('ifType').value = ''; } }

function actionCheck() {
    if (document.getElementById('actionOther').checked) {
        document.getElementById('ifAction').style.display = 'inline-block'; }
    else {
		document.getElementById('ifAction').style.display = 'none';
		document.getElementById('ifAction').value = ''; } }

function toneCheck() {
    if (document.getElementById('toneOther').checked) {
        document.getElementById('ifTone').style.display = 'inline-block'; }
    else {
		document.getElementById('ifTone').style.display = 'none';
		document.getElementById('ifTone').value = ''; } }

function customCheck() {
    if (document.getElementById('customYes').checked) {
        document.getElementById('ifCustom').style.display = 'block'; }
    else {
		document.getElementById('ifCustom').style.display = 'none';
		document.getElementById('ifCustom').value = ''; } }

function voCheck() {
    if (document.getElementById('voYes').checked) {
        document.getElementById('voProvider').style.display = 'block'; }
    else {
		document.getElementById('voProvider').style.display = 'none'; } }

function audioCheck() {
    if (document.getElementById('audioYes').checked) {
        document.getElementById('audioProvider').style.display = 'block'; }
    else {
		document.getElementById('audioProvider').style.display = 'none'; } }

function showingCheck() {
	if (document.getElementById('showingTelevision').checked || document.getElementById('showingFestival').checked || document.getElementById('showingTheatre').checked || document.getElementById('showingWebsite').checked || document.getElementById('showingSocial').checked || document.getElementById('showingEmail').checked || document.getElementById('showingOther').checked) {
		document.getElementById('showingTelevision').removeAttribute('required');
		document.getElementById('showingFestival').removeAttribute('required');
		document.getElementById('showingTheatre').removeAttribute('required');
		document.getElementById('showingWebsite').removeAttribute('required');
		document.getElementById('showingSocial').removeAttribute('required');
		document.getElementById('showingEmail').removeAttribute('required');
		document.getElementById('showingOther').removeAttribute('required'); }
	else if (!document.getElementById('showingTelevision').checked && !document.getElementById('showingFestival').checked && !document.getElementById('showingTheatre').checked && !document.getElementById('showingWebsite').checked && !document.getElementById('showingSocial').checked && !document.getElementById('showingEmail').checked && !document.getElementById('showingOther').checked) {
		document.getElementById('showingTelevision').setAttribute('required', '');
		document.getElementById('showingFestival').setAttribute('required', '');
		document.getElementById('showingTheatre').setAttribute('required', '');
		document.getElementById('showingWebsite').setAttribute('required', '');
		document.getElementById('showingSocial').setAttribute('required', '');
		document.getElementById('showingEmail').setAttribute('required', '');
		document.getElementById('showingOther').setAttribute('required', ''); }
	if (document.getElementById('showingOther').checked) {
		document.getElementById('ifShowing').style.display = 'inline-block'; }
	else {
		document.getElementById('ifShowing').style.display = 'none';
		document.getElementById('ifShowing').value = ''; } }

function deliverableCheck() {
	if (document.getElementById('deliverableDigital').checked || document.getElementById('deliverableDCP').checked || document.getElementById('deliverableDisc').checked) {
		document.getElementById('deliverableDigital').removeAttribute('required');
		document.getElementById('deliverableDCP').removeAttribute('required');
		document.getElementById('deliverableDisc').removeAttribute('required'); }
	else if (!document.getElementById('deliverableDigital').checked && !document.getElementById('deliverableDCP').checked && !document.getElementById('deliverableDisc').checked) {
		document.getElementById('deliverableDigital').setAttribute('required', '');
		document.getElementById('deliverableDCP').setAttribute('required', '');
		document.getElementById('deliverableDisc').setAttribute('required', ''); } }



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