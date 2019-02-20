
async function sleep(ms = 0) {
  return new Promise(r => setTimeout(r, ms));
}



async function letsGo(){
	

	var elem = document.getElementById('goButton');
    elem.parentNode.removeChild(elem);
	
	
	
	change("<br>&gt; searching for food")
	await sleep(1000);
	change("<br>&gt; uhhh a cookie O.o")
	await sleep(1000);
	change("<br>&gt; nomm nomm nomm")
	await sleep(2000);
	change("<br>&gt; now there is no cookie :)")
	await sleep(1000);
	change("<br>&gt; lets start working")
	await sleep(2000);
	change("<br>&gt; ohh shit there is a new visitor")
	await sleep(1000);
	change("<br>&gt; looking at the request")
	await sleep(500);
	change(".")
	await sleep(500);
	change(".")
	await sleep(500);
	change(".")
	await sleep(500);
	change(".")
	await sleep(500);
	change(".")
	await sleep(300);
	change("<br>&gt; mhhh where was the index.html ")
	await sleep(300);
	change("<br>&gt; loading index.html in folder/src/data/you are reading this O.O/interesting ")
	await sleep(300);
	change("<br>&gt; checking.....just a long line so it is looking cool so do not mind the following words : Cheese-double-hello,creek.mouse")
	await sleep(300);
	change("<br>&gt; still reading funny this line is just crap <3")
	await sleep(300);
	change("<br>&gt; loading javascript")
	await sleep(500);
	change(".")
	await sleep(500);
	change(".")
	await sleep(500);
	change(".")
	await sleep(300);
	change("<br>&gt; eating a other cookie wuhuuuu work is fun!")
	await sleep(300);
	change("<br>&gt; just another long line with some random text so it is looking good")
	await sleep(300);
	change("<br>&gt; login to tty1")
	await sleep(300);
	change("<br>&gt; apt-get update")
	await sleep(300);
	change("<br>&gt; apt-get upgrade -y")
	await sleep(300);
	change("<br>&gt; apt-get install -f gdm3")
	await sleep(300);
	change("<br>&gt; chkconfig --level 2 gdm3")
	await sleep(300);
	change("<br>&gt; apt-get upgrade -y && apt-get dist-upgrade -y")
	await sleep(300);
	change("<br>&gt; dpkg --configure -a ifconfig eth0 up && dhclient eth0")
	await sleep(300);
	change("<br>&gt; # Run bootlogd at startup ?BOOTLOGD_ENABLE=No")
	await sleep(300);
	change("<br>&gt; return false;")
	await sleep(300);
	change("<br>&gt; preventing XSS")
	
	await sleep(900);
	var elem = document.getElementById('para1');
    elem.parentNode.removeChild(elem);
	
	
	
	window.location.href = "/subSites/secondPage";
}

function change(text){
	document.getElementById("para1").innerHTML += text;
}